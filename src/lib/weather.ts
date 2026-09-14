/**
 * 天气服务层
 * ---------------------------------------------------------------
 * 在服务器端（Cloudflare Workers 边缘节点）取回实况与多日预报，
 * 并逐层缓存，浏览器端只负责展示，不直接访问第三方数据源。
 *
 * 缓存层次：
 *   1. 边缘 Cache API（同一机房内多请求共享，按 PoP 生效）
 *   2. 上游 fetch 的 cacheTtl（交由 Cloudflare 边缘缓存上游响应）
 *   3. 模块级内存缓存（开发环境与冷启动期间的兜底）
 *
 * 本文件同时承担「气象数据 → 游客可执行建议」的翻译工作：
 * 所有判断都在服务端完成，输出的是语义键（key）而不是完整句子，
 * 具体文案由 i18n 负责，保证三种语言共用同一套判断逻辑。
 *
 * 任何一层失败都只会让模块回退到「常年气候平均值」静态内容，
 * 不会抛出错误影响页面渲染。
 */
import { placeConfig, siteConfig } from '../config';

/* ------------------------------------------------------------------ */
/* 对外类型                                                            */
/* ------------------------------------------------------------------ */

export interface WeatherNow {
  temperature: number;
  apparent: number;
  humidity: number;
  /** km/h */
  wind: number;
  /** km/h */
  gust: number;
  /** 蒲福风级 */
  windLevel: number;
  uvIndex: number;
  precipitation: number;
  /** 未来一小时降水概率 % */
  rainChance: number;
  /** 能见度（米） */
  visibility: number;
  cloudCover: number;
  isDay: boolean;
  /** WMO 天气代码归一化后的语义键 */
  condition: string;
}

export interface WeatherDay {
  date: string;
  /** 0 = 周日 … 6 = 周六 */
  weekday: number;
  min: number;
  max: number;
  apparentMax: number;
  rainChance: number;
  rainSum: number;
  windMax: number;
  gustMax: number;
  uvMax: number;
  sunrise: string;
  sunset: string;
  condition: string;
}

export type AdviceGroup = 'outfit' | 'plan' | 'gear';

export interface AdviceItem {
  group: AdviceGroup;
  key: string;
  params?: Record<string, string | number>;
}

export interface WeatherAlert {
  key: string;
  severity: 'caution' | 'severe';
  params?: Record<string, string | number>;
}

export type WeatherLevel = 'low' | 'moderate' | 'high';

/** 结合景点地理环境扩展出的环境指数（均由气象数据推算，非实地测量） */
export interface EnvironmentIndex {
  key: 'riverRise' | 'waterWind' | 'mosquito' | 'fireRisk' | 'heatStress';
  level: WeatherLevel;
}

export interface WeatherData {
  current: WeatherNow;
  days: WeatherDay[];
  /** 已在曼谷时区格式化的更新时间 HH:mm */
  updatedAt: string;
  advice: AdviceItem[];
  alerts: WeatherAlert[];
  indices: EnvironmentIndex[];
}

/* ------------------------------------------------------------------ */
/* 配置                                                                */
/* ------------------------------------------------------------------ */

const TIMEZONE = 'Asia/Bangkok';
const FORECAST_DAYS = 7;
const PAST_DAYS = 1;
const TTL_SECONDS = placeConfig.weatherCacheSeconds;

const UPSTREAM = (() => {
  const params = new URLSearchParams({
    latitude: String(placeConfig.latitude),
    longitude: String(placeConfig.longitude),
    current: [
      'temperature_2m',
      'relative_humidity_2m',
      'apparent_temperature',
      'is_day',
      'precipitation',
      'weather_code',
      'cloud_cover',
      'wind_speed_10m',
      'wind_gusts_10m',
    ].join(','),
    hourly: [
      'temperature_2m',
      'relative_humidity_2m',
      'apparent_temperature',
      'precipitation_probability',
      'precipitation',
      'weather_code',
      'wind_speed_10m',
      'wind_gusts_10m',
      'uv_index',
      'visibility',
      'cape',
    ].join(','),
    daily: [
      'weather_code',
      'temperature_2m_max',
      'temperature_2m_min',
      'apparent_temperature_max',
      'precipitation_sum',
      'precipitation_probability_max',
      'wind_speed_10m_max',
      'wind_gusts_10m_max',
      'uv_index_max',
      'sunrise',
      'sunset',
    ].join(','),
    timezone: TIMEZONE,
    forecast_days: String(FORECAST_DAYS),
    past_days: String(PAST_DAYS),
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
})();

/* ------------------------------------------------------------------ */
/* 天气代码归一化                                                       */
/* ------------------------------------------------------------------ */

export function normalizeCode(code: number | null | undefined): string {
  if (code === null || code === undefined) return 'unknown';
  if (code === 0) return 'clear';
  if (code === 1) return 'mainlyClear';
  if (code === 2) return 'partlyCloudy';
  if (code === 3) return 'overcast';
  if (code === 45 || code === 48) return 'fog';
  if (code >= 51 && code <= 55) return 'drizzle';
  if (code === 56 || code === 57) return 'freezingDrizzle';
  if (code >= 61 && code <= 65) return 'rain';
  if (code === 66 || code === 67) return 'freezingRain';
  if (code >= 71 && code <= 77) return 'snow';
  if (code >= 80 && code <= 82) return 'showers';
  if (code === 85 || code === 86) return 'snowShowers';
  if (code === 95) return 'thunderstorm';
  if (code === 96 || code === 99) return 'thunderstormHail';
  return 'unknown';
}

export const CONDITION_ICON: Record<string, string> = {
  clear: '☀️',
  mainlyClear: '🌤️',
  partlyCloudy: '⛅',
  overcast: '☁️',
  fog: '🌫️',
  drizzle: '🌦️',
  freezingDrizzle: '🌧️',
  rain: '🌧️',
  freezingRain: '🌧️',
  snow: '🌨️',
  showers: '🌦️',
  snowShowers: '🌨️',
  thunderstorm: '⛈️',
  thunderstormHail: '⛈️',
  unknown: '🌡️',
};

const THUNDER_CODES = new Set(['thunderstorm', 'thunderstormHail']);
const HEAVY_RAIN_CODES = new Set(['rain', 'showers']);

/* ------------------------------------------------------------------ */
/* 通用小工具                                                          */
/* ------------------------------------------------------------------ */

function round(value: unknown, digits = 1): number {
  const n = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(n)) return 0;
  const f = 10 ** digits;
  return Math.round(n * f) / f;
}

function num(value: unknown, fallback = 0): number {
  const n = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(n) ? n : fallback;
}

/** km/h → 蒲福风级（0–12），用于给普通游客描述“风力几级” */
export function beaufort(kmh: number): number {
  const scale = [1, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103, 118];
  for (let i = 0; i < scale.length; i += 1) {
    if (kmh < scale[i]) return i;
  }
  return 12;
}

function formatBangkokTime(date = new Date()): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: TIMEZONE,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);
}

function max(values: number[]): number {
  return values.length ? Math.max(...values) : 0;
}

function sum(values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

function uniqBy<T>(items: T[], keyOf: (item: T) => string, limit: number): T[] {
  const seen = new Set<string>();
  const out: T[] = [];
  for (const item of items) {
    const key = keyOf(item);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
    if (out.length >= limit) break;
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* 建议规则引擎                                                        */
/* ------------------------------------------------------------------ */

interface AdviceInput {
  now: WeatherNow;
  days: WeatherDay[];
  /** 未来 12 小时切片 */
  next: {
    rainChance: number;
    rainSum: number;
    thunder: boolean;
    capeMax: number;
    windMax: number;
    gustMax: number;
    uvMax: number;
    visibilityMin: number;
    apparentMax: number;
    tempMin: number;
  };
  /** 过去 24 小时累计降水（上游流域降水，用于判断河水上涨） */
  past24Rain: number;
  range: number;
}

function buildAlerts(input: AdviceInput): WeatherAlert[] {
  const { now, days, next, past24Rain, range } = input;
  const today = days[0];
  const alerts: WeatherAlert[] = [];

  if (next.thunder || now.condition === 'thunderstorm' || now.condition === 'thunderstormHail') {
    alerts.push({ key: 'thunder', severity: 'severe', params: { cape: Math.round(next.capeMax) } });
  }

  if (next.rainSum >= 25 || (today?.rainSum ?? 0) >= 40 || (HEAVY_RAIN_CODES.has(now.condition) && now.precipitation >= 4)) {
    alerts.push({ key: 'heavyRain', severity: 'severe', params: { rain: Math.round(next.rainSum) } });
  }

  if (next.gustMax >= 50 || next.windMax >= 39) {
    alerts.push({
      key: 'wind',
      severity: next.gustMax >= 62 || next.windMax >= 50 ? 'severe' : 'caution',
      params: { gust: Math.round(next.gustMax), level: beaufort(next.windMax) },
    });
  }

  if ((today?.max ?? 0) >= 35 || next.apparentMax >= 38) {
    alerts.push({
      key: 'heat',
      severity: (today?.max ?? 0) >= 38 ? 'severe' : 'caution',
      params: { max: Math.round(today?.max ?? next.apparentMax) },
    });
  }

  if (next.visibilityMin <= 1000 || now.condition === 'fog') {
    alerts.push({ key: 'fog', severity: 'caution', params: { visibility: Math.round(next.visibilityMin / 100) / 10 } });
  }

  if (past24Rain >= 30 || next.rainSum >= 30) {
    alerts.push({ key: 'riverRise', severity: 'severe', params: { rain: Math.round(Math.max(past24Rain, next.rainSum)) } });
  }

  const dry =
    next.rainSum < 0.5 &&
    past24Rain < 1 &&
    (today?.rainChance ?? 0) < 30 &&
    now.humidity <= 55 &&
    now.temperature >= 33;
  if (dry) {
    alerts.push({ key: 'fireRisk', severity: 'caution', params: { humidity: Math.round(now.humidity) } });
  }

  if (range >= 12) {
    alerts.push({ key: 'tempSwing', severity: 'caution', params: { drop: Math.round(range) } });
  }

  const order: Record<string, number> = { severe: 0, caution: 1 };
  return uniqBy(
    alerts.sort((a, b) => order[a.severity] - order[b.severity]),
    (a) => a.key,
    4,
  );
}

function buildAdvice(input: AdviceInput): AdviceItem[] {
  const { now, days, next, range } = input;
  const today = days[0];
  const items: AdviceItem[] = [];
  const add = (group: AdviceGroup, key: string, params?: Record<string, string | number>) =>
    items.push({ group, key, params });

  const dayMax = today?.max ?? now.temperature;
  const dayMin = today?.min ?? now.temperature;
  const uv = Math.max(today?.uvMax ?? 0, next.uvMax, now.uvIndex);
  const rainComing = next.rainSum > 0.5 || next.rainChance >= 50;
  const heavyRain = next.rainSum >= 25 || (HEAVY_RAIN_CODES.has(now.condition) && now.precipitation >= 4);
  const thunder = next.thunder || THUNDER_CODES.has(now.condition);
  const windy = next.windMax >= 29;
  const foggy = next.visibilityMin <= 1000 || now.condition === 'fog';
  const clear = now.condition === 'clear' || now.condition === 'mainlyClear';
  const overcast = now.condition === 'overcast' || now.condition === 'partlyCloudy';

  /* ---------- 出行穿搭 ---------- */
  if (dayMax >= 32) {
    add('outfit', 'hot', { max: Math.round(dayMax) });
    if (now.humidity >= 75) add('outfit', 'humid', { humidity: Math.round(now.humidity) });
  } else if (dayMax <= 16) {
    add('outfit', 'cold', { max: Math.round(dayMax) });
  } else if (dayMax <= 24) {
    add('outfit', 'cool', { max: Math.round(dayMax) });
  } else {
    add('outfit', 'mild', { max: Math.round(dayMax), min: Math.round(dayMin) });
  }
  if (range >= 8) add('outfit', 'tempDrop', { drop: Math.round(range) });
  if (uv >= 5) add('outfit', 'uv', { uv: Math.round(uv) });
  if (rainComing) add('outfit', 'rain', {});
  if (windy) add('outfit', 'windy', { level: beaufort(next.windMax) });

  /* ---------- 游玩安排 ---------- */
  if (thunder) {
    add('plan', 'thunder', {});
  } else if (heavyRain) {
    add('plan', 'heavyRain', {});
  } else if (next.rainChance >= 60) {
    add('plan', 'rainLikely', { chance: Math.round(next.rainChance) });
  } else if (rainComing) {
    add('plan', 'lightRain', {});
  }

  if (dayMax >= 33 || next.apparentMax >= 38) {
    add('plan', 'heat', { max: Math.round(Math.max(dayMax, next.apparentMax)) });
  } else if (clear) {
    add('plan', 'clear', {});
  } else if (overcast) {
    add('plan', 'overcast', {});
  }

  if (foggy) add('plan', 'fog', { visibility: Math.round(next.visibilityMin / 100) / 10 });
  if (windy) add('plan', 'wind', { level: beaufort(next.windMax) });
  if (uv >= 8) add('plan', 'uvStrong', { uv: Math.round(uv) });
  if (!rainComing && next.windMax < 20 && input.past24Rain < 5) add('plan', 'riverCalm', {});
  if (!thunder && !heavyRain && !foggy && !windy && uv < 8 && !clear && !overcast) add('plan', 'pleasant', {});

  /* ---------- 随身物品 ---------- */
  if (next.rainChance >= 60) add('gear', 'umbrella', {});
  if (heavyRain) add('gear', 'raincoat', {});
  if (uv >= 5) add('gear', 'sunscreen', { uv: Math.round(uv) });
  if (uv >= 6 || clear) add('gear', 'sunglasses', {});
  if (clear || dayMax >= 32) add('gear', 'sunhat', {});
  if (dayMax >= 30) add('gear', 'water', { max: Math.round(dayMax) });
  if (range >= 8 || dayMin <= 22) add('gear', 'outerwear', {});
  if (rainComing || input.past24Rain >= 5) add('gear', 'shoes', {});
  if (foggy) add('gear', 'mask', {});
  if (now.temperature >= 24 && now.humidity >= 70 && (input.past24Rain >= 2 || rainComing)) {
    add('gear', 'repellent', {});
  }

  const limited = (['outfit', 'plan', 'gear'] as const).flatMap((group) =>
    uniqBy(
      items.filter((item) => item.group === group),
      (item) => item.key,
      4,
    ),
  );
  return limited;
}

function buildIndices(input: AdviceInput): EnvironmentIndex[] {
  const { now, days, next, past24Rain } = input;
  const today = days[0];
  const indices: EnvironmentIndex[] = [];

  const riverScore = past24Rain + next.rainSum * 1.5;
  indices.push({
    key: 'riverRise',
    level: riverScore >= 40 ? 'high' : riverScore >= 12 ? 'moderate' : 'low',
  });

  indices.push({
    key: 'waterWind',
    level: next.gustMax >= 50 ? 'high' : next.windMax >= 29 ? 'moderate' : 'low',
  });

  const mosquitoScore =
    (now.temperature >= 24 ? 2 : 0) +
    (now.humidity >= 70 ? 2 : 0) +
    (past24Rain >= 2 || next.rainSum >= 2 ? 2 : 0) +
    ((today?.max ?? 0) >= 30 ? 1 : 0);
  indices.push({
    key: 'mosquito',
    level: mosquitoScore >= 6 ? 'high' : mosquitoScore >= 4 ? 'moderate' : 'low',
  });

  const fireScore =
    ((today?.max ?? 0) >= 33 ? 2 : 0) +
    (now.humidity <= 55 ? 2 : 0) +
    (next.rainSum < 0.5 && past24Rain < 1 ? 2 : 0) +
    (next.windMax >= 20 ? 1 : 0);
  indices.push({
    key: 'fireRisk',
    level: fireScore >= 6 ? 'high' : fireScore >= 4 ? 'moderate' : 'low',
  });

  const heatScore =
    ((today?.max ?? 0) >= 38 ? 3 : (today?.max ?? 0) >= 35 ? 2 : (today?.max ?? 0) >= 32 ? 1 : 0) +
    (next.apparentMax >= 40 ? 2 : 0) +
    (today?.uvMax ?? 0) >= 8 ? 1 : 0;
  indices.push({
    key: 'heatStress',
    level: heatScore >= 4 ? 'high' : heatScore >= 2 ? 'moderate' : 'low',
  });

  return indices;
}

/* ------------------------------------------------------------------ */
/* 数据整形                                                            */
/* ------------------------------------------------------------------ */

function transform(raw: any): WeatherData {
  const c = raw?.current ?? {};
  const h = raw?.hourly ?? {};
  const d = raw?.daily ?? {};

  const nowTime: string = typeof c.time === 'string' ? c.time : '';
  const todayDate = nowTime.slice(0, 10);
  const hourKey = nowTime.slice(0, 13);

  const hourlyTimes: string[] = h.time ?? [];
  let startIndex = hourlyTimes.findIndex((t) => t.slice(0, 13) === hourKey);
  if (startIndex < 0) startIndex = hourlyTimes.findIndex((t) => t.slice(0, 10) === todayDate);
  if (startIndex < 0) startIndex = 0;

  const slice = (arr: unknown, from: number, to: number): number[] =>
    Array.isArray(arr) ? arr.slice(from, to).map((v) => num(v, 0)) : [];

  const window12 = (arr: unknown) => slice(arr, startIndex, startIndex + 12);

  const nextRainChance = max(window12(h.precipitation_probability));
  const nextRainSum = sum(window12(h.precipitation));
  const nextCodes = window12(h.weather_code).map((code) => normalizeCode(code));
  const nextThunder = nextCodes.some((code) => THUNDER_CODES.has(code));
  const nextCape = max(window12(h.cape));
  const nextWind = max(window12(h.wind_speed_10m));
  const nextGust = max(window12(h.wind_gusts_10m));
  const nextUv = max(window12(h.uv_index));
  const visWindow = window12(h.visibility).filter((v) => v > 0);
  const nextVis = visWindow.length ? Math.min(...visWindow) : 10000;
  const nextApparent = max(window12(h.apparent_temperature));
  const nextTempMin = (() => {
    const temps = window12(h.temperature_2m);
    return temps.length ? Math.min(...temps) : 0;
  })();
  const past24Rain = sum(slice(h.precipitation, Math.max(0, startIndex - 24), startIndex));

  const currentHour = slice(h.precipitation_probability, startIndex, startIndex + 1)[0] ?? 0;
  const currentUv = slice(h.uv_index, startIndex, startIndex + 1)[0] ?? 0;
  const currentVis = slice(h.visibility, startIndex, startIndex + 1)[0] ?? 10000;

  const wind = round(c.wind_speed_10m, 1);
  const current: WeatherNow = {
    temperature: round(c.temperature_2m, 1),
    apparent: round(c.apparent_temperature, 1),
    humidity: round(c.relative_humidity_2m, 0),
    wind,
    gust: round(c.wind_gusts_10m, 1),
    windLevel: beaufort(wind),
    uvIndex: round(currentUv, 1),
    precipitation: round(c.precipitation, 1),
    rainChance: round(currentHour, 0),
    visibility: round(currentVis, 0),
    cloudCover: round(c.cloud_cover, 0),
    isDay: Boolean(c.is_day),
    condition: normalizeCode(c.weather_code),
  };

  const dates: string[] = d.time ?? [];
  const days: WeatherDay[] = dates
    .map((date, i) => ({
      date,
      weekday: new Date(`${date}T12:00:00+07:00`).getUTCDay(),
      min: round(d.temperature_2m_min?.[i], 0),
      max: round(d.temperature_2m_max?.[i], 0),
      apparentMax: round(d.apparent_temperature_max?.[i], 0),
      rainChance: round(d.precipitation_probability_max?.[i], 0),
      rainSum: round(d.precipitation_sum?.[i], 1),
      windMax: round(d.wind_speed_10m_max?.[i], 0),
      gustMax: round(d.wind_gusts_10m_max?.[i], 0),
      uvMax: round(d.uv_index_max?.[i], 0),
      sunrise: typeof d.sunrise?.[i] === 'string' ? d.sunrise[i].slice(11, 16) : '',
      sunset: typeof d.sunset?.[i] === 'string' ? d.sunset[i].slice(11, 16) : '',
      condition: normalizeCode(d.weather_code?.[i]),
    }))
    .filter((day) => !todayDate || day.date >= todayDate)
    .slice(0, FORECAST_DAYS);

  const range = Math.max(0, round((days[0]?.max ?? current.temperature) - (days[0]?.min ?? current.temperature), 0));

  const input: AdviceInput = {
    now: current,
    days,
    next: {
      rainChance: nextRainChance,
      rainSum: round(nextRainSum, 1),
      thunder: nextThunder,
      capeMax: nextCape,
      windMax: nextWind,
      gustMax: nextGust,
      uvMax: nextUv,
      visibilityMin: nextVis,
      apparentMax: nextApparent,
      tempMin: nextTempMin,
    },
    past24Rain: round(past24Rain, 1),
    range,
  };

  return {
    current,
    days,
    updatedAt: formatBangkokTime(),
    advice: buildAdvice(input),
    alerts: buildAlerts(input),
    indices: buildIndices(input),
  };
}

/* ------------------------------------------------------------------ */
/* 取数与缓存                                                          */
/* ------------------------------------------------------------------ */

interface CacheLike {
  match(key: string): Promise<Response | undefined>;
  put(key: string, response: Response): Promise<void>;
}

export interface RuntimeLike {
  caches?: { default?: CacheLike };
  cf?: Record<string, unknown>;
}

/** 边缘缓存键（固定 URL，不参与实际请求） */
const CACHE_KEY = `${siteConfig.baseUrl}/__edge-cache/weather`;
const memory: { value?: WeatherData; expires?: number } = {};

async function fetchUpstream(timeoutMs = 4500): Promise<WeatherData> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(UPSTREAM, {
      signal: controller.signal,
      headers: { accept: 'application/json' },
      // Cloudflare 专有：让边缘节点缓存上游响应，减少回源
      cf: { cacheTtl: TTL_SECONDS, cacheEverything: true },
    } as RequestInit);
    if (!response.ok) throw new Error(`upstream ${response.status}`);
    return transform(await response.json());
  } finally {
    clearTimeout(timer);
  }
}

/**
 * 获取天气数据。失败时返回 null，由调用方回退到常年气候平均内容。
 */
export async function getWeather(runtime?: RuntimeLike): Promise<WeatherData | null> {
  const now = Date.now();
  if (memory.value && memory.expires && memory.expires > now) return memory.value;

  const edge = runtime?.caches?.default;

  if (edge) {
    try {
      const hit = await edge.match(CACHE_KEY);
      if (hit) {
        const data = (await hit.json()) as WeatherData;
        memory.value = data;
        memory.expires = now + TTL_SECONDS * 1000;
        return data;
      }
    } catch {
      /* 缓存不可用时继续走上游 */
    }
  }

  try {
    const data = await fetchUpstream();
    memory.value = data;
    memory.expires = now + TTL_SECONDS * 1000;
    if (edge) {
      try {
        await edge.put(
          CACHE_KEY,
          new Response(JSON.stringify(data), {
            headers: {
              'content-type': 'application/json; charset=utf-8',
              'cache-control': `public, max-age=${TTL_SECONDS}`,
            },
          }),
        );
      } catch {
        /* 写入缓存失败不影响返回 */
      }
    }
    return data;
  } catch {
    return null;
  }
}

export const siteConfig = {
  name: 'River Kwai Bridge',
  baseUrl: typeof process !== 'undefined' && process.env.CURRENT_SITE_DOMAIN
    ? `https://${process.env.CURRENT_SITE_DOMAIN}`
    : 'https://kwaibridge.org',
  slug: 'river-kwai-bridge',
  locales: ['zh', 'en', 'th'] as const,
};

export const ogLocale: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  th: 'th_TH',
};

/**
 * 单景点 SEO 实体绑定配置（Single-attraction entity binding）
 * ---------------------------------------------------------------
 * 对应“单景点 SEO 实体绑定配置变量表”中的全部占位符，集中维护，
 * 供 JSON-LD / TDK / OG / 正文语义 / 地图 / 面包屑 / 资料来源统一取值。
 * 修改景点时只需改动此对象。
 */
export const placeConfig = {
  /* {{DOMAIN_NAME}} */
  domain: 'kwaibridge.org',
  /* {{ATTRACTION_FULL_NAME}} 官方全称 */
  fullName: 'River Kwai Bridge',
  /* 官方标牌全称（大写） */
  officialName: 'RIVER KWAI BRIDGE',
  /* 当地语言名称 */
  localName: 'สะพานข้ามแม่น้ำแคว',
  /* 中文名 */
  zhName: '桂河大桥',
  /* {{ATTRACTION_SHORT_NAME}} 域名含义对应的俗称 */
  shortName: 'Kwai Bridge',
  /* {{CITY_NAME}} */
  city: 'Kanchanaburi',
  /* 所在镇/分区 */
  subdistrict: 'Tha Ma Kham',
  district: 'Mueang Kanchanaburi District',
  /* {{STATE_PROVINCE}} */
  province: 'Kanchanaburi',
  /* {{COUNTRY_NAME}} */
  country: 'Thailand',
  /* {{COUNTRY_CODE_2LETTER}} */
  countryCode: 'TH',
  /* {{POSTAL_CODE}} */
  postalCode: '71000',
  /* 街道地址 */
  streetAddress: 'River Kwai Rd, Tha Ma Kham, Mueang Kanchanaburi District',
  /* Google 地图 Plus Code */
  plusCode: '2GR3+QM Ban Tai, Mueang Kanchanaburi District, Kanchanaburi',
  /* {{LATITUDE}} / {{LONGITUDE}} */
  latitude: 14.0419,
  longitude: 99.5041,
  /* {{MAPS_SHARE_URL}} */
  mapsShareUrl: 'https://maps.app.goo.gl/tze9JQUAKaV3Mbm78',
  /* {{MAPS_EMBED_SRC}} */
  mapsEmbedSrc: 'https://www.google.com/maps?q=14.0419,99.5041&z=16&hl=en&output=embed',
  /* {{GOVT_TOURISM_URL}} 官方旅游局 */
  govtTourismUrl: 'https://www.tourismthailand.org',
  govtTourismName: 'Tourism Authority of Thailand (TAT)',
  /* 省政府官网 */
  provinceUrl: 'https://www.kanchanaburi.go.th',
  provinceName: 'Kanchanaburi Province',
  /* 泰国气象局 */
  weatherUrl: 'https://www.tmd.go.th',
  weatherName: 'Thai Meteorological Department (TMD)',
  /**
   * 别名与拼写变体
   * ---------------------------------------------------------------
   * Search Console 数据显示 "river khwae bridge" 是曝光量最高的查询词
   * （66 次曝光），而 "river kwai bridge" 为 50 次——两种拼写都需要覆盖。
   * 该数组同时用于 JSON-LD 的 alternateName 与页面内的「又称」表述。
   */
  alternateNames: [
    'River Khwae Bridge',
    'River Khwae',
    'Kwai Bridge',
    'River Kwai Bridge',
    'Khwae Yai Bridge',
    'The Bridge on the River Kwai',
    'Death Railway Bridge',
    'สะพานข้ามแม่น้ำแคว',
    '桂河大桥',
  ],
  /* 桥梁跨越的水体实体（Khwae Yai 属于美功河水系） */
  riverName: 'Khwae Yai River',
  riverAlternateNames: ['แม่น้ำแควใหญ่', 'Mae Nam Khwae Yai', 'River Kwai Yai'],
  /* {{NEARBY_LANDMARK_1}} / {{NEARBY_LANDMARK_2}} */
  nearbyLandmark1: 'Kanchanaburi War Cemetery (Don Rak)',
  nearbyLandmark2: 'Hellfire Pass Memorial',
  /* 评分与评价数（须与谷歌地图保持一致） */
  ratingValue: '4.6',
  reviewCount: '14890',
  /* 图片资源 */
  heroImage: '/gallery/river-kwai-bridge-kanchanaburi-22.jpg',
  icon: '/icon.svg',
  /* GA4 */
  gaMeasurementId: 'G-HXM22WWPKP',
  /* Google AdSense 发布商 ID（留空则不加载任何广告脚本，保持页面轻量） */
  adsensePublisherId: '',
  /* Open-Meteo 天气预报坐标与缓存时长（秒） */
  weatherCacheSeconds: 900,
} as const;

/**
 * 图库命名规范
 * ---------------------------------------------------------------
 * 统一为 `<景点-城市-主题>-序号.jpg`，例如：
 *   river-kwai-bridge-kanchanaburi-1.jpg
 * 新增照片时放入 public/gallery 并按序号续编，然后运行 `npm run optimize:images`。
 */
export const galleryConfig = {
  slug: 'river-kwai-bridge-kanchanaburi',
  count: 23,
  file: (n: number): string => `/gallery/river-kwai-bridge-kanchanaburi-${n}.jpg`,
} as const;

/** 站点绝对地址拼接 */
export const absoluteUrl = (path = ''): string => {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.baseUrl}${clean}`;
};

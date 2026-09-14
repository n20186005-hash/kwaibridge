import zh from './zh.json';
import en from './en.json';
import th from './th.json';
import { siteConfig } from '../config';

export const defaultLang = 'th';
export const languagesList = ['zh', 'en', 'th'] as const;

export const languages: Record<string, string> = {
  zh: '中文',
  en: 'English',
  th: 'ไทย',
};

const ui: Record<string, any> = { zh, en, th };

export function getLangFromUrl(url: URL): string {
  const seg = url.pathname.split('/').filter(Boolean);
  const lang = seg[0];
  return (languagesList as readonly string[]).includes(lang) ? lang : defaultLang;
}

export function getI18n(url: URL) {
  const lang = getLangFromUrl(url);
  const messages = ui[lang];
  const t = (key: string): string => {
    const found = key
      .split('.')
      .reduce<any>((o, i) => (o == null ? undefined : o[i]), messages);
    return found ?? '';
  };
  return { lang, messages, t };
}

/**
 * 按语言码直接取词条。
 * Server Component（server:defer）在边缘单独请求，Astro.url 指向的是
 * 内部 island 端点而非页面地址，因此语言必须由调用方显式传入。
 */
export function getMessagesByLang(lang: string): any {
  return ui[(languagesList as readonly string[]).includes(lang) ? lang : defaultLang];
}

/**
 * 生成 canonical / hreflang 用的规范地址。
 * 全站统一「带尾斜杠」形式（与 Astro directory 构建产物 `/<lang>/index.html`
 * 以及 Cloudflare 静态资源的 force-trailing-slash 行为一致），
 * 避免 `/en` 与 `/en/` 被搜索引擎当作两个独立 URL 收录。
 */
export function buildAlternates(path = ''): Record<string, string> {
  const base = siteConfig.baseUrl;
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  const mk = (l: string) => `${base}/${l}/${clean ? clean + '/' : ''}`;
  return {
    zh: mk('zh'),
    en: mk('en'),
    th: mk('th'),
    xDefault: mk('th'),
  };
}

/** 站内链接统一带尾斜杠，例如 `localePath('en') -> '/en/'`、`localePath('en', 'faq') -> '/en/#faq'` */
export function localePath(lang: string, hash = ''): string {
  return hash ? `/${lang}/#${hash.replace(/^#/, '')}` : `/${lang}/`;
}

export function htmlLangAttr(lang: string): string {
  if (lang === 'zh') return 'zh-CN';
  return lang;
}

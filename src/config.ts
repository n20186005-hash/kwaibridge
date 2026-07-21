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

export const siteConfig = {
  name: 'River Kwai Bridge',
  baseUrl: 'https://kwaibridge.org',
  slug: 'river-kwai-bridge',
  locales: ['zh', 'en', 'th'] as const,
};

export const ogLocale: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  th: 'th_TH',
};

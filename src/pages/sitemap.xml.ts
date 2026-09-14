import type { APIRoute } from 'astro';
import { siteConfig } from '../config';
import { languagesList } from '../i18n/ui';

export const prerender = true;

/**
 * 多语言 sitemap
 * ---------------------------------------------------------------
 * 1. 所有 URL 统一为带尾斜杠的规范形式（与 canonical / hreflang 一致）；
 * 2. 每条记录内嵌 xhtml:link 语言互指，便于 Google 关联三语版本；
 * 3. 把法务页（隐私政策 / 服务条款 / Cookie 设置）标记为低优先级，
 *    让抓取预算优先落在承载搜索意图的主页上。
 */

/** 路由清单：路径片段 -> 优先级与更新频率 */
const routes: { segment: string; priority: string; changefreq: string }[] = [
  { segment: '', priority: '1.0', changefreq: 'weekly' },
  { segment: 'privacy-policy', priority: '0.2', changefreq: 'yearly' },
  { segment: 'terms-of-service', priority: '0.2', changefreq: 'yearly' },
  { segment: 'cookie-settings', priority: '0.1', changefreq: 'yearly' },
];

const urlFor = (lang: string, segment: string): string =>
  `${siteConfig.baseUrl}/${lang}/${segment ? `${segment}/` : ''}`;

const escapeXml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);

  const entries = routes.flatMap((route) =>
    languagesList.map((lang) => {
      const loc = urlFor(lang, route.segment);
      const alternates = [
        ...languagesList.map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${alt}" href="${escapeXml(urlFor(alt, route.segment))}"/>`,
        ),
        // 默认语言为泰语，x-default 指向泰语版本
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(
          urlFor('th', route.segment),
        )}"/>`,
      ].join('\n');

      return [
        '  <url>',
        `    <loc>${escapeXml(loc)}</loc>`,
        alternates,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${route.changefreq}</changefreq>`,
        `    <priority>${route.priority}</priority>`,
        '  </url>',
      ].join('\n');
    }),
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

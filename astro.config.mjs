import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: process.env.CURRENT_SITE_DOMAIN ? `https://${process.env.CURRENT_SITE_DOMAIN}` : 'https://kwaibridge.org',
  // 静态预渲染为主（速度快、可缓存、利于 SEO）；
  // 仅在需要按需渲染的路由（如实时天气数据）上单独使用 `export const prerender = false`
  // 或 Server Component（`server:defer`），由 Cloudflare Workers 在边缘执行。
  output: 'static',
  adapter: cloudflare(),
  // 统一使用带尾斜杠的规范 URL：产物是 `/<lang>/index.html`，
  // 若允许 `/en` 与 `/en/` 同时返回 200，Google 会将其视为两个页面并分散权重。
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'zh', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

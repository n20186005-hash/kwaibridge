import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const langs = ['th', 'en', 'zh'];
const report = [];
const error = (msg) => report.push(msg);
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const objects = Object.fromEntries(langs.map((lang) => [lang, JSON.parse(read(`src/i18n/${lang}.json`))]));

function leafPaths(value, prefix = '', out = {}) {
  if (Array.isArray(value)) value.forEach((item, i) => leafPaths(item, `${prefix}[${i}]`, out));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => leafPaths(item, prefix ? `${prefix}.${key}` : key, out));
  else out[prefix] = value;
  return out;
}

const leaves = Object.fromEntries(langs.map((lang) => [lang, leafPaths(objects[lang])]));
const standard = new Set(Object.keys(leaves.th));
for (const lang of langs) {
  const current = new Set(Object.keys(leaves[lang]));
  for (const key of standard) if (!current.has(key)) error(`${lang}: missing translation key ${key}`);
  for (const key of current) if (!standard.has(key)) error(`${lang}: extra translation key ${key}`);
  for (const [key, value] of Object.entries(leaves[lang])) {
    if (typeof value === 'string' && !value.trim()) error(`${lang}: blank value ${key}`);
    if (lang !== 'zh' && typeof value === 'string' && /[\u3400-\u9fff]/u.test(value)) error(`${lang}: Chinese script in ${key}`);
  }
}

const routesByLang = {};
for (const lang of langs) {
  const base = path.join(root, 'dist', lang);
  const pages = fs.readdirSync(base, { recursive: true })
    .filter((entry) => entry.endsWith('index.html'))
    .map((entry) => String(entry).replaceAll(path.sep, '/'));
  routesByLang[lang] = new Set(pages);
  for (const entry of pages) {
    const html = fs.readFileSync(path.join(base, entry), 'utf8');
    const route = `/${lang}/${entry.replace(/index\.html$/, '')}`;
    const expectedLang = lang === 'zh' ? 'zh-CN' : lang;
    if (!html.includes(`<html lang="${expectedLang}"`)) error(`${route}: incorrect document language`);
    if (!html.includes(`hreflang="${lang}"`)) error(`${route}: missing self alternate`);
    for (const alt of langs) {
      const sibling = path.join(root, 'dist', alt, entry);
      if (!fs.existsSync(sibling)) error(`${route}: missing ${alt} counterpart`);
    }
    if (lang !== 'zh') {
      const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? '';
      const prose = main.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');
      if (/[\u3400-\u9fff]/u.test(prose)) error(`${route}: Chinese script in main content`);
    }
    for (const match of html.matchAll(/\b(?:href|src)="(\/(?:en|th|zh)\/[^"#?]*)"/g)) {
      const dest = match[1];
      const target = path.join(root, 'dist', dest.replace(/^\//, ''), 'index.html');
      if (!fs.existsSync(target)) error(`${route}: broken internal URL ${dest}`);
    }
  }
}

const lengths = langs.map((lang) => routesByLang[lang].size);
if (new Set(lengths).size !== 1) error(`Different page counts: ${langs.map((l, i) => `${l}=${lengths[i]}`).join(', ')}`);

if (report.length) {
  console.error(`i18n audit failed (${report.length} findings):\n${report.slice(0, 60).join('\n')}`);
  process.exitCode = 1;
} else console.log(`i18n audit passed: ${langs.length} languages, ${standard.size} aligned translation fields, ${lengths[0]} HTML pages per language.`);

#!/usr/bin/env node
/**
 * 图库压缩与命名规范化脚本
 * ------------------------------------------------------------
 * 1. 统一照片命名规范：<景点-城市-主题>-序号.jpg
 *    例：river-kwai-bridge-kanchanaburi-1.jpg
 * 2. 压缩到适合网页的最大宽度（默认 1600px）与质量（默认 80），
 *    剥离 EXIF、转 progressive JPEG，显著降低首屏与滚动加载体积。
 * 3. 幂等：可重复运行，不会重复改名。
 *
 * 用法：npm run optimize:images
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const GALLERY_DIR = path.resolve('public/gallery');
/** 命名规范前缀（三段式 + 序号） */
const SLUG = 'river-kwai-bridge-kanchanaburi';
const MAX_WIDTH = Number(process.env.IMAGE_MAX_WIDTH ?? 1600);
const MAX_HEIGHT = Number(process.env.IMAGE_MAX_HEIGHT ?? 1600);
const QUALITY = Number(process.env.IMAGE_QUALITY ?? 78);

/** 旧命名：river-kwai-bridge-12.jpg → 需要重命名 */
const LEGACY_RE = /^river-kwai-bridge-(\d+)\.jpg$/i;
/** 规范命名：river-kwai-bridge-kanchanaburi-12.jpg */
const CANONICAL_RE = new RegExp(`^${SLUG}-(\\d+)\\.jpg$`, 'i');

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

/** 删除文件（部分环境对 unlink 有拦截，统一走 rmSync） */
function safeRemove(file) {
  try {
    fs.rmSync(file, { force: true });
  } catch (error) {
    console.warn(`  ! 无法删除旧文件 ${path.basename(file)}：${error.message}`);
  }
}

async function compress(inputPath, outputPath) {
  const original = fs.statSync(inputPath).size;
  const image = sharp(inputPath, { failOn: 'none' }).rotate();
  const meta = await image.metadata();

  const buffer = await image
    .resize({ width: MAX_WIDTH, height: MAX_HEIGHT, withoutEnlargement: true, fit: 'inside' })
    .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true, chromaSubsampling: '4:2:0' })
    .toBuffer();

  const tmp = `${outputPath}.tmp`;
  fs.writeFileSync(tmp, buffer);
  fs.renameSync(tmp, outputPath);

  const finalMeta = await sharp(outputPath).metadata();
  const saved = original - buffer.length;
  const pct = original > 0 ? Math.round((saved / original) * 100) : 0;

  return {
    file: path.basename(outputPath),
    width: finalMeta.width,
    height: finalMeta.height,
    before: original,
    after: buffer.length,
    pct,
    srcWidth: meta.width,
    srcHeight: meta.height,
  };
}

async function main() {
  if (!fs.existsSync(GALLERY_DIR)) {
    console.error(`✗ 未找到目录：${GALLERY_DIR}`);
    process.exit(1);
  }

  const entries = fs.readdirSync(GALLERY_DIR);
  const legacy = entries
    .map((name) => ({ name, m: name.match(LEGACY_RE) }))
    .filter((e) => e.m)
    .map((e) => ({ name: e.name, index: Number(e.m[1]) }))
    .sort((a, b) => a.index - b.index);

  const canonical = entries
    .map((name) => ({ name, m: name.match(CANONICAL_RE) }))
    .filter((e) => e.m)
    .map((e) => ({ name: e.name, index: Number(e.m[1]) }))
    .sort((a, b) => a.index - b.index);

  /** @type {{input:string, output:string, removeInput:boolean}[]} */
  const jobs = [
    // 1) 旧命名 → 压缩 + 重命名为规范名
    ...legacy.map((e) => ({
      input: path.join(GALLERY_DIR, e.name),
      output: path.join(GALLERY_DIR, `${SLUG}-${e.index}.jpg`),
      removeInput: true,
    })),
    // 2) 已是规范命名 → 原地重新压缩（幂等）
    ...canonical.map((e) => {
      const target = path.join(GALLERY_DIR, e.name);
      return { input: target, output: target, removeInput: false };
    }),
  ];

  if (jobs.length === 0) {
    console.log('没有找到任何可处理的照片，已跳过。');
    return;
  }

  console.log(`处理 ${jobs.length} 张照片 → 最大宽度 ${MAX_WIDTH}px / 质量 ${QUALITY}\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  const results = [];

  for (const job of jobs) {
    try {
      // 原地压缩时需要先读到内存，避免读写同一文件
      let result;
      if (job.input === job.output) {
        const buffer = fs.readFileSync(job.input);
        const tmpIn = `${job.input}.orig`;
        fs.writeFileSync(tmpIn, buffer);
        result = await compress(tmpIn, job.output);
        safeRemove(tmpIn);
      } else {
        result = await compress(job.input, job.output);
        if (job.removeInput && job.input !== job.output) safeRemove(job.input);
      }

      totalBefore += result.before;
      totalAfter += result.after;
      results.push(result);
      console.log(
        `✓ ${result.file.padEnd(44)} ${String(result.srcWidth).padStart(4)}×${String(result.srcHeight).padEnd(5)} → ` +
          `${String(result.width).padStart(4)}×${String(result.height).padEnd(5)}  ` +
          `${kb(result.before).padStart(8)} → ${kb(result.after).padStart(8)}  (-${result.pct}%)`
      );
    } catch (error) {
      console.error(`✗ 处理失败：${path.basename(job.input)} — ${error.message}`);
      process.exitCode = 1;
    }
  }

  const total = (x) => `${(x / 1024 / 1024).toFixed(1)} MB`;
  console.log(
    `\n合计：${total(totalBefore)} → ${total(totalAfter)}  ` +
      `(节省 ${total(totalBefore - totalAfter)}，约 ${Math.round((1 - totalAfter / totalBefore) * 100)}%)`
  );
}

await main();

#!/usr/bin/env node
/**
 * Generates smaller variants next to the originals in public/images:
 *   photo X.jpg   -> X.thumb.jpg (640w, gallery)  + X.large.jpg (1920w, lightbox)
 *   video X.mp4   -> X.preview.mp4 (<=540p, muted, gallery) + X.poster.jpg (640w still)
 *   hero IMG_5985 -> additionally X.preview1080.mp4 (background video)
 * Idempotent: existing outputs are kept; variant files are never used as inputs.
 * Requires ffmpeg/ffprobe on PATH.
 */
import { execFileSync } from 'node:child_process'
import { readdirSync, existsSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'
import sharp from 'sharp'

const ROOT = new URL('../public/images', import.meta.url).pathname
const IMAGE_EXT = /\.(jpe?g|png)$/i
const VIDEO_EXT = /\.(mp4|mov)$/i
const VARIANT = /\.(thumb|large|poster)\.jpg$|\.preview(1080)?\.mp4$/i
const HERO = join(ROOT, 'IMG_5985.mp4')

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(p)
    else yield p
  }
}

const stripExt = (p) => p.slice(0, -extname(p).length)
const fmtMB = (p) => (statSync(p).size / 1024 / 1024).toFixed(1) + 'M'

async function makeImageVariants(src) {
  const base = stripExt(src)
  for (const [suffix, width, quality] of [
    ['.thumb.jpg', 640, 72],
    ['.large.jpg', 1920, 80],
  ]) {
    const out = base + suffix
    if (existsSync(out)) continue
    await sharp(src)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality, progressive: true, mozjpeg: true })
      .toFile(out)
    console.log(`img  ${out} (${fmtMB(out)})`)
  }
}

function makeVideoVariants(src) {
  const base = stripExt(src)
  const jobs = [[base + '.preview.mp4', "scale=-2:'min(540,ih)'", 28]]
  if (src === HERO) jobs.push([base + '.preview1080.mp4', "scale=-2:'min(1080,ih)'", 26])
  for (const [out, filter, crf] of jobs) {
    if (existsSync(out)) continue
    execFileSync('ffmpeg', [
      '-y', '-v', 'error', '-i', src,
      '-vf', filter, '-c:v', 'libx264', '-crf', String(crf), '-preset', 'slow',
      '-pix_fmt', 'yuv420p', '-an', '-movflags', '+faststart', out,
    ])
    console.log(`vid  ${out} (${fmtMB(out)})`)
  }
  const poster = base + '.poster.jpg'
  if (!existsSync(poster)) {
    execFileSync('ffmpeg', [
      '-y', '-v', 'error', '-i', src,
      '-vf', "select=eq(n\\,0),scale=640:-2", '-frames:v', '1', '-q:v', '4', poster,
    ])
    console.log(`img  ${poster} (${fmtMB(poster)})`)
  }
}

for (const file of walk(ROOT)) {
  if (VARIANT.test(file)) continue
  if (IMAGE_EXT.test(file)) await makeImageVariants(file)
  else if (VIDEO_EXT.test(file)) makeVideoVariants(file)
}
console.log('done')

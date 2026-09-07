/**
 * The icon set, from the one logo.
 *
 * `public/assets/logo.svg` is the source for all of it, and everything here exists
 * because a single SVG favicon is not enough in practice:
 *
 * - Google Search does not render an SVG favicon at all, and its crawler asks for
 *   `/favicon.ico` at the root whether or not any page links to it. Without the `.ico`
 *   the result carries a blank square.
 * - iOS ignores `rel="icon"` entirely. With no `apple-touch-icon` it puts a screenshot
 *   of the page on the home screen. It also composites onto white, so the touch icon is
 *   the one image here that gets an opaque ground rather than transparency.
 * - Android reads the icons out of `site.webmanifest`, which wants 192 and 512.
 *
 * Run after changing the logo:
 *
 *     pnpm run favicons
 *
 * It needs `rsvg-convert` (librsvg) and `magick` (ImageMagick) on the PATH. The output is
 * committed: Vercel serves `public/` verbatim and a crawler asks for these long after
 * any build has finished.
 */

import { execFileSync } from 'node:child_process';
import { rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');
const LOGO = path.join(PUBLIC, 'assets', 'logo.svg');

/** The ground under the touch icon. The site's own dark surface, not black. */
const TOUCH_BACKGROUND = '#1b2631';

const run = (command, args) => execFileSync(command, args, { stdio: 'inherit' });

/** One transparent PNG of the mark, square, at `size`. */
function render(size, out) {
    run('rsvg-convert', ['-w', String(size), '-h', String(size), '-o', out, LOGO]);
    console.log(`wrote ${path.relative(ROOT, out)}`);
}

const transparent = [
    [16, 'favicon-16x16.png'],
    [32, 'favicon-32x32.png'],
    [192, 'android-chrome-192x192.png'],
    [512, 'android-chrome-512x512.png'],
];

for (const [size, name] of transparent) render(size, path.join(PUBLIC, name));

/**
 * The touch icon: the mark inset inside a filled square. iOS rounds the corners itself
 * and does not honour transparency, so drawing the ground here is what keeps it from
 * landing on a white card that fights the logo.
 */
const TOUCH = 180;
const INSET = 26;
const scratch = path.join(PUBLIC, '.apple-touch-mark.png');
render(TOUCH - INSET * 2, scratch);
run('magick', [
    '-size',
    `${TOUCH}x${TOUCH}`,
    `xc:${TOUCH_BACKGROUND}`,
    scratch,
    '-gravity',
    'center',
    '-composite',
    '-depth',
    '8',
    '-strip',
    path.join(PUBLIC, 'apple-touch-icon.png'),
]);
rmSync(scratch);
console.log('wrote public/apple-touch-icon.png');

/**
 * `favicon.ico` carries three sizes in one file. A browser tab takes the 16, a bookmark
 * bar or a Windows shortcut takes the 32 or the 48, and the crawler is happy with any of
 * them — what it will not accept is the file being missing.
 */
run('magick', [
    path.join(PUBLIC, 'favicon-16x16.png'),
    path.join(PUBLIC, 'favicon-32x32.png'),
    '(',
    LOGO,
    '-resize',
    '48x48',
    ')',
    '-background',
    'none',
    path.join(PUBLIC, 'favicon.ico'),
]);
console.log('wrote public/favicon.ico');

/**
 * The social card, drawn once per language.
 *
 * The card that shipped before this was a single file for both languages, and its text
 * ran off the right edge: "Intelligent Workspace" was set at 56px starting at x=600 on a
 * 1200px canvas, so the last four letters were outside the image, and the tagline under
 * it was Spanish on every English share. Both faults are the same fault — the card was
 * hand-written SVG that nobody re-measured.
 *
 * So the geometry lives here instead, one template filled from the table below, and the
 * lines are sized against a width budget the template enforces: `fits()` refuses to
 * render a line that would overflow the safe area rather than letting it clip silently.
 *
 * Run it after changing any of the copy:
 *
 *     pnpm run og
 *
 *     pnpm run og            every language in `og-cards.json`
 *     pnpm run og -- ja ar   only those
 *
 * It needs `rsvg-convert` and `pango-view` (librsvg and pango) on the PATH, and the Noto
 * fonts for the scripts in `SCRIPT_FONTS`; those are the only things here that are not
 * Node. The PNGs it writes are committed, because a crawler asks for them long after any
 * build has finished and Vercel serves `public/` verbatim.
 */

import { writeFileSync, readFileSync, unlinkSync, existsSync, mkdtempSync, rmSync } from 'node:fs';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'assets');

const WIDTH = 1200;
const HEIGHT = 630;
/** Left edge of every line, and the right edge nothing may cross. */
const MARGIN = 76;
const SAFE = WIDTH - MARGIN * 2;

/**
 * Copy, per language, in `og-cards.json`: one entry per language the site is published
 * in. The headline is two lines because one line of large type fits in no language, and
 * a card that wraps its own headline wraps it badly.
 */
const CARDS = JSON.parse(readFileSync(path.join(ROOT, 'scripts', 'og-cards.json'), 'utf8'));

/** Languages written right to left: their lines are anchored to the right margin. */
const RTL = new Set(['ar', 'ur']);

/**
 * The font each non-Latin script is set in, ahead of the Latin stack so brand names and
 * figures inside a line still come from a font that has them. Latin-script languages use
 * the Latin stack alone, which is what the English and Spanish cards were drawn with.
 */
const SCRIPT_FONTS = {
    zh: 'Noto Sans CJK SC',
    ja: 'Noto Sans CJK JP',
    ko: 'Noto Sans CJK KR',
    ar: 'Noto Sans Arabic',
    ur: 'Noto Sans Arabic',
    hi: 'Noto Sans Devanagari',
    mr: 'Noto Sans Devanagari',
    bn: 'Noto Sans Bengali',
    pa: 'Noto Sans Gurmukhi',
    ta: 'Noto Sans Tamil',
    te: 'Noto Sans Telugu',
};

const MEASURE_DIR = mkdtempSync(path.join(os.tmpdir(), 'og-measure-'));
process.on('exit', () => rmSync(MEASURE_DIR, { recursive: true, force: true }));

/**
 * How wide a line really sets, in pixels.
 *
 * The first version of this guessed from the character count, which is fine for Latin
 * text and useless for Devanagari or Arabic, where glyphs join and stack. So the line is
 * set by Pango, the same engine `rsvg-convert` draws with, into a PNG whose width is the
 * answer. At 72 dpi a Pango point is one pixel, the unit the SVG uses.
 */
function textWidth(text, size, weight, family) {
    const out = path.join(MEASURE_DIR, 'line.png');
    const style = weight >= 800 ? 'Ultra-Bold' : weight >= 700 ? 'Bold' : weight >= 600 ? 'Semi-Bold' : '';
    const fonts = family.replace(/'/g, '');
    execFileSync('pango-view', [
        '--no-display',
        '--dpi=72',
        '--margin=0',
        `--font=${fonts} ${style} ${size}px`,
        `--text=${text}`,
        `--output=${out}`,
    ]);
    // A PNG's width is the big-endian integer at byte 16 of its IHDR chunk.
    return readFileSync(out).readUInt32BE(16);
}

/**
 * The largest size, at or under `size`, at which the line fits its budget with a 4%
 * margin to spare, never going below `floor`. Below that the copy is too long for the
 * card and has to be shortened rather than squeezed.
 */
function fit(label, text, size, floor, weight, family, budget = SAFE) {
    for (let s = size; s >= floor; s -= 1) {
        if (textWidth(text, s, weight, family) * 1.04 <= budget) return s;
    }
    throw new Error(`${label} does not fit even at ${floor}px: "${text}". Shorten the copy.`);
}

/** The three-card mark from `public/assets/logo.svg`, at its own coordinates. */
const LOGO = `
    <rect x="11" y="10" width="324" height="300" rx="49" fill="#5ABCCC"/>
    <rect x="49" y="42" width="157" height="104" rx="24" fill="#FFFFFF"/>
    <rect x="80" y="87" width="324" height="300" rx="49" fill="#66ACEB"/>
    <rect x="116" y="117" width="158" height="104" rx="24" fill="#FFFFFF"/>
    <rect x="148" y="146" width="324" height="299" rx="49" fill="#4474C5"/>
    <rect x="165" y="179" width="343" height="84" rx="18" fill="#9AC5EA"/>
    <circle cx="213.5" cy="221" r="31.5" fill="#F48325"/>
    <circle cx="295.5" cy="221" r="31.5" fill="#DF5F1D"/>
    <circle cx="377.5" cy="221" r="31.5" fill="#F4D54E"/>
    <circle cx="459.5" cy="221" r="31.5" fill="#3E9D46"/>`;

const FONT = "'Inter', 'DejaVu Sans', 'Liberation Sans', sans-serif";

/** Card copy goes inside SVG text, so the three characters XML reserves are escaped. */
function xml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function card(lang) {
    const { headline, lede, meta } = CARDS[lang];
    const wordmark = 'Intelligent Workspace';
    const family = SCRIPT_FONTS[lang] ? `'${SCRIPT_FONTS[lang]}', ${FONT}` : FONT;
    const rtl = RTL.has(lang);

    // The mark sits at 0.21 of its drawn size: 508 units wide becomes 107px.
    const markScale = 0.21;
    const wordmarkX = MARGIN + 508 * markScale + 28;

    // Each line takes the largest size that fits, starting from the one the English card
    // was designed at, and the two headline lines share the smaller of their two sizes.
    fit('wordmark', wordmark, 34, 34, 700, FONT, SAFE - (wordmarkX - MARGIN));
    const headlineSize = Math.min(
        ...headline.map((line, i) => fit(`${lang} headline line ${i + 1}`, line, 48, 34, 800, family)),
    );
    const ledeSize = fit(`${lang} lede`, lede, 27, 20, 400, family);
    const metaSize = fit(`${lang} meta`, meta, 22, 17, 600, family);

    // Tight tracking suits the Latin display face and breaks joined or stacked scripts.
    const tracking = (value) => (SCRIPT_FONTS[lang] ? 0 : value);
    const x = rtl ? WIDTH - MARGIN : MARGIN;
    // In right-to-left text `start` is the right-hand edge, which is where these lines hang.
    const align = rtl ? ' text-anchor="start" direction="rtl"' : '';

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <!-- Black into viridian, corner to corner: the site's own gradient, at a strength
         that survives being shown at 250px wide in a chat client. -->
    <linearGradient id="ground" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#000000"/>
      <stop offset="34%" stop-color="#04140f"/>
      <stop offset="68%" stop-color="#0a3931"/>
      <stop offset="100%" stop-color="#128a72"/>
    </linearGradient>
    <radialGradient id="glow" cx="88%" cy="86%" r="62%">
      <stop offset="0%" stop-color="#2ecc71" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#2ecc71" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="lift" cx="12%" cy="8%" r="55%">
      <stop offset="0%" stop-color="#1abc9c" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#1abc9c" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#16a085"/>
      <stop offset="100%" stop-color="#2ecc71"/>
    </linearGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#ground)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#lift)"/>

  <g transform="translate(${MARGIN}, 62) scale(${markScale})">${LOGO}
  </g>
  <text x="${wordmarkX}" y="128" font-family="${FONT}" font-size="34" font-weight="700" fill="#FFFFFF" letter-spacing="-0.4">${wordmark}</text>

  <text font-family="${family}" font-size="${headlineSize}" font-weight="800" fill="#FFFFFF" letter-spacing="${tracking(-1.5)}"${align}>
    <tspan x="${x}" y="290">${xml(headline[0])}</tspan>
    <tspan x="${x}" y="${290 + Math.round(headlineSize * 1.375)}">${xml(headline[1])}</tspan>
  </text>

  <text x="${x}" y="432" font-family="${family}" font-size="${ledeSize}" font-weight="400" fill="#cfe6de"${align}>${xml(lede)}</text>
  <text x="${x}" y="544" font-family="${family}" font-size="${metaSize}" font-weight="600" fill="#6fe0c2" letter-spacing="${tracking(0.3)}"${align}>${xml(meta)}</text>

  <rect x="0" y="${HEIGHT - 8}" width="${WIDTH}" height="8" fill="url(#rule)"/>
</svg>
`;
}

const only = process.argv.slice(2);
for (const lang of only.length ? only : Object.keys(CARDS)) {
    if (!CARDS[lang]) throw new Error(`No card copy for "${lang}" in og-cards.json.`);
    const svg = card(lang);
    const svgPath = path.join(OUT, `og-${lang}.svg`);
    const pngPath = path.join(OUT, `og-${lang}.png`);
    writeFileSync(svgPath, svg);
    try {
        execFileSync('rsvg-convert', ['-w', String(WIDTH), '-h', String(HEIGHT), '-o', pngPath, svgPath], {
            stdio: 'inherit',
        });
    } catch (error) {
        console.error('rsvg-convert failed. Install librsvg (`pacman -S librsvg`) and run again.');
        throw error;
    }
    // The SVG is the intermediate, not an asset: nothing links to it and `public/` is
    // served verbatim, so leaving it there would deploy a file no page asks for.
    unlinkSync(svgPath);
    console.log(`wrote ${path.relative(ROOT, pngPath)}`);
}

for (const stale of ['og-image.png', 'og-image.svg']) {
    const file = path.join(OUT, stale);
    if (existsSync(file)) {
        unlinkSync(file);
        console.log(`removed ${path.relative(ROOT, file)}`);
    }
}

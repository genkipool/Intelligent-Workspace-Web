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
 * It needs `rsvg-convert` (librsvg) on the PATH; that is the only thing here that is not
 * Node. The PNGs it writes are committed, because a crawler asks for them long after any
 * build has finished and Vercel serves `public/` verbatim.
 */

import { writeFileSync, unlinkSync, existsSync } from 'node:fs';
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
 * Copy, per language. The headline is two lines because one line of 66px type does not
 * fit 1048px in either language, and a card that wraps its own headline wraps it badly.
 */
const CARDS = {
    en: {
        wordmark: 'Intelligent Workspace',
        headline: ['Transform your browser into an', 'autonomous workstation'],
        lede: 'Tab rules, a floating omnibar and an AI assistant.',
        meta: '100% local  ·  No account  ·  Chrome',
    },
    es: {
        wordmark: 'Intelligent Workspace',
        headline: ['Transforma tu navegador en una', 'estación de trabajo autónoma'],
        lede: 'Reglas de pestañas, omnibar y asistente de IA.',
        meta: '100% local  ·  Sin cuenta  ·  Chrome',
    },
};

/**
 * Roughly how wide a string sets, in pixels.
 *
 * There is no font metric available to a Node script that has not loaded the font, so
 * this is the average advance of the sans-serif the renderer will pick, measured against
 * the rendered output rather than assumed. It is only ever used to catch a line that has
 * grown too long, so an approximation with headroom is the right tool: `fits` keeps a
 * 4% margin on top of it.
 */
function textWidth(text, size, bold = false) {
    return text.length * size * (bold ? 0.63 : 0.55);
}

function fits(label, text, size, bold, budget = SAFE) {
    const width = textWidth(text, size, bold) * 1.04;
    if (width > budget) {
        throw new Error(
            `${label} does not fit: "${text}" sets about ${Math.round(width)}px, budget ${budget}px. ` +
                `Shorten the copy or drop the size.`,
        );
    }
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

function card(lang) {
    const { wordmark, headline, lede, meta } = CARDS[lang];

    // The mark sits at 0.21 of its drawn size: 508 units wide becomes 107px.
    const markScale = 0.21;
    const wordmarkX = MARGIN + 508 * markScale + 28;

    const headlineSize = 48;

    fits('wordmark', wordmark, 34, true, SAFE - (wordmarkX - MARGIN));
    headline.forEach((line, i) => fits(`headline line ${i + 1}`, line, headlineSize, true));
    fits('lede', lede, 27, false);
    fits('meta', meta, 22, false);

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

  <text font-family="${FONT}" font-size="${headlineSize}" font-weight="800" fill="#FFFFFF" letter-spacing="-1.5">
    <tspan x="${MARGIN}" y="290">${headline[0]}</tspan>
    <tspan x="${MARGIN}" y="356">${headline[1]}</tspan>
  </text>

  <text x="${MARGIN}" y="432" font-family="${FONT}" font-size="27" font-weight="400" fill="#cfe6de">${lede}</text>
  <text x="${MARGIN}" y="544" font-family="${FONT}" font-size="22" font-weight="600" fill="#6fe0c2" letter-spacing="0.3">${meta}</text>

  <rect x="0" y="${HEIGHT - 8}" width="${WIDTH}" height="8" fill="url(#rule)"/>
</svg>
`;
}

for (const lang of Object.keys(CARDS)) {
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

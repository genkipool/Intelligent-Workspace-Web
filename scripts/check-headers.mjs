/**
 * Proves the Content-Security-Policy in `vercel.json` matches the build, in the two
 * ways it can silently stop doing so: a payment page with no policy of its own, and an
 * inline script the policy does not name.
 *
 * Both failures are invisible in `dev`, where no policy is served at all.
 *
 * The first exists because it is silent and expensive. The payment pages
 * are generated per language, so adding a third language creates `/fr/pay`. If nothing
 * in `vercel.json` names it, it inherits the landing page's policy — whose
 * `frame-ancestors` is `'none'` — and the extension's side panel shows a blank frame.
 * Nobody notices until a donation does not happen.
 *
 * It reads the built output rather than a list of expected routes, so it checks what
 * really shipped.
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createHash } from 'node:crypto';

const STATIC_DIR = '.vercel/output/static';

/** Every `…/pay` route present in the build. */
function payRoutes(dir = STATIC_DIR, prefix = '') {
    const found = [];
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue;
        const route = `${prefix}/${entry.name}`;
        if (entry.name === 'pay') found.push(route);
        else found.push(...payRoutes(join(dir, entry.name), route));
    }
    return found;
}

function fail(message) {
    console.error(message);
    process.exit(1);
}

if (!existsSync(STATIC_DIR)) fail(`No build at ${STATIC_DIR}. Run \`npm run build\` first.`);

const config = JSON.parse(readFileSync('vercel.json', 'utf8'));

/** The blocks whose CSP hands framing rights to the extension. */
const payBlocks = (config.headers ?? []).filter((block) =>
    block.headers?.some(
        (h) => h.key === 'Content-Security-Policy' && h.value.includes('frame-ancestors chrome-extension://'),
    ),
);

if (payBlocks.length === 0) fail('No block in vercel.json grants frame-ancestors to the extension.');

const covered = new Set(payBlocks.map((block) => block.source));
const routes = payRoutes();

if (routes.length === 0) fail('The build contains no /pay route at all. Something is very wrong.');

const uncovered = routes.filter((route) => !covered.has(route));
if (uncovered.length) {
    fail(
        `These payment routes have no strict-CSP block in vercel.json:\n` +
            uncovered.map((r) => `  ${r}`).join('\n') +
            `\n\nThey would inherit the landing policy, whose frame-ancestors is 'none' —` +
            `\nthe extension's panel would show a blank frame. Add a block with source "${uncovered[0]}".`,
    );
}

// The other direction: a block for a route that no longer exists is dead configuration.
const orphans = [...covered].filter((source) => !routes.includes(source));
if (orphans.length)
    fail(`vercel.json protects routes that the build does not produce: ${orphans.join(', ')}`);

console.log(`${routes.length} payment route(s), each with its own strict CSP: ${routes.join(', ')}`);

/**
 * Second check: every inline script in the build is named by the policy that covers it.
 *
 * `script-src 'self'` does not allow inline code, so an inline script needs a
 * `'sha256-…'` of its exact body. There should be only one: the theme sync in
 * `Base.astro`, which has to run before the first paint and therefore cannot be a
 * request. Astro used to inline every bundled script under 4 KB as well, which is why
 * `astro.config.mjs` sets `assetsInlineLimit` for `.js`; if that ever regresses, or if
 * somebody edits the theme script and forgets the hash, this is what says so. A missing
 * hash costs nothing in `dev` and breaks the theme, the menu and the carousel in
 * production.
 */

/** Types the browser actually executes. Anything else is data and is not policed. */
const EXECUTABLE = new Set(['', 'module', 'text/javascript', 'application/javascript']);

function htmlFiles(dir = STATIC_DIR) {
    const found = [];
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const path = join(dir, entry.name);
        if (entry.isDirectory()) found.push(...htmlFiles(path));
        else if (entry.name.endsWith('.html')) found.push(path);
    }
    return found;
}

/** The `script-src` list of the first block in `vercel.json` whose source matches. */
function scriptSrcFor(route) {
    for (const block of config.headers ?? []) {
        if (!new RegExp(`^${block.source}$`).test(route)) continue;
        const csp = block.headers?.find((h) => h.key === 'Content-Security-Policy')?.value;
        if (!csp) continue;
        return csp.split(';').find((directive) => directive.trim().startsWith('script-src')) ?? '';
    }
    return null;
}

const unhashed = [];

for (const file of htmlFiles()) {
    const route =
        '/' +
        relative(STATIC_DIR, file)
            .replace(/(index)?\.html$/, '')
            .replace(/\/$/, '');
    const scriptSrc = scriptSrcFor(route);
    const html = readFileSync(file, 'utf8');

    for (const [, attributes, body] of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
        if (/\ssrc=/.test(attributes)) continue;
        const type = (attributes.match(/type="([^"]*)"/)?.[1] ?? '').trim().toLowerCase();
        if (!EXECUTABLE.has(type)) continue;

        const hash = `sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}`;
        if (scriptSrc?.includes(`'${hash}'`)) continue;
        unhashed.push({ route, hash, opening: body.trim().split('\n')[0].slice(0, 60) });
    }
}

if (unhashed.length) {
    fail(
        `These inline scripts are not allowed by the policy that covers their page:\n` +
            unhashed.map((s) => `  ${s.route}\n    '${s.hash}'\n    starts: ${s.opening}`).join('\n') +
            `\n\nThe browser will refuse to run them and report nothing to the page.` +
            `\nEither add the hash above to that block's script-src in vercel.json, or,` +
            `\nif the script did not mean to be inline, stop inlining it.`,
    );
}

console.log('Every inline script in the build is hashed in its policy.');

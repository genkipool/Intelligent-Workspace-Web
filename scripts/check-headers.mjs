/**
 * Proves the strict payment policy actually covers every payment page in the build.
 *
 * This exists because the failure it catches is silent and expensive. The payment pages
 * are generated per language, so adding a third language creates `/fr/pay`. If nothing
 * in `vercel.json` names it, it inherits the landing page's policy — whose
 * `frame-ancestors` is `'none'` — and the extension's side panel shows a blank frame.
 * Nobody notices until a donation does not happen.
 *
 * It reads the built output rather than a list of expected routes, so it checks what
 * really shipped.
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

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

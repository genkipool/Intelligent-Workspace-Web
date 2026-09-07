/**
 * Two ways the legal pages can ship wrong, both of them silent.
 *
 * FIRST: the identification block with a placeholder still in it. That box is the one part
 * of the terms a reader — or an inspector — checks against reality, so a page that answers
 * "PENDIENTE" is worse than one that never claimed to identify anybody, and nothing else
 * in the toolchain can tell a placeholder from a name. It checks whatever fields
 * `identity` happens to carry, so adding the NIF and the domicile back (see the note on
 * `identity` in `src/data/terms.ts` for when that becomes necessary) puts them under this
 * guard with no change here.
 *
 * SECOND: a link to the European ODR platform. It is in every terms-of-service template
 * on the internet and it has been dead since 20 July 2025, when Regulation (EU) 2024/3228
 * repealed the one that created it. Sending a consumer to a switched-off dispute service
 * is now itself grounds for a complaint, so if that URL ever reappears — pasted from a
 * template, or restored by someone tidying the copy — this is what says so.
 *
 * Runs against the source, not the build, so it can fail before anything is deployed.
 */

import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const problems = [];

// ── The identification block ──────────────────────────────────────────────────
const terms = readFileSync('src/data/terms.ts', 'utf8');

/**
 * Every field the `identity` literal declares, read from inside its own braces.
 *
 * Scoped to the block rather than to the file on purpose: a scan of the whole module would
 * happily pick up the next `name: 'value'` pair that came along, and then report a field
 * that is not in the box at all.
 */
const body = terms.match(/export const identity = \{([\s\S]*?)\n\} as const;/)?.[1];
const declared =
    body === undefined
        ? []
        : [...body.matchAll(/^ {4}([A-Za-z][A-Za-z0-9]*): '([^']*)',$/gm)].map(([, name, value]) => ({
              name,
              value,
          }));

if (body === undefined) problems.push('src/data/terms.ts no longer exports an `identity` object.');
else if (declared.length === 0) problems.push('src/data/terms.ts declares no `identity` fields at all.');

for (const { name, value } of declared) {
    if (value.trim() === '' || /^(PENDIENTE|TODO|TBD|XXX)$/i.test(value.trim()))
        problems.push(
            `\`identity.${name}\` is still "${value}" in src/data/terms.ts.\n` +
                `    It is rendered verbatim in the identification box at the top of /terms and /es/terms,\n` +
                `    which is the part of the page a reader checks against reality. Put the value in and\n` +
                `    this check goes green.`,
        );
}

// The box is worthless without a name and somewhere to write to.
if (!declared.some((field) => field.name === 'name'))
    problems.push('src/data/terms.ts has no `identity.name`, so the terms identify nobody.');
if (!/privacyEmail: '[^']+@[^']+'/.test(readFileSync('src/data/site.ts', 'utf8')))
    problems.push('src/data/site.ts has no `privacyEmail`, so the terms give no way to reach anyone.');

// ── The dead platform ─────────────────────────────────────────────────────────
const DEAD_ODR = /ec\.europa\.eu\/(consumers\/)?odr/i;

function sourceFiles(dir) {
    return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = join(dir, entry.name);
        if (entry.isDirectory()) return sourceFiles(full);
        return /\.(astro|ts|md)$/.test(entry.name) ? [full] : [];
    });
}

for (const file of sourceFiles('src')) {
    if (DEAD_ODR.test(readFileSync(file, 'utf8')))
        problems.push(
            `${file} links to the European ODR platform.\n` +
                `    It was shut down on 20 July 2025 by Regulation (EU) 2024/3228. Point consumers at the\n` +
                `    European Consumer Centre network instead, which is what the terms already do.`,
        );
}

if (problems.length) {
    console.error(`The legal pages are not ready to publish:\n\n  ${problems.join('\n\n  ')}\n`);
    process.exit(1);
}

console.log('Legal pages: identification block filled in, no link to the dead ODR platform.');

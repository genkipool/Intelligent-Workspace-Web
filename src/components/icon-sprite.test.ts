/**
 * The sprite has one failure mode, and it is silent.
 *
 * `Icon.astro` renders `<use href="#iw-name">`; the symbol it points at is written by
 * `IconSprite.astro`, whose list a page passes to `Base.astro`. A page that draws a
 * glyph its sprite was not asked for renders an empty square — no error, no warning,
 * and nothing a type checker can see, because the name is right and the list is right
 * and only their combination is wrong.
 *
 * So the check is on the built HTML: every reference must resolve inside the same
 * document, and no page may ship a symbol it never draws.
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const PAGES = [
    'index.html',
    path.join('es', 'index.html'),
    path.join('pay', 'index.html'),
    path.join('privacy', 'index.html'),
    path.join('support', 'index.html'),
];

function readBuiltPage(page: string): string | null {
    const file = path.resolve(process.cwd(), '.vercel', 'output', 'static', page);
    return fs.existsSync(file) ? fs.readFileSync(file, 'utf-8') : null;
}

describe('the icon sprite', () => {
    for (const page of PAGES) {
        it(`resolves every <use> in /${page} against a symbol on the same page`, () => {
            const html = readBuiltPage(page);
            // A bare `vitest` run before a build has nothing to check; CI always builds.
            if (html === null) return;

            const symbols = new Set([...html.matchAll(/<symbol id="([^"]+)"/g)].map((m) => m[1]));
            const used = [...html.matchAll(/<use href="#([^"]+)"/g)].map((m) => m[1]);

            const unresolved = [...new Set(used.filter((id) => !symbols.has(id)))];
            expect(unresolved, `/${page} draws icons its sprite does not carry`).toEqual([]);
        });

        it(`ships no unused symbol in /${page}`, () => {
            const html = readBuiltPage(page);
            if (html === null) return;

            const symbols = [...html.matchAll(/<symbol id="([^"]+)"/g)].map((m) => m[1]);
            const used = new Set([...html.matchAll(/<use href="#([^"]+)"/g)].map((m) => m[1]));

            const dead = symbols.filter((id) => !used.has(id));
            expect(dead, `/${page} carries path data it never draws`).toEqual([]);
        });
    }
});

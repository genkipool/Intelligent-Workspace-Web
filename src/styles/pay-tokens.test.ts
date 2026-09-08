/**
 * A colour the contribution sheet asks for and nobody defines.
 *
 * `pay.css` is written entirely in custom properties, because the extension's panel
 * overrides those same names with the tokens of whatever theme the reader picked. That
 * only works while every name the sheet reads is a name somebody sets: a `var(--x)` for
 * an `--x` that exists nowhere resolves to nothing, the declaration is dropped, and the
 * element is left with whatever it inherits.
 *
 * It is invisible in the viridian theme, whose palette is the site's own, so the
 * fallbacks and the overrides agree and a dropped declaration looks like the design.
 * On any other theme it is a hole. That is how `--panel-color` and `--accent-color` —
 * neither of which has ever existed; the names are `--bg-panel-color` and
 * `--action-color` — sat in the wallet placeholder unnoticed.
 *
 * The check is self-contained on purpose: the sheet declares its own fallbacks, so every
 * name it reads must also be a name it declares, whatever the panel does or does not send.
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const SHEET = path.resolve(process.cwd(), 'src', 'styles', 'pay.css');
const css = fs.readFileSync(SHEET, 'utf8');

/** Every `--x` the sheet reads, whether or not it also gives a fallback. */
const readNames = new Set([...css.matchAll(/var\(\s*(--[a-z0-9-]+)/gi)].map((match) => match[1]!));

/** Every `--x` the sheet declares, in any block. */
const declaredNames = new Set([...css.matchAll(/^\s*(--[a-z0-9-]+)\s*:/gim)].map((match) => match[1]!));

describe('pay.css', () => {
    it('declares every custom property it reads', () => {
        const undeclared = [...readNames].filter((name) => !declaredNames.has(name)).sort();
        expect(undeclared).toEqual([]);
    });

    it('reads something at all, so the check cannot pass by finding nothing', () => {
        expect(readNames.size).toBeGreaterThan(5);
        expect(declaredNames.size).toBeGreaterThan(5);
    });
});

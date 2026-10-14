/**
 * The language detection in `Base.astro` is an inline script, so it cannot import the
 * language list and carries its own copy. A language added to `ui.ts` and not there
 * would never be detected; one left there after removal would redirect to a 404.
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { ui } from '@/i18n/ui';

const BASE = path.resolve(process.cwd(), 'src', 'layouts', 'Base.astro');

describe('language detection', () => {
    it('knows exactly the languages the site is published in', () => {
        const source = fs.readFileSync(BASE, 'utf-8');
        const list = source.match(/var LANGS = \[([^\]]*)\]/)?.[1];
        expect(list, 'no LANGS list in Base.astro').toBeDefined();
        const detected = [...list!.matchAll(/'([a-z]{2})'/g)].map((m) => m[1]).sort();
        expect(detected).toEqual(Object.keys(ui).sort());
    });
});

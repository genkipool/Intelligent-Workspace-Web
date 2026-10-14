/**
 * Every page points its share card at `/assets/og-<lang>.png`, so a language without one
 * shares as a broken image. The PNGs are committed, drawn by `scripts/og.mjs` from
 * `scripts/og-cards.json`; this fails when a language is added and the card is not.
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { ui } from '@/i18n/ui';

const ROOT = process.cwd();
const cards = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts', 'og-cards.json'), 'utf-8'));

describe('share cards', () => {
    for (const lang of Object.keys(ui)) {
        it(`has copy and a drawn card for ${lang}`, () => {
            expect(cards[lang], `no entry for ${lang} in og-cards.json`).toBeDefined();
            expect(fs.existsSync(path.join(ROOT, 'public', 'assets', `og-${lang}.png`))).toBe(true);
        });
    }
});

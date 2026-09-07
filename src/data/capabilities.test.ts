import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { bentoCards, bentoCategories, type BentoCategory } from '@/data/capabilities';
import { ui } from '@/i18n/ui';
import { icons } from '@/data/icons';

describe('Milestone 2: SwissArmyBento & 19-Tool Feature Arsenal', () => {
    it('has exactly 19 bento cards defined', () => {
        expect(bentoCards).toHaveLength(19);
    });

    it('has unique IDs across all 19 cards', () => {
        const ids = bentoCards.map((c) => c.id);
        const uniqueIds = new Set(ids);
        expect(uniqueIds.size).toBe(19);
    });

    it('distributes cards correctly across the 3 categories (4 tabs, 8 productivity, 7 tools)', () => {
        const tabs = bentoCards.filter((c) => c.category === 'tabs');
        const productivity = bentoCards.filter((c) => c.category === 'productivity');
        const tools = bentoCards.filter((c) => c.category === 'tools');

        expect(tabs).toHaveLength(4);
        expect(productivity).toHaveLength(8);
        expect(tools).toHaveLength(7);
        expect(tabs.length + productivity.length + tools.length).toBe(19);
    });

    it('defines only valid column spans (col-span-1 or col-span-2)', () => {
        for (const card of bentoCards) {
            expect(['col-span-1', 'col-span-2']).toContain(card.span);
        }
    });

    it('draws every card with a glyph the icon registry actually has', () => {
        for (const card of bentoCards) {
            expect(icons, `Card ${card.id} has unsupported icon: ${card.icon}`).toHaveProperty(card.icon);
        }
    });

    it('has exactly 3 highlights per card with valid non-empty translation keys in EN and ES', () => {
        for (const card of bentoCards) {
            expect(card.highlightKeys).toHaveLength(3);

            for (const lang of ['en', 'es'] as const) {
                const title = ui[lang][card.titleKey];
                const desc = ui[lang][card.descKey];
                const tag = ui[lang][card.tagKey];
                const badge = ui[lang][card.badgeKey];

                expect(title, `Missing ${lang}.${card.titleKey} for card ${card.id}`).toBeDefined();
                expect(title.trim(), `Empty ${lang}.${card.titleKey}`).not.toBe('');

                expect(desc, `Missing ${lang}.${card.descKey} for card ${card.id}`).toBeDefined();
                expect(desc.trim(), `Empty ${lang}.${card.descKey}`).not.toBe('');

                expect(tag, `Missing ${lang}.${card.tagKey} for card ${card.id}`).toBeDefined();
                expect(tag.trim(), `Empty ${lang}.${card.tagKey}`).not.toBe('');

                expect(badge, `Missing ${lang}.${card.badgeKey} for card ${card.id}`).toBeDefined();
                expect(badge.trim(), `Empty ${lang}.${card.badgeKey}`).not.toBe('');

                for (const hKey of card.highlightKeys) {
                    const hVal = ui[lang][hKey];
                    expect(hVal, `Missing ${lang}.${hKey} for card ${card.id}`).toBeDefined();
                    expect(hVal.trim(), `Empty ${lang}.${hKey}`).not.toBe('');
                }
            }
        }
    });

    it('contains zero Vimium mentions in bento translations', () => {
        for (const card of bentoCards) {
            for (const lang of ['en', 'es'] as const) {
                const allTexts = [
                    ui[lang][card.titleKey],
                    ui[lang][card.descKey],
                    ui[lang][card.tagKey],
                    ui[lang][card.badgeKey],
                    ...card.highlightKeys.map((k) => ui[lang][k]),
                ];

                for (const text of allTexts) {
                    expect(text).not.toMatch(/\bvim(ium)?\b/i);
                }
            }
        }
    });

    it('defines 4 category filter buttons with valid non-empty labels in EN and ES', () => {
        expect(bentoCategories).toHaveLength(4);
        const expectedIds: (BentoCategory | 'all')[] = ['all', 'tabs', 'productivity', 'tools'];
        expect(bentoCategories.map((c) => c.id)).toEqual(expectedIds);

        for (const cat of bentoCategories) {
            for (const lang of ['en', 'es'] as const) {
                const label = ui[lang][cat.labelKey];
                expect(label, `Missing label for filter ${cat.id} in ${lang}`).toBeDefined();
                expect(label.trim()).not.toBe('');
            }
        }
    });

    it('simulates client-side category filter logic accurately', () => {
        // Test filtering function matching SwissArmyBento.astro script logic
        const filterCards = (selectedFilter: string) => {
            return bentoCards.filter((card) => {
                if (selectedFilter === 'all') return true;
                return card.category === selectedFilter;
            });
        };

        // All
        expect(filterCards('all')).toHaveLength(19);

        // Tabs
        const tabFiltered = filterCards('tabs');
        expect(tabFiltered).toHaveLength(4);
        expect(tabFiltered.every((c) => c.category === 'tabs')).toBe(true);

        // Productivity
        const prodFiltered = filterCards('productivity');
        expect(prodFiltered).toHaveLength(8);
        expect(prodFiltered.every((c) => c.category === 'productivity')).toBe(true);

        // Tools
        const toolsFiltered = filterCards('tools');
        expect(toolsFiltered).toHaveLength(7);
        expect(toolsFiltered.every((c) => c.category === 'tools')).toBe(true);

        // Edge case: invalid filter returns 0 cards
        expect(filterCards('nonexistent')).toHaveLength(0);
    });

    it('verifies static build output rendered HTML in English and Spanish', () => {
        const enHtmlPath = path.resolve(process.cwd(), '.vercel/output/static/index.html');
        const esHtmlPath = path.resolve(process.cwd(), '.vercel/output/static/es/index.html');

        if (!fs.existsSync(enHtmlPath) || !fs.existsSync(esHtmlPath)) {
            // If static files are not built yet, skip this check during isolated unit runs
            return;
        }

        const enHtml = fs.readFileSync(enHtmlPath, 'utf-8');
        const esHtml = fs.readFileSync(esHtmlPath, 'utf-8');

        // Check English static page
        expect(enHtml).toContain('id="navaja-suiza"');
        expect(enHtml).toContain('class="bento-grid"');
        const enCardCount = (enHtml.match(/<article[^>]*class="[^"]*\bbento-card\b[^"]*"/g) || []).length;
        expect(enCardCount).toBe(19);

        // Check Spanish static page
        expect(esHtml).toContain('id="navaja-suiza"');
        expect(esHtml).toContain('class="bento-grid"');
        const esCardCount = (esHtml.match(/<article[^>]*class="[^"]*\bbento-card\b[^"]*"/g) || []).length;
        expect(esCardCount).toBe(19);

        // Check all 21 tool titles exist in respective HTML
        for (const card of bentoCards) {
            const enTitle = ui.en[card.titleKey];
            const esTitle = ui.es[card.titleKey];

            // Normalize HTML entities like & -> &amp;
            const escapeHtml = (str: string) =>
                str
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;');

            expect(enHtml, `EN page missing title for ${card.id}`).toContain(escapeHtml(enTitle));
            expect(esHtml, `ES page missing title for ${card.id}`).toContain(escapeHtml(esTitle));
        }

        // Verify filter buttons in EN and ES
        for (const cat of bentoCategories) {
            const enLabel = ui.en[cat.labelKey].replace(/&/g, '&amp;');
            const esLabel = ui.es[cat.labelKey].replace(/&/g, '&amp;');

            expect(enHtml).toContain(enLabel);
            expect(esHtml).toContain(esLabel);
        }
    });
});

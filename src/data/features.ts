/**
 * The four things the extension does, in the order a new user meets them.
 *
 * Each one carries a lead paragraph and three concrete specifics. The specifics are the
 * point: "it groups your tabs" is a claim anybody can make, while "a group you have not
 * touched in twenty minutes folds itself" is something a reader can picture and later
 * check. If a new detail cannot be stated that concretely, it probably does not belong
 * on the page.
 *
 * SCALING RULE: a fifth feature is one entry here plus its keys in `ui.ts`.
 * `Features.astro` derives the numbering and the colour from the array, so inserting one
 * in the middle renumbers the rest by itself.
 *
 * `tone` names one of the four analogous hues in `global.css`, not a feature — so a
 * feature can change colour without a variable ending up called `--c-pomodoro`.
 */

import type { TranslationKey } from '@/i18n/ui';

export type Tone = 'teal' | 'viridian' | 'pine' | 'brass';

export interface Feature {
    id: string;
    tone: Tone;
    titleKey: TranslationKey;
    leadKey: TranslationKey;
    /** Three short, checkable specifics. Not marketing lines. */
    detailKeys: readonly TranslationKey[];
}

export const features: readonly Feature[] = [
    {
        id: 'grouping',
        tone: 'viridian',
        titleKey: 'feature.grouping.title',
        leadKey: 'feature.grouping.lead',
        detailKeys: ['feature.grouping.d1', 'feature.grouping.d2', 'feature.grouping.d3'],
    },
    {
        id: 'agent',
        tone: 'teal',
        titleKey: 'feature.agent.title',
        leadKey: 'feature.agent.lead',
        detailKeys: ['feature.agent.d1', 'feature.agent.d2', 'feature.agent.d3'],
    },
    {
        id: 'focus',
        tone: 'brass',
        titleKey: 'feature.focus.title',
        leadKey: 'feature.focus.lead',
        detailKeys: ['feature.focus.d1', 'feature.focus.d2', 'feature.focus.d3'],
    },
    {
        id: 'keyboard',
        tone: 'pine',
        titleKey: 'feature.keyboard.title',
        leadKey: 'feature.keyboard.lead',
        detailKeys: ['feature.keyboard.d1', 'feature.keyboard.d2', 'feature.keyboard.d3'],
    },
];

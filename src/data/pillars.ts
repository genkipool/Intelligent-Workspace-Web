/**
 * The five pillars behind the tab strip, in the order a reader meets them.
 *
 * The strip and its panels were once written out by hand, one block of the same markup
 * per pillar, differing only in a key prefix. They are this list now, so a further pillar
 * is one entry plus its keys in `ui.ts`, and the strip cannot fall out of step with the
 * panels it controls — the ids that wire `aria-controls` to `aria-labelledby` are derived
 * from `id` rather than typed twice.
 *
 * The shot beside each panel stays in `Features.astro`: it is the one part that really
 * is different every time.
 */

import type { TranslationKey } from '@/i18n/ui';
import type { IconName } from '@/data/icons';

export interface Pillar {
    /** Also the tab's `data-tab`, and the stem of both element ids. */
    id: 'agent' | 'tabs' | 'focus' | 'keys' | 'media';
    icon: IconName;
    tabKey: TranslationKey;
    titleKey: TranslationKey;
    leadKey: TranslationKey;
    /** Four checkable specifics. Not marketing lines. */
    checkKeys: readonly [TranslationKey, TranslationKey, TranslationKey, TranslationKey];
}

export const pillars: readonly Pillar[] = [
    {
        id: 'agent',
        icon: 'botFace',
        tabKey: 'fhub.tab1',
        titleKey: 'fhub.agent.title',
        leadKey: 'fhub.agent.lead',
        checkKeys: ['fhub.agent.f1', 'fhub.agent.f2', 'fhub.agent.f3', 'fhub.agent.f4'],
    },
    {
        id: 'tabs',
        icon: 'browserTabs',
        tabKey: 'fhub.tab2',
        titleKey: 'fhub.tabs.title',
        leadKey: 'fhub.tabs.lead',
        checkKeys: ['fhub.tabs.f1', 'fhub.tabs.f2', 'fhub.tabs.f3', 'fhub.tabs.f4'],
    },
    {
        id: 'focus',
        icon: 'timer',
        tabKey: 'fhub.tab3',
        titleKey: 'fhub.focus.title',
        leadKey: 'fhub.focus.lead',
        checkKeys: ['fhub.focus.f1', 'fhub.focus.f2', 'fhub.focus.f3', 'fhub.focus.f4'],
    },
    {
        id: 'keys',
        icon: 'keyboardKeys',
        tabKey: 'fhub.tab4',
        titleKey: 'fhub.keys.title',
        leadKey: 'fhub.keys.lead',
        checkKeys: ['fhub.keys.f1', 'fhub.keys.f2', 'fhub.keys.f3', 'fhub.keys.f4'],
    },
];

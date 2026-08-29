/**
 * The four things the extension does, in the order a new user meets them.
 *
 * SCALING RULE: a fifth feature is one entry here. Nothing in the markup counts them,
 * numbers them or colours them — `Features.astro` derives all three from this array, so
 * inserting one in the middle renumbers the rest automatically.
 *
 * `tone` names a Chrome tab-group colour. That is the site's whole palette, and using
 * the product's own colours is the point rather than a coincidence.
 */

import type { TranslationKey } from '@/i18n/ui';

export type Tone = 'blue' | 'purple' | 'red' | 'green' | 'orange';

export interface Feature {
    id: string;
    tone: Tone;
    titleKey: TranslationKey;
    bodyKey: TranslationKey;
}

export const features: readonly Feature[] = [
    { id: 'grouping', tone: 'blue', titleKey: 'feature.grouping.title', bodyKey: 'feature.grouping.body' },
    { id: 'agent', tone: 'purple', titleKey: 'feature.agent.title', bodyKey: 'feature.agent.body' },
    { id: 'focus', tone: 'red', titleKey: 'feature.focus.title', bodyKey: 'feature.focus.body' },
    { id: 'tools', tone: 'green', titleKey: 'feature.tools.title', bodyKey: 'feature.tools.body' },
];

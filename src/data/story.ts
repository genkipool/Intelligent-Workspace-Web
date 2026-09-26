/**
 * The questions a reader raises before installing anything that asks for twenty-one
 * permissions, in the order they raise them.
 *
 * Kept as data for the same reason everything else is: adding a question is one entry
 * here plus its two keys in `ui.ts`, and `Faq.astro` never has to be touched.
 */

import type { TranslationKey } from '@/i18n/ui';

export interface Question {
    qKey: TranslationKey;
    aKey: TranslationKey;
}

export const questions: readonly Question[] = [
    { qKey: 'faq.cost.q', aKey: 'faq.cost.a' },
    { qKey: 'faq.account.q', aKey: 'faq.account.a' },
    { qKey: 'faq.ai.q', aKey: 'faq.ai.a' },
    { qKey: 'faq.data.q', aKey: 'faq.data.a' },
    { qKey: 'faq.browsers.q', aKey: 'faq.browsers.a' },
    { qKey: 'faq.source.q', aKey: 'faq.source.a' },
];

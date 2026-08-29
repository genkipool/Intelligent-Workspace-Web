/**
 * The narrative beats a landing page needs beyond a feature list: the pain the reader
 * already recognises, the three steps to relief, and the objections they will raise
 * before installing anything that asks for twenty-three permissions.
 *
 * Kept as data for the same reason everything else is: adding a question is one entry,
 * and the markup never has to be touched.
 */

import type { TranslationKey } from '@/i18n/ui';

/** The symptoms. Short, first-person, recognisable — not a list of missing features. */
export const symptoms: readonly TranslationKey[] = ['problem.s1', 'problem.s2', 'problem.s3', 'problem.s4'];

export interface Step {
    titleKey: TranslationKey;
    bodyKey: TranslationKey;
}

export const steps: readonly Step[] = [
    { titleKey: 'how.s1.title', bodyKey: 'how.s1.body' },
    { titleKey: 'how.s2.title', bodyKey: 'how.s2.body' },
    { titleKey: 'how.s3.title', bodyKey: 'how.s3.body' },
];

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

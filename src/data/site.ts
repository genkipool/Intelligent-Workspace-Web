/**
 * Facts about the project that are not copy. One place, so a changed store URL is one
 * edit rather than a grep.
 */

import type { TranslationKey } from '@/i18n/ui';

export const site = {
    name: 'Intelligent Workspace',
    owner: 'Genkipool',
    storeUrl: 'https://chromewebstore.google.com/detail/cmkbnppbnhoklenlngmbdfecgbnlojoo',
    // Source-available, so the permissions section can invite the reader to check it.
    sourceUrl: 'https://github.com/genkipool/Intelligent-Workspace',
    /**
     * The address on the privacy policy, and the only one the site publishes.
     *
     * It is there because it has to be: article 13.1.a of the GDPR requires the
     * controller's contact details, and the Chrome Web Store will not accept a policy
     * with no way to reach whoever wrote it. It is a real inbox rather than a form, since
     * a page that claims to hold nothing about you has no business asking for your
     * details before it will answer a question.
     */
    privacyEmail: 'luisrb1985@gmail.com',
} as const;

/**
 * The three places a message can arrive, all derived from the facts above so a changed
 * repository or listing moves them together.
 *
 * The mail subject is deliberately not translated. It is a label on an inbox rather than
 * copy on the page, and one spelling makes the thread filterable however the sender
 * happened to be reading the site.
 */
export const supportUrls = {
    email: `mailto:${site.privacyEmail}?subject=${encodeURIComponent('Intelligent Workspace support')}`,
    issues: `${site.sourceUrl}/issues`,
    store: `${site.storeUrl}/support`,
} as const;

export interface Person {
    name: string;
    roleKey: TranslationKey;
}

/** Names are names — they are not translated. The roles are. */
export const team: readonly Person[] = [
    { name: 'Luis Reoyo', roleKey: 'team.dev' },
    { name: 'Flor Chávez', roleKey: 'team.design' },
];

/** Preset contribution amounts, in whole euros. Mirrored by the server-side clamp. */
export const contributionAmounts = [1, 5, 10] as const;

/**
 * The chip selected on arrival. It has to exist in `contributionAmounts`, or the sheet opens
 * with an amount no chip is showing as chosen. `CONTRIBUTION_DEFAULT_AMOUNT` in the
 * extension's `config/payments.js` is the same number and has to move with it.
 */
export const defaultContributionAmount = 1;
export const contributionCurrency = 'eur';

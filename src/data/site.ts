/**
 * Facts about the project that are not copy. One place, so a changed store URL is one
 * edit rather than a grep.
 */

import type { TranslationKey } from '@/i18n/ui';

export const site = {
    name: 'Intelligent Workspace',
    owner: 'Genkipool',
    storeUrl: 'https://chromewebstore.google.com/category/extensions',
    // Source-available, so the permissions section can invite the reader to check it.
    sourceUrl: 'https://github.com/genkipool/Intelligent-Workspace',
    /**
     * The address on the privacy policy, and the only one the site publishes. It is a
     * real inbox rather than a form: a page that claims to hold nothing about you has no
     * business asking for your details before it will answer a question.
     */
    privacyEmail: 'privacy@genkipool.com',
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

/** Preset donation amounts, in whole euros. Mirrored by the server-side clamp. */
export const donationAmounts = [1, 5, 10] as const;

/**
 * The chip selected on arrival. It has to exist in `donationAmounts`, or the sheet opens
 * with an amount no chip is showing as chosen. `DONATION_DEFAULT_AMOUNT` in the
 * extension's `config/payments.js` is the same number and has to move with it.
 */
export const defaultDonationAmount = 1;
export const donationCurrency = 'eur';

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
export const defaultDonationAmount = 5;
export const donationCurrency = 'eur';

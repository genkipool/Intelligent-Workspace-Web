/**
 * Facts about the project that are not copy. One place, so a changed store URL is one
 * edit rather than a grep.
 */

export const site = {
    name: 'Intelligent Workspace',
    owner: 'Genkipool',
    storeUrl: 'https://chromewebstore.google.com/category/extensions',
} as const;

/** Preset donation amounts, in whole euros. Mirrored by the server-side clamp. */
export const donationAmounts = [1, 5, 10] as const;
export const defaultDonationAmount = 5;
export const donationCurrency = 'eur';

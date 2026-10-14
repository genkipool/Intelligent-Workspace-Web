import type { en } from '@/i18n/locales/en';

/** Every key the site renders. English is the source, so its keys are the contract. */
export type TranslationKey = keyof typeof en;

/**
 * The shape every translation is declared with. Annotating a locale with it is what
 * makes a missing key, or one left over from a rename, a type error in that file.
 */
export type Dictionary = Record<TranslationKey, string>;

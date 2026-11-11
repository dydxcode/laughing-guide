/**
 * Konfigurasi bahasa yang ringan (tanpa kamus) agar aman diimpor oleh middleware.
 */
export const LOCALES = ["id", "en"] as const;
export type Locale = (typeof LOCALES)[number];

/** Bahasa cadangan dan target hreflang x-default. */
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export const OG_LOCALE: Record<Locale, string> = {
  id: "id_ID",
  en: "en_US",
};

export const HREFLANG: Record<Locale, string> = {
  id: "id-ID",
  en: "en-US",
};

/**
 * Pasangan hreflang yang simetris untuk satu path (tanpa prefix bahasa).
 * Contoh: languageAlternates("/privacy") → /id/privacy, /en/privacy.
 */
export function languageAlternates(path: string): Record<string, string> {
  return {
    [HREFLANG.id]: `/id${path}`,
    [HREFLANG.en]: `/en${path}`,
    "x-default": `/${DEFAULT_LOCALE}${path}`,
  };
}

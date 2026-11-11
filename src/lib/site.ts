/**
 * Konfigurasi situs terpusat. Semua metadata SEO memakai URL produksi ini,
 * bukan URL preview Vercel, sehingga canonical tidak pernah menunjuk ke preview.
 * Teks per bahasa ada di src/dictionaries.
 */
export const SITE = {
  name: "Jawara Video",
  url: "https://jawvid.web.id",
} as const;

/** Preview/Development di Vercel tidak boleh diindeks; Production boleh. */
export const IS_INDEXABLE =
  process.env.VERCEL_ENV !== "preview" &&
  process.env.VERCEL_ENV !== "development";

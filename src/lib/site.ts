/**
 * Konfigurasi situs terpusat. Semua metadata SEO memakai URL produksi ini,
 * bukan URL preview Vercel, sehingga canonical tidak pernah menunjuk ke preview.
 */
export const SITE = {
  name: "Jawara Video",
  url: "https://jawvid.web.id",
  lang: "id",
  locale: "id_ID",
  title: "Jawara Video — Platform Koleksi Gambar dan Video",
  description:
    "Jawara Video adalah platform koleksi gambar dan video. Halaman ini memperkenalkan Jawara Video dan menampilkan pilihan gambar dan video.",
  legalUpdated: "11 November 2026",
} as const;

/** Preview/Development di Vercel tidak boleh diindeks; Production boleh. */
export const IS_INDEXABLE =
  process.env.VERCEL_ENV !== "preview" &&
  process.env.VERCEL_ENV !== "development";

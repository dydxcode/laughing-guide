/**
 * Konfigurasi situs terpusat. Semua metadata SEO memakai URL produksi ini,
 * bukan URL preview Vercel, sehingga canonical tidak pernah menunjuk ke preview.
 */
export const SITE = {
  name: "Jawara Video",
  url: "https://jawvid.web.id",
  locale: "id_ID",
  lang: "id",
  title: "Jawara Video — Temukan dan Tonton Video Pilihan",
  description:
    "Jawara Video adalah platform video untuk menemukan dan menonton konten pilihan dengan tampilan cepat dan nyaman di ponsel, tablet, maupun komputer.",
} as const;

export const NAV_LINKS = [
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#cara-kerja", label: "Cara Kerja" },
] as const;

/** Preview/Development di Vercel tidak boleh diindeks; Production boleh. */
export const IS_INDEXABLE =
  process.env.VERCEL_ENV !== "preview" &&
  process.env.VERCEL_ENV !== "development";

import type { Metadata } from "next";
import {
  LOCALES,
  OG_LOCALE,
  languageAlternates,
  type Locale,
} from "@/lib/locales";
import { SITE } from "@/lib/site";

interface BuildMetadataInput {
  lang: Locale;
  /** Path tanpa prefix bahasa, mis. "" (beranda) atau "/privacy". */
  path: string;
  title: string;
  description: string;
  ogAlt: string;
}

/**
 * Metadata per halaman. Canonical dan hreflang dihitung per path (bukan di
 * layout) supaya /en/privacy tidak salah menunjuk canonical ke /en.
 * Semua URL relatif di sini diselesaikan oleh metadataBase (domain produksi).
 */
export function buildMetadata({
  lang,
  path,
  title,
  description,
  ogAlt,
}: BuildMetadataInput): Metadata {
  const url = `/${lang}${path}`;
  const image = `/api/og?lang=${lang}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE.name,
      title,
      description,
      locale: OG_LOCALE[lang],
      alternateLocale: LOCALES.filter((l) => l !== lang).map(
        (l) => OG_LOCALE[l],
      ),
      images: [{ url: image, width: 1200, height: 630, alt: ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

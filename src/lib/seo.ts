import type { Metadata } from "next";
import { SITE } from "@/lib/site";

interface PageMetadataInput {
  title: string;
  description: string;
  /** Path kanonis, mis. "/" atau "/privacy". Diselesaikan oleh metadataBase. */
  path: string;
}

/**
 * Metadata per halaman. Canonical selalu dihitung dari path halaman itu sendiri
 * dan diselesaikan terhadap metadataBase (domain produksi), bukan URL preview.
 * Gambar Open Graph berasal dari src/app/opengraph-image.tsx.
 */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE.name,
      title,
      description,
      locale: SITE.locale,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

import type { MetadataRoute } from "next";
import { LOCALES, languageAlternates } from "@/lib/locales";
import { SITE } from "@/lib/site";

/** Halaman yang benar-benar ada (path tanpa prefix bahasa). */
const PATHS = ["", "/privacy", "/terms"] as const;

function absolute(path: string): string {
  return `${SITE.url}${path}`;
}

/**
 * Setiap halaman dibuat per bahasa dengan hreflang simetris.
 * URL Smartlink atau URL preview tidak pernah masuk sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) => {
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(path)).map(([code, href]) => [
        code,
        absolute(href),
      ]),
    );

    return LOCALES.map((lang) => ({
      url: absolute(`/${lang}${path}`),
      alternates: { languages },
    }));
  });
}

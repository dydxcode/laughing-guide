import type { Locale } from "@/lib/locales";
import { SITE } from "@/lib/site";

/**
 * Structured data yang hanya memuat fakta nyata: nama dan URL situs.
 * Tidak ada VideoObject karena halaman ini tidak memuat video.
 */
export default function JsonLd({ lang }: { lang: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        inLanguage: ["id", "en"],
      },
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
      },
      {
        "@type": "WebPage",
        "@id": `${SITE.url}/${lang}#webpage`,
        url: `${SITE.url}/${lang}`,
        inLanguage: lang,
        isPartOf: { "@id": `${SITE.url}/#website` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

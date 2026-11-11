import { SITE } from "@/lib/site";

/**
 * Structured data hanya untuk fakta yang benar-benar ada: nama dan URL situs.
 * Tidak ada VideoObject, ImageObject, rating, atau review karena media sampel
 * belum diverifikasi.
 */
export default function JsonLd() {
  const home = `${SITE.url}/`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: home,
        name: SITE.name,
        inLanguage: "id-ID",
      },
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: home,
      },
      {
        "@type": "WebPage",
        "@id": `${SITE.url}/#webpage`,
        url: home,
        name: SITE.title,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${SITE.url}/#website` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}

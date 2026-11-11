import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalDocument from "@/components/LegalDocument";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getDictionary } from "@/lib/i18n";
import { isLocale } from "@/lib/locales";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);

  return buildMetadata({
    lang,
    path: "/terms",
    title: t.terms.metaTitle,
    description: t.terms.metaDescription,
    ogAlt: t.meta.ogAlt,
  });
}

export default async function TermsPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <SiteHeader lang={lang} path="/terms" t={t.common} />
      <main>
        <LegalDocument doc={t.terms} />
      </main>
      <SiteFooter lang={lang} path="/terms" t={t.common} />
    </>
  );
}

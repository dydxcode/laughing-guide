import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SponsoredLink from "@/components/SponsoredLink";
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
    path: "",
    title: t.meta.title,
    description: t.meta.description,
    ogAlt: t.meta.ogAlt,
  });
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        {t.common.skip}
      </a>

      <SiteHeader lang={lang} path="" t={t.common} />

      <main id="konten">
        {/* ZONA ATAS: pesan utama, CTA, dan tautan iklan berlabel */}
        <section id="beranda" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="text-sm font-bold uppercase tracking-widest text-rose-300">
              {t.hero.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {t.hero.subtitle}
            </p>
            <div className="mt-10">
              <a
                href="#panduan"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-base font-bold text-white transition-colors hover:bg-brand-dark"
              >
                {t.hero.cta}
              </a>
            </div>

            <SponsoredLink t={t.sponsor} />
          </div>
        </section>

        {/* ZONA BAWAH: artikel yang dirender di server untuk crawler */}
        <section id="panduan" className="bg-paper">
          <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
            <p className="text-lg leading-relaxed text-muted">
              {t.article.intro}
            </p>

            {t.article.sections.map((section) => (
              <section key={section.title} className="mt-10">
                <h2 className="text-2xl font-extrabold tracking-tight">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 leading-relaxed text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.subsections.map((sub) => (
                  <div key={sub.title} className="mt-4">
                    <h3 className="text-lg font-bold">{sub.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted">{sub.text}</p>
                  </div>
                ))}
              </section>
            ))}
          </article>
        </section>
      </main>

      <SiteFooter lang={lang} path="" t={t.common} />

      <JsonLd lang={lang} />
    </>
  );
}

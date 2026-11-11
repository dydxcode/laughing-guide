import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/locales";
import { SITE } from "@/lib/site";

interface SiteFooterProps {
  lang: Locale;
  path: string;
  t: Dictionary["common"];
}

export default function SiteFooter({ lang, path, t }: SiteFooterProps) {
  return (
    <footer className="border-t border-line bg-soft text-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-extrabold">{SITE.name}</p>
          <p className="mt-1 text-sm text-muted">
            &copy; {new Date().getFullYear()} {SITE.name}. {t.rights}
          </p>
        </div>

        <nav
          aria-label={t.footerNavLabel}
          className="flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          <Link
            href={`/${lang}/privacy`}
            className="text-sm font-semibold hover:text-brand"
          >
            {t.privacy}
          </Link>
          <Link
            href={`/${lang}/terms`}
            className="text-sm font-semibold hover:text-brand"
          >
            {t.terms}
          </Link>
          <LanguageSwitcher lang={lang} path={path} label={t.languageLabel} />
        </nav>
      </div>
    </footer>
  );
}

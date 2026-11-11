import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/locales";
import { SITE } from "@/lib/site";

interface SiteHeaderProps {
  lang: Locale;
  path: string;
  t: Dictionary["common"];
}

export default function SiteHeader({ lang, path, t }: SiteHeaderProps) {
  return (
    <header className="border-b border-white/10 bg-slate-950 text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href={`/${lang}`}
          className="text-xl font-extrabold tracking-tight text-white"
        >
          {SITE.name}
        </Link>

        <nav
          aria-label={t.headerNavLabel}
          className="flex items-center gap-5 sm:gap-8"
        >
          <Link
            href={`/${lang}#panduan`}
            className="text-sm font-semibold text-white hover:underline"
          >
            {t.navGuide}
          </Link>
          <LanguageSwitcher lang={lang} path={path} label={t.languageLabel} />
        </nav>
      </div>
    </header>
  );
}

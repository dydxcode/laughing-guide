import Link from "next/link";
import { LOCALES, type Locale } from "@/lib/locales";

interface LanguageSwitcherProps {
  lang: Locale;
  /** Path halaman saat ini tanpa prefix bahasa, mis. "" atau "/privacy". */
  path: string;
  label: string;
}

/** Tautan ke versi bahasa lain dari halaman yang sama (mendukung hreflang). */
export default function LanguageSwitcher({
  lang,
  path,
  label,
}: LanguageSwitcherProps) {
  return (
    <ul aria-label={label} className="flex items-center gap-3 text-sm font-bold">
      {LOCALES.map((code) => (
        <li key={code}>
          <Link
            href={`/${code}${path}`}
            hrefLang={code}
            lang={code}
            aria-current={code === lang ? "true" : undefined}
            className={
              code === lang
                ? "underline underline-offset-4"
                : "opacity-80 hover:opacity-100"
            }
          >
            {code.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
}

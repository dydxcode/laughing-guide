import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/locales";

/** Memilih bahasa dari header Accept-Language; cadangan: DEFAULT_LOCALE (en). */
function pickLocale(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      const weight = q ? Number.parseFloat(q.trim().slice(2)) : 1;
      return {
        base: tag.trim().toLowerCase().split("-")[0],
        weight: Number.isNaN(weight) ? 0 : weight,
      };
    })
    .filter((entry) => entry.base.length > 0)
    .sort((a, b) => b.weight - a.weight);

  for (const entry of ranked) {
    if (entry.weight > 0 && isLocale(entry.base)) return entry.base;
  }
  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  // Sudah memiliki prefix bahasa yang valid: lanjutkan tanpa pengalihan.
  if (isLocale(first)) return NextResponse.next();

  const locale = pickLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.headers.set("Vary", "Accept-Language");
  return response;
}

/**
 * Mengecualikan /api, /_next, dan semua path yang memiliki ekstensi
 * (favicon.ico, robots.txt, sitemap.xml, og-image.jpg, icon.svg, dll.)
 * agar perayapan aset dan bot tidak terganggu.
 */
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

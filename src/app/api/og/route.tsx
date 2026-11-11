import { ImageResponse } from "next/og";
import { getDictionary } from "@/lib/i18n";
import { DEFAULT_LOCALE, isLocale } from "@/lib/locales";
import { SITE } from "@/lib/site";

/**
 * Gambar Open Graph dinamis: /api/og?lang=id atau /api/og?lang=en.
 * Hanya memuat nama situs dan tagline; tanpa tombol play, durasi, atau angka palsu.
 */
export function GET(request: Request) {
  const raw = new URL(request.url).searchParams.get("lang") ?? "";
  const lang = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = getDictionary(lang);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#020617",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#E60023" }}>
          {SITE.url.replace("https://", "")}
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 800 }}>
          {SITE.name}
        </div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 24 }}>
          {t.meta.ogTagline}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

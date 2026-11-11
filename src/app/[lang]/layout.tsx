import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/locales";
import { IS_INDEXABLE, SITE } from "@/lib/site";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/** Bahasa yang valid: /id dan /en (path lain dialihkan atau 404 oleh middleware). */
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

/**
 * Metadata yang sama untuk semua bahasa. Title, canonical, hreflang, dan
 * Open Graph dihitung per halaman lewat buildMetadata (src/lib/seo.ts).
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  robots: IS_INDEXABLE
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e60023",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} className={inter.variable}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sitemap",
  description:
    "Daftar halaman dan bagian yang tersedia di situs Jawara Video.",
  path: "/sitemap",
});

const SECTIONS = [
  { href: "/#tentang", label: "Tentang Jawara Video" },
  { href: "/#video", label: "Video" },
  { href: "/#gambar", label: "Gambar" },
  { href: "/#hak", label: "Hak penggunaan media" },
] as const;

const PAGES = [
  { href: "/", label: "Beranda" },
  { href: "/privacy", label: "Kebijakan Privasi" },
  { href: "/terms", label: "Ketentuan Penggunaan" },
] as const;

const linkClass =
  "inline-flex min-h-11 items-center font-semibold text-ink underline underline-offset-4 hover:text-brand";

export default function SitemapPage() {
  return (
    <main id="konten" className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        Sitemap
      </h1>
      <p className="mt-4 leading-relaxed text-muted">
        Daftar halaman dan bagian yang tersedia di situs ini.
      </p>

      <h2 className="mt-10 text-xl font-bold">Halaman</h2>
      <ul className="mt-2">
        {PAGES.map((page) => (
          <li key={page.href}>
            <Link href={page.href} className={linkClass}>
              {page.label}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-xl font-bold">Bagian di beranda</h2>
      <ul className="mt-2">
        {SECTIONS.map((section) => (
          <li key={section.href}>
            <Link href={section.href} className={linkClass}>
              {section.label}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-xl font-bold">Untuk mesin pencari</h2>
      <ul className="mt-2">
        <li>
          <a href="/sitemap.xml" className={linkClass}>
            sitemap.xml
          </a>
        </li>
      </ul>
    </main>
  );
}

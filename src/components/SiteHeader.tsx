import Link from "next/link";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "/#tentang", label: "Tentang" },
  { href: "/#video", label: "Video" },
  { href: "/#gambar", label: "Gambar" },
] as const;

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-brand"
        >
          {SITE.name}
        </Link>
        <nav aria-label="Navigasi utama">
          <ul className="flex items-center gap-5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-ink hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

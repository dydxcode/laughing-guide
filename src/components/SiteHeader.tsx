import Link from "next/link";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "/#tentang", label: "Tentang" },
  { href: "/#video", label: "Video" },
  { href: "/#gambar", label: "Gambar" },
] as const;

export default function SiteHeader() {
  return (
    <header className="on-dark sticky top-0 z-40 bg-ink text-paper">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 text-xl font-extrabold tracking-tight"
        >
          <span
            aria-hidden="true"
            className="inline-block h-4 w-4 rounded-full bg-brand"
          />
          {SITE.name}
        </Link>
        <nav aria-label="Navigasi utama">
          <ul className="flex items-center gap-5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm font-semibold hover:text-tint"
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

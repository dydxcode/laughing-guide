import Link from "next/link";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/privacy", label: "Kebijakan Privasi" },
  { href: "/terms", label: "Ketentuan Penggunaan" },
  { href: "/sitemap", label: "Sitemap" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="on-dark bg-brand text-paper">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-extrabold">{SITE.name}</p>
          <p className="mt-1 text-sm">
            &copy; {new Date().getFullYear()} {SITE.name}. Seluruh hak
            dilindungi.
          </p>
        </div>
        <nav aria-label="Navigasi footer">
          <ul className="flex flex-wrap gap-x-6">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm font-semibold underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

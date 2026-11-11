import Link from "next/link";
import { SITE } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-tint">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-extrabold text-brand">{SITE.name}</p>
          <p className="mt-1 text-sm text-muted">
            &copy; {new Date().getFullYear()} {SITE.name}. Seluruh hak
            dilindungi.
          </p>
        </div>
        <nav aria-label="Navigasi footer">
          <ul className="flex flex-wrap gap-x-6">
            <li>
              <Link
                href="/"
                className="inline-flex min-h-11 items-center text-sm font-semibold hover:text-brand"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="inline-flex min-h-11 items-center text-sm font-semibold hover:text-brand"
              >
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="inline-flex min-h-11 items-center text-sm font-semibold hover:text-brand"
              >
                Ketentuan Penggunaan
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

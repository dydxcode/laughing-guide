import { NAV_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-extrabold text-brand">{SITE.name}</p>
          <p className="mt-1 text-sm text-muted">
            &copy; {new Date().getFullYear()} {SITE.name}. Seluruh hak dilindungi.
          </p>
        </div>
        <nav aria-label="Navigasi footer">
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#beranda" className="text-sm font-semibold hover:text-brand">
                Beranda
              </a>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-semibold hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

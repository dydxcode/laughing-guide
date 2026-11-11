import { getSmartlinkUrl } from "@/lib/ads";

/**
 * Tautan iklan Adsterra Smartlink.
 * - Tidak dirender sama sekali sampai URL resmi diisi (NEXT_PUBLIC_ADSTERRA_SMARTLINK_URL).
 * - URL tertulis apa adanya di HTML; tidak disembunyikan dari crawler.
 * - Hanya terbuka saat pengunjung mengkliknya (tanpa auto-open atau redirect).
 * - Berlabel "Iklan", tidak menyamar sebagai navigasi, play, download, atau login.
 * - Tanpa script eksternal dan tanpa overlay yang menutupi konten.
 */
export default function SponsoredLink() {
  const url = getSmartlinkUrl();
  if (!url) return null;

  return (
    <aside aria-label="Iklan" className="border-t border-line bg-soft">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="inline-block rounded border border-ink px-2 py-0.5 text-xs font-bold uppercase tracking-widest">
            Iklan
          </p>
          <p className="mt-2 text-sm text-muted">
            Tautan di bawah mengarah ke situs mitra iklan dan terbuka di tab
            baru.
          </p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-full border-2 border-ink px-8 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Lihat penawaran mitra (iklan)
          <span className="sr-only"> (membuka tab baru)</span>
        </a>
      </div>
    </aside>
  );
}

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
    <aside
      aria-label="Iklan"
      className="flex flex-col gap-4 rounded-2xl bg-paper p-5 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <p className="inline-block rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-widest text-paper">
          Iklan
        </p>
        <p className="mt-2 text-sm text-muted">
          Tautan di bawah mengarah ke situs mitra iklan dan terbuka di tab baru.
        </p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-8 text-base font-bold text-paper transition-colors hover:bg-brand"
      >
        Lihat penawaran mitra (iklan)
        <span className="sr-only"> (membuka tab baru)</span>
      </a>
    </aside>
  );
}

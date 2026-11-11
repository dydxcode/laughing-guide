import { getSmartlinkUrl } from "@/lib/ads";

/**
 * Tautan iklan Adsterra Smartlink.
 * - Hanya terbuka saat pengunjung mengkliknya sendiri (tanpa auto-open/redirect).
 * - Diberi label "Iklan" yang jelas dan tidak menyamar sebagai navigasi,
 *   tombol play, download, atau login.
 * - Tanpa script eksternal; dirender di server sehingga tidak memicu layout shift.
 * - Tidak dirender sama sekali bila URL resmi belum diisi.
 */
export default function SponsoredLink() {
  const url = getSmartlinkUrl();
  if (!url) return null;

  return (
    <aside
      aria-label="Iklan"
      className="border-t border-line bg-soft"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="inline-block rounded border border-ink px-2 py-0.5 text-xs font-bold uppercase tracking-widest">
            Iklan
          </p>
          <p className="mt-2 text-sm text-muted">
            Tautan di bawah mengarah ke situs mitra iklan dan akan terbuka di
            tab baru.
          </p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-full border-2 border-ink px-8 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Lihat penawaran mitra (iklan)
        </a>
      </div>
    </aside>
  );
}

import { getSmartlinkUrl } from "@/lib/ads";
import type { Dictionary } from "@/lib/i18n";

/**
 * Tautan iklan Adsterra Smartlink.
 * - URL ditulis apa adanya di HTML (tidak disembunyikan dari crawler).
 * - Hanya terbuka saat pengunjung mengkliknya sendiri (tanpa auto-open/redirect).
 * - Diberi label "Iklan"/"Ad" yang jelas dan tidak menyamar sebagai navigasi,
 *   tombol play, download, atau login.
 * - Tanpa script eksternal; dirender di server sehingga tidak memicu layout shift.
 * - Tidak dirender sama sekali bila URL resmi belum diisi.
 */
export default function SponsoredLink({ t }: { t: Dictionary["sponsor"] }) {
  const url = getSmartlinkUrl();
  if (!url) return null;

  return (
    <aside
      aria-label={t.label}
      className="mt-10 max-w-xl rounded-2xl border border-white/20 bg-white/5 p-5"
    >
      <p className="inline-block rounded border border-white/60 px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
        {t.label}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{t.note}</p>
      <a
        href={url}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        className="mt-4 inline-flex h-12 items-center justify-center rounded-full border-2 border-white px-8 text-base font-bold text-white transition-colors hover:bg-white hover:text-ink"
      >
        {t.button}
      </a>
    </aside>
  );
}

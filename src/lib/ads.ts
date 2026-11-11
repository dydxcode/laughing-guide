/**
 * URL Adsterra Smartlink resmi dari akun pemilik website.
 * Diisi lewat environment variable NEXT_PUBLIC_ADSTERRA_SMARTLINK_URL
 * (di Vercel: Settings → Environment Variables). Nilainya bukan rahasia
 * karena akan terlihat di HTML, tetapi jangan pernah diisi dengan URL
 * milik publisher lain atau URL tebakan.
 *
 * Jika kosong atau bukan HTTPS, tidak ada iklan yang ditampilkan.
 * Variabel NEXT_PUBLIC_* disisipkan saat build, jadi perubahan nilai
 * membutuhkan redeploy.
 */
export function getSmartlinkUrl(): string | null {
  const raw = process.env.NEXT_PUBLIC_ADSTERRA_SMARTLINK_URL?.trim();
  if (!raw) return null;

  try {
    const url = new URL(raw);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

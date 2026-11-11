/**
 * SATU-SATUNYA tempat untuk mengganti URL video dan gambar.
 * Teks lain di halaman tidak perlu diubah.
 *
 * - Video: isi `url` dengan tautan YouTube (youtu.be/ID atau youtube.com/watch?v=ID).
 * - Gambar: isi `url` dengan tautan sumber. Agar gambar tampil sebagai pratinjau,
 *   isi juga `imageUrl` (URL berkas gambar langsung) DAN `alt` (deskripsi akurat).
 *   Tanpa keduanya, hanya tautan ke sumber yang ditampilkan.
 * - `rights`: status hak penggunaan, mis. "belum diverifikasi" (bawaan) atau
 *   "izin diperiksa pada 2026-12-01". Jangan mengisinya sebelum benar-benar diperiksa.
 * - Judul, deskripsi, dan alt text jangan dikarang. Label otomatis: "Video N", "Gambar N".
 */

const RIGHTS_UNVERIFIED = "belum diverifikasi";

interface VideoSource {
  url: string;
  rights?: string;
}

interface ImageSource {
  url: string;
  imageUrl?: string;
  alt?: string;
  rights?: string;
}

const VIDEO_SOURCES: readonly VideoSource[] = [
  { url: "https://youtu.be/eNDXpkzbMhI" },
  { url: "https://youtu.be/MB3xnW3e5Mo" },
  { url: "https://youtu.be/uJNYDgSpRWU" },
  { url: "https://youtu.be/uGz7TqWUru8" },
];

const IMAGE_SOURCES: readonly ImageSource[] = [
  { url: "https://imagedock.io/i/OSo9ZovK" },
  { url: "https://imagedock.io/i/6YnIpQTC" },
  { url: "https://imagedock.io/i/E9ddyYtV" },
  { url: "https://imagedock.io/i/KhRJcVf3" },
];

export interface VideoItem {
  /** ID video YouTube (11 karakter) untuk embed youtube-nocookie.com. */
  id: string;
  label: string;
  sourceUrl: string;
  rights: string;
}

export interface ImageItem {
  label: string;
  sourceUrl: string;
  rights: string;
  /** Hanya terisi bila imageUrl DAN alt diberikan. */
  imageUrl?: string;
  alt: string;
}

function youtubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    let id: string | null = null;
    if (parsed.hostname === "youtu.be") {
      id = parsed.pathname.slice(1);
    } else if (parsed.hostname.endsWith("youtube.com")) {
      id = parsed.searchParams.get("v");
    }
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

/** URL yang tidak valid dilewati, bukan menyebabkan error. */
export const VIDEOS: readonly VideoItem[] = VIDEO_SOURCES.flatMap(
  (source, index) => {
    const id = youtubeId(source.url);
    if (!id) return [];
    return [
      {
        id,
        label: `Video ${index + 1}`,
        sourceUrl: source.url,
        rights: source.rights ?? RIGHTS_UNVERIFIED,
      },
    ];
  },
);

export const IMAGES: readonly ImageItem[] = IMAGE_SOURCES.map(
  (source, index) => ({
    label: `Gambar ${index + 1}`,
    sourceUrl: source.url,
    rights: source.rights ?? RIGHTS_UNVERIFIED,
    imageUrl: source.imageUrl && source.alt ? source.imageUrl : undefined,
    alt: source.alt ?? "",
  }),
);

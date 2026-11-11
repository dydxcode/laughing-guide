/**
 * Data sampel media dari pemilik proyek. Ini hanya sampel untuk menguji
 * tampilan: judul, deskripsi, bahasa, tanggal, dan hak penggunaannya belum
 * diketahui, sehingga hanya label netral yang dipakai. Jangan menambahkan
 * judul, alt text deskriptif, atau metadata lain sebelum diverifikasi.
 */

export interface VideoSample {
  /** ID video YouTube, untuk embed resmi (youtube-nocookie.com). */
  id: string;
  label: string;
  /** URL sumber asli yang diberikan. */
  sourceUrl: string;
}

export interface ImageSample {
  label: string;
  /** URL sumber asli (kemungkinan halaman media, bukan berkas gambar langsung). */
  sourceUrl: string;
}

export const VIDEO_SAMPLES: readonly VideoSample[] = [
  {
    id: "eNDXpkzbMhI",
    label: "Sampel video 1",
    sourceUrl: "https://youtu.be/eNDXpkzbMhI",
  },
  {
    id: "MB3xnW3e5Mo",
    label: "Sampel video 2",
    sourceUrl: "https://youtu.be/MB3xnW3e5Mo",
  },
  {
    id: "uJNYDgSpRWU",
    label: "Sampel video 3",
    sourceUrl: "https://youtu.be/uJNYDgSpRWU",
  },
  {
    id: "uGz7TqWUru8",
    label: "Sampel video 4",
    sourceUrl: "https://youtu.be/uGz7TqWUru8",
  },
];

export const IMAGE_SAMPLES: readonly ImageSample[] = [
  { label: "Sampel gambar 1", sourceUrl: "https://imagedock.io/i/OSo9ZovK" },
  { label: "Sampel gambar 2", sourceUrl: "https://imagedock.io/i/6YnIpQTC" },
  { label: "Sampel gambar 3", sourceUrl: "https://imagedock.io/i/E9ddyYtV" },
  { label: "Sampel gambar 4", sourceUrl: "https://imagedock.io/i/KhRJcVf3" },
];

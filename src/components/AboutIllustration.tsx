/**
 * Ilustrasi flat 2D untuk bagian "Tentang": tumpukan kartu gambar dan video.
 * Dekoratif (aria-hidden), inline SVG, ukuran terkunci, tanpa jaringan.
 */
export default function AboutIllustration() {
  return (
    <svg
      width="320"
      height="240"
      viewBox="0 0 320 240"
      className="h-auto w-full max-w-xs"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="320" height="240" rx="28" fill="#ffe4e9" />

      <rect x="30" y="40" width="150" height="110" rx="14" fill="#ffffff" />
      <circle cx="62" cy="70" r="10" fill="#e60023" />
      <polygon points="40,140 85,95 115,125 135,108 170,140" fill="#111111" />

      <rect x="120" y="100" width="170" height="110" rx="14" fill="#111111" />
      <circle cx="205" cy="155" r="26" fill="#ffffff" />
      <polygon points="197,142 197,168 219,155" fill="#e60023" />

      <circle cx="272" cy="50" r="14" fill="#e60023" />
      <circle cx="48" cy="200" r="10" fill="#111111" />
    </svg>
  );
}

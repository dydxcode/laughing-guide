/**
 * Ilustrasi flat 2D untuk hero: kartu gambar dan kartu video bertumpuk.
 * Murni dekoratif (aria-hidden, bukan kontrol dan tidak bisa diklik), inline SVG
 * tanpa permintaan jaringan, dan ukurannya terkunci lewat width/height + viewBox
 * sehingga tidak menyebabkan layout shift. Warna mengikuti brand.
 */
export default function HeroIllustration() {
  return (
    <svg
      width="480"
      height="360"
      viewBox="0 0 480 360"
      className="h-auto w-full max-w-md"
      aria-hidden="true"
      focusable="false"
    >
      {/* latar */}
      <rect x="8" y="8" width="464" height="344" rx="28" fill="#fff1f3" />
      <circle cx="430" cy="52" r="12" fill="#e60023" />
      <circle cx="52" cy="316" r="16" fill="#111111" />
      <rect x="396" y="318" width="40" height="12" rx="6" fill="#111111" />

      {/* kartu gambar (belakang) */}
      <rect x="48" y="68" width="240" height="180" rx="20" fill="#111111" />
      <rect
        x="40"
        y="60"
        width="240"
        height="180"
        rx="20"
        fill="#ffffff"
        stroke="#111111"
        strokeWidth="4"
      />
      <circle cx="112" cy="116" r="20" fill="#e60023" />
      <polygon
        points="56,224 130,148 188,206 224,172 264,224"
        fill="#111111"
        stroke="#111111"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* kartu video (depan) */}
      <rect x="208" y="148" width="240" height="160" rx="20" fill="#111111" />
      <rect
        x="200"
        y="140"
        width="240"
        height="160"
        rx="20"
        fill="#e60023"
        stroke="#111111"
        strokeWidth="4"
      />
      <circle
        cx="320"
        cy="210"
        r="36"
        fill="#ffffff"
        stroke="#111111"
        strokeWidth="4"
      />
      <polygon
        points="310,192 310,228 340,210"
        fill="#e60023"
        stroke="#e60023"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <rect x="224" y="268" width="192" height="10" rx="5" fill="#ffffff" opacity="0.4" />
      <rect x="224" y="268" width="84" height="10" rx="5" fill="#ffffff" />
    </svg>
  );
}

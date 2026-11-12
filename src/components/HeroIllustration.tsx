/**
 * Adegan hero 2D flat: lingkaran besar, awan, kartu gambar, dan kartu video,
 * semuanya blok warna datar (tanpa garis tepi, bayangan, atau gradien).
 * Dekoratif (aria-hidden, bukan kontrol dan tidak bisa diklik), inline SVG
 * tanpa permintaan jaringan, ukuran terkunci lewat width/height + viewBox.
 * Dirancang di atas latar tint. Bentuknya orisinal, bukan logo pihak lain.
 */

function Cloud() {
  return (
    <g fill="#ffffff">
      <circle cx="60" cy="50" r="24" />
      <circle cx="100" cy="34" r="32" />
      <circle cx="144" cy="52" r="24" />
      <rect x="40" y="50" width="124" height="26" rx="13" />
    </g>
  );
}

export default function HeroIllustration() {
  return (
    <svg
      width="520"
      height="400"
      viewBox="0 0 520 400"
      className="h-auto w-full max-w-lg"
      aria-hidden="true"
      focusable="false"
    >
      {/* lingkaran besar dan hiasan latar */}
      <circle cx="270" cy="190" r="150" fill="#e60023" />
      <circle cx="58" cy="82" r="26" fill="#ffc2cc" />
      <circle cx="496" cy="384" r="12" fill="#111111" />
      <circle cx="500" cy="150" r="10" fill="#e60023" />
      <polygon points="28,196 50,236 6,236" fill="#111111" />

      {/* awan */}
      <g transform="translate(262 34) scale(0.8)">
        <Cloud />
      </g>
      <g transform="translate(8 292) scale(0.55)">
        <Cloud />
      </g>

      {/* bintang dan tanda tambah */}
      <polygon
        points="446,40 455,69 484,78 455,87 446,116 437,87 408,78 437,69"
        fill="#111111"
      />
      <polygon
        points="84,356 89,372 105,377 89,382 84,398 79,382 63,377 79,372"
        fill="#e60023"
      />
      <rect x="148" y="34" width="8" height="28" rx="4" fill="#111111" />
      <rect x="138" y="44" width="28" height="8" rx="4" fill="#111111" />

      {/* kartu gambar (belakang) */}
      <g transform="rotate(-6 175 205)">
        <rect x="60" y="120" width="230" height="170" rx="18" fill="#ffffff" />
        <rect x="76" y="136" width="198" height="98" rx="10" fill="#ffe4e9" />
        <circle cx="118" cy="166" r="16" fill="#e60023" />
        <polygon points="76,234 140,176 186,218 214,196 274,234" fill="#b8001c" />
        <rect x="76" y="250" width="110" height="10" rx="5" fill="#111111" />
        <rect x="76" y="268" width="70" height="8" rx="4" fill="#ffc2cc" />
      </g>

      {/* kartu video (depan) */}
      <rect x="230" y="210" width="260" height="150" rx="18" fill="#111111" />
      <rect x="244" y="224" width="232" height="86" rx="10" fill="#b8001c" />
      <circle cx="360" cy="267" r="26" fill="#ffffff" />
      <polygon points="352,253 352,281 374,267" fill="#e60023" />
      <rect x="244" y="328" width="232" height="12" rx="6" fill="#ffffff" opacity="0.25" />
      <rect x="244" y="328" width="100" height="12" rx="6" fill="#e60023" />
    </svg>
  );
}

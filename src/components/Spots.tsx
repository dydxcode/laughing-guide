/**
 * Ilustrasi pendamping 2D flat untuk section (melengkapi AboutIllustration),
 * plus latar placeholder gambar. Blok warna datar: tanpa garis tepi, bayangan,
 * atau gradien. Semuanya dekoratif (aria-hidden), inline SVG, tanpa permintaan
 * jaringan, dan berukuran tetap (width/height + viewBox) agar tidak ada layout shift.
 */

const SPOT_PROPS = {
  width: 320,
  height: 240,
  viewBox: "0 0 320 240",
  className: "h-auto w-full max-w-xs",
  "aria-hidden": true,
  focusable: "false",
} as const;

function Star({
  x,
  y,
  fill,
}: {
  x: number;
  y: number;
  fill: string;
}) {
  return (
    <polygon
      points={`${x},${y - 18} ${x + 5},${y - 5} ${x + 18},${y} ${x + 5},${y + 5} ${x},${y + 18} ${x - 5},${y + 5} ${x - 18},${y} ${x - 5},${y - 5}`}
      fill={fill}
    />
  );
}

/** Papan klaper di atas latar merah: untuk bagian Video. */
export function VideoSpot() {
  return (
    <svg {...SPOT_PROPS}>
      <rect width="320" height="240" rx="28" fill="#e60023" />
      <rect x="60" y="100" width="200" height="112" rx="14" fill="#ffffff" />
      <g transform="rotate(-8 60 96)">
        <rect x="60" y="60" width="200" height="36" rx="10" fill="#111111" />
        <polygon points="92,60 118,60 102,96 76,96" fill="#ffffff" />
        <polygon points="146,60 172,60 156,96 130,96" fill="#ffffff" />
        <polygon points="200,60 226,60 210,96 184,96" fill="#ffffff" />
      </g>
      <circle cx="160" cy="156" r="30" fill="#e60023" />
      <polygon points="151,140 151,172 177,156" fill="#ffffff" />
      <circle cx="282" cy="48" r="14" fill="#ffffff" />
      <circle cx="38" cy="204" r="10" fill="#111111" />
      <Star x={44} y={50} fill="#ffffff" />
    </svg>
  );
}

function Polaroid({
  outer,
  window,
  caption,
}: {
  outer: string;
  window: string;
  caption: string;
}) {
  return (
    <>
      <rect width="100" height="120" rx="10" fill={outer} />
      <rect x="10" y="10" width="80" height="72" rx="6" fill={window} />
      <circle cx="30" cy="30" r="8" fill="#e60023" />
      <polygon points="10,82 40,48 60,70 72,56 90,82" fill="#b8001c" />
      <rect x="10" y="94" width="50" height="10" rx="5" fill={caption} />
    </>
  );
}

/** Tiga kartu foto bertumpuk di atas latar tint: untuk bagian Gambar. */
export function ImageSpot() {
  return (
    <svg {...SPOT_PROPS}>
      <rect width="320" height="240" rx="28" fill="#ffe4e9" />
      <g transform="translate(40 66) rotate(-12 50 60)">
        <Polaroid outer="#111111" window="#ffe4e9" caption="#ffffff" />
      </g>
      <g transform="translate(112 48) rotate(4 50 60)">
        <Polaroid outer="#e60023" window="#ffc2cc" caption="#ffffff" />
      </g>
      <g transform="translate(184 74) rotate(14 50 60)">
        <Polaroid outer="#ffffff" window="#ffc2cc" caption="#111111" />
      </g>
      <circle cx="288" cy="42" r="12" fill="#e60023" />
      <Star x={36} y={44} fill="#111111" />
    </svg>
  );
}

/** Perisai bertanda centang di atas latar gelap: untuk bagian Hak penggunaan. */
export function RightsSpot() {
  return (
    <svg {...SPOT_PROPS}>
      <rect width="320" height="240" rx="28" fill="#111111" />
      <path
        d="M160 36 L228 62 V118 C228 158 200 188 160 206 C120 188 92 158 92 118 V62 Z"
        fill="#e60023"
      />
      <path
        d="M128 122 L152 146 L196 98"
        fill="none"
        stroke="#ffffff"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Star x={268} y={56} fill="#ffffff" />
      <circle cx="48" cy="60" r="10" fill="#b8001c" />
      <circle cx="274" cy="196" r="12" fill="#b8001c" />
    </svg>
  );
}

/** Latar ilustrasi saat pratinjau gambar belum tersedia (rasio 16:9). */
export function ImagePlaceholderArt() {
  return (
    <svg
      viewBox="0 0 400 225"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="400" height="225" fill="#ffe4e9" />
      <circle cx="300" cy="66" r="26" fill="#e60023" />
      <polygon
        points="0,225 0,150 90,92 170,160 230,120 330,188 400,150 400,225"
        fill="#ffc2cc"
      />
      <polygon
        points="0,225 0,192 110,142 200,202 290,166 400,206 400,225"
        fill="#b8001c"
      />
      <circle cx="60" cy="50" r="6" fill="#111111" />
      <rect x="136" y="44" width="6" height="22" rx="3" fill="#111111" />
      <rect x="128" y="52" width="22" height="6" rx="3" fill="#111111" />
    </svg>
  );
}

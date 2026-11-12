/**
 * Bentuk 2D flat untuk pembatas section: blok warna datar, tanpa garis tepi,
 * tanpa bayangan, tanpa gradien. Semuanya dekoratif (aria-hidden), inline SVG
 * tanpa permintaan jaringan, dan ukurannya ditentukan kelas pemanggil sehingga
 * tidak menyebabkan layout shift.
 */

type WaveShape = "wave" | "zigzag" | "scallop";

const WAVE_PATHS: Record<WaveShape, string> = {
  wave: "M0 36 C 180 6 360 6 540 30 S 900 60 1080 34 S 1320 8 1440 30 V60 H0 Z",
  zigzag: `M0 60 V40 ${Array.from(
    { length: 24 },
    (_, i) => `L${(i + 1) * 60} ${i % 2 === 0 ? 12 : 40}`,
  ).join(" ")} V60 Z`,
  scallop: `M0 60 V44 ${"a40 40 0 0 1 80 0 ".repeat(18)}V60 Z`,
};

/**
 * Tepi bergelombang berwarna currentColor. Letakkan absolut di dasar sebuah
 * section dengan warna section berikutnya (mis. className="text-ink").
 */
export function Wave({
  shape = "wave",
  className,
}: {
  shape?: WaveShape;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      fill="currentColor"
      className={className}
    >
      <path d={WAVE_PATHS[shape]} />
    </svg>
  );
}

/**
 * Bukit datar berlapis di dasar hero. Tiga lapisan belakang berwarna tetap,
 * lapisan depan memakai currentColor (warna section berikutnya, text-paper).
 */
export function Hills() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 -bottom-px block h-20 w-full text-paper sm:h-32"
    >
      <path
        fill="#ffc2cc"
        d="M0 70 C 200 10 380 20 560 60 S 920 110 1100 50 S 1340 20 1440 60 L1440 140 L0 140 Z"
      />
      <path
        fill="#e60023"
        d="M0 92 C 240 50 420 52 640 88 S 1040 130 1240 84 S 1400 70 1440 84 L1440 140 L0 140 Z"
      />
      <path
        fill="#b8001c"
        d="M0 112 C 260 84 460 92 700 114 S 1120 136 1440 104 L1440 140 L0 140 Z"
      />
      <path
        fill="currentColor"
        d="M0 128 C 320 108 560 122 780 130 S 1180 140 1440 124 L1440 140 L0 140 Z"
      />
    </svg>
  );
}

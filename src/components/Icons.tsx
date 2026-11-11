import type { ReactNode } from "react";

/**
 * Ikon flat 2D bergaya garis. Semuanya dekoratif (aria-hidden): teks di
 * sebelahnya yang menyampaikan makna, sehingga tidak butuh alt text.
 */
function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function InfoIcon() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <circle cx="12" cy="7.5" r="0.6" fill="currentColor" />
    </Svg>
  );
}

export function VideoIcon() {
  return (
    <Svg>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" />
    </Svg>
  );
}

export function ImageIcon() {
  return (
    <Svg>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" />
      <path d="M4 18l5-5 4 4 3-3 4 4" />
    </Svg>
  );
}

export function ShieldIcon() {
  return (
    <Svg>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </Svg>
  );
}

/** Kotak ikon flat dengan garis tebal dan bayangan keras. */
export function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="flat-shadow-sm inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-ink bg-paper text-brand"
    >
      {children}
    </span>
  );
}

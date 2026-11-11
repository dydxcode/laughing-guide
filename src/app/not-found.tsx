import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-brand">404</p>
      <h1 className="mt-3 text-3xl font-extrabold">Halaman tidak ditemukan</h1>
      <p className="mt-3 text-muted">
        Alamat yang Anda buka tidak tersedia atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 font-bold text-paper hover:bg-brand-dark"
      >
        Kembali ke beranda
      </Link>
    </main>
  );
}

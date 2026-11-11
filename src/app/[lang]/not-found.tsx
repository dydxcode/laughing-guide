import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-brand">
        404
      </p>
      <h1 className="mt-3 text-3xl font-extrabold">
        Halaman tidak ditemukan / Page not found
      </h1>
      <p className="mt-3 text-muted">
        Alamat yang Anda buka tidak tersedia. / The address you opened is not
        available.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/id"
          className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 font-bold text-white hover:bg-brand-dark"
        >
          Beranda
        </Link>
        <Link
          href="/en"
          className="inline-flex h-12 items-center justify-center rounded-full border-2 border-ink px-8 font-bold text-ink hover:bg-ink hover:text-white"
        >
          Home
        </Link>
      </div>
    </main>
  );
}

"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-extrabold">
        Terjadi kesalahan / Something went wrong
      </h1>
      <p className="mt-3 text-muted">
        Halaman gagal dimuat. Silakan coba lagi. / The page failed to load.
        Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 font-bold text-white hover:bg-brand-dark"
      >
        Coba lagi / Try again
      </button>
    </main>
  );
}

import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SponsoredLink from "@/components/SponsoredLink";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { IMAGE_SAMPLES, VIDEO_SAMPLES } from "@/lib/media";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: SITE.title,
    description: SITE.description,
    path: "/",
  }),
  title: { absolute: SITE.title },
};

export default function HomePage() {
  return (
    <>
      <main id="konten">
        <section id="beranda" className="bg-paper">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">
              Platform koleksi gambar dan video
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Jawara Video: platform koleksi gambar dan video
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Halaman ini memperkenalkan Jawara Video dan menampilkan sampel
              awal gambar dan video. Halaman ini hanya berisi pengenalan dan
              sampel media.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#video"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-base font-bold text-paper transition-colors hover:bg-brand-dark"
              >
                Lihat sampel media
              </a>
              <a
                href="#tentang"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-ink px-8 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Tentang Jawara Video
              </a>
            </div>
          </div>
        </section>

        <section id="tentang" className="bg-soft">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Tentang Jawara Video
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">
              Jawara Video adalah platform koleksi gambar dan video yang
              ditujukan bagi pengguna di Indonesia dan internasional.
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">
              Halaman ini dibuat sebagai halaman pengenalan. Penjelajahan
              koleksi, pencarian, dan akun pengguna tidak tersedia di halaman
              ini.
            </p>
            <h3 className="mt-8 text-lg font-bold">
              Cara menjelajahi untuk saat ini
            </h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-muted">
              Gunakan bagian sampel di bawah. Video dimuat satu per satu setelah
              kamu menekan tombolnya, dan gambar dibuka lewat tautan sumber
              aslinya.
            </p>
          </div>
        </section>

        <section id="video" className="bg-paper">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Sampel video
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">
              Empat sampel video dari YouTube. Judul, deskripsi, dan informasi
              hak penggunaannya belum diketahui, sehingga ditampilkan dengan
              label netral.
            </p>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2">
              {VIDEO_SAMPLES.map((video) => (
                <li key={video.id}>
                  <h3 className="mb-3 text-lg font-bold">{video.label}</h3>
                  <YouTubeEmbed
                    videoId={video.id}
                    label={video.label}
                    sourceUrl={video.sourceUrl}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="gambar" className="bg-soft">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Sampel gambar
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">
              Empat sampel gambar dari ImageDock. Tautan sumbernya kemungkinan
              berupa halaman media, bukan berkas gambar langsung, dan izin
              penayangannya belum diverifikasi. Karena itu gambar belum
              ditampilkan di halaman ini. Gunakan tautan sumber untuk membukanya.
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {IMAGE_SAMPLES.map((image) => (
                <li key={image.sourceUrl}>
                  <h3 className="mb-3 text-lg font-bold">{image.label}</h3>
                  <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl border border-line bg-paper p-4 text-center text-sm text-muted">
                    Gambar belum ditampilkan
                  </div>
                  <p className="mt-3 text-sm text-muted">
                    Hak penggunaan: belum diverifikasi.{" "}
                    <a
                      href={image.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-ink underline hover:text-brand"
                    >
                      Buka sumber gambar
                      <span className="sr-only"> (membuka tab baru)</span>
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="hak" className="bg-paper">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Hak penggunaan media
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">
              Seluruh sampel di halaman ini hanya untuk menguji tampilan.
              Keberadaannya di sini bukan bukti bahwa hak penggunaan atau izin
              publikasinya sudah diperiksa.
            </p>
          </div>
        </section>
      </main>

      <SponsoredLink />
      <JsonLd />
    </>
  );
}

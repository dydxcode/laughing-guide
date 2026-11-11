import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SponsoredLink from "@/components/SponsoredLink";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { IMAGES, VIDEOS } from "@/lib/media";
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
              Halaman ini memperkenalkan Jawara Video dan menampilkan pilihan
              gambar dan video. Halaman ini hanya berisi pengenalan dan media
              pilihan.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#video"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-base font-bold text-paper transition-colors hover:bg-brand-dark"
              >
                Lihat video dan gambar
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
              Gunakan bagian video dan gambar di bawah. Video dimuat satu per
              satu setelah kamu menekan tombolnya, dan gambar dapat dibuka lewat
              tautan sumber aslinya.
            </p>
          </div>
        </section>

        {VIDEOS.length > 0 && (
          <section id="video" className="bg-paper">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
              <h2 className="text-3xl font-extrabold tracking-tight">Video</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted">
                Pilihan video dari YouTube. Setiap video menampilkan status hak
                penggunaannya sendiri.
              </p>
              <ul className="mt-10 grid gap-8 sm:grid-cols-2">
                {VIDEOS.map((video) => (
                  <li key={video.id}>
                    <h3 className="mb-3 text-lg font-bold">{video.label}</h3>
                    <YouTubeEmbed
                      videoId={video.id}
                      label={video.label}
                      sourceUrl={video.sourceUrl}
                      rights={video.rights}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {IMAGES.length > 0 && (
          <section id="gambar" className="bg-soft">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
              <h2 className="text-3xl font-extrabold tracking-tight">Gambar</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted">
                Pilihan gambar. Setiap gambar menampilkan status hak
                penggunaannya dan tautan ke sumbernya. Pratinjau hanya
                ditampilkan bila tersedia.
              </p>
              <ul className="mt-10 grid gap-6 sm:grid-cols-2">
                {IMAGES.map((image) => (
                  <li key={image.sourceUrl}>
                    <h3 className="mb-3 text-lg font-bold">{image.label}</h3>
                    {image.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={image.imageUrl}
                        alt={image.alt}
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] w-full rounded-xl border border-line object-cover"
                      />
                    ) : (
                      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl border border-line bg-paper p-4 text-center text-sm text-muted">
                        Pratinjau belum tersedia
                      </div>
                    )}
                    <p className="mt-3 text-sm text-muted">
                      Hak penggunaan: {image.rights}.{" "}
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
        )}

        <section id="hak" className="bg-paper">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Hak penggunaan media
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">
              Setiap media di halaman ini menampilkan status hak penggunaannya.
              Status &quot;belum diverifikasi&quot; berarti hak penggunaan atau
              izin publikasinya belum diperiksa.
            </p>
          </div>
        </section>
      </main>

      <SponsoredLink />
      <JsonLd />
    </>
  );
}

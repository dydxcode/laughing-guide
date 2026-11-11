import type { Metadata } from "next";
import HeroIllustration from "@/components/HeroIllustration";
import {
  IconBadge,
  ImageIcon,
  InfoIcon,
  ShieldIcon,
  VideoIcon,
} from "@/components/Icons";
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

/** Langkah ini menggambarkan perilaku halaman yang benar-benar ada saat ini. */
const STEPS = [
  {
    title: "Pilih bagian",
    text: "Buka bagian Video atau Gambar di halaman ini.",
  },
  {
    title: "Muat video",
    text: "Tekan tombol pada video untuk memuatnya dari YouTube.",
  },
  {
    title: "Buka gambar",
    text: "Lihat pratinjau gambar bila tersedia, atau buka lewat tautan sumbernya.",
  },
] as const;

function SectionHeading({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <IconBadge>{icon}</IconBadge>
      <h2 className="text-3xl font-extrabold tracking-tight">{children}</h2>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <main id="konten">
        <section id="beranda" className="bg-paper">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand">
                Platform koleksi gambar dan video
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Jawara Video: platform koleksi gambar dan video
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Halaman ini memperkenalkan Jawara Video dan menampilkan pilihan
                gambar dan video. Halaman ini hanya berisi pengenalan dan media
                pilihan.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#video"
                  className="flat-btn inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-base font-bold text-paper hover:bg-brand-dark"
                >
                  Lihat video dan gambar
                </a>
                <a
                  href="#tentang"
                  className="flat-btn inline-flex h-12 items-center justify-center rounded-full bg-paper px-8 text-base font-bold text-ink hover:bg-ink hover:text-paper"
                >
                  Tentang Jawara Video
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <HeroIllustration />
            </div>
          </div>
        </section>

        <section id="tentang" className="border-t-2 border-ink bg-tint">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading icon={<InfoIcon />}>
              Tentang Jawara Video
            </SectionHeading>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted">
              Jawara Video adalah platform koleksi gambar dan video yang
              ditujukan bagi pengguna di Indonesia dan internasional.
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">
              Halaman ini dibuat sebagai halaman pengenalan. Penjelajahan
              koleksi, pencarian, dan akun pengguna tidak tersedia di halaman
              ini.
            </p>
            <h3 className="mt-10 text-xl font-bold">
              Cara menjelajahi untuk saat ini
            </h3>
            <ol className="mt-6 grid gap-6 md:grid-cols-3">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flat-card p-5">
                  <span
                    aria-hidden="true"
                    className="flat-shadow-sm inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-brand text-base font-extrabold text-paper"
                  >
                    {index + 1}
                  </span>
                  <h4 className="mt-4 text-lg font-bold">{step.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {VIDEOS.length > 0 && (
          <section id="video" className="border-t-2 border-ink bg-paper">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
              <SectionHeading icon={<VideoIcon />}>Video</SectionHeading>
              <p className="mt-6 max-w-3xl leading-relaxed text-muted">
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
          <section id="gambar" className="border-t-2 border-ink bg-tint">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
              <SectionHeading icon={<ImageIcon />}>Gambar</SectionHeading>
              <p className="mt-6 max-w-3xl leading-relaxed text-muted">
                Pilihan gambar. Setiap gambar menampilkan status hak
                penggunaannya dan tautan ke sumbernya. Pratinjau hanya
                ditampilkan bila tersedia.
              </p>
              <ul className="mt-10 grid gap-8 sm:grid-cols-2">
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
                        className="flat-shadow aspect-[4/3] w-full rounded-xl border-2 border-ink bg-paper object-cover"
                      />
                    ) : (
                      <div className="flat-shadow flex aspect-[4/3] w-full items-center justify-center rounded-xl border-2 border-ink bg-paper p-4 text-center text-sm text-muted">
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

        <section id="hak" className="border-t-2 border-ink bg-paper">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading icon={<ShieldIcon />}>
              Hak penggunaan media
            </SectionHeading>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted">
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

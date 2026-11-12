import type { Metadata } from "next";
import AboutIllustration from "@/components/AboutIllustration";
import HeroIllustration from "@/components/HeroIllustration";
import {
  IconBadge,
  ImageIcon,
  InfoIcon,
  ShieldIcon,
  VideoIcon,
} from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { Hills, Wave } from "@/components/Shapes";
import SponsoredLink from "@/components/SponsoredLink";
import {
  ImagePlaceholderArt,
  ImageSpot,
  RightsSpot,
  VideoSpot,
} from "@/components/Spots";
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

/** Tepi bergelombang di dasar section, berwarna section berikutnya. */
const WAVE_CLASS =
  "pointer-events-none absolute inset-x-0 -bottom-px block h-6 w-full sm:h-10";

function SectionIntro({
  tone,
  icon,
  title,
  spot,
  children,
}: {
  tone: "light" | "dark";
  icon: React.ReactNode;
  title: string;
  spot: React.ReactNode;
  children: React.ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <div className="grid items-center gap-8 md:grid-cols-[1fr_280px]">
      <div>
        <div className="flex items-center gap-4">
          <IconBadge>{icon}</IconBadge>
          <h2
            className={`text-3xl font-extrabold tracking-tight ${dark ? "text-paper" : "text-ink"}`}
          >
            {title}
          </h2>
        </div>
        <div
          className={`mt-6 max-w-3xl space-y-4 leading-relaxed ${dark ? "text-paper/80" : "text-muted"}`}
        >
          {children}
        </div>
      </div>
      <div className="hidden justify-self-center md:block">{spot}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <main id="konten">
        <section id="beranda" className="relative overflow-hidden bg-tint">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 pb-32 pt-12 sm:px-6 sm:pb-40 sm:pt-16 md:grid-cols-2">
            <div>
              <p className="inline-block rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-widest text-paper">
                Platform koleksi gambar dan video
              </p>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
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
                  className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-base font-bold text-paper transition-colors hover:bg-brand-dark"
                >
                  Lihat video dan gambar
                </a>
                <a
                  href="#tentang"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-8 text-base font-bold text-paper transition-colors hover:bg-brand"
                >
                  Tentang Jawara Video
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <HeroIllustration />
            </div>
          </div>
          <Hills />
        </section>

        <section id="tentang" className="relative bg-paper">
          <div className="mx-auto max-w-5xl px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20">
            <SectionIntro
              tone="light"
              icon={<InfoIcon />}
              title="Tentang Jawara Video"
              spot={<AboutIllustration />}
            >
              <p>
                Jawara Video adalah platform koleksi gambar dan video yang
                ditujukan bagi pengguna di Indonesia dan internasional.
              </p>
              <p>
                Halaman ini dibuat sebagai halaman pengenalan. Penjelajahan
                koleksi, pencarian, dan akun pengguna tidak tersedia di halaman
                ini.
              </p>
            </SectionIntro>
            <h3 className="mt-12 text-xl font-bold text-ink">
              Cara menjelajahi untuk saat ini
            </h3>
            <ol className="mt-6 grid gap-6 md:grid-cols-3">
              {STEPS.map((step, index) => (
                <li key={step.title} className="rounded-2xl bg-tint p-5">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-base font-extrabold text-paper"
                  >
                    {index + 1}
                  </span>
                  <h4 className="mt-4 text-lg font-bold text-ink">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <Wave className={`${WAVE_CLASS} text-ink`} />
        </section>

        {VIDEOS.length > 0 && (
          <section id="video" className="on-dark relative bg-ink">
            <div className="mx-auto max-w-5xl px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20">
              <SectionIntro
                tone="dark"
                icon={<VideoIcon />}
                title="Video"
                spot={<VideoSpot />}
              >
                <p>
                  Pilihan video dari YouTube. Setiap video menampilkan status
                  hak penggunaannya sendiri.
                </p>
              </SectionIntro>
              <ul className="mt-12 grid gap-8 sm:grid-cols-2">
                {VIDEOS.map((video) => (
                  <li key={video.id}>
                    <h3 className="mb-3 inline-block rounded-full bg-brand px-3 py-1 text-sm font-bold text-paper">
                      {video.label}
                    </h3>
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
            <Wave className={`${WAVE_CLASS} text-paper`} />
          </section>
        )}

        {IMAGES.length > 0 && (
          <section id="gambar" className="relative bg-paper">
            <div className="mx-auto max-w-5xl px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20">
              <SectionIntro
                tone="light"
                icon={<ImageIcon />}
                title="Gambar"
                spot={<ImageSpot />}
              >
                <p>
                  Pilihan gambar. Setiap gambar menampilkan status hak
                  penggunaannya dan tautan ke sumbernya. Pratinjau hanya
                  ditampilkan bila tersedia.
                </p>
              </SectionIntro>
              <ul className="mt-12 grid gap-8 sm:grid-cols-2">
                {IMAGES.map((image) => (
                  <li key={image.sourceUrl}>
                    <h3 className="mb-3 inline-block rounded-full bg-ink px-3 py-1 text-sm font-bold text-paper">
                      {image.label}
                    </h3>
                    {image.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={image.imageUrl}
                        alt={image.alt}
                        width={1600}
                        height={900}
                        loading="lazy"
                        decoding="async"
                        className="aspect-video w-full rounded-2xl bg-tint object-cover"
                      />
                    ) : (
                      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-tint">
                        <ImagePlaceholderArt />
                        <p className="absolute bottom-3 left-3 rounded-full bg-paper px-3 py-1 text-xs font-bold text-ink">
                          Pratinjau belum tersedia
                        </p>
                      </div>
                    )}
                    <p className="mt-3 text-sm text-muted">
                      Hak penggunaan: {image.rights}.{" "}
                      <a
                        href={image.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-ink underline underline-offset-4 hover:text-brand"
                      >
                        Buka sumber gambar
                        <span className="sr-only"> (membuka tab baru)</span>
                      </a>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <Wave className={`${WAVE_CLASS} text-tint`} />
          </section>
        )}

        <section id="hak" className="relative bg-tint">
          <div className="mx-auto max-w-5xl px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20">
            <SectionIntro
              tone="light"
              icon={<ShieldIcon />}
              title="Hak penggunaan media"
              spot={<RightsSpot />}
            >
              <p>
                Setiap media di halaman ini menampilkan status hak
                penggunaannya. Status &quot;belum diverifikasi&quot; berarti hak
                penggunaan atau izin publikasinya belum diperiksa.
              </p>
            </SectionIntro>
            <div className="mt-10">
              <SponsoredLink />
            </div>
          </div>
          <Wave className={`${WAVE_CLASS} text-brand`} />
        </section>
      </main>

      <JsonLd />
    </>
  );
}

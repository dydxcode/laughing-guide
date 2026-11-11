import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SponsoredLink from "@/components/SponsoredLink";
import { SITE } from "@/lib/site";

const FEATURES = [
  {
    title: "Cepat dimuat",
    body: "Halaman dirancang ringan agar langsung tampil, bahkan pada koneksi seluler.",
  },
  {
    title: "Nyaman di semua perangkat",
    body: "Tata letak menyesuaikan layar ponsel, tablet, dan komputer tanpa kehilangan kejelasan.",
  },
  {
    title: "Mudah dibaca",
    body: "Struktur konten yang jelas dan kontras warna yang baik membuat informasi mudah dipahami.",
  },
  {
    title: "Diakses lewat HTTPS",
    body: "Koneksi ke situs ini dienkripsi sehingga kunjungan Anda lebih terlindungi.",
  },
] as const;

const STEPS = [
  {
    title: "Buka Jawara Video",
    body: "Kunjungi situs dari perangkat apa pun yang Anda gunakan.",
  },
  {
    title: "Jelajahi konten",
    body: "Telusuri video pilihan sesuai minat Anda.",
  },
  {
    title: "Tonton dan nikmati",
    body: "Putar video dengan tampilan yang rapi dan nyaman.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: SITE.lang,
    },
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Lewati ke konten utama
      </a>

      <Header />

      <main id="konten">
        <section id="beranda" className="bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">
              {SITE.name}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Temukan dan tonton video pilihan dengan lebih nyaman
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {SITE.description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#keunggulan"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-base font-bold text-paper transition-colors hover:bg-brand-dark"
              >
                Lihat Keunggulan
              </a>
              <a
                href="#cara-kerja"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-ink px-8 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Cara Kerja
              </a>
            </div>
          </div>
        </section>

        <section id="keunggulan" className="bg-soft">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Keunggulan
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Fondasi yang kami utamakan agar pengalaman Anda baik sejak halaman pertama.
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-line bg-paper p-6"
                >
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="cara-kerja" className="bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Cara Kerja
            </h2>
            <ol className="mt-10 grid gap-6 md:grid-cols-3">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-base font-extrabold text-paper"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <SponsoredLink />

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

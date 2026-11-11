# Jawara Video — Landing Page

Landing page Jawara Video, platform koleksi gambar dan video. Domain produksi: https://jawvid.web.id

Proyek ini hanya landing page: tanpa CMS, database, upload, akun pengguna, atau dashboard.

## Teknologi

- Next.js (App Router) dan React
- TypeScript
- Tailwind CSS v4
- Font Inter (`next/font`)
- Identitas visual: primer `#E60023`, sekunder `#FFFFFF`, teks `#111111`

## Menjalankan secara lokal

Butuh Node.js 22.

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Development server |
| `npm run lint` | ESLint |
| `npm run typecheck` | Pemeriksaan TypeScript |
| `npm run build` | Build production |
| `npm run start` | Menjalankan hasil build |

Setelah `npm install` pertama, komit `package-lock.json` agar build Vercel konsisten.

## Environment variables

Tidak ada yang wajib. Lihat `.env.example`.

| Variabel | Fungsi |
| --- | --- |
| `NEXT_PUBLIC_ADSTERRA_SMARTLINK_URL` | URL Adsterra Smartlink resmi (HTTPS). Kosong berarti tidak ada iklan yang tampil. Perubahan nilai butuh redeploy. |
| `VERCEL_ENV` | Disediakan otomatis oleh Vercel. |

## Struktur folder

```
src/
  app/
    layout.tsx           Root layout, metadata dasar, header dan footer
    page.tsx             Landing page (satu H1, anchor, video dan gambar)
    privacy/page.tsx     Kebijakan Privasi
    terms/page.tsx       Ketentuan Penggunaan
    opengraph-image.tsx  Gambar Open Graph (teks saja)
    robots.ts            /robots.txt
    sitemap.ts           /sitemap.xml
    not-found.tsx        404
    error.tsx            Halaman error
    icon.svg             Ikon sementara
  components/            SiteHeader, SiteFooter, YouTubeEmbed, SponsoredLink, JsonLd, LegalDocument, HeroIllustration, Icons
  lib/                   site.ts (konfigurasi), media.ts (URL video/gambar), seo.ts, ads.ts
```

## Bahasa

Hanya Bahasa Indonesia. Versi Bahasa Inggris tidak disediakan, jadi tidak ada hreflang dan tidak ada pengalihan bahasa otomatis. Jika versi Inggris dibuat nanti, sediakan halaman lengkap dengan hreflang timbal balik.

## Konfigurasi SEO

- `metadataBase`, canonical, Open Graph, dan Twitter Card memakai `https://jawvid.web.id`, tidak pernah URL preview Vercel.
- Preview dan Development mendapat `<meta name="robots" content="noindex, nofollow">`. Production mendapat `index, follow`.
- `robots.txt` tidak memblokir apa pun supaya noindex pada Preview bisa dibaca. Lindungi Preview dengan Vercel Deployment Protection.
- Sitemap hanya memuat `/`, `/privacy`, dan `/terms`.
- Structured data: `WebSite`, `Organization`, dan `WebPage` (nama dan URL). Tidak ada `VideoObject` atau `ImageObject` karena data media belum diverifikasi.

## Media (video dan gambar)

Semua URL media diubah di **satu file**: `src/lib/media.ts`. Teks lain di halaman tidak perlu disentuh.

- Video: isi `url` dengan tautan YouTube. Embed memakai `youtube-nocookie.com`, baru dimuat setelah tombol ditekan, tanpa autoplay.
- Gambar: isi `url` (tautan sumber). Pratinjau baru tampil jika `imageUrl` (berkas gambar langsung) dan `alt` (deskripsi akurat) sama-sama diisi.
- `rights`: status hak penggunaan, bawaan "belum diverifikasi". Ubah hanya setelah izin benar-benar diperiksa.
- Label otomatis ("Video N", "Gambar N"). Jangan mengarang judul, alt text, atau metadata. Tidak ada `VideoObject`/`ImageObject` sebelum datanya terverifikasi.

## Desain 2D (flat)

- Gaya: blok warna datar, garis tebal `#111111`, bayangan keras tanpa blur. Kelasnya (`.flat-card`, `.flat-btn`, `.flat-shadow`) ada di `src/app/globals.css`, warna di token `@theme`.
- Ilustrasi hero (`HeroIllustration.tsx`) dan ikon section (`Icons.tsx`) berupa inline SVG: tanpa permintaan jaringan, ukuran terkunci (tanpa layout shift), dekoratif (`aria-hidden`), dan bukan kontrol yang bisa diklik.
- Tidak ada animasi, sehingga preferensi reduced motion otomatis terpenuhi.
- Ilustrasi sengaja berbeda dari logo pihak lain. Jangan meniru logo atau karakter milik orang lain.

## Adsterra Smartlink

`src/components/SponsoredLink.tsx` hanya tampil bila `NEXT_PUBLIC_ADSTERRA_SMARTLINK_URL` terisi URL HTTPS yang valid. Blok berlabel "Iklan", URL tertulis apa adanya di HTML, hanya terbuka saat diklik (tab baru, `rel="sponsored nofollow noopener noreferrer"`). Tidak ada script iklan, auto-open, atau redirect. Tidak masuk sitemap dan tidak mengubah metadata.

## Deployment ke Vercel

1. Import repository ini di Vercel. Framework preset: Next.js. Root directory: root repository.
2. Branch `main` menjadi Production, branch lain menjadi Preview. Aktifkan Deployment Protection untuk Preview.
3. Tambahkan domain `jawvid.web.id` di Settings, Domains. Pilih satu versi utama (www atau non-www) dan arahkan yang lain dengan redirect. Pastikan HTTPS aktif.
4. Setelah live, periksa canonical, robots meta, `/robots.txt`, dan `/sitemap.xml` di domain produksi.

## Status

Kode belum dijalankan atau diuji (typecheck, lint, build, Lighthouse). Lihat laporan pengerjaan untuk status per area.

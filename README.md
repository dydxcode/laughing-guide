# Jawara Video — Landing Page

Landing page Jawara Video. Domain produksi: https://jawvid.web.id

Proyek ini hanya landing page, bukan platform media lengkap (tidak ada CMS, database, upload, akun pengguna, atau dashboard).

## Teknologi

- Next.js (App Router) dan React
- TypeScript
- Tailwind CSS v4
- Font Inter (via `next/font`)
- Identitas visual: primer `#E60023`, sekunder `#FFFFFF`, teks `#111111`

## Menjalankan secara lokal

Butuh Node.js 22.

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Perintah

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Development server |
| `npm run lint` | ESLint |
| `npm run typecheck` | Pemeriksaan TypeScript |
| `npm run build` | Build production |
| `npm run start` | Menjalankan hasil build |

Setelah `npm install` pertama, komit file `package-lock.json` agar build Vercel konsisten.

## Environment variables

Tidak ada yang wajib diisi agar situs berjalan. Lihat `.env.example`.

| Variabel | Fungsi |
| --- | --- |
| `NEXT_PUBLIC_ADSTERRA_SMARTLINK_URL` | URL Adsterra Smartlink resmi (HTTPS). Kosong berarti tidak ada iklan yang tampil. Perubahan nilai butuh redeploy. |
| `VERCEL_ENV` | Disediakan otomatis oleh Vercel. |

## Monetisasi Adsterra Smartlink

- Komponen `src/components/SponsoredLink.tsx` menampilkan satu blok berlabel **Iklan** di atas footer, hanya jika `NEXT_PUBLIC_ADSTERRA_SMARTLINK_URL` terisi dan berupa URL HTTPS yang valid.
- Tautan terbuka hanya saat pengunjung mengkliknya (tab baru, `rel="sponsored nofollow noopener noreferrer"`). Tidak ada auto-open, redirect paksa, atau script iklan tambahan.
- Tautan iklan tidak masuk sitemap dan tidak mengubah metadata, canonical, maupun structured data.
- Status saat ini: **PARTIAL**, menunggu URL resmi dari akun Adsterra dan pengujian di Preview.

## Struktur folder

```
src/
  app/
    layout.tsx           Metadata global, font, robots meta
    page.tsx             Halaman utama + JSON-LD
    globals.css          Tailwind dan token warna
    robots.ts            /robots.txt
    sitemap.ts           /sitemap.xml
    opengraph-image.tsx  Gambar Open Graph
    icon.svg             Favicon sementara
    not-found.tsx        Halaman 404
    error.tsx            Halaman error
  components/            Header (menu mobile), Footer, SponsoredLink
  lib/site.ts            Nama, URL produksi, deskripsi, navigasi
  lib/ads.ts             Membaca dan memvalidasi URL Smartlink
```

## Konfigurasi SEO

- `metadataBase` dan canonical selalu memakai `https://jawvid.web.id` (dari `src/lib/site.ts`), tidak pernah URL preview Vercel.
- Open Graph dan Twitter Card memakai URL produksi.
- Preview dan Development di Vercel mendapat `<meta name="robots" content="noindex">`. Production mendapat `index, follow`.
- `robots.txt` mengizinkan semua crawler (tanpa `Disallow`) supaya noindex pada Preview bisa dibaca.
- Structured data: hanya `WebSite` dan `Organization` (nama dan URL), tanpa data bisnis tambahan.
- Satu `<h1>`, hierarki heading berurutan, link "lewati ke konten", fokus keyboard terlihat.

## Deployment ke Vercel

1. Import repository ini di Vercel. Framework preset: Next.js (terdeteksi otomatis).
2. Root directory: root repository. Build command dan output: default.
3. Branch `main` menjadi Production, branch lain menjadi Preview.
4. Tambahkan domain `jawvid.web.id` di Settings → Domains. Pilih satu versi utama (www atau non-www) dan arahkan yang lain dengan redirect.
5. Pastikan HTTPS aktif dan sertifikat valid.

## Catatan

Teks pada landing page (judul, keunggulan, langkah) adalah draf awal dan perlu disesuaikan dengan produk sebenarnya. Ikon `src/app/icon.svg` dan gambar Open Graph juga masih sementara sampai logo resmi tersedia.

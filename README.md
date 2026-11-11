# Jawara Video — Landing Page

Landing page Jawara Video dalam dua bahasa (`/id` dan `/en`). Domain produksi: https://jawvid.web.id

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

Buka http://localhost:3000. Root `/` otomatis dialihkan ke `/id` atau `/en`.

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
| `NEXT_PUBLIC_ADSTERRA_SMARTLINK_URL` | URL Adsterra Smartlink resmi (HTTPS), ditulis apa adanya (tidak di-encode). Kosong berarti tidak ada iklan yang tampil. Perubahan nilai butuh redeploy. |
| `VERCEL_ENV` | Disediakan otomatis oleh Vercel. |

## Struktur folder

```
src/
  middleware.ts          Pengalihan / dan path tanpa bahasa ke /id atau /en
  dictionaries/          id.json dan en.json (seluruh teks halaman)
  app/
    globals.css          Tailwind dan token warna
    icon.svg             Favicon sementara
    robots.ts            /robots.txt
    sitemap.ts           /sitemap.xml (id, en, privacy, terms + hreflang)
    api/og/route.tsx     Gambar Open Graph dinamis (/api/og?lang=id|en)
    [lang]/
      layout.tsx         <html lang>, font, robots meta (noindex di Preview)
      page.tsx           Beranda: zona atas (pesan + CTA) dan zona bawah (artikel)
      privacy/page.tsx   Kebijakan Privasi
      terms/page.tsx     Syarat dan Ketentuan
      not-found.tsx      404, error.tsx  Halaman error
      [...rest]/page.tsx Menangkap path tak dikenal menjadi 404
  components/            SiteHeader, SiteFooter, LanguageSwitcher,
                         SponsoredLink, JsonLd, LegalDocument
  lib/
    locales.ts           Daftar bahasa, hreflang
    i18n.ts              Tipe dan pemuat kamus
    seo.ts               Metadata per halaman (canonical, hreflang, OG)
    site.ts, ads.ts      Konfigurasi situs, validasi URL Smartlink
```

## Konfigurasi SEO

- Middleware memilih bahasa dari `Accept-Language`, cadangan `/en`. Path berekstensi (`robots.txt`, `sitemap.xml`, `icon.svg`, dll.), `/api`, dan `/_next` dikecualikan.
- `metadataBase` memakai `https://jawvid.web.id`. Canonical per halaman, mis. `/en`, `/id/privacy`; tidak pernah URL preview.
- Hreflang simetris di setiap halaman: `id-ID`, `en-US`, dan `x-default` (ke `/en`).
- Canonical dan hreflang diatur per halaman (`src/lib/seo.ts`), bukan di layout, supaya halaman seperti `/en/privacy` tidak salah menunjuk canonical ke beranda.
- Preview dan Development di Vercel mendapat `noindex`; Production `index, follow`. `robots.txt` tidak memblokir apa pun agar `noindex` terbaca.
- Structured data: `WebSite`, `Organization`, dan `WebPage` (nama dan URL). Tidak ada `VideoObject` karena halaman tidak memuat video.
- Artikel di zona bawah dirender di server (tanpa bergantung JavaScript), dengan H1, H2, dan H3 semantik.

## Monetisasi Adsterra Smartlink

- `src/components/SponsoredLink.tsx` menampilkan blok berlabel **Iklan/Ad** di zona atas, hanya jika URL valid dan HTTPS.
- URL tertulis apa adanya di HTML (tanpa Base64 atau penyembunyian dari crawler). Tautan hanya terbuka saat diklik pengunjung, di tab baru, dengan `rel="sponsored nofollow noopener noreferrer"`.
- Tidak ada player atau tombol play palsu, angka view palsu, auto-open, atau redirect paksa.
- Status: **PARTIAL**, menunggu URL resmi dari akun Adsterra dan pengujian di Preview.

## Deployment ke Vercel

1. Import repository ini di Vercel. Framework preset: Next.js (terdeteksi otomatis).
2. Root directory: root repository. Build command dan output: default.
3. Branch `main` menjadi Production, branch lain menjadi Preview.
4. Tambahkan domain `jawvid.web.id` di Settings → Domains. Pilih satu versi utama (www atau non-www) dan arahkan yang lain dengan redirect.
5. Pastikan HTTPS aktif dan sertifikat valid.

## Catatan

- Artikel panduan, Kebijakan Privasi, dan Syarat dan Ketentuan adalah draf awal. Tinjau ulang dan sesuaikan dengan kondisi sebenarnya, serta tambahkan kontak resmi bila tersedia.
- Ikon `src/app/icon.svg` masih sementara sampai logo resmi tersedia.

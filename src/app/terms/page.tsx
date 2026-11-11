import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Ketentuan Penggunaan",
  description:
    "Ketentuan penggunaan halaman Jawara Video: penggunaan halaman, media, tautan eksternal, dan iklan.",
  path: "/terms",
});

const SECTIONS = [
  {
    heading: "Penggunaan halaman",
    body: "Halaman ini adalah halaman pengenalan Jawara Video. Kamu boleh membaca dan membagikan tautannya. Jangan menggunakan halaman ini untuk tujuan yang melanggar hukum.",
  },
  {
    heading: "Media dan hak cipta",
    body: "Gambar dan video di halaman ini dapat berasal dari pihak lain dan ditampilkan atau ditautkan sesuai status hak penggunaan yang tertera pada masing-masing media. Status \"belum diverifikasi\" berarti izin publikasinya belum diperiksa. Hak atas media tetap dimiliki oleh pemiliknya masing-masing.",
  },
  {
    heading: "Tautan eksternal dan iklan",
    body: "Kami tidak mengendalikan situs pihak ketiga dan tidak bertanggung jawab atas isi atau kebijakannya. Tautan iklan selalu diberi label.",
  },
  {
    heading: "Tanpa jaminan",
    body: "Isi halaman disediakan apa adanya, tanpa jaminan ketersediaan atau kelengkapan.",
  },
  {
    heading: "Perubahan ketentuan",
    body: "Ketentuan ini dapat diperbarui sewaktu-waktu. Tanggal pembaruan terakhir tertera di bagian atas halaman.",
  },
] as const;

export default function TermsPage() {
  return (
    <LegalDocument
      title="Ketentuan Penggunaan"
      intro="Ketentuan ini berlaku untuk penggunaan halaman pengenalan Jawara Video."
      sections={SECTIONS}
    />
  );
}

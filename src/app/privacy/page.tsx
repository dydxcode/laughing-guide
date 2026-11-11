import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi halaman Jawara Video: data yang dikumpulkan, cookie, video YouTube, dan tautan eksternal.",
  path: "/privacy",
});

const SECTIONS = [
  {
    heading: "Data yang kami kumpulkan",
    body: "Halaman ini tidak menyediakan akun, formulir, atau kolom komentar, dan kami tidak meminta data pribadi darimu. Seperti situs pada umumnya, penyedia hosting (Vercel) dapat mencatat data teknis permintaan, misalnya alamat IP, jenis peramban, dan waktu akses, untuk keperluan keamanan dan operasional.",
  },
  {
    heading: "Cookie dan pelacakan",
    body: "Kami tidak memasang cookie pelacak atau skrip analitik pada halaman ini. Jika hal itu berubah, kebijakan ini akan diperbarui.",
  },
  {
    heading: "Video YouTube",
    body: "Video YouTube tidak dimuat saat halaman dibuka. Setelah kamu menekan tombol untuk memuat video, peramban terhubung ke youtube-nocookie.com milik Google, dan YouTube dapat memproses data sesuai kebijakan privasinya sendiri.",
  },
  {
    heading: "Tautan eksternal dan iklan",
    body: "Halaman ini memuat tautan ke situs lain, misalnya YouTube dan ImageDock. Halaman ini juga dapat memuat satu tautan iklan berlabel ke jaringan iklan Adsterra apabila dikonfigurasi. Setelah kamu berpindah ke situs lain, pengumpulan data dikelola oleh pihak tersebut menurut kebijakannya sendiri.",
  },
  {
    heading: "Perubahan kebijakan",
    body: "Kebijakan ini dapat diperbarui sewaktu-waktu. Tanggal pembaruan terakhir tertera di bagian atas halaman.",
  },
] as const;

export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Kebijakan Privasi"
      intro="Halaman ini menjelaskan bagaimana halaman pengenalan Jawara Video memperlakukan data pengunjung."
      sections={SECTIONS}
    />
  );
}

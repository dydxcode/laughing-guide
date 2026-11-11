import { notFound } from "next/navigation";

/** Semua path yang tidak dikenal di bawah /id atau /en menampilkan halaman 404. */
export default function CatchAllPage() {
  notFound();
}

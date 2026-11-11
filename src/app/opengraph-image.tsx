import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Gambar Open Graph berisi teks saja: nama dan deskripsi singkat situs. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#E60023",
          color: "#FFFFFF",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800 }}>{SITE.name}</div>
        <div style={{ fontSize: 40, marginTop: 24 }}>
          Platform koleksi gambar dan video
        </div>
      </div>
    ),
    size,
  );
}

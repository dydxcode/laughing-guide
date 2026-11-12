"use client";

import { useState } from "react";

interface Props {
  videoId: string;
  label: string;
  sourceUrl: string;
  rights: string;
}

/**
 * Embed YouTube resmi yang baru dimuat setelah pengunjung menekan tombol.
 * Sebelum itu tidak ada permintaan ke YouTube (performa dan privasi), tanpa
 * autoplay, dan wadah 16:9 yang ukurannya terkunci mencegah layout shift.
 * Tautan ke sumber asli selalu tersedia bila embed tidak diizinkan.
 * Dirancang untuk latar gelap (section Video).
 */
export default function YouTubeEmbed({
  videoId,
  label,
  sourceUrl,
  rights,
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-white/10">
        {loaded ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={`${label} (YouTube)`}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center">
            <button
              type="button"
              onClick={() => setLoaded(true)}
              aria-label={`Muat ${label} dari YouTube`}
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-bold text-paper transition-colors hover:bg-brand-dark"
            >
              Muat video dari YouTube
            </button>
            <p className="text-xs text-paper/80">
              Video baru dimuat setelah tombol ditekan.
            </p>
          </div>
        )}
      </div>
      <p className="mt-3 text-sm text-paper/80">
        Hak penggunaan: {rights}.{" "}
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-paper underline underline-offset-4 hover:text-tint"
        >
          Buka di YouTube
          <span className="sr-only"> (membuka tab baru)</span>
        </a>
      </p>
    </div>
  );
}

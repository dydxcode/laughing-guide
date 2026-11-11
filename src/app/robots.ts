import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Crawler tetap diizinkan mengakses semua halaman, termasuk di Preview,
 * agar meta noindex (lihat layout.tsx) benar-benar bisa terbaca.
 * Jangan memblokir lewat robots.txt sambil berharap noindex dibaca.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}

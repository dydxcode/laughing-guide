import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Semua crawler diizinkan, termasuk di Preview, supaya meta noindex
 * (lihat layout.tsx) bisa terbaca. Jangan memblokir lewat robots.txt sambil
 * berharap noindex dibaca. Preview dilindungi lewat Vercel Deployment Protection.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}

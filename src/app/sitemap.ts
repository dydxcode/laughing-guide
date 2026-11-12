import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/** Hanya URL kanonis yang layak diindeks. Tanpa URL preview atau Smartlink. */
const PATHS = ["/", "/privacy", "/terms", "/sitemap"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({ url: `${SITE.url}${path}` }));
}

import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/images";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/gallery", "/about", "/find-us", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

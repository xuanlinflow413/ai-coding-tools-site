import type { MetadataRoute } from "next";
import { getAllPostSlugs, getAllToolSlugs } from "@/lib/markdown";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aicodingtools.com";
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, priority: 1, changeFrequency: "weekly" },
    { url: `${baseUrl}/tools/`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/blog/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/compare/`, priority: 0.8, changeFrequency: "monthly" },
  ];

  const toolRoutes: MetadataRoute.Sitemap = getAllToolSlugs().map((slug) => ({
    url: `${baseUrl}/tools/${slug}/`,
    priority: slug === "ai-prd-generator" || slug === "ai-product-manager" ? 0.85 : 0.8,
    changeFrequency: "weekly" as const,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}/`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...toolRoutes, ...blogRoutes];
}

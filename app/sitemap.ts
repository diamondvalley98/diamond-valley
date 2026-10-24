import type { MetadataRoute } from "next";
import { getCollectionSlugs } from "@/lib/content/get-collection";
import { getProductSlugs } from "@/lib/content/get-product";
import { getServiceSlugs } from "@/lib/content/get-service";
import { absoluteUrl } from "@/lib/seo/absolute-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/collections",
    "/services",
    "/about",
    "/contact",
    "/faq",
    "/financing",
    "/privacy",
    "/terms",
  ];

  const dynamicPaths = [
    ...getCollectionSlugs().map((slug) => `/collections/${slug}`),
    ...getProductSlugs().map((slug) => `/products/${slug}`),
    ...getServiceSlugs().map((slug) => `/services/${slug}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

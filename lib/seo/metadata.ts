import type { Metadata } from "next";
import type { SeoMeta } from "@/types";
import { absoluteUrl } from "./absolute-url";

type BuildMetadataInput = {
  seo: SeoMeta;
  path?: string;
  siteName?: string;
};

export function buildMetadata({
  seo,
  path = "/",
  siteName = "Diamond Valley",
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(seo.canonical ?? path);
  const title =
    seo.title.includes(siteName) || path === "/"
      ? seo.title
      : `${seo.title} | ${siteName}`;

  return {
    title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: url,
    },
    robots: seo.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description: seo.description,
      url,
      siteName,
      type: "website",
      images: seo.ogImage
        ? [
            {
              url: seo.ogImage.src,
              width: seo.ogImage.width,
              height: seo.ogImage.height,
              alt: seo.ogImage.alt,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage.src] : undefined,
    },
  };
}

export function mergeSeo(
  defaults: SeoMeta,
  override?: Partial<SeoMeta>,
): SeoMeta {
  return {
    ...defaults,
    ...override,
    ogImage: override?.ogImage ?? defaults.ogImage,
    keywords: override?.keywords ?? defaults.keywords,
  };
}

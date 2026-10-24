import { z } from "zod";

export const mediaAssetSchema = z.object({
  src: z.string().min(1),
  alt: z.string(),
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
  blurDataURL: z.string().optional(),
  focalPoint: z
    .object({
      x: z.number().min(0).max(1),
      y: z.number().min(0).max(1),
    })
    .optional(),
});

export const seoMetaSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  canonical: z.string().optional(),
  ogImage: mediaAssetSchema.optional(),
  noIndex: z.boolean().optional(),
  keywords: z.array(z.string()).optional(),
});

export type MediaAsset = z.infer<typeof mediaAssetSchema>;
export type SeoMeta = z.infer<typeof seoMetaSchema>;

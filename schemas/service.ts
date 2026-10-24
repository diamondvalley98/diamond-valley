import { z } from "zod";
import { ctaActionSchema } from "./navigation";
import { mediaAssetSchema, seoMetaSchema } from "./seo";

export const serviceSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  name: z.string().min(1),
  summary: z.string().min(1),
  description: z.string().min(1),
  image: mediaAssetSchema.optional(),
  gallery: z.array(mediaAssetSchema).optional(),
  process: z
    .array(
      z.object({
        title: z.string(),
        body: z.string(),
      }),
    )
    .optional(),
  benefits: z.array(z.string()).optional(),
  cta: ctaActionSchema,
  seo: seoMetaSchema,
  order: z.number().int(),
});

export type Service = z.infer<typeof serviceSchema>;

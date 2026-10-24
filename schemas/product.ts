import { z } from "zod";
import { mediaAssetSchema, seoMetaSchema } from "./seo";

export const productAvailabilitySchema = z.enum([
  "in-stock",
  "made-to-order",
  "enquiry-only",
]);

export const productSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  name: z.string().min(1),
  category: z.string().min(1),
  /** Primary collection this product belongs to */
  collectionSlug: z.string().min(1),
  /** All collections this product appears in */
  collectionSlugs: z.array(z.string()).min(1),
  shortDescription: z.string().min(1),
  description: z.string().min(1),
  metal: z.string().optional(),
  stone: z.string().optional(),
  /** Display price string — omit for enquiry-only luxury flow */
  price: z.string().optional(),
  availability: productAvailabilitySchema,
  featured: z.boolean().optional(),
  images: z.array(mediaAssetSchema).min(1),
  tags: z.array(z.string()).optional(),
  /**
   * Facet metadata keyed by filter group `attribute`.
   * Values may be a single string or list (OR match within an attribute).
   */
  attributes: z
    .record(z.string(), z.union([z.string(), z.array(z.string())]))
    .optional(),
  seo: seoMetaSchema,
  enquiryLabel: z.string().optional(),
});

export type ProductAvailability = z.infer<typeof productAvailabilitySchema>;
export type Product = z.infer<typeof productSchema>;

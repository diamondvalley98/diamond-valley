import { z } from "zod";
import { filterGroupSchema } from "./filter";
import { mediaAssetSchema, seoMetaSchema } from "./seo";

/**
 * Facet/subcategory image gallery refs.
 * Convention: imageRefs[0] = cover, [1] = hero, [2+] = gallery.
 * Values are editorial search/reference queries (not downloaded assets).
 */
export const collectionSubcategorySchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  imageRefs: z.array(z.string().min(1)).min(2).max(3),
});

export const collectionSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  name: z.string().min(1),
  summary: z.string().min(1),
  description: z.string().optional(),
  image: mediaAssetSchema,
  productSlugs: z.array(z.string()),
  /** Content-defined facet groups for this collection (optional). */
  filters: z.array(filterGroupSchema).optional(),
  /**
   * Per-subcategory image galleries (additional to collection.image).
   * Names align with filter option labels for content-driven joins.
   */
  subcategories: z.array(collectionSubcategorySchema).optional(),
  seo: seoMetaSchema,
  order: z.number().int(),
});

export const categorySchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  name: z.string().min(1),
  description: z.string().optional(),
});

export type CollectionSubcategory = z.infer<typeof collectionSubcategorySchema>;
export type Collection = z.infer<typeof collectionSchema>;
export type Category = z.infer<typeof categorySchema>;

import { z } from "zod";

/**
 * Generic faceted filter group — content-driven, vertical-agnostic.
 * Same shape works for jewellery, restaurants, clinics, furniture, etc.
 */
export const filterGroupSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  /** Key into product.attributes (or any FilterableItem.attributes) */
  attribute: z.string().min(1),
  options: z.array(z.string().min(1)).min(1),
});

export type FilterGroup = z.infer<typeof filterGroupSchema>;

/** Selected facet values keyed by attribute name. */
export type FilterSelection = Record<string, string[]>;

/** Minimal shape required by the filtering engine. */
export type FilterableItem = {
  attributes?: Record<string, string | string[] | undefined>;
};

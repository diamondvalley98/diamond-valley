import { applyFilters } from "@/lib/filters/apply-filters";
import type {
  CollectionSubcategory,
  FilterGroup,
  FilterSelection,
  Product,
} from "@/types";

/**
 * Map a subcategory name to a filter selection by matching filter option labels.
 * Does not change the filtering engine — builds a selection the engine already understands.
 */
export function selectionForSubcategory(
  subcategory: Pick<CollectionSubcategory, "name">,
  filters: FilterGroup[],
): FilterSelection {
  for (const group of filters) {
    if (group.options.includes(subcategory.name)) {
      return { [group.attribute]: [subcategory.name] };
    }
  }
  return {};
}

export function countProductsForSubcategory(
  products: Product[],
  subcategory: Pick<CollectionSubcategory, "name">,
  filters: FilterGroup[],
): number {
  const selection = selectionForSubcategory(subcategory, filters);
  if (!Object.keys(selection).length) return 0;
  return applyFilters(products, selection).length;
}

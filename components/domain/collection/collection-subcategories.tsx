"use client";

import { useMemo } from "react";
import { SubcategoryGrid } from "@/components/domain/collection/subcategory-grid";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { countProductsForSubcategory } from "@/lib/filters/subcategory-selection";
import { cn } from "@/lib/utils";
import type {
  CollectionSubcategory,
  FilterGroup,
  Product,
} from "@/types";

export type CollectionSubcategoriesProps = {
  subcategories: CollectionSubcategory[];
  products: Product[];
  filters?: FilterGroup[];
  selectedId?: string | null;
  onSelect: (subcategory: CollectionSubcategory) => void;
  title?: string;
  description?: string;
  className?: string;
};

/**
 * Data-driven subcategory browse section for a collection detail page.
 */
export function CollectionSubcategories({
  subcategories,
  products,
  filters = [],
  selectedId = null,
  onSelect,
  title = "Shop by category",
  description,
  className,
}: CollectionSubcategoriesProps) {
  const items = useMemo(
    () =>
      subcategories
        .map((subcategory) => ({
          subcategory,
          productCount: countProductsForSubcategory(
            products,
            subcategory,
            filters,
          ),
        }))
        .filter(({ productCount }) => productCount > 0),
    [subcategories, products, filters],
  );

  if (!items.length) return null;

  return (
    <FadeIn className={cn(className)}>
      <SectionHeading
        title={title}
        description={description}
        titleId="collection-subcategories-heading"
      />
      <SubcategoryGrid
        items={items}
        selectedId={selectedId}
        onSelect={onSelect}
      />
    </FadeIn>
  );
}

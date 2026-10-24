"use client";

import { SubcategoryCard } from "@/components/domain/collection/subcategory-card";
import { cn } from "@/lib/utils";
import type { CollectionSubcategory } from "@/types";

export type SubcategoryGridItem = {
  subcategory: CollectionSubcategory;
  productCount: number;
};

export type SubcategoryGridProps = {
  items: SubcategoryGridItem[];
  selectedId?: string | null;
  onSelect: (subcategory: CollectionSubcategory) => void;
  className?: string;
};

/**
 * Responsive subcategory card grid — 1 / 2 / 4 columns.
 */
export function SubcategoryGrid({
  items,
  selectedId,
  onSelect,
  className,
}: SubcategoryGridProps) {
  if (!items.length) return null;

  return (
    <ul
      className={cn(
        "grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4",
        className,
      )}
    >
      {items.map(({ subcategory, productCount }) => (
        <li key={subcategory.id} className="h-full">
          <SubcategoryCard
            subcategory={subcategory}
            productCount={productCount}
            selected={selectedId === subcategory.id}
            onSelect={() => onSelect(subcategory)}
          />
        </li>
      ))}
    </ul>
  );
}

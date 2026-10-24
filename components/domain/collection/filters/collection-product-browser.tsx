"use client";

import { useMemo, useState } from "react";
import { ActiveFilters } from "@/components/domain/collection/filters/active-filters";
import { CollectionFilters } from "@/components/domain/collection/filters/collection-filters";
import { ClearFiltersButton } from "@/components/domain/collection/filters/clear-filters-button";
import { CollectionSubcategories } from "@/components/domain/collection/collection-subcategories";
import { ProductGrid } from "@/components/domain/product";
import { FadeIn } from "@/components/motion/fade-in";
import {
  applyFilters,
  clearFilters,
  getActiveFilterChips,
  removeFilterValue,
  toggleFilterValue,
} from "@/lib/filters/apply-filters";
import { selectionForSubcategory } from "@/lib/filters/subcategory-selection";
import type {
  CollectionSubcategory,
  FilterGroup,
  FilterSelection,
  Product,
} from "@/types";

export type CollectionProductBrowserProps = {
  products: Product[];
  filters?: FilterGroup[];
  subcategories?: CollectionSubcategory[];
  piecesHeading: string;
  enquireLabel?: string;
  emptyFiltersTitle?: string;
  emptyFiltersDescription?: string;
  clearFiltersLabel?: string;
};

const PRODUCTS_ANCHOR_ID = "collection-products";

/**
 * Client-side catalog browser: content filters → live ProductGrid updates.
 * No routes, no API — selection state only.
 */
export function CollectionProductBrowser({
  products,
  filters = [],
  subcategories = [],
  piecesHeading,
  enquireLabel = "Enquire Now",
  emptyFiltersTitle = "No products match your selected filters.",
  emptyFiltersDescription = "Try removing a filter or clear all to see every piece in this collection.",
  clearFiltersLabel = "Clear Filters",
}: CollectionProductBrowserProps) {
  const [selection, setSelection] = useState<FilterSelection>({});
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<
    string | null
  >(null);

  const filtered = useMemo(
    () => applyFilters(products, selection),
    [products, selection],
  );

  const chips = useMemo(
    () => getActiveFilterChips(selection, filters),
    [selection, filters],
  );

  function scrollToProducts() {
    if (typeof document === "undefined") return;
    document
      .getElementById(PRODUCTS_ANCHOR_ID)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleToggle(attribute: string, value: string) {
    setSelectedSubcategoryId(null);
    setSelection((prev) => toggleFilterValue(prev, attribute, value));
  }

  function handleRemove(attribute: string, value: string) {
    setSelectedSubcategoryId(null);
    setSelection((prev) => removeFilterValue(prev, attribute, value));
  }

  function handleClear() {
    setSelectedSubcategoryId(null);
    setSelection(clearFilters());
  }

  function handleSubcategorySelect(subcategory: CollectionSubcategory) {
    setSelectedSubcategoryId(subcategory.id);
    setSelection(selectionForSubcategory(subcategory, filters));
    // Defer scroll so filtered grid can paint
    requestAnimationFrame(() => {
      scrollToProducts();
    });
  }

  return (
    <div>
      {subcategories.length ? (
        <CollectionSubcategories
          className="mb-12 md:mb-14"
          subcategories={subcategories}
          products={products}
          filters={filters}
          selectedId={selectedSubcategoryId}
          onSelect={handleSubcategorySelect}
        />
      ) : null}

      {/* Facet radios only when there are no subcategory tiles — tiles already drive the filter. */}
      {!subcategories.length && filters.length ? (
        <FadeIn>
          <CollectionFilters
            groups={filters}
            selection={selection}
            onToggle={handleToggle}
          />
        </FadeIn>
      ) : null}

      <div id={PRODUCTS_ANCHOR_ID} className="mt-10 scroll-mt-28 md:mt-12">
        <FadeIn>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
              {piecesHeading}
            </h2>
            {chips.length ? (
              <p className="text-sm text-[var(--muted)]">
                Showing {filtered.length} of {products.length}
              </p>
            ) : null}
          </div>
        </FadeIn>

        <ActiveFilters
          chips={chips}
          onRemove={handleRemove}
          onClear={handleClear}
          className="mb-8"
        />

        {filtered.length ? (
          <ProductGrid products={filtered} enquireLabel={enquireLabel} />
        ) : (
          <div
            role="status"
            className="rounded-[var(--radius-lg)] border border-dashed border-[var(--border)] px-6 py-12 text-center md:px-10"
          >
            <p className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
              {emptyFiltersTitle}
            </p>
            <p className="mx-auto mt-3 max-w-md text-[var(--muted)]">
              {emptyFiltersDescription}
            </p>
            <div className="mt-6 flex justify-center">
              <ClearFiltersButton
                onClick={handleClear}
                label={clearFiltersLabel}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

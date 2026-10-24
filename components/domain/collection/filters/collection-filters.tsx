"use client";

import { FilterGroup } from "@/components/domain/collection/filters/filter-group";
import { cn } from "@/lib/utils";
import type { FilterGroup as FilterGroupType, FilterSelection } from "@/types";

export type CollectionFiltersProps = {
  groups: FilterGroupType[];
  selection: FilterSelection;
  onToggle: (attribute: string, value: string) => void;
  className?: string;
};

/**
 * Renders content-defined filter groups — no collection-specific branches.
 */
export function CollectionFilters({
  groups,
  selection,
  onToggle,
  className,
}: CollectionFiltersProps) {
  if (!groups.length) return null;

  return (
    <div
      className={cn(
        "grid gap-8 border-y border-[var(--border)] py-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
      role="region"
      aria-label="Product filters"
    >
      {groups.map((group) => (
        <FilterGroup
          key={group.id}
          group={group}
          selected={selection[group.attribute] ?? []}
          onToggle={(value) => onToggle(group.attribute, value)}
        />
      ))}
    </div>
  );
}

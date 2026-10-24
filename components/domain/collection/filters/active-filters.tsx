"use client";

import { ClearFiltersButton } from "@/components/domain/collection/filters/clear-filters-button";
import { cn } from "@/lib/utils";
import type { ActiveFilterChip } from "@/lib/filters/apply-filters";

export type ActiveFiltersProps = {
  chips: ActiveFilterChip[];
  onRemove: (attribute: string, value: string) => void;
  onClear: () => void;
  clearLabel?: string;
  className?: string;
};

/**
 * Removable chips for the current facet selection.
 */
export function ActiveFilters({
  chips,
  onRemove,
  onClear,
  clearLabel = "Clear All Filters",
  className,
}: ActiveFiltersProps) {
  if (!chips.length) return null;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 border-b border-[var(--border)] pb-5",
        className,
      )}
      aria-live="polite"
    >
      <span className="sr-only">Active filters</span>
      {chips.map((chip) => (
        <button
          key={`${chip.attribute}:${chip.value}`}
          type="button"
          onClick={() => onRemove(chip.attribute, chip.value)}
          className={cn(
            "inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--border)]",
            "bg-[color-mix(in_srgb,var(--card)_80%,transparent)] px-3 py-1.5 text-sm text-[var(--foreground)]",
            "transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]",
          )}
          aria-label={`Remove ${chip.label} filter ${chip.value}`}
        >
          <span>{chip.value}</span>
          <span aria-hidden className="text-[var(--muted)]">
            ×
          </span>
        </button>
      ))}
      <ClearFiltersButton onClick={onClear} label={clearLabel} />
    </div>
  );
}

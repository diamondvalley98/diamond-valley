"use client";

import { FilterOption } from "@/components/domain/collection/filters/filter-option";
import { cn } from "@/lib/utils";
import type { FilterGroup as FilterGroupType } from "@/types";

export type FilterGroupProps = {
  group: FilterGroupType;
  selected: string[];
  onToggle: (value: string) => void;
  className?: string;
};

/**
 * One labeled facet section (Material, Style, Brand, …).
 */
export function FilterGroup({
  group,
  selected,
  onToggle,
  className,
}: FilterGroupProps) {
  return (
    <fieldset className={cn("min-w-0", className)}>
      <legend className="mb-3 font-[family-name:var(--font-display)] text-lg tracking-tight text-[var(--foreground)]">
        {group.label}
      </legend>
      <div className="flex flex-col gap-0.5">
        {group.options.map((option) => {
          const optionId = `filter-${group.id}-${option.replace(/\s+/g, "-").toLowerCase()}`;
          return (
            <FilterOption
              key={option}
              id={optionId}
              name={`filter-${group.attribute}`}
              label={option}
              checked={selected.includes(option)}
              onChange={() => onToggle(option)}
            />
          );
        })}
      </div>
    </fieldset>
  );
}

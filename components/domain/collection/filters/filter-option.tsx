"use client";

import { cn } from "@/lib/utils";

export type FilterOptionProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  name: string;
  id: string;
};

/**
 * Single facet option — multi-select checkbox with luxury radio-like mark.
 */
export function FilterOption({
  label,
  checked,
  onChange,
  name,
  id,
}: FilterOptionProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "group flex cursor-pointer items-center gap-3 py-1.5 text-sm text-[var(--foreground)] transition-colors",
        "hover:text-[var(--accent)]",
      )}
    >
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="peer sr-only"
      />
      <span
        aria-hidden
        className={cn(
          "flex size-4 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-colors",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--ring)] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[var(--background)]",
          checked
            ? "border-[var(--accent)] bg-[var(--accent)]"
            : "bg-transparent group-hover:border-[var(--accent)]",
        )}
      >
        {checked ? (
          <span className="size-1.5 rounded-full bg-[var(--background)]" />
        ) : null}
      </span>
      <span className="leading-snug">{label}</span>
    </label>
  );
}

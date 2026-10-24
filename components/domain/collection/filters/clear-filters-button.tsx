"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ClearFiltersButtonProps = {
  onClick: () => void;
  label?: string;
  className?: string;
};

export function ClearFiltersButton({
  onClick,
  label = "Clear All Filters",
  className,
}: ClearFiltersButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={onClick}
      className={cn("px-2 text-[var(--muted)] hover:text-[var(--accent)]", className)}
    >
      {label}
    </Button>
  );
}

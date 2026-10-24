"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { resolveCoverImageRef } from "@/lib/media/resolve-image-ref";
import type { CollectionSubcategory } from "@/types";

export type SubcategoryCardProps = {
  subcategory: CollectionSubcategory;
  productCount: number;
  selected?: boolean;
  onSelect: () => void;
  piecesLabel?: (count: number) => string;
  className?: string;
};

function defaultPiecesLabel(count: number) {
  return count === 1 ? "1 Piece" : `${count} Pieces`;
}

/**
 * Subcategory browse card — cover from imageRefs[0], name, count, arrow.
 */
export function SubcategoryCard({
  subcategory,
  productCount,
  selected = false,
  onSelect,
  piecesLabel = defaultPiecesLabel,
  className,
}: SubcategoryCardProps) {
  const reduced = useReducedMotion();
  const cover = resolveCoverImageRef(
    subcategory.imageRefs,
    `${subcategory.name} jewellery`,
  );

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-[var(--radius-lg)] border bg-[var(--card)] text-left outline-none transition-token",
        "focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
        selected
          ? "border-[var(--primary)] shadow-[0_0_0_1px_var(--primary),0_0_32px_rgba(201,169,110,0.28)]"
          : "border-[var(--border)] shadow-token-sm",
        !reduced &&
          !selected &&
          "hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-token-glow",
        className,
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--card-elevated)]">
        {cover ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={cn(
              "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              !reduced && "group-hover:scale-[1.06]",
              selected && "scale-[1.03]",
            )}
          />
        ) : null}
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-500",
            !reduced && "group-hover:opacity-75",
          )}
        />
        {selected ? (
          <span className="absolute right-3 top-3 rounded-[var(--radius-full)] border border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_20%,transparent)] px-2.5 py-1 text-caption font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
            Selected
          </span>
        ) : null}
      </div>

      <div className="relative flex flex-1 items-end justify-between gap-3 p-4 md:p-5">
        <div className="min-w-0">
          <h3
            className={cn(
              "font-[family-name:var(--font-display)] text-xl tracking-tight text-[var(--foreground)] transition-token md:text-[1.35rem]",
              selected && "text-[var(--accent)]",
              !reduced && "group-hover:text-[var(--accent)]",
            )}
          >
            {subcategory.name}
          </h3>
          <p className="mt-1 text-caption font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
            {piecesLabel(productCount)}
          </p>
        </div>
        <ArrowRight
          className={cn(
            "mt-1 h-4 w-4 shrink-0 text-[var(--primary)] transition-transform duration-300",
            !reduced && "group-hover:translate-x-1",
            selected && "text-[var(--accent)]",
          )}
          aria-hidden
        />
      </div>
    </button>
  );
}

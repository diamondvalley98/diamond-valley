"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { AppLink } from "@/components/layout/app-link";
import { cn } from "@/lib/utils";
import type { Collection } from "@/types";

export type CollectionCardProps = {
  collection: Collection;
  /** CTA label — vertical-agnostic (e.g. Explore Collection / View Menu) */
  exploreLabel?: string;
  /** Base path — default jewellery collections; restaurants may use /menus */
  basePath?: string;
  className?: string;
};

/**
 * Editorial collection card — reusable across verticals via props + content.
 */
export function CollectionCard({
  collection,
  exploreLabel = "Explore Collection",
  basePath = "/collections",
  className,
}: CollectionCardProps) {
  const reduced = useReducedMotion();
  const href = `${basePath}/${collection.slug}`;

  return (
    <AppLink
      href={href}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] shadow-token-sm outline-none transition-token focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
        !reduced && "hover:-translate-y-1 hover:shadow-token-glow",
        className,
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={collection.image.src}
          alt={collection.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={cn(
            "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            !reduced && "group-hover:scale-[1.06]",
          )}
        />
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10 transition-opacity duration-500",
            !reduced && "group-hover:opacity-70",
          )}
        />
      </div>

      <div className="relative flex flex-1 flex-col p-5 md:p-6">
        <h3
          className={cn(
            "text-h3 text-[1.4rem] transition-token",
            !reduced && "group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]",
          )}
        >
          {collection.name}
        </h3>
        <p className="mt-2 flex-1 text-body-sm text-[var(--muted)]">
          {collection.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-caption font-medium uppercase tracking-[0.14em] text-[var(--primary)]">
          {exploreLabel}
          <ArrowRight
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-300",
              !reduced && "group-hover:translate-x-1",
            )}
            aria-hidden
          />
        </span>
      </div>
    </AppLink>
  );
}

/** Motion-friendly wrapper used by grids */
export function CollectionCardMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="h-full"
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

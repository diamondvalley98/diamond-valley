"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { AppLink } from "@/components/layout/app-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

export type ProductCardProps = {
  product: Product;
  /** Primary CTA label — vertical-agnostic */
  enquireLabel?: string;
  /** Detail page base path */
  basePath?: string;
  /** Enquiry destination — default contact with interest */
  enquireHref?: string;
  className?: string;
};

/**
 * Reusable product/offering card.
 * Works for jewellery, furniture, menu items, treatments via content + labels.
 */
export function ProductCard({
  product,
  enquireLabel = "Enquire Now",
  basePath = "/products",
  enquireHref,
  className,
}: ProductCardProps) {
  const reduced = useReducedMotion();
  const image = product.images[0];
  const detailHref = `${basePath}/${product.slug}`;
  const enquiry =
    enquireHref ?? `/contact?interest=${encodeURIComponent(product.name)}`;

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] shadow-token-sm transition-token",
        !reduced && "hover:-translate-y-1 hover:shadow-token-glow",
        className,
      )}
    >
      <AppLink
        href={detailHref}
        className="relative block aspect-[4/5] overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-inset"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={cn(
            "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            !reduced && "group-hover:scale-[1.06]",
          )}
        />
        <Badge className="absolute left-3 top-3 bg-[color-mix(in_srgb,var(--background)_75%,transparent)] backdrop-blur-sm">
          {product.category}
        </Badge>
      </AppLink>

      <div className="flex flex-1 flex-col p-5">
        <AppLink
          href={detailHref}
          className="outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
        >
          <h3 className="text-h3 text-[1.35rem] transition-token group-hover:text-[var(--accent)]">
            {product.name}
          </h3>
        </AppLink>
        <p className="mt-2 flex-1 text-body-sm text-[var(--muted)]">
          {product.shortDescription}
        </p>
        {product.price ? (
          <p className="mt-3 text-sm font-medium text-[var(--accent)]">{product.price}</p>
        ) : null}
        <Button asChild className="mt-5 w-full" size="sm">
          <AppLink href={enquiry}>{enquireLabel}</AppLink>
        </Button>
      </div>
    </article>
  );
}

export function ProductCardMotion({ children }: { children: React.ReactNode }) {
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

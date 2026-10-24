"use client";

import { motion } from "framer-motion";
import {
  ProductCard,
  ProductCardMotion,
} from "@/components/domain/product/product-card";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

export type ProductGridProps = {
  products: Product[];
  enquireLabel?: string;
  basePath?: string;
  columns?: 2 | 3 | 4;
  className?: string;
};

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/**
 * Equal-height product grid used by homepage, collections, related, search.
 */
export function ProductGrid({
  products,
  enquireLabel,
  basePath,
  columns = 3,
  className,
}: ProductGridProps) {
  const gridClass = cn(
    "grid auto-rows-fr gap-6 sm:grid-cols-2",
    columns === 2 && "lg:grid-cols-2",
    columns === 3 && "lg:grid-cols-3",
    columns === 4 && "lg:grid-cols-4",
    className,
  );

  if (!products.length) return null;

  return (
    <motion.div
      key={products.map((p) => p.id).join("|")}
      className={gridClass}
      variants={listVariants}
      initial="hidden"
      animate="show"
    >
      {products.map((product) => (
        <ProductCardMotion key={product.id}>
          <ProductCard
            product={product}
            enquireLabel={enquireLabel}
            basePath={basePath}
          />
        </ProductCardMotion>
      ))}
    </motion.div>
  );
}

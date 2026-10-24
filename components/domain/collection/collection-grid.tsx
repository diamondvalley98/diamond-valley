"use client";

import { motion } from "framer-motion";
import {
  CollectionCard,
  CollectionCardMotion,
} from "@/components/domain/collection/collection-card";
import { cn } from "@/lib/utils";
import type { Collection } from "@/types";

export type CollectionGridProps = {
  collections: Collection[];
  exploreLabel?: string;
  basePath?: string;
  className?: string;
  /** Desktop column count — default 4 for featured showroom layout */
  columns?: 3 | 4;
};

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

/**
 * Equal-height collection grid. Column count is presentational only —
 * content drives what appears.
 */
export function CollectionGrid({
  collections,
  exploreLabel,
  basePath,
  className,
  columns = 4,
}: CollectionGridProps) {
  const gridClass = cn(
    "grid auto-rows-fr gap-6 sm:grid-cols-2",
    columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
    className,
  );

  return (
    <motion.div
      className={gridClass}
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
    >
      {collections.map((collection) => (
        <CollectionCardMotion key={collection.id}>
          <CollectionCard
            collection={collection}
            exploreLabel={exploreLabel}
            basePath={basePath}
          />
        </CollectionCardMotion>
      ))}
    </motion.div>
  );
}

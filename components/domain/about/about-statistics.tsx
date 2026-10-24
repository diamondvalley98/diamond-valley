"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type AboutStatistic = {
  id: string;
  value: string;
  label: string;
};

export type AboutStatisticsProps = {
  statistics: AboutStatistic[];
  className?: string;
};

/**
 * Elegant statistics strip for About sections.
 */
export function AboutStatistics({
  statistics,
  className,
}: AboutStatisticsProps) {
  const reduced = useReducedMotion();
  if (!statistics.length) return null;

  return (
    <motion.ul
      className={cn(
        "grid gap-8 border-t border-[var(--border)] pt-10 text-center sm:grid-cols-3",
        className,
      )}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {statistics.map((stat) => (
        <li key={stat.id}>
          <p className="font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--accent)] md:text-4xl">
            {stat.value}
          </p>
          <p className="mt-2 text-caption font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
            {stat.label}
          </p>
        </li>
      ))}
    </motion.ul>
  );
}

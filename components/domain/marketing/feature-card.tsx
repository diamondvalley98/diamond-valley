"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

export type FeatureCardProps = {
  title: string;
  description: string;
  icon?: string;
  className?: string;
};

/**
 * Premium feature card for Brand Promise / trust grids.
 * Industry-agnostic — all copy via props.
 */
export function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "group rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] p-6 transition-token md:p-7",
        !reduced &&
          "hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-token-glow",
        className,
      )}
      whileHover={
        reduced
          ? undefined
          : {
              y: -4,
              transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
            }
      }
    >
      <div
        className={cn(
          "mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border)] bg-[color-mix(in_srgb,var(--primary)_10%,transparent)] text-[var(--primary)] transition-token",
          !reduced && "group-hover:shadow-[0_0_24px_rgba(201,169,110,0.35)]",
        )}
      >
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <h3 className="text-h3 text-[1.35rem]">{title}</h3>
      <p className="mt-3 text-body-sm text-[var(--muted)]">{description}</p>
    </motion.article>
  );
}

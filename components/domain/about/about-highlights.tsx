"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type AboutHighlight = {
  id: string;
  title: string;
};

export type AboutHighlightsProps = {
  highlights: AboutHighlight[];
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Compact highlight list for About sections — vertical-agnostic.
 */
export function AboutHighlights({ highlights, className }: AboutHighlightsProps) {
  const reduced = useReducedMotion();
  if (!highlights.length) return null;

  return (
    <ul className={cn("mt-8 grid gap-3 sm:grid-cols-2", className)}>
      {highlights.map((highlight, index) => (
        <motion.li
          key={highlight.id}
          className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_70%,transparent)] px-4 py-3"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.45,
            ease,
            delay: reduced ? 0 : 0.1 + index * 0.07,
          }}
        >
          <span
            aria-hidden
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]"
          />
          <span className="text-sm font-medium tracking-wide">
            {highlight.title}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

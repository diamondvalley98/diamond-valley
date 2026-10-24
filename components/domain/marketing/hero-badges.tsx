"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/shared/icon";
import type { HeroBadge } from "@/types";

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.45 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroBadges({ badges }: { badges: HeroBadge[] }) {
  return (
    <motion.ul
      className="mt-8 flex flex-wrap gap-2"
      variants={listVariants}
      initial="hidden"
      animate="show"
    >
      {badges.map((badge) => (
        <motion.li key={badge.id} variants={itemVariants}>
          <BadgePill badge={badge} />
        </motion.li>
      ))}
    </motion.ul>
  );
}

function BadgePill({ badge }: { badge: HeroBadge }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-full)] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_80%,transparent)] px-3 py-1.5 text-caption text-[var(--accent)] backdrop-blur-sm">
      <Icon name={badge.icon} className="h-3.5 w-3.5 text-[var(--primary)]" />
      {badge.label}
    </span>
  );
}

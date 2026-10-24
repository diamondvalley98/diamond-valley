"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/shared/icon";
import { AppLink } from "@/components/layout/app-link";

export function HeroContactStrip({
  locationLabel,
  phone,
  phoneHref,
}: {
  locationLabel: string;
  phone: string;
  phoneHref: string;
}) {
  return (
    <motion.div
      className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-caption tracking-wide text-[var(--muted-foreground)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="inline-flex items-center gap-1.5">
        <Icon name="MapPin" className="h-3.5 w-3.5 text-[var(--primary)] opacity-80" />
        <span>{locationLabel}</span>
      </span>
      <AppLink
        href={phoneHref}
        className="inline-flex items-center gap-1.5 transition-token-fast hover:text-[var(--muted)]"
      >
        <Icon name="Phone" className="h-3.5 w-3.5 text-[var(--primary)] opacity-80" />
        <span>{phone}</span>
      </AppLink>
    </motion.div>
  );
}

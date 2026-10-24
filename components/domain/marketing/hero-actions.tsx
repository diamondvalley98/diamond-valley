"use client";

import { motion } from "framer-motion";
import { AppLink } from "@/components/layout/app-link";
import { Button } from "@/components/ui/button";
import type { HeroCta } from "@/types";

export function HeroActions({
  primary,
  secondary,
}: {
  primary: HeroCta;
  secondary: HeroCta;
}) {
  return (
    <motion.div
      className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Button asChild size="lg" className="w-full sm:w-auto">
        <AppLink href={primary.href ?? "#collections"}>{primary.label}</AppLink>
      </Button>

      {/* TODO: Replace with enquiry Modal trigger when modal flow is ready */}
      {secondary.pendingModal ? (
        <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
          <AppLink href={secondary.href ?? "/contact#enquiry"}>
            {secondary.label}
          </AppLink>
        </Button>
      ) : (
        <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
          <AppLink href={secondary.href ?? "/contact"}>{secondary.label}</AppLink>
        </Button>
      )}
    </motion.div>
  );
}

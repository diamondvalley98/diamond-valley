"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Always renders the same element type so SSR/client useId trees stay aligned
 * (Radix accordion IDs etc.). Reduced motion is handled by MotionConfigProvider.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

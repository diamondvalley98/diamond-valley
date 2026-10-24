"use client";

import { motion } from "framer-motion";

/**
 * Always the same wrapper element on server and client — branching on
 * useReducedMotion was shifting React useId and breaking Radix hydration.
 * Prefers-reduced-motion is applied via MotionConfigProvider.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

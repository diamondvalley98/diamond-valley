"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const HERO_VIDEO_SRC = "/assets/jewelry_video.mp4";

export type HeroMediaProps = {
  /** Static fallback / poster frame */
  posterSrc?: string;
};

/**
 * Full-bleed decorative hero background video with luxury overlays.
 * Not animated — text motion lives in the Hero content layer.
 */
export function HeroMedia({ posterSrc }: HeroMediaProps) {
  const reduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play/pause after mount so SSR HTML always matches the client tree
  // (avoids useReducedMotion flipping <video> ↔ <img> during hydration).
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    if (reduced) {
      video.pause();
      return;
    }

    void video.play().catch(() => {
      /* Autoplay may be blocked; poster/first frame remains visible. */
    });
  }, [reduced]);

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* Layer 1 — video (stable markup for hydration) */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover [filter:brightness(0.65)_contrast(1.1)]"
        loop
        muted
        playsInline
        preload="metadata"
        poster={posterSrc}
        tabIndex={-1}
        suppressHydrationWarning
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Layer 2 — black overlay ~65% */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Layer 3 — heavier fade on the right; left stays more open */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/35 to-black" />
    </div>
  );
}

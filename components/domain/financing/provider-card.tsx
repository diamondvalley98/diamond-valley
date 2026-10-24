"use client";

import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { FinancingProvider } from "@/content/financing";

export type ProviderCardProps = {
  provider: FinancingProvider;
  className?: string;
};

/**
 * Gateway card to a financing partner HTML experience.
 */
export function ProviderCard({ provider, className }: ProviderCardProps) {
  const reduced = useReducedMotion();

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] p-6 shadow-token-sm transition-token md:p-7",
        !reduced &&
          "hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-token-glow",
        className,
      )}
    >
      <div
        className="mb-5 h-px w-12 bg-gradient-to-r from-[var(--primary)] to-transparent"
        aria-hidden
      />
      <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-[var(--foreground)] transition-token group-hover:text-[var(--accent)]">
        {provider.name}
      </h3>
      <p className="mt-3 flex-1 text-[var(--muted)] leading-relaxed">
        {provider.description}
      </p>
      <div className="mt-8">
        <Button asChild className="w-full sm:w-auto">
          <a href={provider.href}>
            {provider.ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </Button>
      </div>
    </article>
  );
}

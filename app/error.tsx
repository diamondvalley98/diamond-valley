"use client";

import { Button } from "@/components/ui/button";
import { PageContainer, Section } from "@/components/layout/page-container";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Section>
      <PageContainer className="text-center">
        <h1 className="font-[family-name:var(--font-display)] text-5xl">
          Something went wrong
        </h1>
        <p className="mt-4 text-[var(--muted)]">Please try again.</p>
        <Button className="mt-8" onClick={reset}>
          Try again
        </Button>
      </PageContainer>
    </Section>
  );
}

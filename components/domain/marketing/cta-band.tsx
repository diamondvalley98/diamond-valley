import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageContainer, Section } from "@/components/layout/page-container";
import { FadeIn } from "@/components/motion/fade-in";
import type { CtaBand as CtaBandContent } from "@/types";

export function CtaBand({ content }: { content: CtaBandContent }) {
  return (
    <Section>
      <PageContainer>
        <FadeIn>
          <div className="rounded-lg border border-[var(--border)] bg-[linear-gradient(145deg,rgba(201,169,110,0.12),transparent_40%),var(--card)] px-6 py-10 md:px-12 md:py-14">
            {content.eyebrow ? (
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
                {content.eyebrow}
              </p>
            ) : null}
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl md:text-5xl">
              {content.title}
            </h2>
            {content.body ? (
              <p className="mt-4 max-w-2xl text-[var(--muted)]">{content.body}</p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              {content.actions.map((action) => {
                const variant = action.intent === "secondary" ? "secondary" : "default";
                if (
                  action.href.startsWith("tel:") ||
                  action.href.startsWith("mailto:") ||
                  action.href.startsWith("http")
                ) {
                  return (
                    <Button asChild key={action.href} variant={variant}>
                      <a href={action.href}>{action.label}</a>
                    </Button>
                  );
                }
                return (
                  <Button asChild key={action.href} variant={variant}>
                    <Link href={action.href}>{action.label}</Link>
                  </Button>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </PageContainer>
    </Section>
  );
}

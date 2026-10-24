import Link from "next/link";
import { PageContainer, Section } from "@/components/layout/page-container";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SkipToContent />
      <Section>
        <PageContainer className="text-center">
          <main id="main" tabIndex={-1} className="outline-none">
            <h1 className="font-[family-name:var(--font-display)] text-5xl">
              Page not found
            </h1>
            <p className="mt-4 text-[var(--muted)]">
              The page you are looking for does not exist.
            </p>
            <Button asChild className="mt-8">
              <Link href="/">Back home</Link>
            </Button>
          </main>
        </PageContainer>
      </Section>
    </>
  );
}

import { Icon } from "@/components/shared/icon";
import { PageContainer, Section } from "@/components/layout/page-container";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";

export type TrustItem = {
  id: string;
  title: string;
  body: string;
  icon?: string;
};

export function TrustStrip({ items }: { items: TrustItem[] }) {
  if (!items.length) return null;
  return (
    <Section className="!py-12 md:!py-16">
      <PageContainer>
        <FadeIn>
          <StaggerGroup className="grid gap-8 md:grid-cols-3">
            {items.map((item) => (
              <StaggerItem key={item.id}>
                <div className="border-t border-[var(--border)] pt-5">
                  <Icon name={item.icon} className="mb-3 h-5 w-5 text-[var(--primary)]" />
                  <h3 className="font-[family-name:var(--font-display)] text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </FadeIn>
      </PageContainer>
    </Section>
  );
}

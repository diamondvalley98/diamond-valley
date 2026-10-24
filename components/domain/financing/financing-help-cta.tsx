import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { PageContainer, Section } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { FinancingHelpContact } from "@/content/financing";

export type FinancingHelpCtaProps = {
  label: string;
  title: string;
  description: string;
  contactCtaLabel: string;
  contactCtaHref: string;
  callLabel: string;
  contact: FinancingHelpContact;
  className?: string;
};

/**
 * Need-help CTA with phone, email, and address — matches luxury contact callouts.
 */
export function FinancingHelpCta({
  label,
  title,
  description,
  contactCtaLabel,
  contactCtaHref,
  callLabel,
  contact,
  className,
}: FinancingHelpCtaProps) {
  return (
    <Section
      id="financing-help"
      aria-labelledby="financing-help-heading"
      className={className}
    >
      <PageContainer>
        <FadeIn>
          <aside
            className={cn(
              "rounded-[var(--radius-lg)] border border-[var(--border)] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--primary)_12%,transparent),transparent_45%),var(--card)] p-6 shadow-token-sm md:p-10",
            )}
          >
            <p className="text-overline text-[var(--primary)]">{label}</p>
            <h2
              id="financing-help-heading"
              className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              {description}
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              <li className="flex items-start gap-3 text-sm text-[var(--foreground)]">
                <Phone className="mt-0.5 size-4 shrink-0 text-[var(--primary)]" aria-hidden />
                <a
                  href={contact.phoneHref}
                  className="transition-token hover:text-[var(--accent)]"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--foreground)]">
                <Mail className="mt-0.5 size-4 shrink-0 text-[var(--primary)]" aria-hidden />
                <a
                  href={contact.emailHref}
                  className="break-all transition-token hover:text-[var(--accent)]"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--muted)]">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--primary)]" aria-hidden />
                <span>
                  {contact.addressLines.map((line) => (
                    <span key={line} className="block text-[var(--foreground)]">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactCtaHref}>{contactCtaLabel}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={contact.phoneHref}>{callLabel}</a>
              </Button>
            </div>
          </aside>
        </FadeIn>
      </PageContainer>
    </Section>
  );
}

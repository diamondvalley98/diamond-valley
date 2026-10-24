import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PostalAddress } from "@/types";

export type ContactInfoCardProps = {
  businessName: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: PostalAddress;
  hoursSummary: string;
  callLabel: string;
  directionsLabel: string;
  directionsHref: string;
  className?: string;
};

function formatAddress(address: PostalAddress) {
  const line1 = [address.street, address.suite].filter(Boolean).join(", ");
  const line2 = `${address.city}, ${address.region} ${address.postalCode}`;
  return { line1, line2 };
}

/**
 * Compact business summary for contact sections.
 */
export function ContactInfoCard({
  businessName,
  phone,
  phoneHref,
  email,
  address,
  hoursSummary,
  callLabel,
  directionsLabel,
  directionsHref,
  className,
}: ContactInfoCardProps) {
  const { line1, line2 } = formatAddress(address);

  return (
    <aside
      className={cn(
        "flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--border)] bg-[linear-gradient(160deg,color-mix(in_srgb,var(--primary)_10%,transparent),transparent_45%),var(--card)] p-6 shadow-token-sm md:p-8",
        className,
      )}
    >
      <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
        {businessName}
      </h3>

      <ul className="mt-8 space-y-5">
        <li className="flex gap-3">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]" aria-hidden />
          <div>
            <p className="text-caption font-medium uppercase tracking-[0.14em] text-[var(--primary)]">
              Phone
            </p>
            <a
              href={phoneHref}
              className="mt-1 inline-block transition-token hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
            >
              {phone}
            </a>
          </div>
        </li>

        <li className="flex gap-3">
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]" aria-hidden />
          <div>
            <p className="text-caption font-medium uppercase tracking-[0.14em] text-[var(--primary)]">
              Email
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-1 inline-block break-all transition-token hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
            >
              {email}
            </a>
          </div>
        </li>

        <li className="flex gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]" aria-hidden />
          <div>
            <p className="text-caption font-medium uppercase tracking-[0.14em] text-[var(--primary)]">
              Address
            </p>
            <address className="mt-1 not-italic leading-relaxed">
              <span className="block">{line1}</span>
              <span className="block">{line2}</span>
            </address>
          </div>
        </li>

        <li className="flex gap-3">
          <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]" aria-hidden />
          <div>
            <p className="text-caption font-medium uppercase tracking-[0.14em] text-[var(--primary)]">
              Hours
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
              {hoursSummary}
            </p>
          </div>
        </li>
      </ul>

      <div className="mt-auto flex flex-wrap gap-3 pt-8">
        <Button asChild size="lg">
          <a href={phoneHref}>{callLabel}</a>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <a href={directionsHref} target="_blank" rel="noreferrer">
            {directionsLabel}
          </a>
        </Button>
      </div>
    </aside>
  );
}

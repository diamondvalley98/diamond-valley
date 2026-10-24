import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BusinessHours } from "@/components/domain/location/business-hours";
import { cn } from "@/lib/utils";
import type { OpeningHours, PostalAddress } from "@/types";

export type LocationCardProps = {
  address: PostalAddress;
  phone: string;
  phoneHref: string;
  email: string;
  hours: OpeningHours[];
  parkingNote?: string;
  className?: string;
};

function formatAddressLines(address: PostalAddress) {
  const line1 = [address.street, address.suite].filter(Boolean).join(", ");
  const line2 = `${address.city}, ${address.region} ${address.postalCode}`;
  return { line1, line2 };
}

/**
 * Showroom details card — address, phone, email, hours.
 */
export function LocationCard({
  address,
  phone,
  phoneHref,
  email,
  hours,
  parkingNote,
  className,
}: LocationCardProps) {
  const { line1, line2 } = formatAddressLines(address);

  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] p-6 shadow-token-sm md:p-8",
        className,
      )}
    >
      <div className="space-y-6">
        <div className="flex gap-3">
          <MapPin
            className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]"
            aria-hidden
          />
          <div>
            <p className="text-caption font-medium uppercase tracking-[0.14em] text-[var(--primary)]">
              Address
            </p>
            <address className="mt-1 not-italic leading-relaxed">
              <span className="block">{line1}</span>
              <span className="block">{line2}</span>
            </address>
          </div>
        </div>

        <div className="flex gap-3">
          <Phone
            className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]"
            aria-hidden
          />
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
        </div>

        <div className="flex gap-3">
          <Mail
            className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]"
            aria-hidden
          />
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
        </div>

        <div className="flex gap-3">
          <Clock
            className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]"
            aria-hidden
          />
          <div className="min-w-0 flex-1">
            <p className="mb-3 text-caption font-medium uppercase tracking-[0.14em] text-[var(--primary)]">
              Opening Hours
            </p>
            <BusinessHours hours={hours} />
          </div>
        </div>

        {parkingNote ? (
          <p className="border-t border-[var(--border)] pt-4 text-sm text-[var(--muted)]">
            {parkingNote}
          </p>
        ) : null}
      </div>
    </div>
  );
}

import { BusinessHours } from "@/components/domain/location/business-hours";
import type { Business } from "@/types";

export function HoursList({ hours }: { hours: Business["hours"] }) {
  return <BusinessHours hours={hours} />;
}

export function LocationBlock({ business }: { business: Business }) {
  const line = [
    business.address.street,
    business.address.suite,
    `${business.address.city}, ${business.address.region} ${business.address.postalCode}`,
  ]
    .filter(Boolean)
    .join(", ");

  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(line)}`;

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--primary)]">
          Address
        </p>
        <a
          href={maps}
          target="_blank"
          rel="noreferrer"
          className="mt-1 block hover:text-[var(--accent)]"
        >
          {line}
        </a>
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--primary)]">
          Phone
        </p>
        <a href={business.phoneHref} className="mt-1 block hover:text-[var(--accent)]">
          {business.phone}
        </a>
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--primary)]">
          Email
        </p>
        <a
          href={`mailto:${business.email}`}
          className="mt-1 block hover:text-[var(--accent)]"
        >
          {business.email}
        </a>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-[var(--primary)]">
          Hours
        </p>
        <BusinessHours hours={business.hours} />
      </div>
    </div>
  );
}

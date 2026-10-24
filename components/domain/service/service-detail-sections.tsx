import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceProcess } from "@/components/domain/service/service-process";
import type { Service } from "@/types";

export function ServiceDetailSections({ service }: { service: Service }) {
  return (
    <div className="mt-10 space-y-10">
      {service.benefits?.length ? (
        <ul className="grid gap-3 md:grid-cols-3">
          {service.benefits.map((benefit) => (
            <li
              key={benefit}
              className="border border-[var(--border)] px-4 py-3 text-sm text-[var(--muted)]"
            >
              {benefit}
            </li>
          ))}
        </ul>
      ) : null}
      <ServiceProcess steps={service.process} />
      <Button asChild>
        {service.cta.href.startsWith("http") ||
        service.cta.href.startsWith("tel:") ||
        service.cta.href.startsWith("mailto:") ? (
          <a href={service.cta.href}>{service.cta.label}</a>
        ) : (
          <Link href={service.cta.href}>{service.cta.label}</Link>
        )}
      </Button>
    </div>
  );
}

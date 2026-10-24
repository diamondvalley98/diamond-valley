import Link from "next/link";
import { ResponsiveImage } from "@/components/shared/responsive-image";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group grid gap-4 border-t border-[var(--border)] pt-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] md:grid-cols-[1.1fr_1fr] md:items-center"
    >
      {service.image ? (
        <ResponsiveImage
          media={service.image}
          className="aspect-[16/10] bg-[var(--card)]"
          imageClassName="transition duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : null}
      <div>
        <h3 className="font-[family-name:var(--font-display)] text-3xl transition group-hover:text-[var(--accent)]">
          {service.name}
        </h3>
        <p className="mt-2 text-[var(--muted)]">{service.summary}</p>
      </div>
    </Link>
  );
}

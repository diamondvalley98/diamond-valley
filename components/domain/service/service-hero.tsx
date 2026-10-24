import { ResponsiveImage } from "@/components/shared/responsive-image";
import type { Service } from "@/types";

export function ServiceHero({ service }: { service: Service }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--primary)]">
          Service
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl md:text-6xl">
          {service.name}
        </h1>
        <p className="mt-4 max-w-xl text-[var(--muted)]">{service.description}</p>
      </div>
      {service.image ? (
        <ResponsiveImage
          media={service.image}
          className="aspect-[4/3] bg-[var(--card)]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      ) : null}
    </div>
  );
}

import { cn } from "@/lib/utils";

const STORE_IMAGE = "/assets/store_image.jpg";

export type StoreExperienceBandProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * One continuous storefront background behind Visit / FAQ / Contact.
 * Loads the image once via CSS — not per section.
 */
export function StoreExperienceBand({
  children,
  className,
}: StoreExperienceBandProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden bg-[var(--background)]",
        // Fixed parallax on desktop only — mobile keeps normal scroll for perf
        "bg-cover bg-center bg-no-repeat md:bg-fixed",
        className,
      )}
      style={{ backgroundImage: `url(${STORE_IMAGE})` }}
    >
      {/* Layer 2 — black overlay ~75% */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-black/[0.75]"
      />

      {/* Layer 3 — subtle vertical vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.1)_48%,rgba(0,0,0,0.42)_100%)]"
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

/** Glass panel surface for cards floating over the storefront band. */
export const storeExperiencePanelClassName =
  "border-[rgba(212,175,55,0.18)] bg-[rgba(12,12,12,0.82)] shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-[10px]";

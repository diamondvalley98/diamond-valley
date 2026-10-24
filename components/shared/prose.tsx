import { cn } from "@/lib/utils";

export function Prose({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4 text-base leading-relaxed text-[var(--muted)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-[var(--radius-full)] border border-[var(--border)] px-2.5 py-0.5 text-caption font-medium tracking-wide text-[var(--accent)]",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };

import { cn } from "@/lib/utils";

export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  titleId?: string;
  className?: string;
  action?: React.ReactNode;
};

/**
 * Reusable section title block — industry-agnostic.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  titleId,
  className,
  action,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-4",
        align === "center" && "items-center text-center",
        action && "sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className={cn(align === "center" && "mx-auto max-w-2xl")}>
        {eyebrow ? <p className="text-overline mb-2">{eyebrow}</p> : null}
        <Heading
          id={titleId}
          className={Heading === "h1" ? "text-h1" : "text-h2"}
        >
          {title}
        </Heading>
        {description ? (
          <p
            className={cn(
              "mt-3 text-[var(--muted)]",
              align === "center" && "mx-auto max-w-2xl",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

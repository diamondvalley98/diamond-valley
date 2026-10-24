import { cn } from "@/lib/utils";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Wider max width for media-heavy layouts */
  wide?: boolean;
  as?: "div" | "section" | "article" | "main";
};

/**
 * Horizontal page container. Prefer this over ad-hoc max-width wrappers.
 */
export function Container({
  className,
  wide = false,
  as: Comp = "div",
  ...props
}: ContainerProps) {
  return (
    <Comp
      className={cn(
        "mx-auto w-full px-[var(--container-px)]",
        wide ? "max-w-7xl" : "max-w-[var(--container-max)]",
        className,
      )}
      {...props}
    />
  );
}

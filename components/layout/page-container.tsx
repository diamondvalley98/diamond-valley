import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
};

/**
 * Standard content width wrapper for marketing pages.
 * Built on the design-system Container primitive.
 */
export function PageContainer({ children, className, wide }: PageContainerProps) {
  return (
    <Container wide={wide} className={className}>
      {children}
    </Container>
  );
}

export type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
};

/**
 * Vertical rhythm section. Uses design-system section-y utility.
 */
export function Section({
  children,
  className,
  id,
  "aria-labelledby": ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("section-y", className)}
    >
      {children}
    </section>
  );
}

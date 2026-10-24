import { PageTransition } from "@/components/motion/page-transition";

/**
 * Animates page content only — keeps Navbar/Footer stable across routes.
 */
export default function MarketingTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTransition>{children}</PageTransition>;
}

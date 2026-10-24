import {
  BadgeCheck,
  Gem,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  BadgeCheck,
  Gem,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
};

export function Icon({
  name,
  className,
}: {
  name?: string;
  className?: string;
}) {
  if (!name) return null;
  const Comp = icons[name];
  if (!Comp) return null;
  return <Comp className={className} aria-hidden />;
}

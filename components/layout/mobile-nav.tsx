"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { AppLink } from "@/components/layout/app-link";
import { BrandMark } from "@/components/layout/main-nav";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { NavigationItem } from "@/types";

export type MobileNavProps = {
  brandName: string;
  items: NavigationItem[];
  cta?: { label: string; href: string };
};

export function MobileNav({ brandName, items, cta }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu + release scroll lock after route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" aria-hidden />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <BrandMark name={brandName} className="text-2xl" onNavigate={close} />
          </SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="mt-2 flex flex-col">
          {items.map((item) => (
            <AppLink
              key={`${item.href}-${item.label}`}
              href={item.href}
              external={item.external}
              onClick={close}
              className="border-b border-[var(--border)] py-4 font-[family-name:var(--font-display)] text-2xl transition-token-fast hover:text-[var(--accent)]"
            >
              {item.label}
            </AppLink>
          ))}
          {cta ? (
            <Button asChild className="mt-6">
              <AppLink href={cta.href} onClick={close}>
                {cta.label}
              </AppLink>
            </Button>
          ) : null}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

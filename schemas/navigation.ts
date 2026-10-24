import { z } from "zod";

export const navigationItemSchema: z.ZodType<NavigationItem> = z.lazy(() =>
  z.object({
    label: z.string().min(1),
    href: z.string().min(1),
    children: z.array(navigationItemSchema).optional(),
    external: z.boolean().optional(),
  }),
);

export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationItem[];
  external?: boolean;
};

export const ctaActionSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  intent: z.enum(["primary", "secondary", "phone", "email"]),
});

export const navigationSchema = z.object({
  primary: z.array(navigationItemSchema),
  cta: z
    .object({
      label: z.string().min(1),
      href: z.string().min(1),
    })
    .optional(),
});

export type CtaAction = z.infer<typeof ctaActionSchema>;
export type Navigation = z.infer<typeof navigationSchema>;

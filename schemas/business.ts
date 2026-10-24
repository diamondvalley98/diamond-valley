import { z } from "zod";

export const postalAddressSchema = z.object({
  street: z.string().min(1),
  suite: z.string().optional(),
  city: z.string().min(1),
  region: z.string().min(1),
  postalCode: z.string().min(1),
  country: z.string().min(1),
});

export const socialLinkSchema = z.object({
  platform: z.string().min(1),
  href: z.string().url(),
  label: z.string().min(1),
});

export const openingHoursSchema = z.object({
  days: z.array(z.string()).min(1),
  open: z.string().min(1),
  close: z.string().min(1),
  note: z.string().optional(),
});

export const businessSchema = z.object({
  legalName: z.string().min(1),
  brandName: z.string().min(1),
  tagline: z.string().optional(),
  phone: z.string().min(1),
  phoneHref: z.string().min(1),
  email: z.string().email(),
  website: z.string().url(),
  address: postalAddressSchema,
  geo: z
    .object({
      lat: z.number(),
      lng: z.number(),
    })
    .optional(),
  hours: z.array(openingHoursSchema),
  socials: z.array(socialLinkSchema),
  priceRange: z.string().optional(),
  foundingYear: z.number().int().optional(),
  brandPromise: z
    .object({
      label: z.string(),
      title: z.string(),
      description: z.string(),
      features: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          description: z.string(),
          icon: z.string().optional(),
        }),
      ),
    })
    .optional(),
});

export type PostalAddress = z.infer<typeof postalAddressSchema>;
export type SocialLink = z.infer<typeof socialLinkSchema>;
export type OpeningHours = z.infer<typeof openingHoursSchema>;
export type Business = z.infer<typeof businessSchema>;

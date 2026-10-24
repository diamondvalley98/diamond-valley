import { z } from "zod";
import {
  openingHoursSchema,
  postalAddressSchema,
} from "@/schemas/business";

export const locationContentSchema = z.object({
  label: z.string().min(1),
  heading: z.string().min(1),
  description: z.string().min(1),
  address: postalAddressSchema,
  phone: z.string().min(1),
  phoneHref: z.string().min(1),
  email: z.string().email(),
  hours: z.array(openingHoursSchema).min(1),
  mapEmbedUrl: z.string().url(),
  mapTitle: z.string().min(1),
  parkingNote: z.string().optional(),
  directionsHref: z.string().url(),
  directionsLabel: z.string().min(1),
  callLabel: z.string().min(1),
});

export type LocationContent = z.infer<typeof locationContentSchema>;

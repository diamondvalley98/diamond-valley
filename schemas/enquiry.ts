import { z } from "zod";

/**
 * Reusable enquiry payload — works across jewellery and other verticals.
 * Context fields are optional and set when opening from a product/service page.
 */
export const enquiryContextSchema = z.object({
  productId: z.string().optional(),
  productName: z.string().optional(),
  collection: z.string().optional(),
  service: z.string().optional(),
  sourcePage: z.string().optional(),
});

function phoneDigitCount(value: string) {
  return value.replace(/\D/g, "").length;
}

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) => !value || phoneDigitCount(value) >= 7,
      "Please enter a valid phone number (at least 7 digits)",
    ),
  subject: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please share a bit more detail (10+ characters)"),
  /** @deprecated Prefer productName / service / collection context fields */
  interest: z.string().optional(),
  /** Spam trap — must stay empty */
  honeypot: z.string().max(0).optional(),
  productId: z.string().optional(),
  productName: z.string().optional(),
  collection: z.string().optional(),
  service: z.string().optional(),
  sourcePage: z.string().optional(),
});

export type EnquiryContextData = z.infer<typeof enquiryContextSchema>;
export type EnquiryInput = z.infer<typeof enquirySchema>;

/** First human-readable validation message from a Zod flatten() result. */
export function firstEnquiryValidationMessage(issues: {
  formErrors: string[];
  fieldErrors: Record<string, string[] | undefined>;
}): string | undefined {
  if (issues.formErrors[0]) return issues.formErrors[0];
  for (const messages of Object.values(issues.fieldErrors)) {
    if (messages?.[0]) return messages[0];
  }
  return undefined;
}

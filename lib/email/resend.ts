import { Resend } from "resend";

let resendClient: Resend | null = null;

export function getResendEnvStatus():
  | { ok: true }
  | { ok: false; missing: string[] } {
  const missing: string[] = [];
  if (!process.env.RESEND_API_KEY?.trim()) missing.push("RESEND_API_KEY");
  if (!process.env.RESEND_FROM_EMAIL?.trim()) missing.push("RESEND_FROM_EMAIL");
  if (!process.env.ENQUIRY_OWNER_EMAIL?.trim()) {
    missing.push("ENQUIRY_OWNER_EMAIL");
  }
  return missing.length ? { ok: false, missing } : { ok: true };
}

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }
  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

export function getEnquiryMailConfig() {
  return {
    from: process.env.RESEND_FROM_EMAIL?.trim() || "",
    ownerEmail: process.env.ENQUIRY_OWNER_EMAIL?.trim() || "",
    /** Optional override for reply-to on owner notifications */
    replyToOwner: process.env.ENQUIRY_REPLY_TO?.trim() || undefined,
    brandName:
      process.env.ENQUIRY_BRAND_NAME?.trim() ||
      process.env.NEXT_PUBLIC_SITE_NAME?.trim() ||
      "Diamond Valley",
    ackEnabled:
      (process.env.ENQUIRY_ACK_EMAIL_ENABLED ?? "true").toLowerCase() !==
      "false",
  };
}

import type { EnquiryRow } from "@/lib/supabase/database.types";
import {
  getEnquiryMailConfig,
  getResendClient,
  getResendEnvStatus,
} from "@/lib/email/resend";

export type EnquiryEmailResult = {
  owner: { sent: boolean; error?: string };
  acknowledgement: { sent: boolean; skipped?: boolean; error?: string };
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatTimestamp(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "America/New_York",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function display(value: string | null | undefined) {
  const trimmed = value?.trim();
  return trimmed ? escapeHtml(trimmed) : "—";
}

function buildOwnerHtml(enquiry: EnquiryRow) {
  const timestamp = formatTimestamp(enquiry.created_at);
  return `
    <div style="font-family: Georgia, 'Times New Roman', serif; color: #1a1a1a; line-height: 1.6;">
      <h1 style="font-size: 22px; font-weight: 500; margin: 0 0 16px;">New Website Enquiry</h1>
      <p style="margin: 0 0 20px; color: #555;">A new enquiry was submitted from the website.</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <tr><td style="padding: 8px 0; color: #777; width: 140px;">Name</td><td style="padding: 8px 0;">${display(enquiry.name)}</td></tr>
        <tr><td style="padding: 8px 0; color: #777;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(enquiry.email)}">${display(enquiry.email)}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #777;">Phone</td><td style="padding: 8px 0;">${display(enquiry.phone)}</td></tr>
        <tr><td style="padding: 8px 0; color: #777;">Subject</td><td style="padding: 8px 0;">${display(enquiry.subject)}</td></tr>
        <tr><td style="padding: 8px 0; color: #777;">Product</td><td style="padding: 8px 0;">${display(enquiry.product)}</td></tr>
        <tr><td style="padding: 8px 0; color: #777;">Collection</td><td style="padding: 8px 0;">${display(enquiry.collection)}</td></tr>
        <tr><td style="padding: 8px 0; color: #777;">Service</td><td style="padding: 8px 0;">${display(enquiry.service)}</td></tr>
        <tr><td style="padding: 8px 0; color: #777;">Source</td><td style="padding: 8px 0;">${display(enquiry.source)}</td></tr>
        <tr><td style="padding: 8px 0; color: #777;">Timestamp</td><td style="padding: 8px 0;">${escapeHtml(timestamp)}</td></tr>
        <tr><td style="padding: 8px 0; color: #777;">Enquiry ID</td><td style="padding: 8px 0;">${display(enquiry.id)}</td></tr>
      </table>
      <div style="margin-top: 24px; padding: 16px; background: #f7f4ef; border-radius: 8px;">
        <p style="margin: 0 0 8px; color: #777; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
        <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(enquiry.message)}</p>
      </div>
    </div>
  `.trim();
}

function buildOwnerText(enquiry: EnquiryRow) {
  const timestamp = formatTimestamp(enquiry.created_at);
  return [
    "New Website Enquiry",
    "",
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone || "—"}`,
    `Subject: ${enquiry.subject || "—"}`,
    `Product: ${enquiry.product || "—"}`,
    `Collection: ${enquiry.collection || "—"}`,
    `Service: ${enquiry.service || "—"}`,
    `Source: ${enquiry.source || "—"}`,
    `Timestamp: ${timestamp}`,
    `Enquiry ID: ${enquiry.id}`,
    "",
    "Message:",
    enquiry.message,
  ].join("\n");
}

function buildAckHtml(enquiry: EnquiryRow, brandName: string) {
  return `
    <div style="font-family: Georgia, 'Times New Roman', serif; color: #1a1a1a; line-height: 1.6;">
      <h1 style="font-size: 22px; font-weight: 500; margin: 0 0 16px;">Thank you, ${escapeHtml(enquiry.name)}</h1>
      <p style="margin: 0 0 12px;">We received your enquiry and will get back to you shortly.</p>
      <p style="margin: 0 0 12px; color: #555;">Reference: ${display(enquiry.id)}</p>
      <p style="margin: 24px 0 0; color: #777; font-size: 14px;">— ${escapeHtml(brandName)}</p>
    </div>
  `.trim();
}

function buildAckText(enquiry: EnquiryRow, brandName: string) {
  return [
    `Thank you, ${enquiry.name}`,
    "",
    "We received your enquiry and will get back to you shortly.",
    `Reference: ${enquiry.id}`,
    "",
    `— ${brandName}`,
  ].join("\n");
}

/**
 * Send owner notification + optional customer acknowledgement via Resend.
 * Failures are returned — callers should not fail the HTTP request after DB insert.
 */
export async function sendEnquiryEmails(
  enquiry: EnquiryRow,
): Promise<EnquiryEmailResult> {
  const result: EnquiryEmailResult = {
    owner: { sent: false },
    acknowledgement: { sent: false },
  };

  const env = getResendEnvStatus();
  if (!env.ok) {
    const message = `Resend is not configured. Missing: ${env.missing.join(", ")}`;
    result.owner.error = message;
    result.acknowledgement = { sent: false, skipped: true, error: message };
    return result;
  }

  const config = getEnquiryMailConfig();
  const resend = getResendClient();

  try {
    const ownerSend = await resend.emails.send({
      from: config.from,
      to: config.ownerEmail,
      replyTo: enquiry.email,
      subject: "New Website Enquiry",
      html: buildOwnerHtml(enquiry),
      text: buildOwnerText(enquiry),
    });

    if (ownerSend.error) {
      result.owner.error = ownerSend.error.message;
    } else {
      result.owner.sent = true;
    }
  } catch (error) {
    result.owner.error =
      error instanceof Error ? error.message : "Owner email failed";
  }

  if (!config.ackEnabled) {
    result.acknowledgement = { sent: false, skipped: true };
    return result;
  }

  try {
    const ackSend = await resend.emails.send({
      from: config.from,
      to: enquiry.email,
      replyTo: config.replyToOwner || config.ownerEmail,
      subject: `We received your enquiry — ${config.brandName}`,
      html: buildAckHtml(enquiry, config.brandName),
      text: buildAckText(enquiry, config.brandName),
    });

    if (ackSend.error) {
      result.acknowledgement.error = ackSend.error.message;
    } else {
      result.acknowledgement.sent = true;
    }
  } catch (error) {
    result.acknowledgement.error =
      error instanceof Error ? error.message : "Acknowledgement email failed";
  }

  return result;
}

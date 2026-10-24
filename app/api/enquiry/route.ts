import { NextResponse } from "next/server";
import {
  enquirySchema,
  firstEnquiryValidationMessage,
} from "@/schemas/enquiry";
import { persistEnquiryToSupabase } from "@/lib/enquiry/persist-supabase";
import { sendEnquiryEmails } from "@/lib/email/enquiry-emails";

export const dynamic = "force-dynamic";

type ErrorBody = {
  ok: false;
  error: string;
  code?: string;
  issues?: unknown;
};

type SuccessBody = {
  ok: true;
  id: string;
  message: string;
  emailWarning?: string;
};

function jsonError(
  status: number,
  error: string,
  extras?: { code?: string; issues?: unknown },
): NextResponse<ErrorBody> {
  return NextResponse.json(
    {
      ok: false as const,
      error,
      ...(extras?.code ? { code: extras.code } : {}),
      ...(extras?.issues !== undefined ? { issues: extras.issues } : {}),
    },
    { status },
  );
}

function jsonSuccess(
  id: string,
  emailWarning?: string,
): NextResponse<SuccessBody> {
  return NextResponse.json(
    {
      ok: true,
      id,
      message: "Enquiry received",
      ...(emailWarning ? { emailWarning } : {}),
    },
    { status: 201 },
  );
}

/**
 * POST /api/enquiry
 *
 * Validates with Zod, persists to Supabase, then sends Resend emails.
 * Email failures after a successful insert do not fail the request.
 */
export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return jsonError(400, "Request body must be valid JSON", {
      code: "invalid_json",
    });
  }

  const parsed = enquirySchema.safeParse(json);

  if (!parsed.success) {
    const issues = parsed.error.flatten();
    console.warn("[enquiry:validation]", issues);
    return jsonError(
      400,
      firstEnquiryValidationMessage(issues) ?? "Invalid enquiry",
      {
        code: "validation_error",
        issues,
      },
    );
  }

  const data = parsed.data;

  // Honeypot: pretend success without writing/emailing
  if (data.honeypot) {
    return jsonSuccess(`enq_ignored_${Date.now().toString(36)}`);
  }

  const result = await persistEnquiryToSupabase(data);

  if (!result.ok) {
    const status = result.code === "supabase_env" ? 503 : 500;
    return jsonError(status, result.error, { code: result.code });
  }

  const emailResult = await sendEnquiryEmails(result.enquiry);
  const warnings: string[] = [];

  if (!emailResult.owner.sent) {
    const detail = emailResult.owner.error || "Owner notification failed";
    console.warn("[enquiry:email:owner]", {
      id: result.enquiry.id,
      error: detail,
    });
    warnings.push(`Owner email: ${detail}`);
  }

  if (
    !emailResult.acknowledgement.skipped &&
    !emailResult.acknowledgement.sent
  ) {
    const detail =
      emailResult.acknowledgement.error || "Acknowledgement email failed";
    console.warn("[enquiry:email:ack]", {
      id: result.enquiry.id,
      error: detail,
    });
    warnings.push(`Acknowledgement email: ${detail}`);
  }

  return jsonSuccess(
    result.enquiry.id,
    warnings.length ? warnings.join(" | ") : undefined,
  );
}

export async function GET() {
  return jsonError(405, "Method not allowed", { code: "method_not_allowed" });
}

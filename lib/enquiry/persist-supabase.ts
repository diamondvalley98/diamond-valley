import type { EnquiryInput } from "@/schemas/enquiry";
import {
  createServerSupabaseClient,
  getSupabaseServerEnvStatus,
} from "@/lib/supabase/server";
import type { EnquiryInsert, EnquiryRow } from "@/lib/supabase/database.types";

export type PersistEnquiryResult =
  | { ok: true; enquiry: EnquiryRow }
  | { ok: false; error: string; code?: string };

function toEnquiryInsert(data: EnquiryInput): EnquiryInsert {
  return {
    name: data.name,
    email: data.email,
    phone: data.phone?.trim() ? data.phone.trim() : null,
    subject: data.subject?.trim() ? data.subject.trim() : null,
    message: data.message,
    product: data.productName?.trim() ? data.productName.trim() : null,
    collection: data.collection?.trim() ? data.collection.trim() : null,
    service: data.service?.trim() ? data.service.trim() : null,
    source: data.sourcePage?.trim() ? data.sourcePage.trim() : null,
    status: "new",
  };
}

/**
 * Persist a validated enquiry to Supabase `enquiries`.
 */
export async function persistEnquiryToSupabase(
  data: EnquiryInput,
): Promise<PersistEnquiryResult> {
  const env = getSupabaseServerEnvStatus();
  if (!env.ok) {
    return {
      ok: false,
      error: `Supabase is not configured. Missing: ${env.missing.join(", ")}`,
      code: "supabase_env",
    };
  }

  try {
    const supabase = createServerSupabaseClient();
    // Client-generated id so we can skip `.select()` after insert.
    // Returning rows requires a SELECT RLS policy; we keep enquiries write-only for anon.
    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    const payload = { id, ...toEnquiryInsert(data) };

    const { error } = await supabase.from("enquiries").insert(payload);

    if (error) {
      console.error("[enquiry:supabase]", error);
      return {
        ok: false,
        error: error.message || "Failed to save enquiry",
        code: error.code || "supabase_insert",
      };
    }

    const enquiry: EnquiryRow = {
      id,
      created_at: createdAt,
      name: payload.name,
      email: payload.email,
      phone: payload.phone ?? null,
      subject: payload.subject ?? null,
      message: payload.message,
      product: payload.product ?? null,
      collection: payload.collection ?? null,
      service: payload.service ?? null,
      source: payload.source ?? null,
      status: payload.status ?? "new",
    };

    return { ok: true, enquiry };
  } catch (error) {
    console.error("[enquiry:supabase:unexpected]", error);
    return {
      ok: false,
      error:
        error instanceof Error ? error.message : "Unexpected Supabase error",
      code: "supabase_unexpected",
    };
  }
}

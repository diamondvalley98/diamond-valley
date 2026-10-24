import type { EnquiryInput } from "@/schemas/enquiry";

export type StoredEnquiry = EnquiryInput & {
  id: string;
  receivedAt: string;
};

/**
 * Placeholder persistence until Supabase (or another store) is wired.
 * In-memory only — resets on server restart. Dev/logging aid, not production storage.
 *
 * TODO: Replace with Supabase insert.
 * TODO: Trigger email / Resend after persist.
 */
const store: StoredEnquiry[] = [];

export function persistEnquiryPlaceholder(data: EnquiryInput): StoredEnquiry {
  const record: StoredEnquiry = {
    ...data,
    id: `enq_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    receivedAt: new Date().toISOString(),
  };

  store.push(record);

  // Keep memory bounded in long-lived servers
  if (store.length > 200) {
    store.splice(0, store.length - 200);
  }

  console.info("[enquiry:placeholder]", {
    id: record.id,
    receivedAt: record.receivedAt,
    name: record.name,
    email: record.email,
    subject: record.subject || null,
    productName: record.productName || null,
    collection: record.collection || null,
    service: record.service || null,
    sourcePage: record.sourcePage || null,
  });

  return record;
}

/** Test/dev helper — not exposed via HTTP */
export function listPlaceholderEnquiries() {
  return [...store];
}

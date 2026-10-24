import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database.types";
import {
  getSupabasePublishableKey,
  getSupabaseServiceRoleKey,
  getSupabaseUrl,
} from "@/lib/supabase/env";

let serverClient: SupabaseClient<Database> | null = null;

export type SupabaseEnvStatus =
  | { ok: true; mode: "service_role" | "publishable" }
  | { ok: false; missing: string[] };

/**
 * Check required server env without throwing.
 */
export function getSupabaseServerEnvStatus(): SupabaseEnvStatus {
  const missing: string[] = [];
  const url = getSupabaseUrl();
  const serviceKey = getSupabaseServiceRoleKey();
  const publishableKey = getSupabasePublishableKey();

  if (!url) missing.push("NEXT_PUBLIC_SUPABASE_URL");
  if (!serviceKey && !publishableKey) {
    missing.push(
      "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY (or SUPABASE_SERVICE_ROLE_KEY)",
    );
  }

  if (missing.length) return { ok: false, missing };
  return { ok: true, mode: serviceKey ? "service_role" : "publishable" };
}

/**
 * Server-side Supabase client for API routes / RSC.
 * Prefers service/secret key; falls back to publishable/anon key.
 */
export function createServerSupabaseClient() {
  const url = getSupabaseUrl();
  const key = getSupabaseServiceRoleKey() || getSupabasePublishableKey();

  if (!url || !key) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    );
  }

  if (!serverClient) {
    serverClient = createClient<Database>(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return serverClient;
}

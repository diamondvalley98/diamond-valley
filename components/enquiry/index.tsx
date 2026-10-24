"use client";

import { EnquiryProvider } from "@/components/enquiry/enquiry-context";
import { EnquiryDialog } from "@/components/enquiry/enquiry-dialog";

/**
 * Mount once near the app root so openEnquiry() works site-wide.
 */
export function EnquiryRoot({ children }: { children: React.ReactNode }) {
  return (
    <EnquiryProvider>
      {children}
      <EnquiryDialog />
    </EnquiryProvider>
  );
}

export { EnquiryProvider, useEnquiry } from "./enquiry-context";
export type { OpenEnquiryOptions, EnquiryStatus } from "./enquiry-context";
export { EnquiryDialog } from "./enquiry-dialog";
export { EnquiryForm } from "./enquiry-form";
export { EnquirySuccess } from "./enquiry-success";

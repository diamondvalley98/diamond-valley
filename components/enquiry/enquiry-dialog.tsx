"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEnquiry } from "@/components/enquiry/enquiry-context";
import { EnquiryForm } from "@/components/enquiry/enquiry-form";
import { EnquirySuccess } from "@/components/enquiry/enquiry-success";
import { enquiryCopy } from "@/content/enquiry";
import type { EnquiryInput } from "@/schemas/enquiry";

function buildContextSummary(data: {
  productName?: string;
  collection?: string;
  service?: string;
}) {
  const parts = [data.productName, data.collection, data.service].filter(
    Boolean,
  );
  if (!parts.length) return undefined;
  return `${enquiryCopy.contextLabel}: ${parts.join(" · ")}`;
}

/**
 * Global enquiry dialog — open via useEnquiry().openEnquiry(...).
 * Radix Dialog provides focus trap + Escape to close.
 * Submits to POST /api/enquiry (Supabase + Resend).
 */
export function EnquiryDialog() {
  const {
    isOpen,
    status,
    errorMessage,
    context,
    defaultSubject,
    closeEnquiry,
    setStatus,
    setErrorMessage,
    resetEnquiry,
  } = useEnquiry();

  const onOpenChange = (open: boolean) => {
    if (!open) {
      closeEnquiry();
      // Keep success brief; reset after close animation settles
      window.setTimeout(() => resetEnquiry(), 200);
    }
  };

  const onSubmitValid = async (data: EnquiryInput) => {
    setErrorMessage(null);
    setStatus("loading");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          sourcePage:
            data.sourcePage ||
            (typeof window !== "undefined" ? window.location.pathname : ""),
        }),
      });

      const payload = (await res.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        issues?: {
          formErrors?: string[];
          fieldErrors?: Record<string, string[] | undefined>;
        };
      } | null;

      if (!res.ok || !payload?.ok) {
        const fieldMessage = payload?.issues?.fieldErrors
          ? Object.values(payload.issues.fieldErrors).flat().find(Boolean)
          : undefined;
        throw new Error(
          fieldMessage ||
            payload?.error ||
            enquiryCopy.errorFallback,
        );
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : enquiryCopy.errorFallback,
      );
    }
  };

  const contextSummary = buildContextSummary(context);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-h-[min(90vh,40rem)] overflow-y-auto"
        aria-describedby="enquiry-dialog-description"
      >
        <DialogHeader>
          <DialogTitle>{enquiryCopy.dialogTitle}</DialogTitle>
          <DialogDescription id="enquiry-dialog-description">
            {enquiryCopy.dialogDescription}
          </DialogDescription>
        </DialogHeader>

        {contextSummary && status !== "success" ? (
          <p className="mb-2 text-sm text-[var(--accent)]">{contextSummary}</p>
        ) : null}

        {status === "success" ? (
          <EnquirySuccess
            title={enquiryCopy.successTitle}
            message={enquiryCopy.successMessage}
            closeLabel={enquiryCopy.successCloseLabel}
            contextSummary={contextSummary}
            onClose={() => onOpenChange(false)}
          />
        ) : (
          <EnquiryForm
            context={context}
            defaultSubject={defaultSubject}
            isSubmitting={status === "loading"}
            errorMessage={errorMessage}
            onSubmitValid={onSubmitValid}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

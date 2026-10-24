"use client";

import { Button } from "@/components/ui/button";

export type EnquirySuccessProps = {
  title: string;
  message: string;
  closeLabel?: string;
  onClose: () => void;
  contextSummary?: string;
};

/**
 * Success panel shown after a valid enquiry submit (UI-only for now).
 */
export function EnquirySuccess({
  title,
  message,
  closeLabel = "Close",
  onClose,
  contextSummary,
}: EnquirySuccessProps) {
  return (
    <div role="status" aria-live="polite" className="space-y-4 py-2">
      <div>
        <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
          {title}
        </h3>
        <p className="mt-3 text-[var(--muted)]">{message}</p>
        {contextSummary ? (
          <p className="mt-3 text-sm text-[var(--accent)]">{contextSummary}</p>
        ) : null}
      </div>
      <Button type="button" onClick={onClose} className="w-full sm:w-auto">
        {closeLabel}
      </Button>
    </div>
  );
}

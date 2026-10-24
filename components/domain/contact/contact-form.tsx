"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export type ContactFormLabels = {
  name: string;
  email: string;
  phone: string;
  phoneHint?: string;
  subject: string;
  message: string;
  submit: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  phonePlaceholder?: string;
  subjectPlaceholder?: string;
  messagePlaceholder?: string;
};

export type ContactFormProps = {
  labels: ContactFormLabels;
  successMessage: string;
  successTitle?: string;
  className?: string;
  sourcePage?: string;
};

/**
 * Homepage / contact page enquiry form — posts to /api/enquiry.
 */
export function ContactForm({
  labels,
  successMessage,
  successTitle = "Thank you",
  className,
  sourcePage = "/contact",
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? ""),
          subject: String(data.get("subject") ?? ""),
          message: String(data.get("message") ?? ""),
          sourcePage,
          honeypot: "",
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
            "Unable to send enquiry. Check the form and try again.",
        );
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send enquiry");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        role="status"
        className={cn(
          "rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8",
          className,
        )}
      >
        <p className="font-[family-name:var(--font-display)] text-2xl">
          {successTitle}
        </p>
        <p className="mt-3 text-[var(--muted)]">{successMessage}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "space-y-5 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] p-6 shadow-token-sm md:p-8",
        className,
      )}
      noValidate={false}
      aria-busy={submitting}
    >
      <div className="space-y-2">
        <Label htmlFor="contact-name">{labels.name}</Label>
        <Input
          id="contact-name"
          name="name"
          type="text"
          required
          minLength={2}
          autoComplete="name"
          disabled={submitting}
          placeholder={labels.namePlaceholder}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-email">{labels.email}</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={submitting}
          placeholder={labels.emailPlaceholder}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-phone">
          {labels.phone}
          {labels.phoneHint ? (
            <span className="ml-2 font-normal text-[var(--muted)]">
              ({labels.phoneHint})
            </span>
          ) : null}
        </Label>
        <Input
          id="contact-phone"
          name="phone"
          type="tel"
          minLength={7}
          autoComplete="tel"
          disabled={submitting}
          placeholder={labels.phonePlaceholder}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-subject">{labels.subject}</Label>
        <Input
          id="contact-subject"
          name="subject"
          type="text"
          required
          autoComplete="off"
          disabled={submitting}
          placeholder={labels.subjectPlaceholder}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">{labels.message}</Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          rows={5}
          disabled={submitting}
          placeholder={labels.messagePlaceholder}
        />
      </div>

      {error ? (
        <p className="text-sm text-[var(--destructive)]" role="alert">
          {error}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
        {submitting ? "Sending…" : labels.submit}
      </Button>
    </form>
  );
}

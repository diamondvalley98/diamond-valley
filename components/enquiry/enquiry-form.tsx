"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enquirySchema, type EnquiryInput } from "@/schemas/enquiry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { enquiryCopy } from "@/content/enquiry";
import type { EnquiryContextData } from "@/schemas/enquiry";

export type EnquiryFormLabels = {
  name: string;
  email: string;
  phone: string;
  phoneHint?: string;
  subject: string;
  message: string;
  submit: string;
  submitting: string;
};

export type EnquiryFormPlaceholders = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export type EnquiryFormProps = {
  context?: EnquiryContextData;
  defaultSubject?: string;
  labels?: Partial<EnquiryFormLabels>;
  placeholders?: EnquiryFormPlaceholders;
  isSubmitting?: boolean;
  errorMessage?: string | null;
  onSubmitValid: (data: EnquiryInput) => void | Promise<void>;
};

/**
 * Shared enquiry form — used by dialog and future inline placements.
 * TODO: Replace onSubmitValid stub wiring with real API / Supabase later.
 */
export function EnquiryForm({
  context = {},
  defaultSubject = "",
  labels: labelsProp,
  placeholders: placeholdersProp,
  isSubmitting = false,
  errorMessage,
  onSubmitValid,
}: EnquiryFormProps) {
  const labels: EnquiryFormLabels = {
    ...enquiryCopy.labels,
    ...labelsProp,
  };
  const placeholders = {
    ...enquiryCopy.placeholders,
    ...placeholdersProp,
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: defaultSubject,
      message: "",
      honeypot: "",
      productId: context.productId ?? "",
      productName: context.productName ?? "",
      collection: context.collection ?? "",
      service: context.service ?? "",
      sourcePage: context.sourcePage ?? "",
    },
  });

  useEffect(() => {
    reset({
      name: "",
      email: "",
      phone: "",
      subject: defaultSubject,
      message: "",
      honeypot: "",
      productId: context.productId ?? "",
      productName: context.productName ?? "",
      collection: context.collection ?? "",
      service: context.service ?? "",
      sourcePage: context.sourcePage ?? "",
    });
  }, [context, defaultSubject, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmitValid)}
      className="space-y-4"
      noValidate
      aria-busy={isSubmitting}
    >
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
        {...register("honeypot")}
      />

      {/* Hidden context fields — auto-populated */}
      <input type="hidden" {...register("productId")} />
      <input type="hidden" {...register("productName")} />
      <input type="hidden" {...register("collection")} />
      <input type="hidden" {...register("service")} />
      <input type="hidden" {...register("sourcePage")} />

      <div className="space-y-2">
        <Label htmlFor="enquiry-name">
          {labels.name} <span aria-hidden>*</span>
        </Label>
        <Input
          id="enquiry-name"
          autoComplete="name"
          required
          aria-required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "enquiry-name-error" : undefined}
          placeholder={placeholders.name}
          disabled={isSubmitting}
          {...register("name")}
        />
        {errors.name ? (
          <p
            id="enquiry-name-error"
            className="text-sm text-[var(--destructive)]"
            role="alert"
          >
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="enquiry-email">
          {labels.email} <span aria-hidden>*</span>
        </Label>
        <Input
          id="enquiry-email"
          type="email"
          autoComplete="email"
          required
          aria-required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "enquiry-email-error" : undefined}
          placeholder={placeholders.email}
          disabled={isSubmitting}
          {...register("email")}
        />
        {errors.email ? (
          <p
            id="enquiry-email-error"
            className="text-sm text-[var(--destructive)]"
            role="alert"
          >
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="enquiry-phone">
          {labels.phone}
          {labels.phoneHint ? (
            <span className="ml-2 font-normal text-[var(--muted)]">
              ({labels.phoneHint})
            </span>
          ) : null}
        </Label>
        <Input
          id="enquiry-phone"
          type="tel"
          autoComplete="tel"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
          placeholder={placeholders.phone}
          disabled={isSubmitting}
          {...register("phone")}
        />
        {errors.phone ? (
          <p
            id="enquiry-phone-error"
            className="text-sm text-[var(--destructive)]"
            role="alert"
          >
            {errors.phone.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="enquiry-subject">{labels.subject}</Label>
        <Input
          id="enquiry-subject"
          autoComplete="off"
          aria-invalid={Boolean(errors.subject)}
          placeholder={placeholders.subject}
          disabled={isSubmitting}
          {...register("subject")}
        />
        {errors.subject ? (
          <p className="text-sm text-[var(--destructive)]" role="alert">
            {errors.subject.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="enquiry-message">
          {labels.message} <span aria-hidden>*</span>
        </Label>
        <Textarea
          id="enquiry-message"
          rows={5}
          required
          aria-required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "enquiry-message-error" : undefined
          }
          placeholder={placeholders.message}
          disabled={isSubmitting}
          {...register("message")}
        />
        {errors.message ? (
          <p
            id="enquiry-message-error"
            className="text-sm text-[var(--destructive)]"
            role="alert"
          >
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {errorMessage ? (
        <p className="text-sm text-[var(--destructive)]" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? labels.submitting : labels.submit}
      </Button>
    </form>
  );
}

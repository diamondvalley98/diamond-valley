"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enquirySchema, type EnquiryInput } from "@/lib/forms/enquiry-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FormFieldConfig } from "@/types";

export function EnquiryForm({
  fields,
  submitLabel,
  successMessage,
  defaultInterest,
}: {
  fields: FormFieldConfig[];
  submitLabel: string;
  successMessage: string;
  defaultInterest?: string;
}) {
  const [serverError, setServerError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      interest: defaultInterest ?? "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: EnquiryInput) => {
    setServerError(null);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "Something went wrong. Please try again.");
      }
      setDone(true);
    } catch (error) {
      setServerError(error instanceof Error ? error.message : "Submission failed");
    }
  };

  if (done) {
    return (
      <div
        role="status"
        className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6"
      >
        <p className="font-[family-name:var(--font-display)] text-2xl">Enquiry sent</p>
        <p className="mt-2 text-[var(--muted)]">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
        {...register("honeypot")}
      />

      {fields.map((field) => {
        if (field.type === "textarea") {
          return (
            <div key={field.name} className="space-y-2">
              <Label htmlFor={field.name}>{field.label}</Label>
              <Textarea
                id={field.name}
                placeholder={field.placeholder}
                {...register(field.name as keyof EnquiryInput)}
              />
              {errors[field.name as keyof EnquiryInput] ? (
                <p className="text-sm text-red-400" role="alert">
                  {errors[field.name as keyof EnquiryInput]?.message as string}
                </p>
              ) : null}
            </div>
          );
        }

        if (field.type === "select") {
          return (
            <div key={field.name} className="space-y-2">
              <Label htmlFor={field.name}>{field.label}</Label>
              <Select
                defaultValue={defaultInterest}
                onValueChange={(value) =>
                  setValue("interest", value, { shouldValidate: true })
                }
              >
                <SelectTrigger id={field.name} aria-label={field.label}>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {field.options?.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          );
        }

        return (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name as keyof EnquiryInput)}
            />
            {errors[field.name as keyof EnquiryInput] ? (
              <p className="text-sm text-red-400" role="alert">
                {errors[field.name as keyof EnquiryInput]?.message as string}
              </p>
            ) : null}
          </div>
        );
      })}

      {serverError ? (
        <p className="text-sm text-red-400" role="alert">
          {serverError}
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { EnquiryContextData } from "@/schemas/enquiry";

export type EnquiryStatus = "idle" | "loading" | "success" | "error";

export type OpenEnquiryOptions = EnquiryContextData & {
  /** Prefill visible subject when useful */
  subject?: string;
};

type EnquiryContextValue = {
  isOpen: boolean;
  status: EnquiryStatus;
  errorMessage: string | null;
  context: EnquiryContextData;
  defaultSubject: string;
  openEnquiry: (options?: OpenEnquiryOptions) => void;
  closeEnquiry: () => void;
  setStatus: (status: EnquiryStatus) => void;
  setErrorMessage: (message: string | null) => void;
  resetEnquiry: () => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

const emptyContext: EnquiryContextData = {
  productId: undefined,
  productName: undefined,
  collection: undefined,
  service: undefined,
  sourcePage: undefined,
};

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<EnquiryStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [context, setContext] = useState<EnquiryContextData>(emptyContext);
  const [defaultSubject, setDefaultSubject] = useState("");

  const resetEnquiry = useCallback(() => {
    setStatus("idle");
    setErrorMessage(null);
  }, []);

  const openEnquiry = useCallback((options: OpenEnquiryOptions = {}) => {
    const { subject, ...ctx } = options;
    setContext({
      productId: ctx.productId,
      productName: ctx.productName,
      collection: ctx.collection,
      service: ctx.service,
      sourcePage: ctx.sourcePage,
    });
    setDefaultSubject(subject ?? ctx.productName ?? ctx.service ?? "");
    setStatus("idle");
    setErrorMessage(null);
    setIsOpen(true);
  }, []);

  const closeEnquiry = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      status,
      errorMessage,
      context,
      defaultSubject,
      openEnquiry,
      closeEnquiry,
      setStatus,
      setErrorMessage,
      resetEnquiry,
    }),
    [
      isOpen,
      status,
      errorMessage,
      context,
      defaultSubject,
      openEnquiry,
      closeEnquiry,
      resetEnquiry,
    ],
  );

  return (
    <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) {
    throw new Error("useEnquiry must be used within EnquiryProvider");
  }
  return ctx;
}

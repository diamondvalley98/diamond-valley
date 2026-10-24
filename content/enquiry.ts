/**
 * Enquiry UI copy — swap per vertical/client.
 * Components accept overrides via props; these are defaults.
 */
export const enquiryCopy = {
  dialogTitle: "Send an Enquiry",
  dialogDescription:
    "Tell us what you’re looking for and we’ll get back to you shortly.",
  labels: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    phoneHint: "Optional",
    subject: "Subject",
    message: "Message",
    submit: "Send Enquiry",
    submitting: "Sending…",
  },
  placeholders: {
    name: "Your name",
    email: "you@example.com",
    phone: "(302) 555-0123",
    subject: "How can we help?",
    message: "Share details, timelines, or inspiration…",
  },
  successTitle: "Enquiry received",
  successMessage:
    "Thank you. We’ll review your message and respond soon.",
  successCloseLabel: "Close",
  errorFallback: "Something went wrong. Please try again.",
  contextLabel: "Regarding",
} as const;

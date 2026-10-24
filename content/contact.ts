import type { ContactContent } from "@/types";

/**
 * Homepage contact section + contact page copy.
 * Swap labels/CTAs per vertical (restaurants, clinics, salons, etc.).
 */
export const contact: ContactContent = {
  label: "Contact",
  heading: "Let's Start the Conversation",
  description:
    "Whether you're searching for the perfect piece or creating something completely custom, we'd love to hear from you.",
  formLabels: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    phoneHint: "Optional",
    subject: "Subject",
    message: "Message",
    submit: "Send Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    phonePlaceholder: "(302) 555-0123",
    subjectPlaceholder: "How can we help?",
    messagePlaceholder:
      "Tell us about the piece, custom idea, or repair you have in mind…",
  },
  successMessage:
    "Thank you for reaching out. We’ll review your message and respond shortly.",
  callLabel: "Call Store",
  directionsLabel: "Get Directions",
  hoursSummary: "Mon–Fri 10 AM – 6 PM · Sat 11 AM – 4 PM · Sun by appointment",
  successTitle: "Thank you",
  showMap: true,
  mapEmbedUrl:
    "https://www.google.com/maps?q=1365+N+Dupont+Hwy+%235052+Dover+Delaware+19901&output=embed",
  seo: {
    title: "Contact",
    description:
      "Contact us to enquire about jewellery, custom work, repairs, and consultations.",
  },
};

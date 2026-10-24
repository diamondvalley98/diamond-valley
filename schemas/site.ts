import { z } from "zod";
import { businessSchema } from "./business";
import { collectionSchema } from "./collection";
import { ctaActionSchema, navigationItemSchema, navigationSchema } from "./navigation";
import { locationContentSchema } from "./location";
import { productSchema } from "./product";
import { mediaAssetSchema, seoMetaSchema } from "./seo";
import { serviceSchema } from "./service";

export const siteFeaturesSchema = z.object({
  showTestimonials: z.boolean(),
  showAnnouncement: z.boolean(),
  showStickyCallCta: z.boolean(),
});

export const siteMetaSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  vertical: z.enum([
    "jewelry",
    "restaurant",
    "salon",
    "clinic",
    "law",
    "furniture",
  ]),
  baseUrl: z.string().url(),
  features: siteFeaturesSchema,
});

export const heroBadgeSchema = z.object({
  id: z.string(),
  label: z.string(),
  icon: z.string(),
});

export const heroCtaSchema = z.object({
  label: z.string(),
  href: z.string().optional(),
  /** When true, CTA is a placeholder until enquiry modal ships */
  pendingModal: z.boolean().optional(),
});

export const heroSchema = z.object({
  variant: z.enum(["image", "video", "split"]).default("split"),
  label: z.string().min(1),
  titleLines: z.array(z.string()).min(1),
  subtitle: z.string().min(1),
  image: mediaAssetSchema,
  badges: z.array(heroBadgeSchema),
  primaryCta: heroCtaSchema,
  secondaryCta: heroCtaSchema,
});

export const ctaBandSchema = z.object({
  id: z.string(),
  eyebrow: z.string().optional(),
  title: z.string(),
  body: z.string().optional(),
  actions: z.array(ctaActionSchema),
});

export const pageModuleSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("hero"), id: z.string() }),
  z.object({
    type: z.literal("collections"),
    id: z.string(),
    limit: z.number().optional(),
  }),
  z.object({
    type: z.literal("products"),
    id: z.string(),
    filter: z.enum(["featured"]).optional(),
  }),
  z.object({ type: z.literal("services"), id: z.string() }),
  z.object({ type: z.literal("custom-jewellery"), id: z.string() }),
  z.object({ type: z.literal("testimonials"), id: z.string() }),
  z.object({ type: z.literal("about"), id: z.string() }),
  z.object({ type: z.literal("visit"), id: z.string() }),
  z.object({ type: z.literal("faq"), id: z.string(), limit: z.number().optional() }),
  z.object({ type: z.literal("contact"), id: z.string() }),
  z.object({ type: z.literal("cta"), id: z.string() }),
  z.object({ type: z.literal("trust"), id: z.string() }),
]);

export const customJewellerySectionSchema = z.object({
  label: z.string(),
  title: z.string(),
  description: z.string(),
  features: z
    .array(
      z.object({
        id: z.string(),
        title: z.string(),
      }),
    )
    .min(1),
  image: mediaAssetSchema,
  primaryCta: z.object({
    label: z.string(),
    href: z.string(),
  }),
  secondaryCta: z.object({
    label: z.string(),
    href: z.string(),
  }),
});

export const testimonialsSectionSchema = z.object({
  label: z.string(),
  title: z.string(),
  description: z.string(),
  metrics: z.array(
    z.object({
      id: z.string(),
      value: z.string(),
      label: z.string(),
    }),
  ),
});

export const homeContentSchema = z.object({
  modules: z.array(pageModuleSchema),
  heroes: z.record(heroSchema),
  ctas: z.record(ctaBandSchema),
  trustItems: z
    .array(
      z.object({
        id: z.string(),
        title: z.string(),
        body: z.string(),
        icon: z.string().optional(),
      }),
    )
    .optional(),
  collectionsSection: z
    .object({
      label: z.string(),
      title: z.string(),
      description: z.string(),
      exploreLabel: z.string().optional(),
    })
    .optional(),
  productsSection: z
    .object({
      label: z.string(),
      title: z.string(),
      description: z.string(),
      limit: z.number().int().positive().optional(),
      enquireLabel: z.string().optional(),
      bottomCta: z.object({
        text: z.string(),
        primaryLabel: z.string(),
        primaryHref: z.string(),
        secondaryLabel: z.string(),
        secondaryHref: z.string(),
      }),
    })
    .optional(),
  customJewellerySection: customJewellerySectionSchema.optional(),
  testimonialsSection: testimonialsSectionSchema.optional(),
  faqSection: z
    .object({
      label: z.string(),
      title: z.string(),
      description: z.string(),
      bottomCta: z.object({
        text: z.string(),
        primaryLabel: z.string(),
        primaryHref: z.string(),
        secondaryLabel: z.string(),
      }),
    })
    .optional(),
});

export const faqItemSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  category: z.string().optional(),
});

export const testimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  rating: z.number().min(1).max(5),
  review: z.string().min(1),
  location: z.string().min(1),
  purchaseType: z.string().optional(),
  role: z.string().optional(),
  source: z.string().optional(),
  image: mediaAssetSchema.optional(),
});

export const aboutContentSchema = z.object({
  label: z.string().min(1),
  heading: z.string().min(1),
  paragraphs: z.array(z.string().min(1)).min(1),
  highlights: z
    .array(
      z.object({
        id: z.string(),
        title: z.string(),
      }),
    )
    .min(1),
  image: mediaAssetSchema,
  statistics: z
    .array(
      z.object({
        id: z.string(),
        value: z.string(),
        label: z.string(),
      }),
    )
    .min(1),
  seo: seoMetaSchema,
});

export const formFieldConfigSchema = z.object({
  name: z.string(),
  label: z.string(),
  type: z.enum(["text", "email", "tel", "textarea", "select"]),
  required: z.boolean().optional(),
  options: z.array(z.string()).optional(),
  placeholder: z.string().optional(),
});

export const contactContentSchema = z.object({
  label: z.string().min(1),
  heading: z.string().min(1),
  description: z.string().min(1),
  formLabels: z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    phoneHint: z.string().optional(),
    subject: z.string(),
    message: z.string(),
    submit: z.string(),
    namePlaceholder: z.string().optional(),
    emailPlaceholder: z.string().optional(),
    phonePlaceholder: z.string().optional(),
    subjectPlaceholder: z.string().optional(),
    messagePlaceholder: z.string().optional(),
  }),
  successMessage: z.string().min(1),
  successTitle: z.string().optional(),
  callLabel: z.string().min(1),
  directionsLabel: z.string().min(1),
  hoursSummary: z.string().min(1),
  showMap: z.boolean().optional(),
  mapEmbedUrl: z.string().optional(),
  seo: seoMetaSchema,
});

export const footerContentSchema = z.object({
  tagline: z.string().optional(),
  columns: z.array(
    z.object({
      title: z.string(),
      links: z.array(navigationItemSchema),
    }),
  ),
  showSocials: z.boolean(),
  legalLinks: z.array(navigationItemSchema),
});

export const legalPageSchema = z.object({
  title: z.string(),
  updatedAt: z.string(),
  sections: z.array(
    z.object({
      heading: z.string(),
      body: z.array(z.string()),
    }),
  ),
  seo: seoMetaSchema,
});

export const siteContentSchema = z.object({
  site: siteMetaSchema,
  business: businessSchema,
  navigation: navigationSchema,
  home: homeContentSchema,
  products: z.array(productSchema),
  collections: z.array(collectionSchema),
  services: z.array(serviceSchema),
  faqs: z.array(faqItemSchema),
  testimonials: z.array(testimonialSchema),
  about: aboutContentSchema,
  location: locationContentSchema,
  contact: contactContentSchema,
  footer: footerContentSchema,
  privacy: legalPageSchema,
  terms: legalPageSchema,
  seo: z.object({
    defaults: seoMetaSchema,
    routes: z.record(seoMetaSchema.partial()),
  }),
});

export type SiteFeatures = z.infer<typeof siteFeaturesSchema>;
export type SiteMeta = z.infer<typeof siteMetaSchema>;
export type HeroBadge = z.infer<typeof heroBadgeSchema>;
export type HeroCta = z.infer<typeof heroCtaSchema>;
export type Hero = z.infer<typeof heroSchema>;
export type CtaBand = z.infer<typeof ctaBandSchema>;
export type PageModule = z.infer<typeof pageModuleSchema>;
export type HomeContent = z.infer<typeof homeContentSchema>;
export type FaqItem = z.infer<typeof faqItemSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type AboutContent = z.infer<typeof aboutContentSchema>;
export type FormFieldConfig = z.infer<typeof formFieldConfigSchema>;
export type ContactContent = z.infer<typeof contactContentSchema>;
export type FooterContent = z.infer<typeof footerContentSchema>;
export type LegalPage = z.infer<typeof legalPageSchema>;
export type SiteContent = z.infer<typeof siteContentSchema>;

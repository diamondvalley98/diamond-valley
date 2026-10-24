import type {
  Business,
  Collection,
  FaqItem,
  Product,
  Service,
} from "@/types";
import { absoluteUrl } from "./absolute-url";

export function localBusinessJsonLd(business: Business) {
  return {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: business.brandName,
    legalName: business.legalName,
    url: business.website,
    telephone: business.phone,
    email: business.email,
    image: absoluteUrl("/brands/diamond-valley/logo.svg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: [business.address.street, business.address.suite]
        .filter(Boolean)
        .join(" "),
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: business.geo
      ? {
          "@type": "GeoCoordinates",
          latitude: business.geo.lat,
          longitude: business.geo.lng,
        }
      : undefined,
    priceRange: business.priceRange,
    foundingDate: business.foundingYear
      ? String(business.foundingYear)
      : undefined,
    sameAs: business.socials.map((social) => social.href),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function productJsonLd(product: Product, brandName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((image) => image.src),
    category: product.category,
    brand: {
      "@type": "Brand",
      name: brandName,
    },
    url: absoluteUrl(`/products/${product.slug}`),
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    provider: {
      "@type": "JewelryStore",
      name: "Diamond Valley",
    },
    url: absoluteUrl(`/services/${service.slug}`),
  };
}

export function collectionJsonLd(collection: Collection) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: collection.name,
    description: collection.description ?? collection.summary,
    image: collection.image.src,
    url: absoluteUrl(`/collections/${collection.slug}`),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

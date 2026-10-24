import type { SiteContent } from "@/types";
import { about } from "./about";
import { business } from "./business";
import { collections } from "./collections";
import { contact } from "./contact";
import { customJewellerySection } from "./custom-jewellery";
import { faqs, faqSection } from "./faq";
import { footer } from "./footer";
import { home } from "./home";
import { privacy, terms } from "./legal";
import { location } from "./location";
import { navigation } from "./navigation";
import { products } from "./products";
import { defaultSeo, routesSeo } from "./seo";
import { services } from "./services";
import { siteMeta } from "./site";
import { testimonials, testimonialsSection } from "./testimonials";
import { enquiryCopy } from "./enquiry";

export const siteContent: SiteContent = {
  site: siteMeta,
  business,
  navigation,
  home,
  products,
  collections,
  services,
  faqs,
  testimonials,
  about,
  location,
  contact,
  footer,
  privacy,
  terms,
  seo: {
    defaults: defaultSeo,
    routes: routesSeo,
  },
};

export {
  about,
  business,
  collections,
  contact,
  customJewellerySection,
  enquiryCopy,
  faqs,
  faqSection,
  footer,
  home,
  location,
  navigation,
  privacy,
  products,
  services,
  siteMeta,
  terms,
  testimonials,
  testimonialsSection,
};

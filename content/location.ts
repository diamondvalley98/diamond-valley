import type { LocationContent } from "@/schemas/location";

/**
 * Visit / showroom location — swap address, hours, and map per vertical.
 */
export const location: LocationContent = {
  label: "Visit Us",
  heading: "Visit Our Showroom",
  description:
    "Experience our collections in person, explore custom jewellery options, and speak directly with our experienced team.",
  address: {
    street: "1365 N Dupont Hwy",
    suite: "#5052",
    city: "Dover",
    region: "DE",
    postalCode: "19901",
    country: "US",
  },
  phone: "(302) 580-4053",
  phoneHref: "tel:+13025804053",
  email: "diamondvalley98@gmail.com",
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      open: "10:00",
      close: "18:00",
    },
    {
      days: ["Saturday"],
      open: "11:00",
      close: "16:00",
    },
    {
      days: ["Sunday"],
      open: "Closed",
      close: "Closed",
      note: "By appointment",
    },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps?q=1365+N+Dupont+Hwy+%235052+Dover+Delaware+19901&output=embed",
  mapTitle: "Map showing Diamond Valley jewellery showroom in Dover, Delaware",
  parkingNote: "Free parking available near the entrance.",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=1365+N+Dupont+Hwy+%235052+Dover+DE+19901",
  directionsLabel: "Get Directions",
  callLabel: "Call Store",
};

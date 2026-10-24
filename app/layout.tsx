import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { EnquiryRoot } from "@/components/enquiry";
import { MotionConfigProvider } from "@/components/motion/motion-config-provider";
import { getSite } from "@/lib/content/get-site";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd, localBusinessJsonLd } from "@/lib/seo/json-ld";
import { absoluteUrl } from "@/lib/seo/absolute-url";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export function generateMetadata(): Metadata {
  const site = getSite();
  return {
    metadataBase: new URL(absoluteUrl("/")),
    icons: {
      icon: "/brands/diamond-valley/favicon.svg",
    },
    ...buildMetadata({
      seo: site.seo.defaults,
      path: "/",
      siteName: site.business.brandName,
    }),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const site = getSite();

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body suppressHydrationWarning>
        <MotionConfigProvider>
          <EnquiryRoot>
            <JsonLd data={localBusinessJsonLd(site.business)} />
            {children}
          </EnquiryRoot>
        </MotionConfigProvider>
      </body>
    </html>
  );
}

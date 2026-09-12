import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  ORG_NAME,
  ORG_LEGAL_NAME,
  SITE_DESCRIPTION,
  ADDRESS_LINE_1,
  ADDRESS_CITY,
  ADDRESS_STATE,
  ADDRESS_POSTAL_CODE,
  PHONE_TEL,
  VISIT_HOURS_OPEN,
  VISIT_HOURS_CLOSE,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  ORG_FOUNDING_YEAR,
} from "../lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: ORG_NAME,
  description: SITE_DESCRIPTION,
  keywords: [
    "Lar Espírita Maria de Nazaré",
    "hospital Mogi Mirim",
    "hospital especializado SUS",
    "cuidados neurológicos prolongados",
    "instituição de caridade Mogi Mirim",
    "doação PIX hospital filantrópico",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: ORG_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: ORG_NAME,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ORG_NAME,
    description: SITE_DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: ORG_NAME,
  alternateName: ORG_LEGAL_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: PHONE_TEL,
  foundingDate: ORG_FOUNDING_YEAR,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS_LINE_1,
    addressLocality: ADDRESS_CITY,
    addressRegion: ADDRESS_STATE,
    postalCode: ADDRESS_POSTAL_CODE,
    addressCountry: "BR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: VISIT_HOURS_OPEN,
    closes: VISIT_HOURS_CLOSE,
  },
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

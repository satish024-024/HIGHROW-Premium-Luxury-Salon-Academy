import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorantSerif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "HIGHROW | Premium Unisex Salon & Academy | Rajahmundry",
    template: "%s | HIGHROW Unisex Salon & Academy",
  },
  description: "Experience luxury grooming and world-class beauty training at HIGHROW, Rajahmundry's premier unisex salon and professional academy. Elevate Your Style. Elevate You.",
  keywords: [
    "unisex salon",
    "luxury salon rajahmundry",
    "beauty academy",
    "hair styling",
    "hair cutting",
    "makeup academy",
    "nail art",
    "bridal makeup rajahmundry",
    "highrow salon",
    "highrow rajahmundry"
  ],
  authors: [{ name: "Gen Z Creations" }],
  creator: "Gen Z Creations",
  publisher: "HIGHROW",
  metadataBase: new URL("https://highrow.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HIGHROW | Premium Unisex Salon & Academy | Rajahmundry",
    description: "Experience luxury grooming and world-class beauty training at HIGHROW, Rajahmundry's premier unisex salon and academy. Elevate Your Style. Elevate You.",
    url: "https://highrow.in",
    siteName: "HIGHROW",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HIGHROW Unisex Salon & Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIGHROW | Premium Unisex Salon & Academy",
    description: "Experience luxury grooming and world-class beauty training at HIGHROW, Rajahmundry's premier unisex salon and academy.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BeautySalon",
        "@id": "https://highrow.in/#salon",
        "name": "HIGHROW The Unisex Salon & Academy",
        "url": "https://highrow.in",
        "telephone": "+919966181114",
        "priceRange": "$$",
        "image": "https://highrow.in/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3rd Floor, Sujatha Complex, Opposite Pantaloons Showroom, A.V. Appa Rao Road",
          "addressLocality": "Rajahmundry",
          "addressRegion": "AP",
          "postalCode": "533103",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "17.0005",
          "longitude": "81.7878"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "08:00",
          "closes": "22:00"
        },
        "sameAs": [
          "https://www.facebook.com/highrowsalon",
          "https://www.instagram.com/highrowsalon"
        ]
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://highrow.in/#academy",
        "name": "HIGHROW Academy",
        "url": "https://highrow.in/academy",
        "description": "Professional training academy in Rajahmundry offering certified courses in hair cutting, makeup artistry, nail tech, and beautician skills.",
        "parentOrganization": {
          "@type": "BeautySalon",
          "@id": "https://highrow.in/#salon"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${cormorantSerif.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#050505] text-white font-sans flex flex-col selection:bg-[#C51F26] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

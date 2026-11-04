import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { SITE_CONFIG } from "@/lib/constants";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STAILOR IT | Digital Growth & AI Automation Agency",
  description:
    "STAILOR IT is a premier US & UK-focused IT agency delivering end-to-end SEO, performance marketing, custom AI automations, and enterprise web engineering to maximize ROI and scale revenue.",
  metadataBase: new URL(SITE_CONFIG.url),
  keywords: [
    "STAILOR IT",
    "Digital Growth Agency USA",
    "AI Automation Agency UK",
    "Enterprise SEO Services",
    "Next.js Development Agency",
    "B2B Performance Marketing",
    "Headless Web Development",
    "CRM Workflow Automation",
  ],
  authors: [{ name: "STAILOR IT" }],
  creator: "STAILOR IT",
  publisher: "STAILOR IT",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: "STAILOR IT | Digital Growth & AI Automation Agency",
    description:
      "Tailoring Next-Gen Digital Growth & Intelligent IT Solutions for B2B brands across US, UK & Global Markets.",
    siteName: "STAILOR IT",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "STAILOR IT — Digital Growth & AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STAILOR IT | Digital Growth & AI Automation Agency",
    description:
      "Enterprise SEO, Custom Next.js Web Engineering, and AI Workflow Automations for US & UK B2B brands.",
    creator: "@stailor_it",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png", href: "/logo.png" },
      { url: "/favicon.png", href: "/favicon.png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD Structured Data
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "STAILOR IT",
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    image: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tekatia, Fakirhat",
      addressLocality: "Bagerhat",
      postalCode: "9372",
      addressCountry: "Bangladesh",
    },
    areaServed: ["Worldwide", "United States", "United Kingdom", "Bangladesh"],
    sameAs: [
      SITE_CONFIG.socials.linkedin,
      SITE_CONFIG.socials.twitter,
      SITE_CONFIG.socials.github,
    ],
  };

  return (
    <html lang="en" className={`dark ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { SeoJsonLd } from "@/app/components/seo-json-ld";
import {
  HERO_IMAGE,
  OG_IMAGE_ALT,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_SOCIAL_DESCRIPTION,
  SEO_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/app/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SEO_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SEO_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: "Juliane Duarte", url: SITE_URL }],
  creator: "Juliane Duarte",
  publisher: SITE_NAME,
  referrer: "origin-when-cross-origin",
  category: "saúde mental",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_SOCIAL_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_SOCIAL_DESCRIPTION,
    images: [
      {
        url: HERO_IMAGE,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#18384A",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <SeoJsonLd />
        {children}
      </body>
    </html>
  );
}

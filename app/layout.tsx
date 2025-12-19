import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const bricolageGrotesque = localFont({
  src: "../public/fonts/BricolageGrotesque.ttf",
  variable: "--font-bricolage",
  display: "swap",
});

const siteUrl = 'https://gunalm.design';

export const metadata: Metadata = {
  title: {
    default: 'gunal.design — Product Designer',
    template: '%s | gunal.design',
  },
  description: 'Product Designer crafting simple solutions for complex financial and merchant products. Available for hire — UI/UX, Product Design, Prototyping.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'gunal.design — Product Designer',
    description: 'Product Designer crafting simple solutions for complex financial and merchant products. Available for hire.',
    url: siteUrl,
    siteName: 'gunal.design',
    images: [
      {
        url: `${siteUrl}/Images/OG-Preview.png`,
        width: 1200,
        height: 630,
        alt: 'gunal.design portfolio preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gunal.design — Product Designer',
    description: 'Product Designer crafting simple solutions for complex financial and merchant products.',
    site: '@GunalDesigns',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  authors: [{ name: 'Gunal', url: siteUrl }],
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
        "@type": "Person",
        "name": "Gunal",
        "url": siteUrl,
        "sameAs": [
          "https://www.youtube.com/@GunalDesigns"
        ],
        "jobTitle": "Product Designer",
        "email": "mailto:gunalm4624@gmail.com"
      },
      {
        "@type": "WebSite",
        "name": "gunal.design",
        "url": siteUrl,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${siteUrl}/?s={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} antialiased`}
      >
        <SmoothScroll />
        {/* JSON-LD for SEO / AEO */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

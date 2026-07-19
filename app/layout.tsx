import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import CalInit from "./components/CalInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gunalm.design"),
  title: "gunalm.design — Websites that impress, attract and convert",
  description:
    "UI/UX and web design for pre-seed and seed companies — designed to scale with you as you grow.",
  keywords: ["UI/UX design", "web design", "startup design", "Framer", "React", "Next.js", "Gunal"],
  authors: [{ name: "Gunal", url: "https://gunalm.design" }],
  creator: "Gunal",
  openGraph: {
    title: "gunalm.design — Websites that impress, attract and convert",
    description: "UI/UX and web design for pre-seed and seed companies — designed to scale with you as you grow.",
    url: "https://gunalm.design",
    siteName: "Gunal Design",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gunal Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "gunalm.design",
    description: "UI/UX and web design for pre-seed and seed companies.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://gunalm.design",
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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Gunal Design",
            description: "UI/UX and web design for pre-seed and seed companies — designed to scale with you as you grow.",
            url: "https://gunalm.design",
            email: "hey@gunalm.design",
            sameAs: [
              "https://www.youtube.com/@GunalDesigns"
            ]
          })
        }} />
        <Script id="clarity-analytics" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xostxzte0q");`}
        </Script>
        <CalInit />
        {children}
      </body>
    </html>
  );
}

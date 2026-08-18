import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import CalInit from "./components/CalInit";
import SmoothScroll from "./components/SmoothScroll";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gunalm.design"),
  title: "gunalm.design — Design Engineer who skips the handoff",
  description:
    "Design Engineer for pre-seed and seed startups. I design, build, and ship MVPs solo — no handoffs — so you get from idea to live product faster.",
  keywords: [
    "Design Engineer",
    "Product Design Engineer",
    "MVP development",
    "startup MVP",
    "UI/UX design",
    "web design",
    "Next.js",
    "React",
    "SwiftUI",
    "iOS development",
    "Gunal",
  ],
  authors: [{ name: "Gunal", url: "https://gunalm.design" }],
  creator: "Gunal",
  openGraph: {
    title: "gunalm.design — Design Engineer who skips the handoff",
    description:
      "Design Engineer for pre-seed and seed startups. I design, build, and ship MVPs solo — no handoffs — so you get from idea to live product faster.",
    url: "https://gunalm.design",
    siteName: "Gunal Design",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "gunalm.design — Design Engineer who skips the handoff",
    description:
      "Design Engineer for pre-seed and seed startups. I design, build, and ship MVPs solo — no handoffs — so you get from idea to live product faster.",
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
      className={`${bricolageGrotesque.variable} ${geistMono.variable} h-full overflow-x-clip antialiased`}
    >
      <body className="flex min-h-full min-w-0 flex-col overflow-x-clip bg-[#F2EEE3]">
        <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Gunal Design",
            description:
              "Design Engineer for pre-seed and seed startups. I design, build, and ship MVPs solo — no handoffs — so you get from idea to live product faster.",
            url: "https://gunalm.design",
            email: "hey@gunalm.design",
            sameAs: [
              "https://www.linkedin.com/in/gunalm-design/",
              "https://www.behance.net/gunaldesigns",
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

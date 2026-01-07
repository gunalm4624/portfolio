import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolageGrotesque = localFont({
  src: "../public/fonts/BricolageGrotesque.ttf",
  variable: "--font-bricolage-grotesque",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gunal M | UI/UX | Product Designer & Freelance Web Developer in Chennai",
  description: "Gunal M is a senior product designer and freelance web developer based in Chennai, India. Specializing in UI/UX design, web development, app design, and creating stunning digital experiences. Available for freelance projects worldwide.",
  keywords: [
    "freelance web developer",
    "freelance web designer",
    "product designer",
    "UI UX designer",
    "app designer",
    "web developer Chennai",
    "web designer Chennai",
    "UI designer India",
    "freelance designer India",
    "senior product designer",
    "Gunal M",
    "gunalm.design"
  ],
  authors: [{ name: "Gunal M" }],
  creator: "Gunal M",
  publisher: "Gunal M",
  metadataBase: new URL('https://gunalm.design'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gunalm.design',
    title: 'Gunal M | Freelance Web Developer & UI/UX Designer in Chennai',
    description: 'Senior product designer and freelance web developer specializing in UI/UX design, web development, and app design. Based in Chennai, India, available worldwide.',
    siteName: 'Gunal M Portfolio',
    images: [
      {
        url: '/Images/DP.png',
        width: 1200,
        height: 630,
        alt: 'Gunal M - Freelance Web Developer & UI/UX Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gunal M | Freelance Web Developer & UI/UX Designer',
    description: 'Senior product designer and freelance web developer specializing in UI/UX design, web development, and app design.',
    images: ['/Images/DP.png'],
    creator: '@gunalm',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code from Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

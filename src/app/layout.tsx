import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "@/components/ui/sonner";

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
});

const satoshi = localFont({
    src: [
        {
            path: "../../public/assets/Satoshi/Satoshi-Variable.woff2",
            style: "normal",
        },
        {
            path: "../../public/assets/Satoshi/Satoshi-VariableItalic.woff2",
            style: "italic",
        },
    ],
    variable: "--font-satoshi",
});

export const metadata: Metadata = {
    title: "Gunal M - Portfolio",
    description: "Portfolio website for Gunal M - gunalm.design",
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased ${dmSans.variable} ${satoshi.variable}`}>
                <SmoothScroll>
                    <Navigation />
                    {children}
                </SmoothScroll>
                <Toaster />
            </body>
        </html>
    );
}


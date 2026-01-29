import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";

import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "@/components/ui/sonner";

const instrumentSerif = localFont({
    src: "./assets/fonts/Instrument_Serif/InstrumentSerif-Regular.ttf",
    variable: "--font-instrument-serif",
    weight: "400",
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
            <body className={`antialiased ${instrumentSerif.variable}`}>
                <SmoothScroll>
                    <Navigation />
                    {children}
                </SmoothScroll>
                <Toaster />
            </body>
        </html>
    );
}


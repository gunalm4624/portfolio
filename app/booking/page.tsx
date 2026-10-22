import type { Metadata } from "next";

import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CalBooking from "./CalBooking";

export const metadata: Metadata = {
  title: "Book a Call | Gunal Design",
  description: "Schedule a free 15-minute introductory call to discuss your web design or UI/UX project.",
};

export default function BookingPage() {
  return (
    <div className="flex min-h-screen flex-col font-body text-[#141413]">
      <Navbar />
      <main className="page-shell flex-1 px-5 pt-4 pb-12 sm:px-8 md:px-10 lg:px-12">
        <div className="grid gap-4 lg:grid-cols-[1fr_2fr]">
          <FadeIn>
            <div className="flex h-full min-h-72 flex-col justify-between gap-10 rounded-[2rem] bg-white p-6 sm:p-10">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#E4F0E0] px-3 py-1.5 text-[13px] text-[#3b6f35]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4f9a46] opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4f9a46]" />
                </span>
                Open to work
              </span>
              <div className="flex flex-col gap-5">
                <h1 className="font-display text-5xl leading-[1.02] tracking-[-0.045em] sm:text-6xl">
                  Let&apos;s build something <span className="text-[#141413]/45">great together.</span>
                </h1>
                <p className="text-lg leading-relaxed text-[#6b6a66]">
                  Pick a time for a free 15-minute call. No pressure, just a chat about your project.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="h-full rounded-[2rem] bg-white p-3 sm:p-6">
              <CalBooking />
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import FadeIn from "../components/FadeIn";
import Navbar from "../components/Navbar";
import SmoothScroll from "../components/SmoothScroll";
import CalBooking from "./CalBooking";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call | Gunal Design",
  description: "Schedule a free 15-minute introductory call to discuss your web design or UI/UX project.",
};

export default function BookingPage() {
  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col bg-white dark:bg-black">
        <Navbar />
        <main className="flex-1 px-6 pb-24 pt-40 sm:px-8">
          <FadeIn className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-normal leading-snug tracking-tighter text-zinc-950 sm:text-5xl dark:text-white">
                Let&apos;s build something <span className="text-[#ed254e]">great</span> together.
              </h1>
              <p className="mt-6 text-lg text-zinc-500 dark:text-zinc-400">
                Pick a time below for a free 15-minute call — no pressure, just a chat about your project.
              </p>
            </div>
            <CalBooking />
          </FadeIn>
        </main>
      </div>
    </SmoothScroll>
  );
}

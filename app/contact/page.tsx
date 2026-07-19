import FadeIn from "../components/FadeIn";
import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import SmoothScroll from "../components/SmoothScroll";
import ContactForm from "./ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Gunal | Let's Build Something Great",
  description: "Get in touch to discuss your next web design or UI/UX project. Let's create something that converts.",
};

export default function ContactPage() {
  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col bg-white dark:bg-black">
        <Navbar />
        <main className="flex-1 px-6 pb-24 pt-40 sm:px-8">
          <FadeIn className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-normal leading-snug tracking-tighter text-zinc-950 sm:text-5xl dark:text-white">
                Let's build something <span className="text-[#ed254e]">great</span> together.
              </h1>
              <p className="mt-6 text-lg text-zinc-500 dark:text-zinc-400">
                Fill out the form below and we'll get back to you within 30 Minutes.
              </p>
            </div>
            <ContactForm />
          </FadeIn>
        </main>
        <Faq />
        <Contact />
      </div>
    </SmoothScroll>
  );
}

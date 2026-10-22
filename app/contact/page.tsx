import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

import Faq from "../components/Faq";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Gunal | Let's Build Something Great",
  description: "Get in touch to discuss your next web design or UI/UX project. Let's create something that converts.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col text-[#141413]">
      <Navbar />

      <main className="page-shell flex-1 px-5 pt-4 pb-4 font-body sm:px-8 md:px-10 lg:px-12">
        <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          <FadeIn>
            <div className="flex h-full min-h-80 flex-col justify-between gap-10 rounded-[2rem] bg-white p-6 sm:p-10">
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
                <p className="max-w-md text-lg leading-relaxed text-[#6b6a66]">
                  Tell me about your project and I&apos;ll get back to you within 30 minutes.
                </p>
                <a
                  href="mailto:hey@gunalm.design"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F4F3EF] px-5 py-3 text-sm transition-colors hover:bg-[#E9E8E2]"
                >
                  hey@gunalm.design
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <ContactForm />
          </FadeIn>
        </div>
      </main>

      <Faq />
      <Footer />
    </div>
  );
}

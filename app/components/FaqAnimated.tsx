"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { penScript } from "../fonts";
import type { FaqItem, FaqSectionContent } from "../../sanity/lib/queries";

function FaqItemCard({
  faq,
  isOpen,
  onClick,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white px-6 dark:border-zinc-800 dark:bg-zinc-900/50">
      <button
        className="flex w-full cursor-pointer items-center justify-between py-6 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="pr-4 text-base font-medium tracking-tight text-zinc-950 sm:text-xl dark:text-white">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqAnimated({
  section,
  faqs,
}: {
  section: FaqSectionContent;
  faqs: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-zinc-50 px-4 py-16 sm:px-8 sm:py-32 dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
        <span className={`${penScript.className} text-xl text-[#ed254e]`}>
          {section.sectionLabel}
        </span>
        <h2 className="mt-6 text-3xl font-medium leading-snug tracking-tighter text-zinc-950 sm:text-5xl dark:text-white">
          {section.heading}
        </h2>

        <div className="mt-16 flex w-full flex-col gap-4 text-left">
          {faqs.map((faq, index) => (
            <FaqItemCard
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

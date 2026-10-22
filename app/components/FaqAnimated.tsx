"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
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
    <div className="rounded-2xl bg-white px-6">
      <button
        className="flex w-full cursor-pointer items-center justify-between py-6 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="pr-4 font-display text-lg tracking-[-0.02em] text-[#141413] sm:text-xl">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4F3EF] text-[#6b6a66]"
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
            <p className="pb-6 text-[15px] leading-relaxed text-[#6b6a66]">
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
    <section id="faq" className="page-shell w-full px-5 py-12 font-body sm:px-8 sm:py-16 md:px-10 lg:px-12">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
            {section.heading}
          </h2>
          <span className="text-[13px] text-[#6b6a66]">{section.sectionLabel}</span>
        </div>

        <div className="flex w-full flex-col gap-3 text-left">
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

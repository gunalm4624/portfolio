"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { penScript } from "../fonts";
import { TextAnimate } from "@/components/magicui/text-animate";
import type { ContactContent } from "../../sanity/lib/queries";
import { CAL_NAMESPACE, calLinkFromHref } from "../../lib/cal";

const wavyVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotate: 45,
    scale: 0.5,
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      y: {
        type: "spring",
        damping: 14,
        stiffness: 150,
        mass: 1.2,
      },
      rotate: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
      scale: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: 30,
    rotate: 45,
    scale: 0.5,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
    },
  }),
};

function HoverButton({ label, href }: { label: string; href: string }) {
  const [isHovered, setIsHovered] = useState(false);

  const button = (
    <motion.button
      title={label}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full border py-4 text-xl font-medium tracking-tight transition-colors duration-300 sm:py-8 sm:text-4xl ${isHovered
        ? "border-[#ed254e] bg-[#ed254e] text-white"
        : "border-zinc-700 bg-zinc-800 text-white"
        }`}
    >
      <span
        className={`pointer-events-none transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
      >
        {label}
      </span>

      {isHovered && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <TextAnimate
            variants={wavyVariants}
            by="character"
            startOnView={false}
            className="pointer-events-none text-xl font-medium tracking-tight sm:text-4xl"
          >
            {label}
          </TextAnimate>
        </div>
      )}
    </motion.button>
  );

  const calLink = calLinkFromHref(href);
  if (calLink) {
    return (
      <div
        data-cal-namespace={CAL_NAMESPACE}
        data-cal-link={calLink}
        data-cal-config='{"layout":"month_view"}'
        className="w-full max-w-xl lg:max-w-none lg:flex-1"
      >
        {button}
      </div>
    );
  }

  return (
    <a href={href} title={label} target="_blank" rel="noopener noreferrer" className="w-full max-w-xl lg:max-w-none lg:flex-1">
      {button}
    </a>
  );
}

export default function ContactAnimated({ content }: { content: ContactContent }) {
  return (
    <section id="contact" className="w-full bg-black">
      <div className="page-shell mx-auto flex flex-col items-center px-4 pb-8 pt-16 text-center sm:px-8 sm:pb-10 sm:pt-24">
        <span className={`${penScript.className} text-xl text-[#ed254e]`}>
          {content.sectionLabel}
        </span>

        <div className="mt-12 flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
          {content.buttons.map((button, idx) => (
            <HoverButton key={idx} label={button.label} href={button.href} />
          ))}
        </div>

        <div className="mt-16 w-full">
          <img src="/footer-text.svg" alt="gunalm.design" className="w-full h-auto object-contain" />
        </div>

        <div className="mt-20 pb-8 text-sm text-zinc-400">
          <span className="text-white">{content.copyrightText}</span>
        </div>
      </div>
    </section>
  );
}

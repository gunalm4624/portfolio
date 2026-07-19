"use client";

import { motion } from "motion/react";

import { TextAnimate } from "@/components/magicui/text-animate";

import type { HeroContent } from "../../sanity/lib/queries";
import CtaButton from "./CtaButton";

export default function HeroAnimated({ hero }: { hero: HeroContent }) {
  return (
    <section className="flex w-full flex-col items-center px-6 pt-32 pb-16 sm:pt-48 sm:pb-24 text-center sm:px-8">
      <h1 className="max-w-3xl text-[32px] sm:text-[52px] font-medium leading-snug sm:leading-[1.08] tracking-tighter text-zinc-950 dark:text-white">
        <TextAnimate
          as="span"
          by="word"
          animation="blurIn"
          className="block"
          segmentClassName="inline-block"
        >
          {hero.headingLine1}
        </TextAnimate>
        <TextAnimate
          as="span"
          by="word"
          animation="blurIn"
          delay={0.15}
          className="block"
          segmentClassName="inline-block"
        >
          {hero.headingLine2}
        </TextAnimate>
      </h1>

      <TextAnimate
        as="p"
        by="word"
        animation="blurIn"
        delay={0.35}
        className="whitespace-pre-wrap mt-4 sm:mt-8 max-w-xl text-base leading-7 text-zinc-500 dark:text-zinc-400"
      >
        {hero.subheading}
      </TextAnimate>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
      >
        <CtaButton label={hero.ctaLabel} href={hero.ctaHref} />
      </motion.div>
    </section>
  );
}

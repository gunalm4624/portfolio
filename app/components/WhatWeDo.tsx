import { penScript } from "../fonts";
import { getWhatWeDo } from "../../sanity/lib/queries";

import { TextAnimate } from "@/components/magicui/text-animate";

export default async function WhatWeDo() {
  const content = await getWhatWeDo();

  return (
    <section className="w-full bg-black px-6 py-16 sm:py-32 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <span className={`${penScript.className} text-xl text-emerald-400`}>
          {content.sectionLabel}
        </span>

        <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-snug tracking-tight sm:text-5xl">
          <TextAnimate animation="blurInUp" as="span" className="text-zinc-500" delay={0}>
            {content.textBefore}
          </TextAnimate>
          {" "}
          <TextAnimate animation="blurInUp" as="span" className="text-white" delay={0.3}>
            {content.textHighlight}
          </TextAnimate>
          {" "}
          <TextAnimate animation="blurInUp" as="span" className="text-zinc-500" delay={0.7}>
            {content.textAfter}
          </TextAnimate>
        </h2>
      </div>
    </section>
  );
}

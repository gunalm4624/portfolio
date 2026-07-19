import { penScript } from "../fonts";
import { getProcess } from "../../sanity/lib/queries";
import CtaButton from "./CtaButton";

export default async function Process() {
  const content = await getProcess();

  return (
    <section id="process" className="w-full bg-white px-6 py-16 sm:py-32 sm:px-8 dark:bg-zinc-50">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-32">
        {/* Left Column */}
        <div className="flex h-fit flex-col items-start pt-8 lg:sticky lg:top-32 lg:self-start">
          <span className={`${penScript.className} text-xl text-[#ed254e]`}>
            {content.sectionLabel}
          </span>
          <h2 className="mt-6 text-4xl font-normal leading-snug tracking-tighter text-zinc-950">
            {content.headingLead} <span className="text-zinc-500">{content.headingRest}</span>
          </h2>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-24 pt-8">
          {content.phases.map((phase, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="mb-8 border-b border-zinc-200 pb-6 text-3xl font-medium tracking-tight text-zinc-950">
                {phase.phase}
              </h3>
              <div className="flex flex-col divide-y divide-zinc-200">
                {phase.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col py-10 first:pt-0 last:pb-0">
                    <h4 className="text-2xl font-medium tracking-tight text-zinc-950">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="mt-4 text-base leading-relaxed text-zinc-500">
                        {item.description}
                      </p>
                    )}
                    {item.actionLabel && item.actionHref && (
                      <div className="mt-6 w-fit">
                        <CtaButton
                          label={item.actionLabel}
                          href={item.actionHref}
                          shadow={false}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

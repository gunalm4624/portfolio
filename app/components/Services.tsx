import { penScript } from "../fonts";
import { getServices, getServicesSection } from "../../sanity/lib/queries";
import CtaButton from "./CtaButton";

export default async function Services() {
  const [section, services] = await Promise.all([getServicesSection(), getServices()]);

  return (
    <section id="services" className="w-full bg-black px-6 py-16 sm:py-32 sm:px-8">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-32">
        {/* Left Column */}
        <div className="flex h-fit flex-col items-start pt-8 lg:sticky lg:top-32 lg:self-start">
          <span className={`${penScript.className} text-xl text-yellow-400`}>
            {section.sectionLabel}
          </span>
          <h2 className="mt-6 text-4xl font-normal leading-[1.08] tracking-tighter text-white">
            {section.heading}
          </h2>
          <p className="mt-6 max-w-md text-lg text-zinc-400">
            {section.subheadingPrefix}{" "}
            <a href={`mailto:${section.email}`} className="text-white hover:underline">
              {section.email}
            </a>
          </p>
          <div className="mt-8">
            <CtaButton
              label={section.ctaLabel}
              href={section.ctaHref}
              shadow={false}
              className="!bg-zinc-800 hover:!bg-[#ed254e] border border-zinc-700"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="rounded-3xl bg-white p-8 sm:p-10">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                <h3 className="text-2xl font-medium text-zinc-950 tracking-tight">{service.title}</h3>
                <span className="text-lg font-medium text-[#ed254e]">{service.price}</span>
              </div>
              <p className="mt-6 text-base text-zinc-500">
                {service.description}
              </p>
              {service.tags && service.tags.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {service.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

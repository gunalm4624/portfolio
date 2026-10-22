import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

import FadeIn from "./FadeIn";

type Stat = {
  value: string;
  label: string;
  color: string;
};

type Project = {
  year: string;
  tags: string[];
  title: string;
  description: string;
  stats: Stat[];
  accent: string;
  href: string;
  image?: string;
  gallery?: string[];
  imageAlign?: "center" | "end";
  soon?: string;
};

const projects: Project[] = [
  {
    year: "Oct 2026",
    tags: ["Native iOS", "Swift", "Built with Claude Code"],
    title: "Hydrabit — a hydration app where your organs fill with water",
    description:
      "Designed and built entirely with Claude Code, then soft-launched in a week, review time included. Every sip fills a human organ, and a fully automated GTM system helps it stand out in a crowded habit-tracker market.",
    stats: [
      { value: "1 week", label: "idea to soft launch", color: "#ed254e" },
    ],
    accent: "#CDEBF0",
    href: "/work/hydrabit",
    gallery: [
      "/work/hydrabit/iphone-1.png",
      "/work/hydrabit/iphone-4.png",
      "/work/hydrabit/iphone-6.png",
    ],
  },
  {
    year: "Sep 2026",
    tags: ["Native iOS", "Swift", "Health & Fitness"],
    title: "Pace — a walking app that tells me how many steps to take",
    description:
      "Built for myself in a week, as a single iPhone version. Based on my weight and timeframe, it suggests how many steps to walk each day, instead of just counting them.",
    stats: [
      { value: "1 week", label: "built for myself, one version", color: "#ed254e" },
    ],
    accent: "#F9D3DA",
    href: "/work/pace",
    gallery: ["/work/pace/pace-1.png", "/work/pace/pace-3.png"],
  },
  {
    year: "Sep 2026",
    tags: ["Native iOS", "Swift", "Business"],
    title: "BrandInvoice — branded invoices in under 20 seconds",
    description:
      "Built in a week for MSME businesses: an invoice maker that puts their own logo, signature and brand colour on every invoice, and keeps their clients in one place.",
    stats: [
      { value: "<20s", label: "to a branded invoice", color: "#ed254e" },
    ],
    accent: "#D3EAF7",
    href: "/work/brandinvoice",
    gallery: ["/work/brandinvoice/bi-3.png", "/work/brandinvoice/bi-1.png"],
  },
  {
    year: "Nov 2026",
    tags: ["Marketplace", "Mobile app"],
    title: "WorkRadius — a local marketplace for service workers",
    description:
      "An app that connects people with local service workers nearby. I'm building it now and planning to launch in November.",
    stats: [],
    accent: "#FBE38A",
    href: "#",
    soon: "Launching November",
  },
];


function Wrapper({ href, className, children }: { href?: string; className: string; children: ReactNode }) {
  if (!href) return <div className={className}>{children}</div>;
  return (
    <a href={href} title="Read the full case study" className={className}>
      {children}
    </a>
  );
}

export default function Works() {
  return (
    <section id="works" className="page-shell w-full scroll-mt-6 px-5 py-16 font-body text-[#141413] sm:px-8 sm:py-24 md:px-10 lg:px-12">
      <FadeIn>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-5xl tracking-[-0.04em] sm:text-6xl">Selected work</h2>
          <p className="max-w-xs text-[15px] leading-relaxed text-[#6b6a66]">
            Three apps shipped, designed and built end to end, and a fourth on the way.
          </p>
        </div>
      </FadeIn>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => {
          const wide = index === 0 || (index === projects.length - 1 && index % 2 === 1);
          const title = project.title.replace(/\n/g, " ");
          const [name, ...rest] = title.split(/ [—-] /);
          return (
            <FadeIn key={project.href} className={wide ? "md:col-span-2" : ""}>
              <Wrapper
                href={project.soon ? undefined : project.href}
                className={`group flex h-full flex-col gap-6 rounded-[2rem] bg-white p-3 ${
                  project.soon ? "" : "transition-shadow duration-300 hover:shadow-[0_24px_48px_-24px_rgba(20,20,19,0.25)]"
                }`}
              >
                <div
                  className={`overflow-hidden rounded-[1.5rem] p-5 sm:p-10 ${wide ? "" : "sm:p-8"}`}
                  style={{ backgroundColor: project.accent }}
                >
                  {project.soon ? (
                    <div className="flex min-h-56 flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-[#141413]/20 px-6 py-10 text-center sm:min-h-72">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70">
                        <MapPin size={20} strokeWidth={1.5} />
                      </span>
                      <p className="font-display text-3xl tracking-[-0.03em] sm:text-4xl">{project.soon}</p>
                      <p className="text-sm text-[#4c4b47]">Screens coming soon</p>
                    </div>
                  ) : project.gallery ? (
                    <div className="flex items-start justify-center gap-3 sm:gap-8">
                      {project.gallery.map((src, i) => (
                        <Image
                          key={src}
                          src={src}
                          alt={`${name} app screen ${i + 1}`}
                          width={1000}
                          height={2075}
                          sizes="(min-width: 768px) 25vw, 33vw"
                          className={`h-auto ${project.gallery!.length > 2 ? "w-[30%]" : "w-[42%]"} max-w-[300px] transition-transform duration-500 ${i === 1 ? "mt-6 sm:mt-10" : ""}`}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="overflow-hidden rounded-xl shadow-[0_20px_40px_-20px_rgba(20,20,19,0.35)] transition-transform duration-500 group-hover:scale-[1.015]">
                      <Image
                        src={project.image!}
                        alt={`${name} case study preview`}
                        width={1600}
                        height={1000}
                        sizes={wide ? "(min-width: 768px) 80vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
                        unoptimized
                        className="h-auto w-full"
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-4 px-3 pb-3 sm:px-4 sm:pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-2xl tracking-[-0.03em] sm:text-3xl">{name}</h3>
                      <span className="text-sm text-[#6b6a66]">{project.year}</span>
                    </div>
                    {project.soon ? null : (
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F4F3EF] transition-colors group-hover:bg-[#141413] group-hover:text-white">
                        <ArrowUpRight size={16} />
                      </span>
                    )}
                  </div>
                  <p className="max-w-2xl text-[15px] leading-relaxed text-[#6b6a66]">
                    {rest.length ? `${rest.join(" — ").replace(/^./, (c) => c.toUpperCase())}. ` : ""}
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#F4F3EF] px-3.5 py-1.5 text-[13px] text-[#4c4b47]">
                        {tag}
                      </span>
                    ))}
                    {project.soon ? (
                      <span className="rounded-full bg-[#141413] px-3.5 py-1.5 text-[13px] text-white">{project.soon}</span>
                    ) : null}
                    {project.stats[0] ? (
                      <span className="rounded-full bg-[#E4F0E0] px-3.5 py-1.5 text-[13px] text-[#3b6f35]">
                        {project.stats[0].value} {project.stats[0].label}
                      </span>
                    ) : null}
                  </div>
                </div>
              </Wrapper>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

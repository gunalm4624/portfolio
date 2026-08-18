import { ImagePlus } from "lucide-react";
import Image from "next/image";

import FadeIn from "./FadeIn";

type Stat = {
  value: string;
  label: string;
  color: string;
};

type Project = {
  tags: string[];
  title: string;
  description: string;
  stats: Stat[];
  accent: string;
  href: string;
  image?: string;
  imageAlign?: "center" | "end";
};

const projects: Project[] = [
  {
    tags: ["Mareana", "AI Product"],
    title: "Lumis — an AI assistant for pharma batch records",
    description:
      "Pharma teams were losing hours digging through batch records and manufacturing data scattered across systems. I designed the assistant that lets them just ask.",
    stats: [
      { value: "10+", label: "CDMOs & sponsors live", color: "#ed254e" },
      { value: "48h → <5min", label: "batch record lookups", color: "#2F5DFF" },
      { value: "In progress", label: "Sponsor & CDMO feedback", color: "#22C55E" },
    ],
    accent: "#FBBF24",
    href: "/work/lumis-chatbot",
    image: "/work/lumis-chatbot/card.png",
  },
  {
    tags: ["Mareana", "AI Design System"],
    title: "AI Design System —\nso screens still look like Mareana",
    description:
      "LLM screens were drifting off-brand. I wrote the system as markdown the model has to read first, so engineering can ship the product instead of restyling it.",
    stats: [
      { value: "85%", label: "AI slop & inconsistent UI avoided", color: "#ed254e" },
      { value: "Org-wide", label: "product & eng using this", color: "#2F5DFF" },
    ],
    accent: "#181510",
    href: "/work/ai-design-system",
    image: "/work/ai-design-system/card.png",
  },
  {
    tags: ["Independent", "Live product"],
    title: "WorkRadius —\njobs near your commute, on a map",
    description:
      "My own product: a job platform for designers. Roles float on a map so you can hunt near your commute, apply, and track applications — built to make job hunting actually fun.",
    stats: [
      { value: "15 days", label: "built and launched", color: "#ed254e" },
      { value: "~42", label: "people using it for job hunt", color: "#2F5DFF" },
    ],
    accent: "#F97316",
    href: "/work/workradius",
    image: "/work/workradius/workradius.webp",
  },
  {
    tags: ["FSS", "SBI Merchant"],
    title: "FSS — SBI merchant verification\nKYC the back office can finish",
    description:
      "Back-office for the SBI Merchant team: pull a case, check Aadhaar and PAN page by page, send blurry docs back, then approve the merchant.",
    stats: [
      { value: "40%", label: "review time reduced", color: "#ed254e" },
    ],
    accent: "#0054A6",
    href: "/work/fss",
    image: "/work/fss/card.webp",
  },
];

function ProjectVisual({ project, className = "" }: { project: Project; className?: string }) {
  if (project.image) {
    return (
      <div
        className={`flex h-full min-w-0 p-4 sm:p-8 ${project.imageAlign === "end" ? "items-end" : "items-center"} ${className}`}
        style={{ backgroundColor: project.accent }}
      >
        <div className="w-full overflow-hidden rounded-[8px]">
          <Image
            src={project.image}
            alt={`${project.title.replace(/\n/g, " ")} dashboard`}
            width={1600}
            height={1000}
            sizes="(min-width: 640px) 50vw, 100vw"
            unoptimized
            className="h-auto w-full"
          />
        </div>
      </div>
    );
  }

  return <ImagePlaceholder accent={project.accent} className={className} />;
}

function ImagePlaceholder({ accent, className = "" }: { accent: string; className?: string }) {
  return (
    <div
      className={`relative flex min-h-[320px] items-center justify-center overflow-hidden sm:min-h-[480px] ${className}`}
      style={{ backgroundColor: accent }}
    >
      <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-[#181510]/25 px-8 py-10 text-[#181510]/60">
        <ImagePlus size={28} strokeWidth={1.5} />
        <span className="font-mono text-xs">Drop project image here</span>
      </div>
    </div>
  );
}

function ProjectContent({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <div className={`flex h-full min-w-0 flex-col justify-between gap-6 px-5 py-8 sm:px-12 sm:py-14 ${className}`}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag, index) =>
            index === 0 ? (
              <span
                key={tag}
                className="rounded-full bg-[#181510] px-4 py-1.5 font-mono text-xs text-[#F2EEE3]"
              >
                {tag}
              </span>
            ) : (
              <span
                key={tag}
                className="rounded-full border border-[#181510]/20 px-4 py-1.5 font-mono text-xs text-[#181510]/70"
              >
                {tag}
              </span>
            ),
          )}
        </div>

        <h3 className="text-2xl leading-[1.15] font-extrabold tracking-tight whitespace-pre-line sm:text-4xl">
          {project.title}
        </h3>

        <p className="max-w-md text-base text-[#181510]/70 sm:text-lg">{project.description}</p>

        <div className="flex flex-wrap gap-6 sm:gap-8">
          {project.stats.map((stat) => (
            <div key={stat.label} className="flex min-w-0 flex-col gap-1">
              <span className="text-2xl font-extrabold" style={{ color: stat.color }}>
                {stat.value}
              </span>
              <span className="font-mono text-xs text-[#181510]/60 sm:whitespace-nowrap">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href={project.href}
        rel="nofollow"
        title="Read the full case study"
        className="w-fit border-b-2 border-[#ed254e] font-mono text-sm font-bold text-[#181510] transition-opacity hover:opacity-70"
      >
        Read the full case study →
      </a>
    </div>
  );
}

export default function Works() {
  return (
    <section id="works" className="page-shell w-full bg-[#F2EEE3] px-4 py-16 text-[#181510] sm:px-6 sm:py-24 md:px-20">
      <FadeIn>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Selected work</h2>
      </FadeIn>

      <div className="mt-8 flex flex-col gap-8 sm:mt-12 sm:gap-10">
        {projects.map((project, index) => (
          <FadeIn key={project.title}>
            <div className="scp3 grid min-w-0 overflow-hidden rounded-[1.5rem] border border-[#181510] bg-white transition-shadow duration-200 hover:shadow-[0px_10px_0px_-4px_#9CA3AF] sm:rounded-[2rem] sm:grid-cols-2">
              <ProjectVisual
                project={project}
                className={index % 2 === 0 ? "order-1 sm:order-2" : "order-1"}
              />
              <ProjectContent
                project={project}
                className={index % 2 === 0 ? "order-2 sm:order-1" : "order-2"}
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

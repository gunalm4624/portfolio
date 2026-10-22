import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export type LegalSection = { heading: string; body: ReactNode };

export default function LegalPage({
  brand,
  backHref,
  title,
  effective,
  intro,
  summary,
  sections,
  contactEmail,
}: {
  brand: string;
  backHref: string;
  title: string;
  effective: string;
  intro: ReactNode;
  summary: ReactNode;
  sections: LegalSection[];
  contactEmail: string;
}) {
  return (
    <div className="flex min-h-screen flex-col font-body text-[#141413]">
      <main className="page-shell flex-1 px-5 py-4 sm:px-8 md:px-10 lg:px-12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-12 rounded-[2rem] bg-white p-6 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href={backHref}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F4F3EF] px-4 py-2 text-sm transition-colors hover:bg-[#E9E8E2]"
              >
                {brand}
                <ArrowUpRight size={14} />
              </Link>
              <span className="text-[13px] text-[#6b6a66]">Effective {effective}</span>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-display text-5xl leading-[1] tracking-[-0.045em] sm:text-7xl">{title}</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-[#6b6a66]">{intro}</p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#141413] p-6 text-white sm:p-10">
            <p className="text-[13px] text-white/50">The short version</p>
            <p className="mt-4 max-w-3xl font-display text-2xl leading-snug tracking-[-0.03em] sm:text-3xl">{summary}</p>
          </div>

          <div className="flex flex-col gap-3">
            {sections.map((section, i) => (
              <section key={section.heading} className="rounded-2xl bg-white p-6 sm:p-8">
                <div className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-10">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[13px] text-[#6b6a66]">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="font-display text-xl tracking-[-0.02em] sm:text-2xl">{section.heading}</h2>
                  </div>
                  <div className="text-[15px] leading-relaxed text-[#6b6a66] sm:text-base">{section.body}</div>
                </div>
              </section>
            ))}
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-white p-6 sm:flex-row sm:items-center sm:p-10">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F4F3EF]">
                <Mail size={17} strokeWidth={1.5} />
              </span>
              <p className="font-display text-xl tracking-[-0.02em]">Questions about this policy?</p>
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#141413] px-5 py-3 text-sm text-white transition-colors hover:bg-[#2f2f2c]"
            >
              {contactEmail}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

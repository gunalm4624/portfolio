"use client";

import type { CSSProperties } from "react";

import { ArrowUpRight, MousePointerClick } from "lucide-react";
import Image from "next/image";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const embedTheme = {
  "--background": "#ffffff",
  "--foreground": "#111827",
  "--popover": "#ffffff",
  "--popover-foreground": "#111827",
  "--primary": "#111111",
  "--primary-foreground": "#ffffff",
  "--muted": "#f3f4f6",
  "--muted-foreground": "#6b7280",
  "--border": "#e5e7eb",
} as CSSProperties;

function WorkRadiusFrame({ className }: { className?: string }) {
  return (
    <iframe
      src="https://www.workradius.in/"
      title="WorkRadius"
      className={className}
      allow="geolocation"
      loading="lazy"
    />
  );
}

export default function WorkRadiusEmbed() {
  return (
    <Dialog>
      <div className="rounded-[24px] bg-white p-[6px]">
        <div className="relative isolate overflow-hidden rounded-[20px] bg-[#f4f4f5]">
          <div className="relative z-0 h-[min(70vh,480px)] sm:h-[720px] lg:h-[860px] xl:h-[960px]">
            <Image
              src="/work/workradius/workradius.webp"
              alt="WorkRadius — commute-first job search"
              fill
              sizes="100vw"
              unoptimized
              className="object-cover object-top"
            />
            <WorkRadiusFrame className="pointer-events-none absolute inset-0 h-full w-full border-0 bg-white" />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col items-center bg-gradient-to-t from-white via-white/85 to-transparent pt-28 pb-8">
            <DialogTrigger
              render={
                <button
                  type="button"
                  className="pointer-events-auto relative flex h-12 w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-zinc-950 px-6 text-base font-normal text-white shadow-[0_2px_1px_rgba(0,0,0,0.09),0_4px_2px_rgba(0,0,0,0.09),0_8px_4px_rgba(0,0,0,0.09),0_16px_8px_rgba(0,0,0,0.09),0_32px_16px_rgba(0,0,0,0.09)] transition-all duration-300 hover:bg-[#ed254e] hover:shadow-[0_2px_1px_rgba(237,37,78,0.25),0_4px_2px_rgba(237,37,78,0.22),0_8px_4px_rgba(237,37,78,0.18),0_16px_8px_rgba(237,37,78,0.15),0_32px_16px_rgba(237,37,78,0.12)]"
                >
                  <span className="pointer-events-none absolute -top-4 -right-4 h-12 w-12 rounded-full bg-gradient-to-br from-zinc-300/70 to-transparent blur-lg" />
                  <MousePointerClick size={18} />
                  See interactive version
                </button>
              }
            />
          </div>
        </div>
      </div>
      <DialogContent
        style={embedTheme}
        closeButtonClassName="top-0 right-0 size-9 translate-x-1/3 -translate-y-1/3 rounded-full border border-border bg-white text-[#181510] shadow-md hover:bg-white hover:text-[#181510]"
        className="flex h-[calc(100dvh-0.75rem)] max-h-[calc(100dvh-0.75rem)] w-[calc(100%-0.75rem)] max-w-[calc(100%-0.75rem)] flex-col overflow-hidden rounded-[16px] border-border bg-background p-1.5 text-foreground sm:h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-2rem)] sm:w-[calc(100%-2rem)] sm:max-w-[calc(100%-2rem)] sm:overflow-visible sm:rounded-[24px] sm:p-2"
      >
        <DialogTitle className="sr-only">WorkRadius — live product</DialogTitle>
        <div className="relative min-h-0 flex-1 overflow-hidden rounded-[20px] border border-[#e5e7eb]">
          <a
            href="https://www.workradius.in/"
            target="_blank"
            rel="noreferrer"
            className="absolute top-3 right-12 z-10 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-[#181510] shadow-sm"
          >
            workradius.in <ArrowUpRight size={12} />
          </a>
          <WorkRadiusFrame className="h-full w-full border-0" />
        </div>
      </DialogContent>
    </Dialog>
  );
}

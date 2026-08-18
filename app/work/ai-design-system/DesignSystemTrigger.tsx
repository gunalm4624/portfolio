"use client";

import type { CSSProperties } from "react";

import { MousePointerClick } from "lucide-react";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import DesignSystemSpec from "./DesignSystemSpec";

const specTheme = {
  "--background": "#ffffff",
  "--foreground": "#09090b",
  "--popover": "#ffffff",
  "--popover-foreground": "#09090b",
  "--primary": "#09090b",
  "--primary-foreground": "#ffffff",
  "--muted": "#f4f4f5",
  "--muted-foreground": "#71717a",
  "--border": "#e4e4e7",
} as CSSProperties;

export default function DesignSystemTrigger() {
  return (
    <Dialog>
      <div className="rounded-[24px] bg-white p-[6px]">
        <div className="relative isolate overflow-hidden rounded-[20px]" data-project-preview>
          <div className="relative z-0 pointer-events-none select-none" aria-hidden inert>
            <DesignSystemSpec heightClassName="h-[min(70vh,480px)] sm:h-[720px] lg:h-[860px] xl:h-[960px]" />
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
                  Explore the spec
                </button>
              }
            />
          </div>
        </div>
      </div>
      <DialogContent
        style={specTheme}
        closeButtonClassName="top-0 right-0 size-9 translate-x-1/3 -translate-y-1/3 rounded-full border border-border bg-white text-[#181510] shadow-md hover:bg-white hover:text-[#181510]"
        className="flex h-[calc(100dvh-0.75rem)] max-h-[calc(100dvh-0.75rem)] w-[calc(100%-0.75rem)] max-w-[calc(100%-0.75rem)] flex-col overflow-hidden rounded-[16px] border-border bg-background p-1.5 text-foreground sm:h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-2rem)] sm:w-[calc(100%-2rem)] sm:max-w-[calc(100%-2rem)] sm:overflow-visible sm:rounded-[24px] sm:p-2"
      >
        <DialogTitle className="sr-only">Mareana AI Design System — interactive spec</DialogTitle>
        <DesignSystemSpec heightClassName="min-h-0 h-full flex-1" frameClassName="rounded-[20px]" />
      </DialogContent>
    </Dialog>
  );
}

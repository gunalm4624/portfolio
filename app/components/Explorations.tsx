import { ArrowRight, CookingPot } from "lucide-react";

import CtaButton from "./CtaButton";
import FadeIn from "./FadeIn";

/**
 * Landscape tiles, a bit taller than 6:4 so two-up still has presence.
 */
export const TILE_RATIO = "aspect-[5/4]";

/** Home grid is two-up. Preview stops after this many rows. */
export const PREVIEW_COLUMNS = 2;
export const PREVIEW_ROWS = 3;
export const PREVIEW_LIMIT = PREVIEW_COLUMNS * PREVIEW_ROWS;

export type Exploration = {
  id: string;
  label: string;
  accent: string;
  src?: string;
};

export const explorations: Exploration[] = [
  { id: "dib", label: "DIB — merchant queue", accent: "#1B4D3E", src: "/explorations/dib.png" },
  { id: "iq", label: "IQ — inspection OS", accent: "#F4A574", src: "/explorations/iq.png" },
  { id: "hey", label: "HEY — influencer growth", accent: "#181510", src: "/explorations/hey.png" },
  { id: "finspace", label: "Finspace — money with clarity", accent: "#9EC9E8", src: "/explorations/finspace.png" },
  { id: "codewalla", label: "Codewalla — digital advantage", accent: "#6B7A3A", src: "/explorations/codewalla.png" },
  { id: "cooking", label: "Cooking something", accent: "#FAF8F1" },
];

export function ExplorationTile({ item }: { item: Exploration }) {
  return (
    <div className="rounded-2xl bg-white p-[6px]">
      <div
        className={`overflow-hidden rounded-[14px] ${TILE_RATIO}`}
        style={{ backgroundColor: item.accent }}
      >
        {item.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.src} alt={item.label} className="h-full w-full object-cover object-top" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-[#181510]/15 text-[#181510]/50">
            <CookingPot size={28} strokeWidth={1.5} />
            <div className="flex flex-col items-center gap-1">
              <span className="font-mono text-xs text-[#181510]/70">Cooking something</span>
              <span className="font-mono text-[11px]">That will go here</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Explorations() {
  const hasOverflow = explorations.length > PREVIEW_LIMIT;
  const preview = hasOverflow ? explorations.slice(0, PREVIEW_LIMIT) : explorations;

  return (
    <section
      id="explorations"
      className="page-shell w-full bg-[#F2EEE3] px-4 pt-8 pb-16 text-[#181510] sm:px-6 sm:pb-24 md:px-20"
    >
      <FadeIn>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Design exploration</h2>
      </FadeIn>

      <FadeIn>
        <p className="mt-5 max-w-xl text-base text-[#181510]/70 sm:text-lg">
          Side quests, offcuts, and things that never shipped.
        </p>
      </FadeIn>

      <FadeIn>
        <div className="relative mt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {preview.map((item) => (
              <ExplorationTile key={item.id} item={item} />
            ))}
          </div>

          {hasOverflow ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-[#F2EEE3]"
            />
          ) : null}
        </div>
      </FadeIn>

      {hasOverflow ? (
        <FadeIn>
          <div className="-mt-4 flex justify-center">
            <CtaButton
              label="I have way too many of these"
              href="/explorations"
              icon={<ArrowRight size={18} className="shrink-0" />}
              iconPosition="suffix"
            />
          </div>
        </FadeIn>
      ) : null}
    </section>
  );
}


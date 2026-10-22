import { ArrowRight, CookingPot } from "lucide-react";

import CtaButton from "./CtaButton";
import FadeIn from "./FadeIn";

/**
 * Landscape tiles, a bit taller than 6:4 so two-up still has presence.
 */
export const TILE_RATIO = "aspect-[4/3]";

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
  { id: "hey", label: "HEY — influencer growth", accent: "#141413", src: "/explorations/hey.png" },
  { id: "finspace", label: "Finspace — money with clarity", accent: "#9EC9E8", src: "/explorations/finspace.png" },
  { id: "codewalla", label: "Codewalla — digital advantage", accent: "#6B7A3A", src: "/explorations/codewalla.png" },
  { id: "cooking", label: "Cooking something", accent: "#FAF8F1" },
];

export function ExplorationTile({ item }: { item: Exploration }) {
  return (
    <div className="rounded-[1.75rem] bg-white p-2">
      <div className="overflow-hidden rounded-[1.25rem]" style={{ backgroundColor: item.accent }}>
        {item.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.src} alt={item.label} className="block h-auto w-full" />
        ) : (
          <div className={`flex w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-[#141413]/15 text-[#141413]/50 ${TILE_RATIO}`}>
            <CookingPot size={28} strokeWidth={1.5} />
            <div className="flex flex-col items-center gap-1">
              <span className="font-mono text-xs text-[#141413]/70">Cooking something</span>
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
      className="page-shell w-full scroll-mt-6 px-5 py-12 font-body text-[#141413] sm:px-8 sm:py-16 md:px-10 lg:px-12"
    >
      <FadeIn>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-5xl tracking-[-0.04em] sm:text-6xl">Explorations</h2>
          <p className="max-w-xs text-[15px] leading-relaxed text-[#6b6a66]">
            Side quests, offcuts, and things that never shipped.
          </p>
        </div>
      </FadeIn>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {preview.map((item, i) => (
          <FadeIn key={item.id} delay={(i % 2) * 0.06}>
            <ExplorationTile item={item} />
          </FadeIn>
        ))}
      </div>

      {hasOverflow ? (
        <FadeIn>
          <div className="mt-8 flex justify-center">
            <CtaButton
              label="See all explorations"
              href="/explorations"
              icon={<ArrowRight size={16} className="shrink-0" />}
              iconPosition="suffix"
            />
          </div>
        </FadeIn>
      ) : null}
    </section>
  );
}

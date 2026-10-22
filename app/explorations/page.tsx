import type { Metadata } from "next";

import { ExplorationTile, explorations } from "../components/Explorations";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Design Exploration | gunalm.design",
  description:
    "Side quests, offcuts, and interface studies — the design work that never shipped but was worth making.",
};

export default function ExplorationsPage() {
  return (
    <div className="flex min-h-screen flex-col text-[#141413]">
      <Navbar />

      <main className="page-shell flex-1 px-5 pt-4 pb-12 font-body sm:px-8 md:px-10 lg:px-12">
        <FadeIn>
          <div className="flex flex-col gap-6 rounded-[2rem] bg-white p-6 sm:p-10">
            <span className="text-[13px] text-[#6b6a66]">Explorations</span>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.02] tracking-[-0.045em] text-balance sm:text-7xl">
              Told you there were <span className="text-[#141413]/45">more.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[#6b6a66]">
              Side quests, offcuts, and interface studies. Not every one of these became a product, and most of them just made the next one better.
            </p>
          </div>
        </FadeIn>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {explorations.map((item, i) => (
            <FadeIn key={item.id} delay={(i % 2) * 0.06}>
              <ExplorationTile item={item} />
            </FadeIn>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

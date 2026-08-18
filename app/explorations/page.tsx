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

const allExplorations = explorations;

export default function ExplorationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F2EEE3] text-[#181510]">
      <Navbar />

      <main className="page-shell flex-1 px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-24 md:px-20">
        <FadeIn>
          <p className="font-mono text-sm text-[#181510]/50">Explorations</p>
        </FadeIn>

        <FadeIn>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-balance sm:text-6xl md:text-7xl">
            Told you there were more.
          </h1>
        </FadeIn>

        <FadeIn>
          <p className="mt-6 max-w-xl text-base text-[#181510]/70 sm:text-lg">
            Side quests, offcuts, and interface studies. Not every one of these became a product —
            most of them just made the next one better.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {allExplorations.map((item) => (
              <ExplorationTile key={item.id} item={item} />
            ))}
          </div>
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
}

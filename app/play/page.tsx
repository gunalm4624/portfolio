import type { Metadata } from "next";

import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TicTacToe from "./TicTacToe";

export const metadata: Metadata = {
  title: "Play with Gunal | gunalm.design",
  description:
    "A short break from case studies — a game of tic-tac-toe against Gunal. You're X, he's O.",
};

export default function PlayPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F2EEE3] text-[#181510]">
      <Navbar />

      <main className="flex-1 px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-24 md:px-20">
        <FadeIn>
          <p className="font-mono text-sm text-[#181510]/50">Let&apos;s Play With Me</p>
        </FadeIn>

        <FadeIn>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-balance sm:text-6xl md:text-7xl">
            Tic-tac-toe, on the house.
          </h1>
        </FadeIn>

        <FadeIn>
          <p className="mt-6 max-w-xl text-base text-[#181510]/70 sm:text-lg">
            A short break from case studies. You&apos;re X, Gunal is playing O — take turns and see
            who removes the last bit of friction.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mt-16">
            <TicTacToe />
          </div>
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
}

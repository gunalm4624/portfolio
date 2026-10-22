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
    <div className="flex min-h-screen flex-col font-body text-[#141413]">
      <Navbar />

      <main className="page-shell flex-1 px-5 pt-4 pb-12 sm:px-8 md:px-10 lg:px-12">
        <div className="grid gap-4 md:grid-cols-2">
          <FadeIn>
            <div className="flex h-full min-h-80 flex-col justify-between gap-12 rounded-[2rem] bg-white p-6 sm:p-8 lg:p-10">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#FBE38A] px-3.5 py-1.5 text-[13px]">
                Let&apos;s play
              </span>
              <div className="flex flex-col gap-5">
                <h1 className="font-display text-5xl leading-[1.02] tracking-[-0.045em] text-balance md:text-6xl lg:text-7xl">
                  Tic-tac-toe, <span className="text-[#141413]/45">on the house.</span>
                </h1>
                <p className="max-w-md text-lg leading-relaxed text-[#6b6a66]">
                  A short break from case studies. You&apos;re X, Gunal is playing O. Take turns and see who removes the last bit of friction.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="flex h-full items-center justify-center rounded-[2rem] bg-white p-6 sm:p-8 lg:p-10">
              <TicTacToe />
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}

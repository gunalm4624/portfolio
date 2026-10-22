import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col font-body text-[#141413]">
      <Navbar />
      <main className="page-shell flex flex-1 px-5 pt-4 pb-4 sm:px-8 md:px-10 lg:px-12">
        <div className="flex min-h-[60vh] w-full flex-col justify-between gap-12 rounded-[2rem] bg-white p-6 sm:p-10">
          <span className="text-[13px] text-[#6b6a66]">Error 404</span>
          <div className="flex flex-col items-start gap-6">
            <h1 className="font-display text-6xl leading-[1] tracking-[-0.045em] sm:text-8xl">
              Looks like you&apos;re <span className="text-[#141413]/45">lost.</span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-[#6b6a66]">
              The page you are looking for is not available.
            </p>
            <Link
              href="/"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#141413] px-5 text-sm text-white transition-colors hover:bg-[#2f2f2c]"
            >
              Go to home
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

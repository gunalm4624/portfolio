"use client";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { TextAnimate } from "@/components/ui/text-animate";
import WorkPage from "./work/page";
import MoreWorks from "./more-works/page";
import Tools from "./tools/page";
import Reveal from "@/components/Reveal";
import Footer from "./footer/page";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
    return (
        <main className="pt-36 px-3 md:px-8">
            <Reveal width="100%" className="flex justify-center" delay={0.1}>
                <div className="inline-flex items-center gap-2 pr-3 pl-1 py-1 rounded-full bg-white border border-zinc-200/60 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] backdrop-blur-md">
                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center overflow-hidden border border-zinc-200/50">
                        <img src="/assets/images/profile.png" alt="Gunal" className="w-full h-full object-cover" />
                    </div>
                    <span className="primary-font text-sm font-medium tracking-tight text-zinc-600">Hi, I am Gunal.</span>
                </div>
            </Reveal>

            <Reveal width="100%" delay={0.2}>
                <h1 className="text-center primary-font font-semibold tracking-tight text-4xl md:text-[62px] leading-tight md:leading-[62px] max-w-3xl mx-auto mt-6 px-4">
                    <TextAnimate animation="blurInUp" by="word" once duration={1.2}>
                        Designing products people love to use.
                    </TextAnimate>
                </h1>
            </Reveal>

            <Reveal width="100%" className="text-center" delay={0.3}>
                <p className="text-gray-600 dark:text-gray-400 mt-6 md:mt-12 text-base md:text-lg px-6">
                    Currently shaping 0→1 product experiences at <span className="font-medium text-red-700 whitespace-nowrap leading-8">Financial Software and Systems.</span>
                </p>
            </Reveal>

            <Reveal width="100%" className="flex justify-center mt-10" delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <motion.a
                        href="/assets/Gunal Product Designer.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 px-6 flex items-center gap-2 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>Download Resume</span>
                        <div className="bg-white/10 p-1 rounded-md group-hover:bg-white/20 transition-colors">
                            <ArrowRight className="w-3.5 h-3.5 invisible group-hover:visible group-hover:translate-x-0.5 transition-all" />
                        </div>
                    </motion.a>

                    <Link href="/contact" className="contents">
                        <motion.button
                            className="h-12 px-8 flex items-center justify-center bg-white text-zinc-900 rounded-full text-sm font-medium border border-zinc-200 shadow-sm hover:bg-zinc-50 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Hire Me
                        </motion.button>
                    </Link>
                </div>
            </Reveal>

            {/* <Reveal width="100%" className="flex justify-center mt-16" delay={0.4}>
                <AnimatedShinyText className="text-base">
                    Scroll to view selected work ↓
                </AnimatedShinyText>
            </Reveal> */}

            <div className="mt-20 md:mt-0">
                <WorkPage />
            </div>

            <Reveal width="100%">
                <MoreWorks />
            </Reveal>

            <Reveal width="100%">
                <Tools />
            </Reveal>

            {/* <Reveal width="100%">
                <Feedback />
            </Reveal> */}

            <Reveal width="100%">
                <Footer />
            </Reveal>
        </main>
    );
}


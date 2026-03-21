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

            <Reveal width="100%" className="flex justify-center mt-10 w-full" delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center gap-4 w-100 justify-center px-4 sm:px-0">
                    {/* Download CV — Ping Me style */}
                    <a href="/assets/Gunal Product Designer.pdf" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto">
                        <motion.div
                            className="flex items-center justify-between gap-3 bg-black pl-5 pr-3 py-3 rounded-full border border-white/10 hover:bg-zinc-900 transition-colors w-full sm:w-auto"
                            whileHover="hover"
                            initial="initial"
                        >
                            <div className="w-12 sm:hidden" />
                            <span className="flex-1 sm:flex-none text-center sm:text-left text-xs font-bold text-white tracking-wide uppercase">Download CV</span>
                            <div className="bg-zinc-800/80 px-3 py-2 rounded-full relative overflow-hidden h-8 w-12 flex items-center justify-center">
                                <motion.div className="relative flex items-center justify-center w-full h-full" transition={{ duration: 0.8, ease: "easeInOut" }}>
                                    <motion.div variants={{ hover: { x: 30, opacity: 0 }, initial: { x: 0, opacity: 1 } }} className="absolute">
                                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                                    </motion.div>
                                    <motion.div variants={{ hover: { x: 0, opacity: 1 }, initial: { x: -30, opacity: 0 } }} className="absolute">
                                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </a>

                    {/* Hire Me — white pill */}
                    <Link href="/contact" className="group w-full sm:w-auto">
                        <motion.div
                            className="flex items-center justify-between gap-3 bg-white pl-5 pr-3 py-3 rounded-full border border-zinc-200 shadow-sm hover:bg-zinc-50 transition-colors w-full sm:w-auto"
                            whileHover="hover"
                            initial="initial"
                        >
                            <div className="w-12 sm:hidden" />
                            <span className="flex-1 sm:flex-none text-center sm:text-left text-xs font-bold text-zinc-900 tracking-wide uppercase">Hire Me</span>
                            <div className="bg-zinc-100 px-3 py-2 rounded-full relative overflow-hidden h-8 w-12 flex items-center justify-center">
                                <motion.div className="relative flex items-center justify-center w-full h-full" transition={{ duration: 0.8, ease: "easeInOut" }}>
                                    <motion.div variants={{ hover: { x: 30, opacity: 0 }, initial: { x: 0, opacity: 1 } }} className="absolute">
                                        <ArrowRight className="w-3.5 h-3.5 text-zinc-900" />
                                    </motion.div>
                                    <motion.div variants={{ hover: { x: 0, opacity: 1 }, initial: { x: -30, opacity: 0 } }} className="absolute">
                                        <ArrowRight className="w-3.5 h-3.5 text-zinc-900" />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
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


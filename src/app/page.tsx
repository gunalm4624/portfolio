import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import WorkPage from "./work/page";
import MoreWorks from "./more-works/page";
import Tools from "./tools/page";
import Reveal from "@/components/Reveal";
import Footer from "./footer/page";

export default function HomePage() {
    return (
        <main className="pt-36">
            <Reveal width="100%" className="text-center" delay={0.1}>
                <h4 className="primary-font text-4xl">Hi, I am Gunal.</h4>
            </Reveal>

            <Reveal width="100%" delay={0.2}>
                <h1 className="text-center primary-font text-6xl md:text-[112px] leading-tight md:leading-[110px] max-w-4xl mx-auto mt-6 px-4">Designing products people love to use.</h1>
            </Reveal>

            <Reveal width="100%" className="text-center" delay={0.3}>
                <p className="text-gray-600 dark:text-gray-400 mt-12 text-lg">Currently shaping 0→1 product experiences at <span className="font-medium text-red-700">Finacial Software and Systems.</span></p>
            </Reveal>

            <Reveal width="100%" className="flex justify-center mt-16" delay={0.4}>
                <AnimatedShinyText className="text-base">
                    Scroll to view selected work ↓
                </AnimatedShinyText>
            </Reveal>

            <WorkPage />

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


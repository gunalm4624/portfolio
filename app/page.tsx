import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import RecentWorks from "./components/RecentWorks";
import SmoothScroll from "./components/SmoothScroll";
import Process from "./components/Process";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex flex-1 flex-col items-center bg-white dark:bg-black">
        <Navbar />
        <Hero />
        <Marquee />
        <RecentWorks />
        <WhatWeDo />
        <Process />
        <Services />
        <Faq />
        <Contact />
      </div>
    </SmoothScroll>
  );
}

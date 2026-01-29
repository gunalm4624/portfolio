"use client";

import Image from "next/image";

const tools = [
    { id: 1, name: "Lovable", logo: "/assets/images/lovable.png" },
    { id: 2, name: "Antigravity", logo: "/assets/images/antigravity.png" },
    { id: 3, name: "Figma", logo: "/assets/images/figma.png" },
    { id: 3, name: "Framer", logo: "/assets/images/framer.png" },
    { id: 4, name: "Gemini", logo: "/assets/images/gemini.png" },
    { id: 5, name: "Webflow", logo: "/assets/images/webflow.png" },
    { id: 6, name: "Miro", logo: "/assets/images/miro.svg" },
    { id: 6, name: "Davinci Resolve", logo: "/assets/images/dr.jpeg" },
    { id: 6, name: "Notion", logo: "/assets/images/notion.svg" },
    { id: 6, name: "ChatGPT", logo: "/assets/images/ChatGPT.svg" },
];

const Tools = () => {
    return (
        <main className="p-8 pt-24">
            <div className="max-w-7xl mx-auto">
                <p className="text-2xl mb-8 primary-font text-center">Tools which I use on a daily basis.</p>

                {/* Auto-sliding Marquee */}
                <div className="relative overflow-hidden mt-16">
                    {/* Left Fade Gradient */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-black to-transparent" />

                    {/* Right Fade Gradient */}
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-black to-transparent" />

                    <div className="flex animate-marquee gap-32">
                        {/* First set of logos */}
                        {tools.map((tool) => (
                            <div
                                key={`first-${tool.id}`}
                                className="flex-shrink-0 h-10 flex items-center justify-center"
                            >
                                <Image
                                    src={tool.logo}
                                    alt={tool.name}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-auto h-full object-contain"
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {tools.map((tool) => (
                            <div
                                key={`second-${tool.id}`}
                                className="flex-shrink-0 h-10 flex items-center justify-center"
                            >
                                <Image
                                    src={tool.logo}
                                    alt={tool.name}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-auto h-full object-contain"
                                />
                            </div>
                        ))}
                        {/* Third set for extra smoothness */}
                        {tools.map((tool) => (
                            <div
                                key={`third-${tool.id}`}
                                className="flex-shrink-0 h-10 flex items-center justify-center"
                            >
                                <Image
                                    src={tool.logo}
                                    alt={tool.name}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-auto h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.33%);
                    }
                }
                
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </main>
    );
};

export default Tools;
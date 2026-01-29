"use client";

import { AnimatedFolder, Project } from "@/components/ui/animated-folder";


const landingPageProjects: Project[] = [
    {
        id: "1",
        title: "Travel Website",
        image: "/assets/images/animated-folder-landing-page-1.png",
    },
    {
        id: "2",
        title: "Zoho Bigin",
        image: "/assets/images/animated-folder-landing-page-2.png",
    },
    {
        id: "3",
        title: "SBI Landing Page",
        image: "/assets/images/animated-folder-landing-page-3.png",
    },
];

const websiteDesignProjects: Project[] = [
    {
        id: "5",
        title: "Hiphop Tamizha Website",
        image: "/assets/images/animated-folder-website-1.png",
    },
    {
        id: "6",
        title: "A2D Website",
        image: "/assets/images/animated-folder-website-2.png",
    },
    {
        id: "7",
        title: "MK Networks Website",
        image: "/assets/images/animated-folder-website-3.png",
    }
];

const appDesignProjects: Project[] = [
    {
        id: "8",
        title: "Nike App",
        image: "/assets/images/animated-folder-app-1.png",
    },
    {
        id: "9",
        title: "UTS App Redesign",
        image: "/assets/images/animated-folder-app-2.png",
    },
    {
        id: "10",
        title: "Invoicing App",
        image: "/assets/images/animated-folder-app-3.png",
    }
];

const MoreWorks = () => {
    return (
        <main className="p-8 pt-24">
            <div className="max-w-7xl mx-auto w-full">
                <h1 className="text-5xl mb-12 primary-font text-center md:text-left">More Works</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-32">
                    <AnimatedFolder
                        title="Landing Page"
                        projects={landingPageProjects}
                        className="w-full aspect-[4/5] md:aspect-auto md:h-[500px]"
                        href="/design-explorations?category=Landing Pages"
                    />
                    <AnimatedFolder
                        title="Website Design"
                        projects={websiteDesignProjects}
                        className="w-full aspect-[4/5] md:aspect-auto md:h-[500px]"
                        href="/design-explorations?category=Web Design"
                    />
                    <AnimatedFolder
                        title="App Design"
                        projects={appDesignProjects}
                        className="w-full aspect-[4/5] md:aspect-auto md:h-[500px]"
                        href="/design-explorations?category=App Design"
                    />
                </div>
            </div>
        </main>
    );
};

export default MoreWorks;
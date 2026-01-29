"use client";

import { FocusRail, FocusRailItem } from "@/components/ui/focus-rail";

const aboutItems: FocusRailItem[] = [
    {
        id: "1",
        title: "Where It All Began",
        description: "In 8th standard, I visited my father’s photo studio to play games, and ended up learning photo editing — that moment sparked my design journey.",
        imageSrc: "/assets/images/WhereStarted.jpeg",
        meta: "Since 2016",
    },
    {
        id: "2",
        title: "From Campus to Career",
        description: "Graduated with a Master’s in Computer Applications and secured an on-campus internship opportunity from SRM University — marking my first step into the professional world.",
        imageSrc: "/assets/images/Graduation.jpeg",
        meta: "MAY 2023",
    },
    {
        id: "3",
        title: "Learning from the Best",
        description: "Selected among 120 students from mixed colleges to join FSS Financial Software Systems as a Software Engineer Intern, gaining hands-on experience from industry experts.",
        imageSrc: "/assets/images/internship.jpeg",
        meta: "FEB 2023 - While Pursuing Master’s",
    },
    {
        id: "4",
        title: "Designing Beyond Work",
        description: "While interning, I started a YouTube channel to explore my passion for UI/UX design and grew it to 2K subscribers — strengthening my design journey beyond the workplace.",
        imageSrc: "/assets/images/youtube.png",
        meta: "DURING INTERNSHIP",
    },
    {
        id: "5",
        title: "Following My Design Passion",
        description: "During my internship, I leveraged my interest in design and YouTube work to transition directly into the UI/UX team.",
        imageSrc: "/assets/images/conversion.jpeg",
        meta: "Opportunity",
    },
    {
        id: "6",
        title: "Champion of the Quarter",
        description: "At the end of my first year, I received the Champion of the Quarter award at FSS, recognized by the Functional and Delivery Heads — with support from my lead Prabhu — for design excellence and customer satisfaction.",
        imageSrc: "/assets/images/award.jpeg",
        meta: "2024",
    },

];

export default function AboutPage() {
    return (
        <main className="h-screen w-full bg-neutral-950 overflow-hidden">
            <FocusRail items={aboutItems} className="h-full w-full" />
        </main>
    );
}

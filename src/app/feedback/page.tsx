"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";

const feedbacks = [
    {
        id: 1,
        content: "Gunal is an exceptional designer who perfectly balances aesthetics with functionality. His attention to detail is remarkable.",
        name: "Sarah Johnson",
        role: "Product Manager",
        company: "TechCorp",
        avatar: "/assets/images/lovable.png",
        linkedin: "https://linkedin.com"
    },
    {
        id: 2,
        content: "Working with Gunal was a breeze. He understood our requirements instantly and delivered designs that exceeded our expectations.",
        name: "Michael Chen",
        role: "Senior Developer",
        company: "StartUp Inc",
        avatar: "/assets/images/lovable.png",
        linkedin: "https://linkedin.com"
    },
    {
        id: 3,
        content: "The user interface Gunal created for our app significantly improved our user engagement metrics. Highly recommended!",
        name: "Emily Davis",
        role: "UX Lead",
        company: "Design Studio",
        avatar: "/assets/images/lovable.png",
        linkedin: "https://linkedin.com"
    },
    {
        id: 4,
        content: "Creative, professional, and incredibly talented. Gunal brought our vision to life in ways we hadn't even imagined.",
        name: "David Wilson",
        role: "Founder",
        company: "NextGen Solutions",
        avatar: "/assets/images/lovable.png",
        linkedin: "https://linkedin.com"
    }
];

const FeedbackCard = ({ feedback }: { feedback: typeof feedbacks[0] }) => (
    <div className="flex-shrink-0 w-[400px] h-[350px] p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            &quot;{feedback.content}&quot;
        </p>

        <div className="flex items-center gap-4 mt-auto">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                    src={feedback.avatar}
                    alt={feedback.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-lg dark:text-white">
                        {feedback.name}
                    </h4>
                    <a
                        href={feedback.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:scale-110 transition-transform"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                </div>
                <p className="text-sm text-gray-500">
                    {feedback.role} @ {feedback.company}
                </p>
            </div>
        </div>
    </div>
);

const Feedback = () => {
    return (
        <main className="p-8 pb-32 pt-32">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl mb-16 primary-font text-center">Feedback from teammates & collaborators</h1>

                <div className="relative overflow-hidden">
                    {/* Left Fade Gradient */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-black to-transparent" />

                    {/* Right Fade Gradient */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-black to-transparent" />

                    <div className="flex animate-marquee gap-8">
                        {/* First set */}
                        {feedbacks.map((feedback) => (
                            <FeedbackCard key={`first-${feedback.id}`} feedback={feedback} />
                        ))}

                        {/* Duplicate set */}
                        {feedbacks.map((feedback) => (
                            <FeedbackCard key={`second-${feedback.id}`} feedback={feedback} />
                        ))}

                        {/* Third set */}
                        {feedbacks.map((feedback) => (
                            <FeedbackCard key={`third-${feedback.id}`} feedback={feedback} />
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

export default Feedback;
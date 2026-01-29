"use client";

import { ProjectEnquiryForm } from "@/components/ProjectEnquiryForm";
import { CaseInteraction } from "@/components/CaseInteraction";
import Reveal from "@/components/Reveal";
import Footer from "../footer/page";

export default function ContactPage() {
    return (
        <main className="p-8 pb-0 pt-32">
            <Reveal width="100%">

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12">
                    {/* Left Side - 60% */}
                    <div className="flex flex-col justify-center items-center lg:items-center relative bg-gray-50 dark:bg-gray-900 rounded-3xl">
                        {/* Case Interaction Container */}
                        <CaseInteraction />
                    </div>

                    {/* Right Side - 60% - Bordered Card */}
                    <div className="border border-gray-200 dark:border-gray-800 rounded-3xl w-full h-full overflow-hidden">
                        <ProjectEnquiryForm />
                    </div>
                </div>
            </Reveal>
            <Reveal width="100%">
                <Footer />
            </Reveal>
        </main>
    );
}

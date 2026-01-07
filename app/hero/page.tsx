"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Instagram, Linkedin, MapPin, Youtube } from 'lucide-react';

const PortfolioHero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
            const rect = document.getElementById('hero-card')?.getBoundingClientRect();
            if (rect) {
                setMousePosition({
                    x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
                    y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleMyWorksClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const myWorksSection = document.querySelector('#my-works-section');
        if (myWorksSection) {
            myWorksSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleDownloadResume = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = '/Gunal - Product Designer.pdf';
        link.download = 'Gunal - Product Designer.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const logos = [
        { id: 1, viewBox: "0 0 88 22" },
        { id: 2, viewBox: "0 0 48 32" },
        { id: 3, viewBox: "0 0 105 28" },
        { id: 4, viewBox: "0 0 56 22" },
        { id: 5, viewBox: "0 0 65 32" },
    ];

    return (
        <div className="bg-white flex justify-center p-4 pt-0 overflow-hidden">
            {/* Background Browser Window */}
            <div
                className="absolute -top-20 left-1/2 -translate-x-1/2 z-20"

            >
                <div className="relative">
                    <img src="Tag.svg" alt="" className='w-50' />
                </div>
            </div>

            {/* Main Container */}
            <div className="relative z-10 w-full max-w-[550px] pt-20">
                {/* Hero Card */}
                <div className="relative pt-10 pb-6 px-2 bg-gray-100 border border-[#e9e9e9] rounded-[36px]">
                    {/* Status Indicator Hole */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-white border border-[#e9e9e9] rounded-full z-10"></div>

                    {/* Main Card */}
                    <div
                        id="hero-card"
                        className="bg-white rounded-[32px] p-8 md:p-12 md:pt-6 relative overflow-hidden"
                    >


                        {/* Profile Section */}
                        <div className="flex items-start justify-between my-8 animate-in fade-in slide-in-from-top-4 duration-700">
                            <div className="flex items-start gap-4">
                                <img
                                    src="/Images/DP.png"
                                    alt="Gunal M - Senior Product Designer and Freelance Web Developer"
                                    className="w-16 h-16 rounded-full object-cover top-0 relative grayscale"
                                />
                                <div>
                                    <h2 className="text-xl font-semibold text-[#171717] mb-0.5">Gunal</h2>
                                    <p className="text-sm text-[#171717]/60 mb-3">Product Designer | UX/UI</p>

                                    {/* Social Icons */}
                                    <div className="flex items-center gap-4">
                                        <Youtube size={20} />
                                        <Linkedin size={20} />
                                        <Instagram size={18} />
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl text-[#171717] font-medium leading-tighter animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 tracking-tight mt-12 mb-12">
                            I design and ship products that move businesses forward.
                        </h1>

                        {/* Badge and Description */}
                        <div className="flex flex-col gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                            <div className="flex items-center gap-2 bg-[#0000000a] rounded-full p-2 w-fit px-4">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-[#171717]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-[#171717]">3+ customers</span>
                            </div>

                            <p className="text-base text-[#171717]/80 mt-4">
                                I build designs that solve problems, inspire action, and drive success.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                            <a
                                href="#my-works-section"
                                onClick={handleMyWorksClick}
                                className="group relative bg-[#3657FF] text-white rounded-full ps-6 pe-1 py-1 font-medium flex items-center gap-5 overflow-hidden"
                            >
                                <span className="relative z-10">My Works</span>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center relative z-10">
                                    <ArrowUpRight color="#000000" />
                                </div>
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </a>

                            <a
                                href="/Gunal - Product Designer.pdf"
                                onClick={handleDownloadResume}
                                className="group relative bg-[#f6f6f6] text-[#171717] rounded-full px-6 py-3.5 font-medium hover:bg-[#efefef] transition-colors"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                    {/* Location and Link */}
                    <div className="flex items-center justify-between pt-6 px-6">
                        <div className="flex items-center gap-2 text-sm">
                            <MapPin className="w-4 h-4 text-[#171717]/60" />
                            <p>
                                <span className="text-[#171717]/60">Located in </span>
                                <span className="text-[#171717] font-medium">Chennai, India</span>
                                <span className="text-[#171717]/60">, available worldwide.</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default PortfolioHero;
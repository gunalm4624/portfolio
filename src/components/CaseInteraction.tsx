"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

export function CaseInteraction() {
    const [activeCard, setActiveCard] = useState<"email" | "phone" | null>(null);
    const [hoveredCard, setHoveredCard] = useState<"email" | "phone" | null>(null);
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = (text: string, e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent card toggle when clicking copy
        navigator.clipboard.writeText(text);
        setCopied(true);
        toast.success("Copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
    };

    const toggleCard = (card: "email" | "phone") => {
        if (activeCard === card) {
            setActiveCard(null); // Close if already open
        } else {
            setActiveCard(card);
        }
    };

    // Animation Variants
    // Animation Variants
    // Animation Variants
    const cardVariants: Variants = {
        stacked: (index: number) => ({
            y: -(index * 30) + 50, // Reduced spread (30) and base (50) to move Front card up while keeping Back card stable
            scale: 1, // Fixed scale so both are exactly same size
            zIndex: 10 - index,
            rotate: 0,
            transition: { duration: 0.3 }
        }),
        hover: {
            y: -140, // Slide further up
            transition: { duration: 0.3 }
        },
        active: {
            y: -120, // Reduced from -220 to keep it centered and visible below navbar
            scale: 1.1,
            zIndex: 50,
            rotate: 0,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
    };

    return (
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            {/* Back Part */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <Image
                    src="/assets/images/case-back.avif"
                    alt="Case Back"
                    fill
                    className="object-contain"
                />
            </div>

            {/* CLICKABLE OVERLAY to close active card */}
            {activeCard && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setActiveCard(null)}
                />
            )}

            {/* PHONE CARD (Index 2 - Sticking out top, Behind) */}
            <motion.div
                className="absolute w-[340px] h-[440px] bg-no-repeat bg-contain bg-center flex flex-col items-center p-4 cursor-pointer rounded-[60px] drop-shadow-[0_-5px_10px_rgba(0,0,0,0.3)]"
                style={{ backgroundImage: "url('/assets/images/case-card.svg')" }}
                variants={cardVariants}
                initial="stacked"
                custom={2} // Index for stacking
                animate={activeCard === "phone" ? "active" : (hoveredCard === "phone" && !activeCard ? "hover" : "stacked")}
                onHoverStart={() => setHoveredCard("phone")}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => toggleCard("phone")}
            >
                {/* Top Left Label - Moved Up & Bold */}
                <div className="w-full text-left">
                    <p className="text-xs pl-6 font-bold text-gray-700 uppercase tracking-widest">Phone</p>
                </div>

                {/* Center Content - Moved Down */}
                <div className="mt-[270px] flex flex-col items-center gap-2">
                    <p className="text-sm font-semibold text-gray-900">+91 9787266337</p>

                    {/* Copy Button (Only visible when active) */}
                    <AnimatePresence>
                        {activeCard === "phone" && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                onClick={(e) => handleCopy("+91 9787266337", e)}
                                className="mt-3 flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium transition-colors"
                            >
                                {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                                {copied ? "Copied" : "Copy Number"}
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* EMAIL CARD (Front initially) */}
            <motion.div
                className="absolute w-[340px] h-[440px] bg-no-repeat bg-contain bg-center flex flex-col items-center p-4 cursor-pointer drop-shadow-[0_-5px_10px_rgba(0,0,0,0.3)] rounded-[60px]"
                style={{ backgroundImage: "url('/assets/images/case-card.svg')" }}
                variants={cardVariants}
                initial="stacked"
                custom={1} // Index for stacking
                animate={activeCard === "email" ? "active" : (hoveredCard === "email" && !activeCard ? "hover" : "stacked")}
                onHoverStart={() => setHoveredCard("email")}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => toggleCard("email")}
            >
                {/* Top Left Label - Moved Up & Bold */}
                <div className="w-full text-left pt-0 pl-6">
                    <p className="text-xs font-bold text-gray-700 uppercase tracking-widest">Email</p>
                </div>

                {/* Center Content - Moved Down */}
                <div className="mt-[270px] flex flex-col items-center gap-2">
                    <p className="text-sm font-semibold text-gray-900">gunalm4624@gmail.com</p>

                    {/* Copy Button (Only visible when active) */}
                    <AnimatePresence>
                        {activeCard === "email" && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                onClick={(e) => handleCopy("gunalm4624@gmail.com", e)}
                                className="mt-2 flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium transition-colors"
                            >
                                {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                                {copied ? "Copied" : "Copy Email"}
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Front Part (Pocket) */}
            <div className="absolute bottom-0 left-0 w-full h-full z-30 pointer-events-none scale-[0.82] origin-bottom">
                <Image
                    src="/assets/images/case-front.avif"
                    alt="Case Front"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
}

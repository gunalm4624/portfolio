"use client";

import { cn } from "@/lib/utils";

interface PillButtonProps {
    options: string[];
    selected: string | null;
    onChange: (option: string) => void;
    label?: string;
}

export default function PillButton({ options, selected, onChange, label }: PillButtonProps) {
    return (
        <div className="space-y-3">
            {label && <p className="text-sm font-medium text-zinc-500">{label}</p>}
            <div className="flex flex-wrap gap-3">
                {options.map((option) => (
                    <button
                        key={option}
                        onClick={() => onChange(option)}
                        className={cn(
                            "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border",
                            selected === option
                                ? "bg-zinc-900 text-white border-zinc-900 shadow-md scale-[1.02]"
                                : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 active:scale-95"
                        )}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

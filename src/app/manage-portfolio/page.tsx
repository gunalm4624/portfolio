"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function AdminLoginPage() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index: number, value: string) => {
        if (isNaN(Number(value))) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input
        if (value !== "" && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }

        // Auto-submit on fill
        if (index === 3 && value !== "") {
            handleLogin(newOtp.join(""));
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleLogin = async (pin: string) => {
        setIsLoading(true);
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: "gunaldesigns.official@gmail.com",
                password: pin,
            });

            if (error) {
                toast.error("Invalid PIN");
                // Clear inputs on error
                setOtp(["", "", "", ""]);
                inputRefs.current[0]?.focus();
            } else {
                toast.success("Welcome back, Gunal!");
                router.push("/manage-portfolio/dashboard");
            }
        } catch {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black p-4">
            <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-xl">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-medium mb-2 primary-font">Admin Access</h1>
                    <p className="text-gray-500 text-sm">Enter your 4-digit security PIN</p>
                </div>

                <div className="flex justify-center gap-4 mb-8">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => { inputRefs.current[index] = el }}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="w-14 h-16 text-center text-3xl font-bold bg-gray-50 dark:bg-zinc-800 border-2 border-transparent focus:border-black dark:focus:border-white rounded-2xl outline-none transition-all"
                        />
                    ))}
                </div>

                <div className="text-center">
                    {isLoading ? (
                        <Loader2 className="animate-spin mx-auto text-gray-400" />
                    ) : (
                        <p className="text-xs text-gray-400">Secure Environment</p>
                    )}
                </div>
            </div>
        </main>
    );
}

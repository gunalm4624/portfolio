"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, Square, Play, Trash2, Volume2 } from "lucide-react";
import PillButton from "@/components/ui/PillButton";
import { supabase } from "@/lib/supabase/client";

interface PublicFormProps {
    formId: string;
    formName: string;
    userName?: string;
    userSlug?: string;
    customOutro?: string;
}

export default function PublicFeedbackForm({ formId, formName, userName, userSlug, customOutro }: PublicFormProps) {
    const [step, setStep] = useState<"form" | "success">("form");
    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [feedbackMode, setFeedbackMode] = useState<'typing' | 'recording'>('typing');
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);

    const [formData, setFormData] = useState({
        author_name: userName || "",
        author_role: "",
        work_again: null as string | null,
        three_words: "",
        honest_feedback: ""
    });

    const getTooltipMessage = () => {
        if (currentStep === 1) return "I need a name to address you! ✍️";
        if (currentStep === 2) return "Don't leave me hanging, fill the info! ✋";
        return "Say something or type it out! 🎙️";
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            chunksRef.current = [];

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
                const url = URL.createObjectURL(blob);
                setAudioBlob(blob);
                setAudioUrl(url);
                setIsRecording(false);
                // Auto-stop stream tracks
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorder.start();
            setIsRecording(true);
        } catch (err) {
            console.error("Error accessing microphone:", err);
            alert("Could not access microphone. Please check permissions.");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
        }
    };

    const deleteRecording = () => {
        if (audioUrl) URL.revokeObjectURL(audioUrl);
        setAudioBlob(null);
        setAudioUrl(null);
    };

    const isStepValid = () => {
        switch (currentStep) {
            case 1: return formData.author_name.trim() !== "";
            case 2: return formData.work_again !== null && formData.three_words.trim() !== "";
            case 3: return formData.honest_feedback.trim() !== "" || audioBlob !== null;
            default: return false;
        }
    };

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
            setShowTooltip(false);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            setShowTooltip(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (currentStep < 3) return;
        setLoading(true);

        try {
            let uploadedAudioUrl = null;

            if (audioBlob) {
                const fileName = `${formId}/${Date.now()}.webm`;
                const { data, error: uploadError } = await supabase.storage
                    .from('feedback-audio')
                    .upload(fileName, audioBlob);

                if (uploadError) throw uploadError;

                const { data: { publicUrl } } = supabase.storage
                    .from('feedback-audio')
                    .getPublicUrl(fileName);

                uploadedAudioUrl = publicUrl;
            }

            const { error } = await supabase
                .from("feedback_responses")
                .insert({
                    form_id: formId,
                    user_slug: userSlug || null,
                    author_name: formData.author_name,
                    author_role: formData.author_role,
                    work_again: formData.work_again,
                    three_words: formData.three_words,
                    honest_feedback: formData.honest_feedback,
                    audio_url: uploadedAudioUrl
                });

            if (error) throw error;
            setStep("success");
        } catch (error) {
            console.error("Error submitting feedback:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center p-6 sm:p-12">
            <AnimatePresence mode="wait">
                {step === "form" ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="w-full max-w-[480px] bg-white rounded-2xl sm:rounded-[24px] p-6 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.02] flex flex-col min-h-[500px]"
                    >
                        {/* Progress Bar */}
                        <div className="flex gap-2 mb-6 h-1.5">
                            {[1, 2, 3].map((s) => (
                                <div
                                    key={s}
                                    className={`flex-1 rounded-full transition-all duration-500 ${s <= currentStep ? "bg-zinc-900" : "bg-zinc-100"}`}
                                />
                            ))}
                        </div>

                        <header className="mb-6 text-center sm:text-left">
                            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">
                                {userName && currentStep === 1 ? `Hi ${userName}, before I sign off 👋` :
                                    currentStep === 1 ? "Before I sign off 👋" :
                                        currentStep === 2 ? "The experience" : "Detailed thoughts"}
                            </h1>
                            <p className="text-zinc-500 text-sm">Takes 2 mins. Be honest, I can take it.</p>
                        </header>

                        <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
                            <AnimatePresence mode="wait">
                                {currentStep === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-4"
                                    >
                                        <div className="space-y-3">
                                            <label className="text-sm font-medium text-zinc-500">Your Name</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. John Doe"
                                                required
                                                className="w-full px-0 py-2 border-b border-zinc-200 focus:border-zinc-900 outline-none transition-colors bg-transparent text-zinc-900 placeholder:text-zinc-300"
                                                value={formData.author_name}
                                                onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-medium text-zinc-500">Your Role (Optional)</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Product Manager"
                                                className="w-full px-0 py-2 border-b border-zinc-200 focus:border-zinc-900 outline-none transition-colors bg-transparent text-zinc-900 placeholder:text-zinc-300"
                                                value={formData.author_role}
                                                onChange={(e) => setFormData({ ...formData, author_role: e.target.value })}
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                {currentStep === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <PillButton
                                            label="Would you want to work with me again?"
                                            options={["Hell yes", "Maybe", "Nah"]}
                                            selected={formData.work_again}
                                            onChange={(val) => setFormData({ ...formData, work_again: val })}
                                        />
                                        <div className="space-y-3">
                                            <label className="text-sm font-medium text-zinc-500">Describe me in 3 words</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. calm, reliable, chaotic 😄"
                                                required
                                                className="w-full px-0 py-2 border-b border-zinc-200 focus:border-zinc-900 outline-none transition-colors bg-transparent text-zinc-900 placeholder:text-zinc-300"
                                                value={formData.three_words}
                                                onChange={(e) => setFormData({ ...formData, three_words: e.target.value })}
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                {currentStep === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between px-1">
                                                <label className="text-sm font-medium text-zinc-700">
                                                    {feedbackMode === 'typing' ? "Write your feedback" : "Record your voice"}
                                                </label>

                                                {feedbackMode === 'recording' && (
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setFeedbackMode('typing');
                                                            deleteRecording();
                                                        }}
                                                        className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:text-zinc-900 transition-colors"
                                                    >
                                                        Switch to text
                                                    </button>
                                                )}
                                            </div>

                                            {feedbackMode === 'recording' ? (
                                                <div className="space-y-4">
                                                    {!audioUrl ? (
                                                        <button
                                                            type="button"
                                                            onClick={isRecording ? stopRecording : startRecording}
                                                            className={`w-full group relative flex flex-col items-center justify-center gap-4 p-12 rounded-3xl transition-all duration-500 ${isRecording ? "bg-red-500 text-white shadow-2xl shadow-red-200" : "bg-zinc-50 border-2 border-dashed border-zinc-200 hover:border-zinc-300 text-zinc-500"}`}
                                                        >
                                                            <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${isRecording ? "bg-white text-red-500 scale-110" : "bg-white shadow-sm border border-zinc-100"}`}>
                                                                {isRecording ? <Square size={24} fill="currentColor" /> : <Mic size={28} />}
                                                            </div>
                                                            <div className="text-center">
                                                                <h4 className="font-medium mb-1">{isRecording ? "Recording..." : "Tap to record"}</h4>
                                                                <p className="text-[11px] opacity-60 font-normal">
                                                                    {isRecording ? "Tell me everything!" : "Be real, I can take it."}
                                                                </p>
                                                            </div>

                                                            {isRecording && (
                                                                <span className="absolute top-6 right-6 flex h-3 w-3">
                                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-100"></span>
                                                                </span>
                                                            )}
                                                        </button>
                                                    ) : (
                                                        <div className="bg-zinc-50/50 border-2 border-dashed border-zinc-200 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 h-[200px]">
                                                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-zinc-100">
                                                                <Play size={24} className="text-purple-600 ml-1" />
                                                            </div>
                                                            <audio src={audioUrl} controls className="w-full max-w-[240px] h-8 opacity-60" />
                                                            <button
                                                                type="button"
                                                                onClick={deleteRecording}
                                                                className="flex items-center gap-2 text-[10px] font-bold text-red-500 hover:text-red-600 transition-colors bg-white px-4 py-1.5 rounded-full shadow-sm border border-red-50"
                                                            >
                                                                <Trash2 size={12} />
                                                                RE-RECORD
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="relative">
                                                    <textarea
                                                        rows={6}
                                                        placeholder="Share your thoughts. Be real, I can take it."
                                                        className="w-full px-4 py-4 rounded-3xl border border-zinc-200 focus:border-zinc-900 outline-none transition-all bg-zinc-50/50 text-zinc-900 resize-none h-[200px]"
                                                        value={formData.honest_feedback}
                                                        onChange={(e) => setFormData({ ...formData, honest_feedback: e.target.value })}
                                                    />
                                                </div>
                                            )}

                                            <p className="text-[11px] text-zinc-400 px-4 mt-0">
                                                {isRecording ? "Recording active..." : feedbackMode === 'recording' && audioUrl ? "Voice feedback ready." : "Your honest input helps me improve. Thank you."}
                                            </p>

                                            {feedbackMode === 'typing' && !formData.honest_feedback.trim() && (
                                                <button
                                                    type="button"
                                                    onClick={() => setFeedbackMode('recording')}
                                                    className="w-full group flex items-center gap-4 p-3 rounded-full bg-zinc-50 border border-zinc-100 hover:border-zinc-300 hover:bg-white transition-all duration-300 text-left"
                                                >
                                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                                                        <Mic size={18} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-tight">Hates typing?</h3>
                                                        <p className="text-[11px] text-zinc-500">Record your voice instead</p>
                                                    </div>
                                                </button>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="flex gap-3 mt-4 pt-2 border-t border-zinc-50 relative">
                                <AnimatePresence>
                                    {showTooltip && !isStepValid() && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute -top-6 right-0 bg-zinc-900 text-white text-[11px] px-4 py-1.5 rounded-full shadow-xl pointer-events-none z-20 whitespace-nowrap"
                                        >
                                            {getTooltipMessage()}
                                            {/* Tooltip Arrow */}
                                            <div className="absolute -bottom-1 right-10 w-2 h-2 bg-zinc-900 rotate-45" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {currentStep > 1 && (
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="flex-1 py-4 rounded-full bg-zinc-100 text-zinc-600 font-medium hover:bg-zinc-200 transition-all active:scale-[0.98]"
                                    >
                                        Back
                                    </button>
                                )}
                                <div
                                    className="flex-[2] relative"
                                    onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}
                                    onClick={() => !isStepValid() && setShowTooltip(true)}
                                >
                                    <button
                                        type={currentStep === 3 ? "submit" : "button"}
                                        onClick={currentStep === 3 ? undefined : (isStepValid() ? handleNext : undefined)}
                                        disabled={loading || !isStepValid()}
                                        className={`w-full py-4 rounded-full font-medium transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none shadow-lg shadow-zinc-900/10 ${currentStep === 3 ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-zinc-900 hover:bg-zinc-800 text-white"}`}
                                    >
                                        {loading ? "Submitting..." : currentStep === 3 ? "Submit feedback" : "Next"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full max-w-[480px] bg-white rounded-2xl sm:rounded-[32px] p-8 sm:p-12 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.02]"
                    >
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 overflow-hidden bg-zinc-100 border border-zinc-100">
                            <img 
                                src="/assets/images/profile.png" 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">
                            Thanks, {formData.author_name.trim().split(' ')[0]}!
                        </h2>
                        <p className="text-zinc-500 leading-relaxed mb-8">
                            {customOutro || "I really appreciate you taking the time to share your honest thoughts. This means a lot to me."}
                        </p>
                        <div className="h-[1px] w-full bg-zinc-100 mb-8" />
                        <p className="text-sm text-zinc-400 font-medium italic">Go make some magic. See you around! ✨</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

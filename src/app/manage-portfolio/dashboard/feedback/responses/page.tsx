"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase/client";
import { toast } from "sonner";
import { 
    MessageSquare, 
    Trash2, 
    Loader2,
    Calendar,
    User,
    ChevronDown,
    Filter,
    ArrowUpDown,
    Search,
    Volume2,
    BarChart3,
    Quote,
    MoreHorizontal
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface FeedbackResponse {
    id: string;
    form_id: string;
    user_slug: string | null;
    author_name: string | null;
    author_role: string | null;
    work_again: string;
    three_words: string;
    honest_feedback: string;
    audio_url?: string | null;
    created_at: string;
    form_name?: string;
    user_name_display?: string;
}

export default function FeedbackResponsesPage() {
    const [responses, setResponses] = useState<FeedbackResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchResponses();
    }, [sortOrder]);

    const fetchResponses = async () => {
        setLoading(true);
        try {
            const { data: responsesData, error: responsesError } = await supabase
                .from("feedback_responses")
                .select("*")
                .order("created_at", { ascending: sortOrder === 'asc' });

            if (responsesError) throw responsesError;

            const [formsRes, usersRes] = await Promise.all([
                supabase.from("feedback_forms").select("id, name"),
                supabase.from("personalized_users").select("slug, name, form_id")
            ]);

            const formsMap = Object.fromEntries(formsRes.data?.map(f => [f.id, f.name]) || []);
            
            const enriched = (responsesData || []).map(res => {
                const user = usersRes.data?.find(u => u.slug === res.user_slug && u.form_id === res.form_id);
                return {
                    ...res,
                    form_name: formsMap[res.form_id] || "Unknown Form",
                    user_name_display: res.author_name || user?.name || "Anonymous"
                };
            });

            setResponses(enriched);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load responses");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this response permanently?")) return;
        const { error } = await supabase.from("feedback_responses").delete().eq("id", id);
        if (error) {
            toast.error("Delete failed");
        } else {
            toast.success("Response deleted");
            setResponses(prev => prev.filter(r => r.id !== id));
        }
    };

    const stats = useMemo(() => {
        const total = responses.length;
        const hellYes = responses.filter(r => r.work_again === 'Hell yes').length;
        const audioCount = responses.filter(r => r.audio_url).length;
        const hellYesRate = total > 0 ? Math.round((hellYes / total) * 100) : 0;
        
        return { total, hellYesRate, audioCount };
    }, [responses]);

    const filteredResponses = useMemo(() => {
        return responses.filter(res => {
            const searchString = `${res.user_name_display} ${res.three_words} ${res.honest_feedback} ${res.author_role}`.toLowerCase();
            return searchString.includes(searchQuery.toLowerCase());
        });
    }, [responses, searchQuery]);

    const getWorkAgainColor = (val: string) => {
        switch (val) {
            case 'Hell yes': return 'text-emerald-600 bg-emerald-50 border-emerald-100';
            case 'Maybe': return 'text-amber-600 bg-amber-50 border-amber-100';
            case 'Nah': return 'text-rose-600 bg-rose-50 border-rose-100';
            default: return 'text-zinc-600 bg-zinc-50 border-zinc-100';
        }
    };

    return (
        <div className="p-4 sm:p-8 max-w-6xl mx-auto w-full space-y-8 min-h-screen bg-[#fcfcfd]">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium uppercase tracking-wider">
                        <BarChart3 size={14} />
                        Insights
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Feedback Dashboard</h1>
                </div>
                
                <div className="flex items-center gap-2 bg-white p-1 rounded-2xl border border-zinc-200 shadow-sm">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                        <input 
                            type="text"
                            placeholder="Find feedback..."
                            className="pl-10 pr-4 py-2 bg-transparent outline-none text-sm w-[200px] sm:w-[300px]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        className="rounded-xl px-4 text-zinc-500 hover:text-zinc-900"
                        onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                    >
                        <ArrowUpDown size={14} className="mr-2" />
                        {sortOrder === 'desc' ? 'Newest' : 'Oldest'}
                    </Button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                    { label: 'Total Responses', value: stats.total, sub: 'Submissions recorded' },
                    { label: 'Positive Sentiment', value: `${stats.hellYesRate}%`, sub: '"Hell yes" rate' },
                    { label: 'Voice Feedbacks', value: stats.audioCount, sub: 'Audio contributions' }
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white border border-zinc-200 p-6 rounded-[24px] shadow-sm flex flex-col justify-between"
                    >
                        <span className="text-sm font-medium text-zinc-500">{stat.label}</span>
                        <div className="mt-4">
                            <span className="text-3xl font-bold text-zinc-900 tracking-tight">{stat.value}</span>
                            <p className="text-xs text-zinc-400 mt-1">{stat.sub}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* List Section */}
            {loading ? (
                <div className="flex flex-col items-center justify-center py-32 gap-4">
                    <Loader2 className="h-8 w-8 animate-spin text-zinc-300" />
                    <p className="text-zinc-400 text-sm animate-pulse">Fetching responses...</p>
                </div>
            ) : filteredResponses.length === 0 ? (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-32 bg-white rounded-[32px] border border-dashed border-zinc-200"
                >
                    <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Search className="h-8 w-8 text-zinc-300" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900">No matches found</h3>
                    <p className="text-zinc-500 mt-2">Try adjusting your search or check again later.</p>
                </motion.div>
            ) : (
                <div className="grid grid-cols-1 gap-6 pb-20">
                    <AnimatePresence mode="popLayout">
                        {filteredResponses.map((res, index) => (
                            <motion.div
                                key={res.id}
                                layout
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="border-zinc-200 bg-white rounded-[32px] overflow-hidden hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-500 group">
                                    <CardContent className="p-0">
                                        <div className="flex flex-col sm:flex-row">
                                            {/* Person Info Side - Fixed Width */}
                                            <div className="sm:w-64 p-8 bg-zinc-50/50 border-r border-zinc-100 flex flex-col justify-between gap-8">
                                                <div className="space-y-4">
                                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-zinc-100 flex items-center justify-center text-zinc-400">
                                                        <User size={28} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-lg text-zinc-900 leading-tight">
                                                            {res.user_name_display}
                                                        </h3>
                                                        <p className="text-xs font-medium text-zinc-500 mt-1 uppercase tracking-wide">
                                                            {res.author_role || "Anonymous"}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                                                        <Calendar size={12} />
                                                        {new Date(res.created_at).toLocaleDateString()}
                                                    </div>
                                                    <div className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getWorkAgainColor(res.work_again)}`}>
                                                        {res.work_again}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Main Content Side */}
                                            <div className="flex-1 p-8 relative">
                                                <button 
                                                    onClick={() => handleDelete(res.id)}
                                                    className="absolute top-6 right-6 p-2 rounded-full text-zinc-300 hover:text-rose-500 hover:bg-rose-50 transition-all opacity-0 group-hover:opacity-100"
                                                >
                                                    <Trash2 size={16} />
                                                </button>

                                                <div className="space-y-8">
                                                    {/* 3 Words Section */}
                                                    <div className="space-y-3">
                                                        <Label className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-400">Portrait in 3 words</Label>
                                                        <div className="flex flex-wrap gap-2">
                                                            {res.three_words.split(',').map((word, i) => (
                                                                <span key={i} className="px-4 py-1.5 bg-zinc-900 text-white text-[11px] font-bold rounded-full lowercase tracking-tight">
                                                                    {word.trim()}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Honest Feedback Section */}
                                                    {res.honest_feedback && (
                                                        <div className="space-y-3 relative">
                                                            <div className="absolute -left-2 -top-2 opacity-5 text-zinc-900">
                                                                <Quote size={40} fill="currentColor" />
                                                            </div>
                                                            <Label className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-400">Detailed Feedback</Label>
                                                            <p className="text-lg text-zinc-800 leading-relaxed font-serif italic border-l-2 border-zinc-100 pl-6">
                                                                &quot;{res.honest_feedback}&quot;
                                                            </p>
                                                        </div>
                                                    )}

                                                    {/* Audio Section */}
                                                    {res.audio_url && (
                                                        <div className="space-y-4 pt-4 border-t border-zinc-100">
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                                                                    <Volume2 size={14} />
                                                                </div>
                                                                <Label className="text-[10px] uppercase font-black tracking-[0.2em] text-purple-600">Audio Testimony</Label>
                                                            </div>
                                                            <audio 
                                                                src={res.audio_url} 
                                                                controls 
                                                                className="w-full h-10 brightness-95 rounded-2xl"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
}

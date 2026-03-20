"use client";

import { use, useEffect, useState } from "react";
import AdminLayout from "@/components/feedback/AdminLayout";
import { supabase } from "@/lib/supabase/client";
import { 
    Copy, 
    Link as LinkIcon, 
    Globe, 
    Users, 
    ArrowLeft, 
    MessageSquare,
    ExternalLink,
    Check
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function FormDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [form, setForm] = useState<any>(null);
    const [users, setUsers] = useState<any[]>([]);
    const [responses, setResponses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const { data: formData } = await supabase.from("feedback_forms").select("*").eq("id", id).single();
            const { data: usersData } = await supabase.from("personalized_users").select("*").eq("form_id", id);
            const { data: resData } = await supabase.from("feedback_responses").select("*").eq("form_id", id);
            
            setForm(formData);
            setUsers(usersData || []);
            setResponses(resData || []);
            setLoading(false);
        }
        fetchData();
    }, [id]);

    const handleCopy = (text: string, id: string) => {
        const fullUrl = `${window.location.origin}${text}`;
        navigator.clipboard.writeText(fullUrl);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    if (loading) return (
        <AdminLayout>
            <div className="animate-pulse space-y-8">
                <div className="h-8 w-48 bg-zinc-200 rounded-lg" />
                <div className="h-64 bg-white rounded-[32px] border border-zinc-100" />
            </div>
        </AdminLayout>
    );

    if (!form) return <AdminLayout>Form not found.</AdminLayout>;

    return (
        <AdminLayout>
            <div className="space-y-10">
                <header className="flex items-center gap-4">
                    <Link href="/admin/feedback/forms" className="p-2 hover:bg-zinc-100 rounded-full transition-colors text-zinc-400 hover:text-zinc-900">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-semibold text-zinc-900 tracking-tight">{form.name}</h1>
                        <p className="text-zinc-500 mt-1 text-sm">Manage campaign and links.</p>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm flex flex-col justify-center">
                        <span className="text-sm font-medium text-zinc-400 mb-1">Responses</span>
                        <div className="text-2xl font-bold flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-blue-500" />
                            {responses.length}
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm flex flex-col justify-center">
                        <span className="text-sm font-medium text-zinc-400 mb-1">Type</span>
                        <div className="flex gap-2">
                            {form.is_common && <span className="px-2 py-0.5 bg-blue-50 text-[10px] font-bold text-blue-600 rounded uppercase">Common</span>}
                            {form.is_personalized && <span className="px-2 py-0.5 bg-purple-50 text-[10px] font-bold text-purple-600 rounded uppercase">Personalized</span>}
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm flex flex-col justify-center">
                        <span className="text-sm font-medium text-zinc-400 mb-1">Created</span>
                        <div className="text-sm font-semibold">{format(new Date(form.created_at), "MMM d, yyyy")}</div>
                    </div>
                </div>

                {/* Common Link Section */}
                {form.is_common && (
                    <div className="bg-white rounded-[32px] p-8 border border-zinc-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-2">
                            <Globe className="w-5 h-5 text-blue-500" />
                            <h3 className="text-lg font-semibold">Common Feedback Link</h3>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex-1 px-5 py-4 bg-zinc-50 rounded-2xl border border-zinc-100 text-sm font-mono text-zinc-500 truncate">
                                /f/{form.slug}
                            </div>
                            <button 
                                onClick={() => handleCopy(`/f/${form.slug}`, "common")}
                                className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10"
                            >
                                {copiedId === "common" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                {copiedId === "common" ? "Copied!" : "Copy Link"}
                            </button>
                            <Link 
                                href={`/f/${form.slug}`}
                                target="_blank"
                                className="p-4 rounded-2xl border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-all"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                )}

                {/* Personalized Links Section */}
                {form.is_personalized && (
                    <div className="bg-white rounded-[32px] p-8 border border-zinc-100 shadow-sm space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-purple-500" />
                                <h3 className="text-lg font-semibold">Personalized Links</h3>
                            </div>
                            <span className="text-xs font-bold text-zinc-400 bg-zinc-50 px-3 py-1 rounded-full uppercase tracking-widest">
                                {users.length} Users
                            </span>
                        </div>

                        <div className="space-y-3">
                            {users.map((user) => {
                                const userLink = `/f/${form.slug}/${user.slug}`;
                                const hasResponse = responses.some(r => r.user_slug === user.slug);
                                return (
                                    <div key={user.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 px-6 bg-zinc-50/50 rounded-2xl border border-zinc-50 gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white border border-zinc-100 flex items-center justify-center text-sm font-bold text-zinc-900 uppercase">
                                                {user.name.substring(0, 2)}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold text-zinc-900">{user.name}</span>
                                                    {hasResponse && (
                                                        <span className="px-2 py-0.5 bg-green-50 text-[8px] font-bold text-green-600 rounded-full uppercase tracking-widest">Responded</span>
                                                    )}
                                                </div>
                                                <code className="text-xs text-zinc-400">{userLink}</code>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 self-end sm:self-auto">
                                            <button 
                                                onClick={() => handleCopy(userLink, user.id)}
                                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-zinc-900 text-xs font-bold border border-zinc-200 hover:border-zinc-900 transition-all"
                                            >
                                                {copiedId === user.id ? <Check className="w-3 h-3" /> : <LinkIcon className="w-3 h-3" />}
                                                {copiedId === user.id ? "Copied" : "Copy"}
                                            </button>
                                            <Link 
                                                href={userLink}
                                                target="_blank"
                                                className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}

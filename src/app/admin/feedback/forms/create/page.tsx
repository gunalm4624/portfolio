"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "@/components/feedback/AdminLayout";
import { supabase } from "@/lib/supabase/client";
import { Plus, Trash2, Globe, Users, Check, Copy, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PersonalizedUser {
    name: string;
    slug: string;
    custom_outro: string;
}

export default function CreateFormPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [isCommon, setIsCommon] = useState(true);
    const [isPersonalized, setIsPersonalized] = useState(false);
    const [pUsers, setPUsers] = useState<PersonalizedUser[]>([]);

    const generateSlug = (text: string) => {
        return text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    };

    const handleAddUser = () => {
        setPUsers([...pUsers, { name: "", slug: "", custom_outro: "" }]);
    };

    const handleRemoveUser = (index: number) => {
        setPUsers(pUsers.filter((_, i) => i !== index));
    };

    const handleUserChange = (index: number, field: keyof PersonalizedUser, value: string) => {
        const updated = [...pUsers];
        updated[index][field] = value;
        if (field === "name") {
            updated[index].slug = generateSlug(value);
        }
        setPUsers(updated);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 1. Create form
            const { data: form, error: formError } = await supabase
                .from("feedback_forms")
                .insert({
                    name,
                    slug: slug || generateSlug(name),
                    is_common: isCommon,
                    is_personalized: isPersonalized
                })
                .select()
                .single();

            if (formError) throw formError;

            // 2. Create personalized users if enabled
            if (isPersonalized && pUsers.length > 0) {
                const usersToInsert = pUsers.map(u => ({
                    form_id: form.id,
                    name: u.name,
                    slug: u.slug || generateSlug(u.name),
                    custom_outro: u.custom_outro
                }));

                const { error: usersError } = await supabase
                    .from("personalized_users")
                    .insert(usersToInsert);

                if (usersError) throw usersError;
            }

            router.push("/admin/feedback/forms");
        } catch (error) {
            console.error("Error creating form:", error);
            alert("Error creating form. Check console.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AdminLayout>
            <div className="max-w-[800px] mx-auto space-y-10">
                <header className="flex items-center gap-4">
                    <Link href="/admin/feedback/forms" className="p-2 hover:bg-zinc-100 rounded-full transition-colors text-zinc-400 hover:text-zinc-900">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-semibold text-zinc-900 tracking-tight">Create Form</h1>
                        <p className="text-zinc-500 mt-1 text-sm">Design a new feedback campaign.</p>
                    </div>
                </header>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Info Card */}
                    <div className="bg-white rounded-[32px] p-8 border border-zinc-100 shadow-sm space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-900">Internal Name</label>
                            <input 
                                type="text"
                                placeholder="e.g. Farewell Feedback 2024"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-transparent focus:border-zinc-900 focus:bg-white outline-none transition-all text-sm"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-900">URL Slug</label>
                            <div className="flex items-center gap-2">
                                <span className="text-zinc-400 text-sm">/f/</span>
                                <input 
                                    type="text"
                                    placeholder="farewell-2024"
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                    className="flex-1 px-4 py-3 rounded-2xl bg-zinc-50 border border-transparent focus:border-zinc-900 focus:bg-white outline-none transition-all text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Settings Card */}
                    <div className="bg-white rounded-[32px] p-8 border border-zinc-100 shadow-sm space-y-8">
                        <h3 className="text-lg font-semibold">Form Settings</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Common Toggle */}
                            <button 
                                type="button"
                                onClick={() => setIsCommon(!isCommon)}
                                className={cn(
                                    "flex items-start gap-4 p-5 rounded-[24px] border transition-all text-left",
                                    isCommon ? "bg-blue-50/50 border-blue-200" : "bg-white border-zinc-100 hover:border-zinc-200"
                                )}
                            >
                                <div className={cn("mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors", isCommon ? "border-blue-500 bg-blue-500" : "border-zinc-200")}>
                                    {isCommon && <Check className="w-3 h-3 text-white" />}
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
                                        <Globe className="w-4 h-4 text-blue-500" /> Common Form
                                    </p>
                                    <p className="text-xs text-zinc-500 leading-relaxed">Single link for everyone. Anonymous responses.</p>
                                </div>
                            </button>

                            {/* Personalized Toggle */}
                            <button 
                                type="button"
                                onClick={() => setIsPersonalized(!isPersonalized)}
                                className={cn(
                                    "flex items-start gap-4 p-5 rounded-[24px] border transition-all text-left",
                                    isPersonalized ? "bg-purple-50/50 border-purple-200" : "bg-white border-zinc-100 hover:border-zinc-200"
                                )}
                            >
                                <div className={cn("mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors", isPersonalized ? "border-purple-500 bg-purple-500" : "border-zinc-200")}>
                                    {isPersonalized && <Check className="w-3 h-3 text-white" />}
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
                                        <Users className="w-4 h-4 text-purple-500" /> Personalized
                                    </p>
                                    <p className="text-xs text-zinc-500 leading-relaxed">Unique links per person. Track who said what.</p>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Personalized Users Card */}
                    {isPersonalized && (
                        <div className="bg-white rounded-[32px] p-8 border border-zinc-100 shadow-sm space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold">Personalized Links</h3>
                                <button 
                                    type="button"
                                    onClick={handleAddUser}
                                    className="px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-all flex items-center gap-2"
                                >
                                    <Plus className="w-3 h-3" /> Add Person
                                </button>
                            </div>

                            <div className="space-y-4">
                                {pUsers.map((user, idx) => (
                                    <div key={idx} className="p-6 rounded-[24px] bg-zinc-50 border border-zinc-100 space-y-4 relative group">
                                        <button 
                                            type="button"
                                            onClick={() => handleRemoveUser(idx)}
                                            className="absolute top-4 right-4 p-2 text-zinc-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Name</label>
                                                <input 
                                                    type="text"
                                                    placeholder="John Doe"
                                                    required
                                                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-transparent focus:border-zinc-900 outline-none transition-all text-sm"
                                                    value={user.name}
                                                    onChange={(e) => handleUserChange(idx, "name", e.target.value)}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Link Slug</label>
                                                <input 
                                                    type="text"
                                                    placeholder="john-doe"
                                                    required
                                                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-transparent focus:border-zinc-900 outline-none transition-all text-sm"
                                                    value={user.slug}
                                                    onChange={(e) => handleUserChange(idx, "slug", e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Custom Outro Message (Optional)</label>
                                            <input 
                                                type="text"
                                                placeholder="Thanks for being part of the team, John!"
                                                className="w-full px-4 py-2.5 rounded-xl bg-white border border-transparent focus:border-zinc-900 outline-none transition-all text-sm"
                                                value={user.custom_outro}
                                                onChange={(e) => handleUserChange(idx, "custom_outro", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                ))}
                                {pUsers.length === 0 && (
                                    <div className="py-12 text-center rounded-[24px] border-2 border-dashed border-zinc-200">
                                        <p className="text-sm text-zinc-400">Click &quot;Add Person&quot; to start generating unique links.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="flex items-center justify-end gap-4 pt-4">
                        <Link 
                            href="/admin/feedback/forms"
                            className="px-8 py-4 rounded-full bg-white text-zinc-900 font-medium border border-zinc-200 hover:bg-zinc-50 transition-all"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-10 py-4 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all active:scale-[0.98] disabled:opacity-50 shadow-xl shadow-zinc-900/10"
                        >
                            {loading ? "Creating..." : "Create Campaign"}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

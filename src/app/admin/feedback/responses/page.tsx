import AdminLayout from "@/components/feedback/AdminLayout";
import { supabase } from "@/lib/supabase/client";
import { format } from "date-fns";
import { Search, Filter, ArrowUpDown, ChevronRight } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminResponsesPage() {
    const { data: responses, error } = await supabase
        .from("feedback_responses")
        .select(`
            *,
            feedback_forms (
                name
            )
        `)
        .order("created_at", { ascending: false });

    return (
        <AdminLayout>
            <div className="space-y-10">
                <header>
                    <h1 className="text-3xl font-semibold text-zinc-900 tracking-tight">Responses</h1>
                    <p className="text-zinc-500 mt-1">Review all feedback received from your forms.</p>
                </header>

                <div className="bg-white rounded-[32px] border border-zinc-100 shadow-sm overflow-hidden text-sm">
                    {/* Filters Bar */}
                    <div className="px-8 py-6 border-b border-zinc-50 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-6">
                            <button className="flex items-center gap-2 text-zinc-900 font-medium">
                                All Responses <span className="text-zinc-300 font-normal">({responses?.length || 0})</span>
                            </button>
                            <button className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors">
                                <Filter className="w-4 h-4" /> Filter
                            </button>
                        </div>
                        <div className="relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                            <input 
                                type="text"
                                placeholder="Search responses..."
                                className="pl-10 pr-4 py-2 bg-zinc-50 border-none rounded-full text-xs outline-none focus:ring-1 focus:ring-zinc-200 transition-all w-64"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-zinc-50/50">
                                    <th className="px-8 py-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Submitter</th>
                                    <th className="px-8 py-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Form</th>
                                    <th className="px-8 py-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-center">Work Again</th>
                                    <th className="px-8 py-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Date</th>
                                    <th className="px-8 py-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-right"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-50">
                                {responses?.map((res) => (
                                    <tr key={res.id} className="group hover:bg-zinc-50/30 transition-colors cursor-pointer">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-400 uppercase">
                                                    {res.user_slug ? res.user_slug.substring(0, 2) : "AN"}
                                                </div>
                                                <span className="font-medium text-zinc-900 capitalize">
                                                    {res.user_slug?.replace("-", " ") || "Anonymous"}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 text-zinc-500">
                                            {res.feedback_forms?.name}
                                        </td>
                                        <td className="px-8 py-5 text-center">
                                            <span className={cn(
                                                "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                                                res.work_again === "Hell yes" ? "bg-green-50 text-green-600" :
                                                res.work_again === "Maybe" ? "bg-amber-50 text-amber-600" :
                                                "bg-red-50 text-red-600"
                                            )}>
                                                {res.work_again}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 text-zinc-400 text-xs">
                                            {format(new Date(res.created_at), "MMM d, h:mm a")}
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900 group-hover:translate-x-1 transition-all inline-block" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

import { cn } from "@/lib/utils";

import AdminLayout from "@/components/feedback/AdminLayout";
import { supabase } from "@/lib/supabase/client";
import { Plus, ExternalLink, Link as LinkIcon, Settings2 } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

export const dynamic = "force-dynamic";

export default async function AdminFormsPage() {
    const { data: forms, error } = await supabase
        .from("feedback_forms")
        .select("*")
        .order("created_at", { ascending: false });

    return (
        <AdminLayout>
            <div className="space-y-10">
                <header className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold text-zinc-900 tracking-tight">Feedback Forms</h1>
                        <p className="text-zinc-500 mt-1">Create and manage your feedback campaigns.</p>
                    </div>
                    <Link 
                        href="/admin/feedback/forms/create"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10"
                    >
                        <Plus className="w-4 h-4" /> New Form
                    </Link>
                </header>

                <div className="bg-white rounded-[32px] border border-zinc-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-50">
                                    <th className="px-8 py-5 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Form Name</th>
                                    <th className="px-8 py-5 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Type</th>
                                    <th className="px-8 py-5 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Slug</th>
                                    <th className="px-8 py-5 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Created</th>
                                    <th className="px-8 py-5 text-xs font-semibold text-zinc-400 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-50">
                                {forms?.map((form) => (
                                    <tr key={form.id} className="group hover:bg-zinc-50/50 transition-colors">
                                        <td className="px-8 py-5">
                                            <span className="text-sm font-medium text-zinc-900">{form.name}</span>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="flex gap-2">
                                                {form.is_common && (
                                                    <span className="px-2 py-1 rounded-md bg-blue-50 text-[10px] font-bold text-blue-600 uppercase">Common</span>
                                                )}
                                                {form.is_personalized && (
                                                    <span className="px-2 py-1 rounded-md bg-purple-50 text-[10px] font-bold text-purple-600 uppercase">Personalized</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <code className="text-xs text-zinc-400">/{form.slug}</code>
                                        </td>
                                        <td className="px-8 py-5 text-sm text-zinc-500">
                                            {format(new Date(form.created_at), "MMM d, yyyy")}
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Link 
                                                    href={`/f/${form.slug}`}
                                                    target="_blank"
                                                    className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors"
                                                    title="View Form"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </Link>
                                                <Link 
                                                    href={`/admin/feedback/forms/${form.id}`}
                                                    className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors"
                                                    title="Settings"
                                                >
                                                    <Settings2 className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {(!forms || forms.length === 0) && (
                                    <tr>
                                        <td colSpan={5} className="px-8 py-20 text-center">
                                            <div className="flex flex-col items-center gap-3">
                                                <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center">
                                                    <FileText className="w-6 h-6 text-zinc-200" />
                                                </div>
                                                <p className="text-sm text-zinc-500">No forms created yet.</p>
                                                <Link 
                                                    href="/admin/feedback/forms/create"
                                                    className="text-sm font-medium text-zinc-900 hover:underline"
                                                >
                                                    Create your first form
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

import { FileText } from "lucide-react";

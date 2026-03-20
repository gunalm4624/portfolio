import AdminLayout from "@/components/feedback/AdminLayout";
import { supabase } from "@/lib/supabase/client";
import { FileText, MessageSquare, Users } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminHomePage() {
    const { count: formsCount } = await supabase.from("feedback_forms").select("*", { count: 'exact', head: true });
    const { count: responsesCount } = await supabase.from("feedback_responses").select("*", { count: 'exact', head: true });
    const { count: usersCount } = await supabase.from("personalized_users").select("*", { count: 'exact', head: true });

    const stats = [
        { name: "Active Forms", value: formsCount || 0, icon: FileText, color: "text-blue-500", bg: "bg-blue-50" },
        { name: "Total Responses", value: responsesCount || 0, icon: MessageSquare, color: "text-purple-500", bg: "bg-purple-50" },
        { name: "Personalized Users", value: usersCount || 0, icon: Users, color: "text-green-500", bg: "bg-green-50" },
    ];

    return (
        <AdminLayout>
            <div className="space-y-10">
                <header>
                    <h1 className="text-3xl font-semibold text-zinc-900 tracking-tight">Overview</h1>
                    <p className="text-zinc-500 mt-1">Monitor your feedback and manage your forms.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat) => (
                        <div key={stat.name} className="bg-white p-6 rounded-3xl border border-zinc-100 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center", stat.bg)}>
                                    <stat.icon className={cn("w-5 h-5", stat.color)} />
                                </div>
                                <span className="text-sm font-medium text-zinc-500">{stat.name}</span>
                            </div>
                            <div className="text-3xl font-semibold text-zinc-900">{stat.value}</div>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-3xl border border-zinc-100 shadow-sm p-8">
                    <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
                    <div className="flex flex-wrap gap-4">
                        <Link 
                            href="/admin/feedback/forms/create"
                            className="px-6 py-3 rounded-2xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10"
                        >
                            Create New Form
                        </Link>
                        <Link 
                            href="/admin/feedback/responses"
                            className="px-6 py-3 rounded-2xl bg-white text-zinc-900 text-sm font-medium border border-zinc-200 hover:bg-zinc-50 transition-all"
                        >
                            View All Responses
                        </Link>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

// Minimal cn implementation or import from utils
import { cn } from "@/lib/utils";
import Link from "next/link";

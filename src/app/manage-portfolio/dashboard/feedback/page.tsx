"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import { 
    MessageSquare, 
    FileText, 
    Users, 
    ArrowRight,
    Loader2
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeedbackOverviewPage() {
    const [stats, setStats] = useState({
        responses: 0,
        forms: 0,
        personalized: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        setLoading(true);
        try {
            const [responsesCount, formsCount, personalizedCount] = await Promise.all([
                supabase.from("feedback_responses").select("*", { count: 'exact', head: true }),
                supabase.from("feedback_forms").select("*", { count: 'exact', head: true }),
                supabase.from("personalized_users").select("*", { count: 'exact', head: true })
            ]);

            setStats({
                responses: responsesCount.count || 0,
                forms: formsCount.count || 0,
                personalized: personalizedCount.count || 0
            });
        } catch (error) {
            console.error("Error fetching feedback stats:", error);
        } finally {
            setLoading(false);
        }
    };

    const modules = [
        {
            title: "Feedback Forms",
            description: "Manage your public and private feedback forms.",
            icon: FileText,
            count: stats.forms,
            href: "/manage-portfolio/dashboard/feedback/forms",
            color: "text-blue-500",
            bgColor: "bg-blue-50 dark:bg-blue-900/20"
        },
        {
            title: "Responses",
            description: "View and analyze all received feedback.",
            icon: MessageSquare,
            count: stats.responses,
            href: "/manage-portfolio/dashboard/feedback/responses",
            color: "text-green-500",
            bgColor: "bg-green-50 dark:bg-green-900/20"
        },
        {
            title: "Personalized Users",
            description: "Users with custom feedback links.",
            icon: Users,
            count: stats.personalized,
            href: "/manage-portfolio/dashboard/feedback/forms", // Users are managed within forms
            color: "text-purple-500",
            bgColor: "bg-purple-50 dark:bg-purple-900/20"
        }
    ];

    return (
        <div className="p-8 max-w-7xl mx-auto w-full">
            <div className="mb-8">
                <h1 className="text-3xl font-bold primary-font mb-2">Feedback Module</h1>
                <p className="text-gray-500">Overview of your feedback system and performance.</p>
            </div>

            {loading ? (
                <div className="flex items-center justify-center py-20">
                    <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {modules.map((module) => (
                        <Card key={module.title} className="border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 overflow-hidden group">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium text-gray-500">{module.title}</CardTitle>
                                <div className={`${module.bgColor} p-2 rounded-lg`}>
                                    <module.icon className={`h-4 w-4 ${module.color}`} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold mb-1">{module.count}</div>
                                <p className="text-xs text-gray-400 mb-6">{module.description}</p>
                                <Link 
                                    href={module.href}
                                    className="flex items-center text-sm font-medium text-black dark:text-white hover:opacity-70 transition-opacity"
                                >
                                    Manage module <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}

            <div className="bg-gray-50 dark:bg-zinc-800/50 rounded-3xl p-8 border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-medium mb-4">Quick Setup</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h4 className="font-medium mb-2">Create a personalized link</h4>
                        <p className="text-sm text-gray-500 mb-4">Generate a unique feedback URL for a specific client or teammate.</p>
                        <Link href="/manage-portfolio/dashboard/feedback/forms">
                            <span className="text-sm font-medium underline underline-offset-4">Go to Forms &rarr;</span>
                        </Link>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <h4 className="font-medium mb-2">View latest responses</h4>
                        <p className="text-sm text-gray-500 mb-4">Check what people are saying about your work.</p>
                        <Link href="/manage-portfolio/dashboard/feedback/responses">
                            <span className="text-sm font-medium underline underline-offset-4">View Responses &rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

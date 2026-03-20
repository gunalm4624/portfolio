"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
    LayoutDashboard, 
    FileText, 
    MessageSquare, 
    Settings,
    ArrowLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Overview", href: "/admin/feedback", icon: LayoutDashboard },
    { name: "Forms", href: "/admin/feedback/forms", icon: FileText },
    { name: "Responses", href: "/admin/feedback/responses", icon: MessageSquare },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-[#f5f5f7]">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-zinc-200 hidden md:flex flex-col">
                <div className="p-6">
                    <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors mb-8 text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" /> Back to Site
                    </Link>
                    <div className="flex items-center gap-3 px-2">
                        <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center">
                            <MessageSquare className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-zinc-900">Feedback Admin</span>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                                    isActive 
                                        ? "bg-zinc-900 text-white shadow-md shadow-zinc-900/10" 
                                        : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                                )}
                            >
                                <item.icon className="w-4 h-4" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-zinc-100">
                    <button className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors">
                        <Settings className="w-4 h-4" />
                        Settings
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <div className="max-w-[1240px] mx-auto p-8 lg:p-12">
                    {children}
                </div>
            </main>
        </div>
    );
}

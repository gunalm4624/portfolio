"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { toast } from "sonner";
import { LayoutDashboard, Palette, LogOut } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/manage-portfolio");
        toast.success("Logged out successfully");
    };

    const links = [
        {
            label: "Dashboard",
            href: "/manage-portfolio/dashboard",
            icon: (
                <LayoutDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Explorations",
            href: "/manage-portfolio/dashboard/explorations",
            icon: (
                <Palette className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Logout",
            href: "#",
            icon: (
                <LogOut className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
            onClick: handleLogout,
        },
    ];

    return (
        <div
            className={cn(
                "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "h-screen"
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <div key={idx} onClick={link.onClick ? link.onClick : undefined}>
                                    <SidebarLink link={link} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <div>
                        <SidebarLink
                            link={{
                                label: "Gunal Portfolio",
                                href: "/",
                                icon: (
                                    <Image
                                        src="/assets/images/user-profile.jpg"
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div> */}
                </SidebarBody>
            </Sidebar>
            <div className="flex-1 overflow-auto bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-700">
                {children}
            </div>
        </div>
    );
}

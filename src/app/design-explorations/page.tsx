import { supabase } from "@/lib/supabase/client";
import DesignExplorationsClient from "./DesignExplorationsClient";

// Revalidate every 60 seconds (ISR style caching)
// Revalidate every 60 seconds (ISR style caching)
export const dynamic = "force-dynamic";

export default async function DesignExplorationsPage() {
    const { data: works, error } = await supabase
        .from("design_explorations")
        .select("*")
        .order("id", { ascending: false });

    if (error) {
        console.error("Error fetching explorations:", error);
        return (
            <main className="min-h-screen flex items-center justify-center p-8 text-center text-red-500">
                Failed to load content. Please try again later.
            </main>
        );
    }
    return (
        <main className="px-3 md:px-8 pt-32 min-h-screen">
            <DesignExplorationsClient works={works || []} />
        </main>
    );
}

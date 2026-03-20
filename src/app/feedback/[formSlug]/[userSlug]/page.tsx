import { supabase } from "@/lib/supabase/client";
import PublicFeedbackForm from "@/components/feedback/PublicForm";
import { notFound } from "next/navigation";

export default async function PersonalizedFormPage({ 
    params 
}: { 
    params: Promise<{ formSlug: string; userSlug: string }> 
}) {
    const { formSlug, userSlug } = await params;

    // 1. Fetch form
    const { data: form, error: formError } = await supabase
        .from("feedback_forms")
        .select("*")
        .eq("slug", formSlug)
        .single();

    if (formError || !form) return notFound();

    // 2. Fetch personalized user
    const { data: user, error: userError } = await supabase
        .from("personalized_users")
        .select("*")
        .eq("form_id", form.id)
        .eq("slug", userSlug)
        .single();

    if (userError || !user) return notFound();

    return (
        <PublicFeedbackForm 
            formId={form.id} 
            formName={form.name}
            userName={user.name}
            userSlug={user.slug}
            customOutro={user.custom_outro}
        />
    );
}

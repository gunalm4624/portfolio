import { supabase } from "@/lib/supabase/client";
import PublicFeedbackForm from "@/components/feedback/PublicForm";
import { notFound } from "next/navigation";

export default async function CommonFormPage({ params }: { params: Promise<{ formSlug: string }> }) {
    const { formSlug } = await params;
    const { data: form, error } = await supabase
        .from("feedback_forms")
        .select("*")
        .eq("slug", formSlug)
        .eq("is_common", true)
        .single();

    if (error || !form) {
        return notFound();
    }

    return (
        <PublicFeedbackForm 
            formId={form.id} 
            formName={form.name} 
        />
    );
}

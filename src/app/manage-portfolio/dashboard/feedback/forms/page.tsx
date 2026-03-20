"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import { toast } from "sonner";
import { 
    Plus, 
    Trash2, 
    Copy, 
    Check,
    Loader2,
    ChevronRight,
    ChevronDown,
    ExternalLink,
    FileText,
    Edit2
} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface FeedbackForm {
    id: string;
    name: string;
    slug: string;
    is_common: boolean;
    is_personalized: boolean;
    created_at: string;
}

interface PersonalizedUser {
    id: string;
    form_id: string;
    name: string;
    slug: string;
    custom_outro?: string;
    created_at: string;
}

export default function FeedbackFormsPage() {
    const [forms, setForms] = useState<FeedbackForm[]>([]);
    const [loading, setLoading] = useState(true);
    const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);
    const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
    const [selectedFormId, setSelectedFormId] = useState<string | null>(null);
    const [expandedFormId, setExpandedFormId] = useState<string | null>(null);
    const [personalizedUsers, setPersonalizedUsers] = useState<Record<string, PersonalizedUser[]>>({});
    const [copiedId, setCopiedId] = useState<string | null>(null);

    // New Form State
    const [formName, setFormName] = useState("");
    const [formSlug, setFormSlug] = useState("");
    const [creatingForm, setCreatingForm] = useState(false);

    // New User State
    const [userName, setUserName] = useState("");
    const [userSlug, setUserSlug] = useState("");
    const [customOutro, setCustomOutro] = useState("");
    const [creatingUser, setCreatingUser] = useState(false);
    const [editingUserId, setEditingUserId] = useState<string | null>(null);

    useEffect(() => {
        fetchForms();
    }, []);

    const fetchForms = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("feedback_forms")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            toast.error("Failed to load forms");
        } else {
            setForms(data || []);
        }
        setLoading(false);
    };

    const fetchUsers = async (formId: string) => {
        const { data, error } = await supabase
            .from("personalized_users")
            .select("*")
            .eq("form_id", formId)
            .order("created_at", { ascending: false });

        if (error) {
            toast.error("Failed to load users");
        } else {
            setPersonalizedUsers(prev => ({ ...prev, [formId]: data || [] }));
        }
    };

    const toggleExpand = (formId: string) => {
        if (expandedFormId === formId) {
            setExpandedFormId(null);
        } else {
            setExpandedFormId(formId);
            if (!personalizedUsers[formId]) {
                fetchUsers(formId);
            }
        }
    };

    const handleCreateForm = async (e: React.FormEvent) => {
        e.preventDefault();
        setCreatingForm(true);
        try {
            const { error } = await supabase
                .from("feedback_forms")
                .insert([{ name: formName, slug: formSlug, is_common: true, is_personalized: true }]);

            if (error) throw error;
            toast.success("Form created successfully");
            setIsFormDialogOpen(false);
            setFormName("");
            setFormSlug("");
            fetchForms();
        } catch (error) {
            console.error(error);
            toast.error("Failed to create form");
        } finally {
            setCreatingForm(false);
        }
    };

    const handleCreateUser = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedFormId) return;
        setCreatingUser(true);
        try {
            const userData = { 
                form_id: selectedFormId, 
                name: userName, 
                slug: userSlug || userName.toLowerCase().replace(/\s+/g, '-'),
                custom_outro: customOutro || null
            };

            if (editingUserId) {
                const { error } = await supabase
                    .from("personalized_users")
                    .update(userData)
                    .eq("id", editingUserId);
                if (error) throw error;
                toast.success("Link updated successfully");
            } else {
                const { error } = await supabase
                    .from("personalized_users")
                    .insert([userData]);
                if (error) throw error;
                toast.success("Personalized link added");
            }

            setIsUserDialogOpen(false);
            resetUserForm();
            fetchUsers(selectedFormId);
        } catch (error) {
            console.error(error);
            toast.error(editingUserId ? "Failed to update" : "Failed to add");
        } finally {
            setCreatingUser(false);
        }
    };

    const resetUserForm = () => {
        setUserName("");
        setUserSlug("");
        setCustomOutro("");
        setEditingUserId(null);
    };

    const openEditUser = (user: PersonalizedUser) => {
        setEditingUserId(user.id);
        setUserName(user.name);
        setUserSlug(user.slug);
        setCustomOutro(user.custom_outro || "");
        setSelectedFormId(user.form_id);
        setIsUserDialogOpen(true);
    };

    const handleDeleteForm = async (id: string) => {
        if (!confirm("Are you sure? This will delete all responses and personalized links associated with this form.")) return;
        const { error } = await supabase.from("feedback_forms").delete().eq("id", id);
        if (error) {
            toast.error("Delete failed");
        } else {
            toast.success("Form deleted");
            fetchForms();
        }
    };

    const handleDeleteUser = async (id: string, formId: string) => {
        if (!confirm("Delete this personalized link?")) return;
        const { error } = await supabase.from("personalized_users").delete().eq("id", id);
        if (error) {
            toast.error("Delete failed");
        } else {
            toast.success("Link deleted");
            fetchUsers(formId);
        }
    };

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        toast.success("Copied to clipboard");
        setTimeout(() => setCopiedId(null), 2000);
    };

    const getBaseUrl = () => {
        if (typeof window !== "undefined") {
            return window.location.origin;
        }
        return "";
    };

    return (
        <div className="p-8 max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold primary-font mb-2">Feedback Forms</h1>
                    <p className="text-gray-500">Create forms and generate personalized feedback links.</p>
                </div>
                <Dialog open={isFormDialogOpen} onOpenChange={setIsFormDialogOpen}>
                    <DialogTrigger asChild>
                        <Button className="rounded-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black">
                            <Plus size={18} className="mr-2" /> New Form
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white dark:bg-zinc-900">
                        <DialogHeader>
                            <DialogTitle>Create Feedback Form</DialogTitle>
                            <DialogDescription>Add a new collection form for feedback.</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleCreateForm} className="space-y-4 pt-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Form Name</Label>
                                <Input id="name" value={formName} onChange={e => setFormName(e.target.value)} required placeholder="e.g. Project Delivery Feedback" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="slug">Public Slug</Label>
                                <Input id="slug" value={formSlug} onChange={e => setFormSlug(e.target.value)} required placeholder="e.g. project-feedback" />
                                <p className="text-[10px] text-gray-400">URL will be: {getBaseUrl()}/feedback/{formSlug || "[slug]"}</p>
                            </div>
                            <DialogFooter>
                                <Button type="submit" disabled={creatingForm}>
                                    {creatingForm ? <Loader2 className="animate-spin" /> : "Create Form"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                </div>
            ) : forms.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 dark:bg-zinc-800/30 rounded-3xl border border-dashed border-gray-200 dark:border-gray-800">
                    <FileText className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium">No forms yet</h3>
                    <p className="text-gray-500">Create your first form to start collecting feedback.</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {forms.map(form => (
                        <Card key={form.id} className="border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-gray-100 dark:bg-zinc-800 rounded-2xl">
                                            <FileText className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{form.name}</h3>
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <span>/feedback/{form.slug}</span>
                                                <span className="h-1 w-1 rounded-full bg-gray-300" />
                                                <span>{new Date(form.created_at).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button 
                                            variant="outline" 
                                            size="sm" 
                                            className="rounded-full"
                                            onClick={() => copyToClipboard(`${getBaseUrl()}/feedback/${form.slug}`, form.id)}
                                        >
                                            {copiedId === form.id ? <Check size={14} className="mr-2" /> : <Copy size={14} className="mr-2" />}
                                            Copy Link
                                        </Button>
                                        <Button 
                                            variant="outline" 
                                            size="icon" 
                                            className="rounded-full"
                                            onClick={() => window.open(`/feedback/${form.slug}`, '_blank')}
                                        >
                                            <ExternalLink size={14} />
                                        </Button>
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            className="rounded-full text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10"
                                            onClick={() => handleDeleteForm(form.id)}
                                        >
                                            <Trash2 size={14} />
                                        </Button>
                                    </div>
                                </div>
                                
                                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                                    <button 
                                        onClick={() => toggleExpand(form.id)}
                                        className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                                    >
                                        {expandedFormId === form.id ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                                        Personalized Links ({personalizedUsers[form.id]?.length || 0})
                                    </button>
                                    
                                    {expandedFormId === form.id && (
                                        <div className="mt-4 space-y-3 pl-6">
                                            <div className="flex justify-between items-center bg-gray-50 dark:bg-zinc-800/50 p-4 rounded-2xl">
                                                <span className="text-sm text-gray-500">Create a unique link for someone</span>
                                                <Button size="sm" variant="secondary" className="rounded-full h-8" onClick={() => { setSelectedFormId(form.id); setIsUserDialogOpen(true); }}>
                                                    <Plus size={14} className="mr-1" /> Add Person
                                                </Button>
                                            </div>
                                            
                                            {personalizedUsers[form.id]?.map(user => (
                                                <div key={user.id} className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 rounded-2xl">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold">
                                                            {user.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-medium">{user.name}</div>
                                                            <div className="text-[10px] text-gray-400">/feedback/{form.slug}/{user.slug}</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Button 
                                                            variant="ghost" 
                                                            size="icon" 
                                                            className="h-8 w-8 rounded-full"
                                                            onClick={() => openEditUser(user)}
                                                        >
                                                            <Edit2 size={14} />
                                                        </Button>
                                                        <Button 
                                                            variant="ghost" 
                                                            size="icon" 
                                                            className="h-8 w-8 rounded-full"
                                                            onClick={() => copyToClipboard(`${getBaseUrl()}/feedback/${form.slug}/${user.slug}`, user.id)}
                                                        >
                                                            {copiedId === user.id ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                                                        </Button>
                                                        <Button 
                                                            variant="ghost" 
                                                            size="icon" 
                                                            className="h-8 w-8 rounded-full text-red-500"
                                                            onClick={() => handleDeleteUser(user.id, form.id)}
                                                        >
                                                            <Trash2 size={14} />
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                            
                                            {personalizedUsers[form.id]?.length === 0 && (
                                                <p className="text-xs text-center py-4 text-gray-400">No personalized links created yet.</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}

            {/* Personalized User Dialog */}
            <Dialog open={isUserDialogOpen} onOpenChange={(open) => { setIsUserDialogOpen(open); if (!open) resetUserForm(); }}>
                <DialogContent className="sm:max-w-[425px] bg-white dark:bg-zinc-900 border-gray-200 dark:border-gray-800">
                    <DialogHeader>
                        <DialogTitle>{editingUserId ? "Edit Personalized Link" : "Add Personalized Link"}</DialogTitle>
                        <DialogDescription>
                            {editingUserId ? "Update details for this personalized link." : "Create a unique feedback URL for a client or teammate."}
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleCreateUser} className="space-y-4 pt-4">
                        <div className="space-y-2">
                            <Label htmlFor="userName">Person's Name</Label>
                            <Input id="userName" value={userName} onChange={e => setUserName(e.target.value)} required placeholder="e.g. John Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="userSlug">Custom Slug (Optional)</Label>
                            <Input id="userSlug" value={userSlug} onChange={e => setUserSlug(e.target.value)} placeholder="e.g. john-doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="outro">Custom Success Message (Optional)</Label>
                            <Textarea 
                                id="outro" 
                                value={customOutro} 
                                onChange={e => setCustomOutro(e.target.value)}
                                className="min-h-[100px]"
                                placeholder="I really appreciate you taking the time..."
                            />
                        </div>
                        <DialogFooter>
                            <Button type="submit" disabled={creatingUser}>
                                {creatingUser ? <Loader2 className="animate-spin" /> : editingUserId ? "Update Link" : "Create Link"}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

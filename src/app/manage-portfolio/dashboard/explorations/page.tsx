"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import { toast } from "sonner";
import { Loader2, Plus, Trash2, Edit2, Upload, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
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

interface DesignWork {
    id: number;
    title: string;
    date: string;
    image_url: string;
    link?: string;
    category: string;
}

export default function ExplorationsPage() {
    const [works, setWorks] = useState<DesignWork[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [uploading, setUploading] = useState(false);

    // Form State
    const [title, setTitle] = useState("");
    const [date, setDate] = useState(() => new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }));
    const [link, setLink] = useState("");
    const [category, setCategory] = useState("Landing Pages");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [existingImageUrl, setExistingImageUrl] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);

    useEffect(() => {
        fetchWorks();
    }, []);

    const fetchWorks = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("design_explorations")
            .select("*")
            .order("id", { ascending: false });

        if (error) {
            toast.error("Failed to load explorations");
        } else {
            setWorks(data || []);
        }
        setLoading(false);
    };

    const handleImageUpload = async (file: File) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('portfolio-assets')
            .upload(filePath, file);

        if (uploadError) {
            throw uploadError;
        }

        const { data } = supabase.storage.from('portfolio-assets').getPublicUrl(filePath);
        return data.publicUrl;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setUploading(true);

        try {
            let imageUrl = existingImageUrl;

            if (imageFile) {
                imageUrl = await handleImageUpload(imageFile);
            }

            if (!imageUrl) {
                toast.error("Image is required");
                setUploading(false);
                return;
            }

            const workData = {
                title,
                date,
                link,
                category,
                image_url: imageUrl,
            };

            if (editingId) {
                const { error } = await supabase
                    .from("design_explorations")
                    .update(workData)
                    .eq("id", editingId);

                if (error) throw error;
                toast.success("Exploration updated");
            } else {
                const { error } = await supabase
                    .from("design_explorations")
                    .insert([workData]);

                if (error) throw error;
                toast.success("Exploration added");
            }

            setIsDialogOpen(false);
            resetForm();
            fetchWorks();

        } catch (error) {
            console.error(error);
            toast.error("Operation failed");
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this?")) return;

        const { error } = await supabase
            .from("design_explorations")
            .delete()
            .eq("id", id);

        if (error) {
            toast.error("Failed to delete");
        } else {
            toast.success("Deleted successfully");
            fetchWorks();
        }
    };

    const openEdit = (work: DesignWork) => {
        setEditingId(work.id);
        setTitle(work.title);
        setDate(work.date);
        setLink(work.link || "");
        setCategory(work.category);
        setExistingImageUrl(work.image_url);
        setIsDialogOpen(true);
    };

    const resetForm = () => {
        setEditingId(null);
        setTitle("");
        // Auto-set date to today: e.g. "28 Jan 2026"
        const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        setDate(today);
        setLink("");
        setCategory("Landing Pages");
        setImageFile(null);
        setExistingImageUrl("");
    };

    return (
        <div className="p-8 max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold primary-font mb-2">Design Explorations</h1>
                    <p className="text-gray-500">Manage your creative works and concepts.</p>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) resetForm(); }}>
                    <DialogTrigger asChild>
                        <Button className="rounded-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black">
                            <Plus size={18} className="mr-2" /> Add New
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white dark:bg-zinc-900 border-gray-200 dark:border-gray-800">
                        <DialogHeader>
                            <DialogTitle>{editingId ? "Edit Exploration" : "Add New Exploration"}</DialogTitle>
                            <DialogDescription>
                                Add details about your design concept.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" value={title} onChange={e => setTitle(e.target.value)} required placeholder="e.g. Finance Dashboard" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="date">Date</Label>
                                    <Input id="date" value={date} onChange={e => setDate(e.target.value)} required placeholder="e.g. 28 Jan 2026" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <select
                                        id="category"
                                        value={category}
                                        onChange={e => setCategory(e.target.value)}
                                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {["Landing Pages", "Ecommerce Website", "App Design", "Web Design", "Dashboard Design"].map(c => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="link">Link (Optional)</Label>
                                <Input id="link" value={link} onChange={e => setLink(e.target.value)} placeholder="https://..." />
                            </div>
                            <div className="space-y-2">
                                <Label>Image</Label>
                                <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors relative">
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        onChange={e => {
                                            if (e.target.files?.[0]) {
                                                setImageFile(e.target.files[0]);
                                            }
                                        }}
                                    />
                                    {imageFile ? (
                                        <div className="text-sm text-green-600 font-medium truncate">{imageFile.name}</div>
                                    ) : existingImageUrl ? (
                                        <div className="relative w-full h-32 rounded-md overflow-hidden">
                                            <Image src={existingImageUrl} alt="Preview" fill className="object-cover" />
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center text-gray-400">
                                            <Upload size={24} className="mb-2" />
                                            <span className="text-xs">Click to upload image</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" disabled={uploading}>
                                    {uploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    {editingId ? "Update" : "Create"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {/* List */}
            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                    <Loader2 className="h-8 w-8 animate-spin mb-2" />
                    <p>Loading works...</p>
                </div>
            ) : works.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 bg-gray-50 dark:bg-zinc-800/50 rounded-3xl border border-dashed border-gray-200 dark:border-gray-700">
                    <ImageIcon className="h-12 w-12 text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">No explorations yet</h3>
                    <p className="text-gray-500 mb-6 max-w-xs text-center">Get started by creating your first design exploration.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {works.map((work) => (
                        <div key={work.id} className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all dark:hover:border-gray-700">
                            <div className="relative aspect-[4/3] bg-gray-100 dark:bg-black">
                                <Image
                                    src={work.image_url}
                                    alt={work.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                    <Button size="icon" variant="secondary" className="rounded-full" onClick={() => openEdit(work)}>
                                        <Edit2 size={16} />
                                    </Button>
                                    <Button size="icon" variant="destructive" className="rounded-full" onClick={() => handleDelete(work.id)}>
                                        <Trash2 size={16} />
                                    </Button>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-medium text-lg leading-tight">{work.title}</h3>
                                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-gray-600 dark:text-gray-400 whitespace-nowrap">{work.category}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
                                    <span>{work.date}</span>
                                    {work.link && (
                                        <a href={work.link} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                                            Visit Link &rarr;
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

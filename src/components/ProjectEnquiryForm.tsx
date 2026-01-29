"use client";

import { useState } from "react";
import { useForm, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }).optional().or(z.literal("")),
    phone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    service: z.string().min(1, {
        message: "Please select a service.",
    }),
    brief: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const SERVICES = [
    { name: "UI/UX Design", price: "Starts from ₹50k" },
    { name: "Product Design", price: "Starts from ₹80k" },
    { name: "Ecommerce Website", price: "Starts from ₹60k" },
    { name: "Web Development", price: "Starts from ₹40k" },
    { name: "Landing page design", price: "Starts from ₹20k" }
];

export function ProjectEnquiryForm() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            service: "",
            brief: "",
        },
    });

    async function onSubmit() {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
        form.reset();
        toast.success("Enquiry received successfully!");
    }

    function onInvalid(errors: FieldErrors<FormValues>) {
        Object.keys(errors).forEach((key) => {
            // @ts-expect-error - dynamic key access
            if (errors[key]?.message) {
                // @ts-expect-error - message access
                toast.error(errors[key].message);
            }
        });
    }

    if (isSuccess) {
        return (
            <Card className="w-full h-full border-0 shadow-none flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-500 bg-transparent">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-medium mb-2">Enquiry Received!</h3>
                <p className="text-muted-foreground max-w-xs mb-8">
                    Thank you for reaching out. I&apos;ll review your project brief and get back to you shortly.
                </p>
                <Button
                    variant="outline"
                    onClick={() => setIsSuccess(false)}
                >
                    Submit another response
                </Button>
            </Card>
        );
    }

    return (
        <Card className="w-full h-full border-0 shadow-none bg-transparent">
            <CardHeader>
                <div className="flex justify-between items-center mb-2">
                    <CardTitle className="text-4xl font-normal primary-font">Start a Project</CardTitle>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium whitespace-nowrap">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        2 slots available for this week
                    </div>
                </div>
                <CardDescription>
                    Tell me about your project needs. I&apos;ll respond as soon as possible.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={cn(form.formState.errors.name && "text-red-500")}>
                                        Name <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={cn(form.formState.errors.email && "text-red-500")}>
                                            Email Address
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="john@example.com" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={cn(form.formState.errors.phone && "text-red-500")}>
                                            Phone Number <span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input type="tel" placeholder="+91 99999 99999" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={cn(form.formState.errors.service && "text-red-500")}>
                                        Service Required <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a service" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {SERVICES.map((service) => (
                                                <SelectItem key={service.name} value={service.name} className="w-full cursor-pointer">
                                                    <div className="flex w-full items-center justify-between gap-2">
                                                        <span className="truncate">{service.name}</span>
                                                        <span className="text-muted-foreground text-xs ml-auto whitespace-nowrap pl-4">
                                                            {service.price}
                                                        </span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="brief"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={cn(form.formState.errors.brief && "text-red-500")}>
                                        Project Brief
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell me a bit about your project goals and requirements..."
                                            className="resize-none min-h-[100px]"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <div className="pt-4">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-full py-6"
                                size="lg"
                            >
                                {isSubmitting && <Loader2 className="mr-2 h-4 w-full animate-spin" />}
                                {!isSubmitting && <Send className="mr-2 h-4 w-full" />}
                                Send Enquiry
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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
import { useState } from "react";
import { Loader2 } from "lucide-react";
import Lottie from "lottie-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CtaButton from "../components/CtaButton";
import successAnimation from "./success-animation.json";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  businessName: z.string().optional(),
  about: z.string().min(10, {
    message: "Please tell us a bit more about your business.",
  }),
  service: z.string().min(1, {
    message: "Please select a service.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  contactNumber: z.string().optional(),
});

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      about: "",
      service: "",
      email: "",
      contactNumber: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12 dark:border-zinc-800 dark:bg-zinc-950/50">
      <Dialog open={isSubmitted} onOpenChange={setIsSubmitted}>
        <DialogContent className="max-w-md rounded-3xl border-0 p-0 sm:max-w-md dark:bg-zinc-950">
          <div className="flex flex-col items-center px-8 py-10 text-center">
            <div className="h-16 w-16">
              <Lottie animationData={successAnimation} loop={false} autoplay />
            </div>
            <DialogHeader className="mt-6 items-center">
              <DialogTitle className="text-2xl font-medium tracking-tight text-zinc-950 dark:text-white">
                Request received
              </DialogTitle>
              <DialogDescription className="text-base text-zinc-500 dark:text-zinc-400">
                Thanks for reaching out! We&apos;ll get back to you within 30 minutes to discuss your project.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6">
              <CtaButton label="Back to home" href="/" shadow={false} />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium text-zinc-950 dark:text-zinc-300">Your Name <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Gunal M" className="h-12 border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium text-zinc-950 dark:text-zinc-300">Business Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Gunal Designs" className="h-12 border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium text-zinc-950 dark:text-zinc-300">Email Address <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="hello@gunalm.design" className="h-12 border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium text-zinc-950 dark:text-zinc-300">Contact Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 (555) 000-0000" className="h-12 border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium text-zinc-950 dark:text-zinc-300">What is your business about? <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your industry, audience, and goals..."
                    className="min-h-[120px] resize-none border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium text-zinc-950 dark:text-zinc-300">Service Needed <span className="text-red-500">*</span></FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="!h-12 w-full border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem className="py-3" value="web-design">Web Design & Development</SelectItem>
                    <SelectItem className="py-3" value="ui-ux">UI/UX Product Design</SelectItem>
                    <SelectItem className="py-3" value="branding">Branding & Identity</SelectItem>
                    <SelectItem className="py-3" value="consulting">Consulting</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {submitError && (
            <p className="text-sm text-red-500" role="alert">
              {submitError}
            </p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-14 w-full cursor-pointer rounded-full bg-zinc-950 text-lg font-normal text-white transition-all duration-300 hover:bg-[#ed254e] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-zinc-950 dark:hover:bg-[#ed254e] dark:hover:text-white shadow-[0_2px_1px_rgba(0,0,0,0.09),0_4px_2px_rgba(0,0,0,0.09),0_8px_4px_rgba(0,0,0,0.09),0_16px_8px_rgba(0,0,0,0.09),0_32px_16px_rgba(0,0,0,0.09)] hover:shadow-[0_2px_1px_rgba(237,37,78,0.25),0_4px_2px_rgba(237,37,78,0.22),0_8px_4px_rgba(237,37,78,0.18),0_16px_8px_rgba(237,37,78,0.15),0_32px_16px_rgba(237,37,78,0.12)]"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="animate-spin" size={20} />
                Sending...
              </span>
            ) : (
              "Let's Make It Happen"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}

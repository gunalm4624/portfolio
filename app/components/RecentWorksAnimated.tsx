"use client";

import {
  ArrowRight,
  Calendar,
  FileText,
  Heart,
  Link2,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

import { type WorkItem } from "../../sanity/lib/queries";
import { TextAnimate } from "@/components/magicui/text-animate";

function MetaRow({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 py-5">
      <span className="text-zinc-400 dark:text-zinc-500">{icon}</span>
      <span className="text-base text-zinc-800 dark:text-zinc-200">
        {label}
      </span>
      {href && (
        <span className="ml-auto text-zinc-400 dark:text-zinc-500">
          <ArrowRight size={18} />
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        title={label}
        target="_blank"
        rel="noopener noreferrer"
        className="block border-b border-zinc-300 transition-colors hover:text-zinc-950 dark:border-zinc-600"
      >
        {content}
      </a>
    );
  }

  return <div className="border-b border-zinc-300 dark:border-zinc-600">{content}</div>;
}

function WorkEntry({ work, index }: { work: WorkItem; index: number }) {
  const testimonial = work.testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index === 0 ? 0 : 0.05 }}
      className="border-t border-zinc-100 py-16 first:border-t-0 first:pt-0 dark:border-zinc-800"
    >
      <div
        className="w-full rounded-2xl border border-black/5 bg-white p-1 dark:border-white/10 dark:bg-zinc-900"
        style={{
          aspectRatio: work.coverAspectRatio ?? 4 / 3,
          boxShadow:
            "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-800">
          {work.coverImageUrl && (
            <Image
              src={work.coverImageUrl}
              alt={work.name}
              fill
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-contain"
            />
          )}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <h3 className="text-[28px] leading-snug tracking-tight text-zinc-950 dark:text-white">
          <span className="font-medium">{work.name}</span> — {work.description}
        </h3>

        <div>
          {work.liveLink && (
            <MetaRow
              icon={<Link2 size={20} />}
              label="Live Link"
              href={work.liveLink}
            />
          )}
          {work.pageType && (
            <MetaRow icon={<FileText size={20} />} label={work.pageType} />
          )}
          {work.duration && (
            <MetaRow icon={<Calendar size={20} />} label={work.duration} />
          )}

          {testimonial?.name && (
            <div className="flex items-start gap-3 py-5">
              <span className="text-zinc-400 dark:text-zinc-500">
                <Heart size={20} />
              </span>
              <div>
                <p className="text-base text-zinc-800 dark:text-zinc-200">
                  {testimonial.name}
                </p>
                {(testimonial.company || testimonial.role) && (
                  <p className="text-sm text-zinc-400 dark:text-zinc-500">
                    {[testimonial.company, testimonial.role]
                      .filter(Boolean)
                      .join(", ")}
                  </p>
                )}
              </div>

              {testimonial.avatarUrl && (
                <div className="relative ml-auto h-11 w-11 shrink-0 self-start overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          )}

          {testimonial?.quote && (
            <div
              className="mt-4 rounded-2xl p-8 dark:bg-zinc-900"
              style={{ backgroundColor: "#f3f3f3" }}
            >
              <p className="text-lg leading-8 text-zinc-800 dark:text-zinc-200">
                {testimonial.quote}
              </p>
              <div className="mt-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < (testimonial.rating ?? 5)
                        ? "fill-zinc-900 text-zinc-900 dark:fill-white dark:text-white"
                        : "fill-zinc-300 text-zinc-300 dark:fill-zinc-700 dark:text-zinc-700"
                    }
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function RecentWorksAnimated({ works }: { works: WorkItem[] }) {
  return (
    <section id="works" className="w-full px-6 py-[60px] sm:py-[100px] sm:px-8">
      <div className="mx-auto max-w-6xl">
        <TextAnimate
          as="h2"
          by="word"
          animation="blurIn"
          once
          className="text-center text-4xl font-normal leading-[1.08] mb-16 mt-24 tracking-tighter text-zinc-950 dark:text-white"
        >
          Recent Works
        </TextAnimate>

        <div className="mt-8">
          {works.map((work, index) => (
            <WorkEntry key={work.name} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

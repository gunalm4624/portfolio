import Image from "next/image";

import { getProjects, type ProjectCard } from "../../sanity/lib/queries";

const accentClasses: Record<ProjectCard["accent"], string> = {
  orange: "bg-orange-400",
  zinc: "bg-zinc-400",
};

function DesignCard({ name, accent, imageUrl }: ProjectCard) {
  return (
    <div
      className="aspect-[4/3] w-[28rem] shrink-0 rounded-2xl border border-black/5 bg-white p-1 dark:border-white/10 dark:bg-zinc-900"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="448px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-1.5 border-b border-black/5 px-4 py-3 dark:border-white/10">
              <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-4">
              <div
                className={`h-3 w-16 rounded-full ${accentClasses[accent]}`}
              />
              <div className="h-3 w-3/4 rounded-full bg-zinc-100 dark:bg-zinc-800" />
              <div className="h-3 w-1/2 rounded-full bg-zinc-100 dark:bg-zinc-800" />

              <div className="mt-auto grid grid-cols-3 gap-2">
                <div className="h-12 rounded-lg bg-zinc-50 dark:bg-zinc-800/60" />
                <div className="h-12 rounded-lg bg-zinc-50 dark:bg-zinc-800/60" />
                <div className="h-12 rounded-lg bg-zinc-50 dark:bg-zinc-800/60" />
              </div>
            </div>

            <div className="border-t border-black/5 px-4 py-2.5 text-xs font-medium text-zinc-400 dark:border-white/10 dark:text-zinc-500">
              {name}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default async function Marquee() {
  const projects = await getProjects();
  const items = [...projects, ...projects];

  return (
    <div className="relative w-full overflow-hidden pb-16 pt-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-white to-transparent dark:from-black sm:block sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-white to-transparent dark:from-black sm:block sm:w-40" />

      <div className="flex w-max animate-marquee gap-5">
        {items.map((project, i) => (
          <DesignCard key={`${project.name}-${i}`} {...project} />
        ))}
      </div>
    </div>
  );
}

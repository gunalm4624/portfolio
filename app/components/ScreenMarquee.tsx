import Image from "next/image";

export default function ScreenMarquee({ srcs, alt }: { srcs: string[]; alt: string }) {
  const set = srcs.map((src, i) => (
    <Image
      key={src}
      src={src}
      alt={`${alt} screen ${i + 1}`}
      width={1000}
      height={2075}
      sizes="260px"
      className="h-auto w-[200px] shrink-0 sm:w-[260px]"
    />
  ));
  return (
    <div className="marquee-mask overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="marquee-track flex w-max">
        <div className="flex gap-6 pr-6">{set}</div>
        <div className="flex gap-6 pr-6" aria-hidden="true">{set}</div>
      </div>
    </div>
  );
}

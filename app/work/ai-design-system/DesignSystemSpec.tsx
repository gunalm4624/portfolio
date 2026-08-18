"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import SpecCatalog from "./spec/SpecCatalog";
import { navGroups } from "./spec/tokens";

function SpecNav({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="mb-8 flex items-center">
          <img
            src="/work/lumis-chatbot/mareana-logo-black.png"
            alt="Mareana"
            className="h-5 w-auto"
          />
        </div>

        <nav className="flex flex-col gap-5">
          {navGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-2 text-[11px] font-medium tracking-[0.1em] text-[#71717a] uppercase">
                {group.title}
              </p>
              <ul>
                {group.items.map((item) => (
                  <li key={item.id} className="mb-0.5">
                    <button
                      type="button"
                      onClick={() => onSelect(item.id)}
                      className={cn(
                        "w-full cursor-pointer rounded-[6px] px-3 py-1.5 text-left text-[13px] text-[#3f3f46] transition-all duration-150",
                        activeId === item.id
                          ? "bg-white text-[#09090b] shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                          : "hover:bg-white hover:text-[#09090b] hover:shadow-[0_1px_3px_rgba(0,0,0,0.05)]",
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <p className="border-t border-[#e4e4e7] pt-4 text-xs text-[#71717a]">
        DESIGN.md · v1.0.0
      </p>
    </div>
  );
}

export default function DesignSystemSpec({
  heightClassName = "h-[min(70vh,480px)] sm:h-[720px] lg:h-[860px] xl:h-[960px]",
  frameClassName,
}: {
  heightClassName?: string;
  frameClassName?: string;
}) {
  const [activeId, setActiveId] = useState("overview");
  const paneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    paneRef.current?.scrollTo({ top: 0 });
  }, [activeId]);

  return (
    <div
      className={cn(
        "flex min-h-0 overflow-hidden border border-[#e4e4e7] bg-white text-[#09090b]",
        heightClassName,
        frameClassName,
      )}
      style={{
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontFeatureSettings: '"ss01" on, "tnum" on',
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <aside className="hidden h-full w-[280px] shrink-0 overflow-y-auto border-r border-[#e4e4e7] bg-[#f4f4f5] p-4 md:block">
        <SpecNav activeId={activeId} onSelect={setActiveId} />
      </aside>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-white">
        <div className="flex shrink-0 gap-2 overflow-x-auto border-b border-[#e4e4e7] px-4 py-3 md:hidden">
          {navGroups.flatMap((group) => group.items).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={cn(
                "shrink-0 cursor-pointer rounded-full px-3 py-1.5 text-xs",
                activeId === item.id ? "bg-[#09090b] text-white" : "bg-[#f4f4f5] text-[#3f3f46]",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div ref={paneRef} className="min-h-0 flex-1 overflow-y-auto px-6 py-10 sm:px-8 lg:px-12">
          <div className="max-w-[1100px]">
            <SpecCatalog activeId={activeId} />
          </div>
        </div>
      </div>
    </div>
  );
}

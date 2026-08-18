"use client";

import { useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import {
  AlertCircle,
  Bell,
  Check,
  ChevronDown,
  ChevronRight,
  FileText,
  Info,
  LayoutDashboard,
  LoaderCircle,
  Search,
  Settings,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { colorGroups, radiusScale, spaceScale, typeRows } from "./tokens";

function Section({
  id,
  activeId,
  title,
  subtitle,
  children,
}: {
  id: string;
  activeId: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  if (id !== activeId) return null;
  return (
    <section>
      <h2 className="mb-3 text-[32px] leading-[1.1] font-light tracking-[-0.64px]">{title}</h2>
      <p className="mb-8 max-w-[720px] text-base font-light text-[#71717a]">{subtitle}</p>
      {children}
    </section>
  );
}

function Label({ children }: { children: string }) {
  return (
    <p className="mb-3 text-[11px] font-medium tracking-[0.1em] text-[#71717a] uppercase">{children}</p>
  );
}

function Pill({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-1 text-[10px] tracking-[0.1px] uppercase",
        dark ? "bg-[#27272a] text-white" : "bg-[#e4e4e7] text-[#09090b]",
      )}
    >
      {children}
    </span>
  );
}

function Btn({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary" | "inverse" | "ghost" | "icon";
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "min-h-8 px-3 py-1.5 text-xs",
    md: "min-h-10 px-4 py-2 text-[15px]",
    lg: "min-h-11 px-5 py-2.5 text-[15px]",
  };
  const variants = {
    primary: "bg-[#09090b] text-white hover:bg-[#27272a]",
    secondary: "border border-[#d4d4d8] bg-white text-[#09090b] hover:border-[#09090b] hover:bg-[#f4f4f5]",
    tertiary: "bg-transparent text-[#09090b] hover:bg-[#f4f4f5]",
    inverse: "bg-white text-[#09090b] hover:bg-[#f4f4f5]",
    ghost: "text-[#71717a] hover:bg-[#f4f4f5] hover:text-[#09090b]",
    icon: "size-10 px-0 text-[#09090b] hover:bg-[#f4f4f5]",
  };
  return (
    <button
      type="button"
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-40",
        sizes[size],
        variants[variant],
        variant === "icon" && "size-10 p-0",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default function SpecCatalog({ activeId }: { activeId: string }) {
  const [tab, setTab] = useState<"monthly" | "annual">("annual");
  const [on, setOn] = useState(true);
  const [dialog, setDialog] = useState(false);
  const [page, setPage] = useState(2);

  return (
    <>
      {activeId === "overview" ? (
        <>
          <section className="relative overflow-hidden rounded-[12px] bg-[linear-gradient(135deg,#000_0%,#27272a_40%,#71717a_70%,#f4f4f5_100%)] px-8 py-16 text-white">
            <p className="mb-4 text-[11px] font-medium tracking-[0.1em] text-white/60 uppercase">
              DESIGN.md · v1.0.0 · alpha
            </p>
            <h1 className="mb-4 text-[40px] leading-[1.05] font-light tracking-[-1.2px] sm:text-[48px]">
              AI Design System
            </h1>
            <p className="max-w-[620px] text-base leading-[2.0] font-light opacity-90">
              A complete product design system — not a color sheet. Tokens, type, space, elevation,
              motion, components, patterns, accessibility, and critique live in one markdown spec so
              models and developers stay on the design track from layout planning to review.
            </p>
          </section>

          <div className="mt-6 grid gap-3 rounded-[12px] border border-[#e4e4e7] bg-[#f4f4f5] p-5 text-[13px] font-light leading-[1.6] text-[#3f3f46] sm:grid-cols-3">
            <p>
              <span className="font-medium text-[#09090b]">Surface ladder, not hue.</span> Hierarchy
              is canvas → soft → subtle → dark card. No second chromatic accent.
            </p>
            <p>
              <span className="font-medium text-[#09090b]">Display at 300.</span> Negative tracking
              on headlines; tabular figures on money, IDs, and time.
            </p>
            <p>
              <span className="font-medium text-[#09090b]">Pills for actions.</span> Buttons and
              status are 9999px. Cards are 12px. Product shells are 16px.
            </p>
          </div>
        </>
      ) : null}

      <Section
        activeId={activeId}
        id="setup"
        title="Setup & usage"
        subtitle="Attach DESIGN.md once. Then every tool — Claude, Gemini, ChatGPT, Cursor, Antigravity — generates and critiques against the spec instead of inventing a look."
      >
        <div className="mb-8 rounded-[12px] border border-[#e4e4e7] bg-[#f4f4f5] p-5">
          <Label>Shared prompt</Label>
          <p className="mb-3 text-sm font-light leading-[1.7] text-[#3f3f46]">
            Use this after the file is in context. Name components by token (`button-primary`,{" "}
            <span className="font-mono text-xs">text-input-focused</span>
            ).
          </p>
          <pre className="overflow-x-auto rounded-[8px] border border-[#e4e4e7] bg-white p-4 text-[13px] leading-[1.7] font-light whitespace-pre-wrap text-[#09090b]">
            {`You are implementing UI against DESIGN.md. It is the only visual source of truth.

Rules:
- Plan the surface lift before placing components.
- Use existing component tokens. Do not invent new colors or radii.
- Critique the result against Do / Don't before you finish.
- If something is missing, add a Known gap — do not one-off a style.`}
          </pre>
        </div>

        <div className="flex flex-col gap-4">
          {[
            {
              name: "Claude",
              hint: "Projects · Claude Code",
              steps: [
                "Upload DESIGN.md to a Claude Project as knowledge, or drop it in the repo next to CLAUDE.md / AGENTS.md.",
                "In project instructions: “Always load DESIGN.md before any UI or layout work.”",
                "In Claude Code, point the agent at the file: “Read DESIGN.md, then build this screen.”",
              ],
            },
            {
              name: "Gemini",
              hint: "Gems · AI Studio",
              steps: [
                "Create a Gem and attach DESIGN.md as knowledge, or pin the file in the chat.",
                "Gem instructions: “You design and review UI only against DESIGN.md. Never introduce a second accent.”",
                "For one-off work, attach DESIGN.md to the prompt and ask it to plan the layout first.",
              ],
            },
            {
              name: "ChatGPT",
              hint: "Custom GPT · Projects",
              steps: [
                "Create a Custom GPT or a Project and upload DESIGN.md.",
                "Instructions: “This file is the design system. Generate and critique screens against it.”",
                "In a normal chat, attach DESIGN.md each session, then paste the shared prompt.",
              ],
            },
            {
              name: "Cursor",
              hint: "Rules · @-mention",
              steps: [
                "Keep DESIGN.md in the repo. Add a rule or AGENTS.md line: “UI work must follow DESIGN.md.”",
                "In Agent chat, @-mention DESIGN.md (and this spec if needed) before asking for a screen.",
                "Ask it to name tokens in the output so the diff stays reviewable.",
              ],
            },
            {
              name: "Antigravity",
              hint: "Agent · project context",
              steps: [
                "Add DESIGN.md to the project so the agent can read it as workspace context.",
                "In agent instructions: “Read DESIGN.md before any UI generation or critique.”",
                "Start tasks with the surface (canvas vs dark shell) and the component tokens to use.",
              ],
            },
          ].map((tool) => (
            <article key={tool.name} className="rounded-[12px] border border-[#e4e4e7] bg-white p-6">
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[22px] font-light tracking-[-0.22px]">{tool.name}</h3>
                <span className="text-[11px] font-medium tracking-[0.1em] text-[#71717a] uppercase">
                  {tool.hint}
                </span>
              </div>
              <ol className="list-decimal space-y-2 pl-5 text-sm leading-[1.7] font-light text-[#3f3f46]">
                {tool.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </Section>

      <Section
        activeId={activeId}
        id="colors"
        title="Color"
        subtitle="Roles, not a palette dump. Ink, surfaces, hairlines, and semantic states named so a generated screen cannot invent a brand color."
      >
        {colorGroups.map((group) => (
          <div key={group.title} className="mb-8">
            <Label>{group.title}</Label>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {group.swatches.map((swatch) => (
                <div key={swatch.token} className="overflow-hidden rounded-[8px] border border-[#e4e4e7] bg-white">
                  <div
                    className="h-[72px] w-full"
                    style={{
                      backgroundColor: swatch.hex,
                      borderBottom: swatch.hex === "#ffffff" ? "1px solid #e4e4e7" : undefined,
                    }}
                  />
                  <div className="p-3">
                    <p className="text-sm font-medium">{swatch.name}</p>
                    <p className="font-mono text-[11px] tabular-nums text-[#71717a]">{swatch.hex}</p>
                    <p className="mt-1 font-mono text-[10px] text-[#a1a1aa]">{swatch.token}</p>
                    <p className="mt-1 text-xs font-light text-[#71717a]">{swatch.use}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section
        activeId={activeId}
        id="typography"
        title="Typography"
        subtitle="One voice from display to caption. System UI / SF Pro Display at 300 for display; 400 for buttons; tabular lining figures for any number a finance user might compare."
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                {["Token", "Render", "Spec"].map((h) => (
                  <th
                    key={h}
                    className="border-b border-[#e4e4e7] px-3 py-3 text-[11px] font-medium tracking-[0.1em] text-[#71717a] uppercase"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {typeRows.map((row) => (
                <tr key={row.token}>
                  <td className="border-b border-[#e4e4e7] px-3 py-4 align-middle font-mono text-xs text-[#71717a]">
                    {row.token}
                  </td>
                  <td className={cn("border-b border-[#e4e4e7] px-3 py-4 align-middle", row.className)}>
                    {row.sample}
                  </td>
                  <td className="border-b border-[#e4e4e7] px-3 py-4 align-middle text-xs tabular-nums text-[#71717a]">
                    {row.spec}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-[8px] border border-[#e4e4e7] p-5">
            <Label>Principles</Label>
            <ul className="list-disc space-y-2 pl-4 text-sm font-light text-[#3f3f46]">
              <li>Display never exceeds weight 300.</li>
              <li>Eyebrow uses positive tracking so it reads as taxonomy, not a headline.</li>
              <li>Mono / tnum only for IDs, money, logs, timestamps.</li>
            </ul>
          </div>
          <div className="rounded-[8px] border border-[#e4e4e7] p-5">
            <Label>Substitutes</Label>
            <p className="text-sm font-light text-[#3f3f46]">
              SF Pro Display → system-ui on Apple. Inter 300/400 if the custom cut is unavailable.
              Geist Mono or SF Mono for tabular / code.
            </p>
          </div>
        </div>
      </Section>

      <Section
        activeId={activeId}
        id="spacing"
        title="Spacing"
        subtitle="4px base. Interior padding: 24px cards, 32px testimonials, 48px CTA banners, 8×14 buttons, 8×12 inputs. Section rhythm is 64–96px, not ad-hoc margin."
      >
        <div className="flex flex-col gap-3">
          {spaceScale.map((item) => (
            <div key={item.token} className="flex items-center gap-4">
              <span className="w-24 shrink-0 font-mono text-xs text-[#71717a]">
                {item.token} · {item.px}px
              </span>
              <div className="h-3 rounded-sm bg-[#09090b]" style={{ width: item.px }} />
            </div>
          ))}
        </div>
      </Section>

      <Section
        activeId={activeId}
        id="radius"
        title="Shape & radius"
        subtitle="Geometry is a contract. Pills are interactive. 12px is content. 16px is a product frame. Never mix a pill button with a sharp 0px input."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {radiusScale.map((item) => (
            <div key={item.token} className="border border-[#e4e4e7] bg-[#f4f4f5] p-4">
              <div
                className="mb-3 h-16 bg-[#09090b]"
                style={{ borderRadius: item.px === 9999 ? 9999 : item.px }}
              />
              <p className="text-sm font-medium">
                {item.token} · {item.px === 9999 ? "9999px" : `${item.px}px`}
              </p>
              <p className="text-xs font-light text-[#71717a]">{item.use}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        activeId={activeId}
        id="elevation"
        title="Elevation"
        subtitle="Depth is a surface ladder plus hairline — not drop shadow. Dark marketing systems resist glow. A faint 1px top highlight is allowed on lifted panels."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "0 Flat", cls: "bg-white", note: "Body, hero type" },
            { name: "1 Hairline", cls: "border border-[#e4e4e7] bg-white", note: "Default card" },
            { name: "2 Soft lift", cls: "border border-[#e4e4e7] bg-[#f4f4f5]", note: "Sidebar, hover" },
            { name: "3 Dark shell", cls: "border border-[#27272a] bg-[#09090b] text-white", note: "Product frame" },
          ].map((level) => (
            <div key={level.name} className={cn("rounded-[12px] p-5", level.cls)}>
              <p className="text-sm font-medium">{level.name}</p>
              <p className="mt-1 text-xs font-light opacity-70">{level.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm font-light text-[#71717a]">
          Focus ring: 2px #09090b at 50% opacity. Never a colored glow.
        </p>
      </Section>

      <Section
        activeId={activeId}
        id="motion"
        title="Motion"
        subtitle="150ms ease for hover/press. 200ms for overlays. No bounce, no spring on data. Skeleton pulse is the only looping motion besides loaders."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-[8px] border border-[#e4e4e7] p-5">
            <p className="text-sm font-medium">Hover / press</p>
            <p className="mt-1 text-xs font-light text-[#71717a]">150ms · color and border only</p>
            <div className="mt-4">
              <Btn>Hover me</Btn>
            </div>
          </div>
          <div className="rounded-[8px] border border-[#e4e4e7] p-5">
            <p className="text-sm font-medium">Overlay</p>
            <p className="mt-1 text-xs font-light text-[#71717a]">200ms fade · no zoom bounce</p>
            <Btn variant="secondary" size="sm">
              Dialog uses this
            </Btn>
          </div>
          <div className="rounded-[8px] border border-[#e4e4e7] p-5">
            <p className="text-sm font-medium">Loading</p>
            <p className="mt-1 text-xs font-light text-[#71717a]">Pulse on skeleton · spin on icon</p>
            <LoaderCircle className="mt-4 animate-spin text-[#09090b]" size={20} />
          </div>
        </div>
      </Section>

      <Section
        activeId={activeId}
        id="iconography"
        title="Iconography"
        subtitle="Stroke icons only, 1.5–2px. Sizes 12 / 16 / 20 / 24. Optical square, never mixed with filled brand marks except the product sparkle."
      >
        <div className="flex flex-wrap items-end gap-6 text-[#09090b]">
          {[12, 16, 20, 24].map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Search size={size} strokeWidth={1.75} />
              <span className="font-mono text-[10px] text-[#71717a]">{size}</span>
            </div>
          ))}
          <Settings size={20} strokeWidth={1.75} />
          <Bell size={20} strokeWidth={1.75} />
          <FileText size={20} strokeWidth={1.75} />
          <LayoutDashboard size={20} strokeWidth={1.75} />
          <Sparkles size={20} strokeWidth={1.75} />
        </div>
      </Section>

      <Section
        activeId={activeId}
        id="layout"
        title="Grid & density"
        subtitle="Max content 1100–1280px. Cards 3-up desktop, 2-up tablet, 1-up mobile. Comfortable density in docs; compact density in data tables and the dark shell."
      >
        <div className="grid grid-cols-12 gap-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-10 rounded-[4px] bg-[#e4e4e7] text-center text-[10px] leading-10 text-[#71717a]">
              {i + 1}
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-[8px] border border-[#e4e4e7] p-5">
            <p className="text-sm font-medium">Comfortable</p>
            <p className="mt-1 text-sm font-light text-[#71717a]">
              Spec pages, empty states, settings. 24px gaps, 16px type.
            </p>
          </div>
          <div className="rounded-[8px] border border-[#e4e4e7] p-5">
            <p className="text-sm font-medium">Compact</p>
            <p className="mt-1 text-sm font-light text-[#71717a]">
              Logs, batch tables, nav. 8–12px gaps, 14px type, tnum.
            </p>
          </div>
        </div>
      </Section>

      <Section
        activeId={activeId}
        id="responsive"
        title="Responsive"
        subtitle="Collapse strategy is specified, not improvised. Type, grids, nav, and tap targets have named breakpoints."
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                {["Name", "Width", "Behavior"].map((h) => (
                  <th
                    key={h}
                    className="border-b border-[#e4e4e7] py-3 text-[11px] font-medium tracking-[0.1em] text-[#71717a] uppercase"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="font-light">
              {[
                ["Desktop XL", "1440", "Default. 3-up cards. Sidebar 280."],
                ["Desktop", "1280", "Content max-width holds."],
                ["Tablet", "1024", "Cards 2-up. Sidebar remains."],
                ["Mobile Lg", "768", "Sidebar → chip nav. Grids 1-up."],
                ["Mobile", "480", "display-xl scales to ~32–40px. Tap ≥44px."],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => (
                    <td key={cell} className="border-b border-[#e4e4e7] py-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        activeId={activeId}
        id="buttons"
        title="Buttons"
        subtitle="Primary, secondary, tertiary, inverse, ghost, icon. Sizes sm / md / lg. Disabled at 40% opacity. Loading replaces the label with a spinner — never both."
      >
        <Label>Variants</Label>
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Btn>Primary</Btn>
          <Btn variant="secondary">Secondary</Btn>
          <Btn variant="tertiary">Tertiary</Btn>
          <div className="rounded-full bg-[#09090b] p-2">
            <Btn variant="inverse" size="sm">
              Inverse
            </Btn>
          </div>
          <Btn variant="ghost">Ghost</Btn>
          <Btn variant="icon">
            <Settings size={16} />
          </Btn>
          <Btn disabled>Disabled</Btn>
          <Btn>
            <LoaderCircle size={14} className="animate-spin" />
            Saving
          </Btn>
        </div>
        <Label>Sizes</Label>
        <div className="flex flex-wrap items-center gap-3">
          <Btn size="sm">Small</Btn>
          <Btn size="md">Medium</Btn>
          <Btn size="lg">Large</Btn>
        </div>
      </Section>

      <Section
        activeId={activeId}
        id="forms"
        title="Inputs & forms"
        subtitle="Default, focus, error, disabled. Label above, helper below. Focus is a 1px ink border — not a colored ring. Error is ink + helper copy, not a red fill."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium">API key</span>
            <input
              defaultValue="sk_live_992184019284"
              className="rounded-[6px] border border-[#d4d4d8] bg-white px-3 py-2 text-[15px] font-light outline-none focus:border-[#09090b]"
            />
            <span className="text-xs font-light text-[#71717a]">Used server-side only.</span>
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium">Search</span>
            <span className="relative">
              <Search size={14} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#71717a]" />
              <input
                placeholder="Search parameters..."
                className="w-full rounded-[6px] border border-[#d4d4d8] bg-white py-2 pr-3 pl-9 text-[15px] font-light outline-none placeholder:text-[#71717a] focus:border-[#09090b]"
              />
            </span>
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium">Workspace name</span>
            <input
              defaultValue=""
              placeholder="Required"
              className="rounded-[6px] border border-[#09090b] bg-white px-3 py-2 text-[15px] font-light outline-none"
            />
            <span className="flex items-center gap-1 text-xs text-[#09090b]">
              <AlertCircle size={12} /> Enter a workspace name to continue.
            </span>
          </label>
          <label className="flex flex-col gap-1.5 text-sm opacity-40">
            <span className="font-medium">Disabled</span>
            <input
              disabled
              defaultValue="Locked by policy"
              className="rounded-[6px] border border-[#d4d4d8] bg-[#f4f4f5] px-3 py-2 text-[15px]"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm md:col-span-2">
            <span className="font-medium">Notes</span>
            <textarea
              rows={3}
              placeholder="Optional context for this batch..."
              className="rounded-[6px] border border-[#d4d4d8] bg-white px-3 py-2 text-[15px] font-light outline-none placeholder:text-[#71717a] focus:border-[#09090b]"
            />
          </label>
        </div>
      </Section>

      <Section
        activeId={activeId}
        id="selection"
        title="Selection"
        subtitle="Tabs, switch, checkbox, radio. Selected = surface lift or ink fill. Never a chromatic check."
      >
        <Label>Segmented tabs</Label>
        <div className="mb-8 inline-flex rounded-full bg-[#f4f4f5] p-1">
          {(["monthly", "annual"] as const).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={cn(
                "min-h-9 cursor-pointer rounded-full px-3.5 text-sm capitalize",
                tab === id ? "bg-white text-[#09090b] shadow-[0_1px_3px_rgba(0,0,0,0.05)]" : "text-[#71717a]",
              )}
            >
              {id}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-8">
          <button
            type="button"
            role="switch"
            aria-checked={on}
            onClick={() => setOn((v) => !v)}
            className="flex cursor-pointer items-center gap-2 text-sm"
          >
            <span
              className={cn(
                "inline-flex h-6 w-10 shrink-0 items-center rounded-full p-0.5 transition-colors",
                on ? "justify-end bg-[#09090b]" : "justify-start bg-[#e4e4e7]",
              )}
            >
              <span className="size-5 shrink-0 rounded-full bg-white shadow-sm" />
            </span>
            Auto-refresh
          </button>
          <label className="flex cursor-pointer items-center gap-2 text-sm">
            <span className="flex size-4 items-center justify-center rounded-[4px] border border-[#09090b] bg-[#09090b] text-white">
              <Check size={10} strokeWidth={3} />
            </span>
            Include archived
          </label>
          <label className="flex cursor-pointer items-center gap-2 text-sm">
            <span className="size-4 rounded-full border border-[#09090b] p-0.5">
              <span className="block size-full rounded-full bg-[#09090b]" />
            </span>
            Site 1
          </label>
        </div>
      </Section>

      <Section
        activeId={activeId}
        id="feedback"
        title="Feedback"
        subtitle="Status pills, toast, banner, empty, loading, progress. Semantic meaning is contrast and copy — not green/red."
      >
        <div className="mb-6 flex flex-wrap gap-2">
          <Pill>Queued</Pill>
          <Pill dark>Succeeded</Pill>
          <Pill>Processing</Pill>
          <span className="inline-flex items-center gap-1 rounded-full border border-[#09090b] px-2 py-1 text-[10px] uppercase">
            <AlertCircle size={10} /> Failed
          </span>
        </div>
        <div className="mb-4 flex items-start gap-3 rounded-[8px] border border-[#e4e4e7] bg-white p-4 text-sm">
          <Info size={16} className="mt-0.5" />
          <div>
            <p className="font-medium">Batch A2291 released</p>
            <p className="font-light text-[#71717a]">CoA is available. 3 sources cited.</p>
          </div>
        </div>
        <div className="mb-6 rounded-[8px] border border-[#e4e4e7] bg-[#f4f4f5] p-8 text-center">
          <FileText className="mx-auto mb-3 text-[#71717a]" size={28} strokeWidth={1.5} />
          <p className="text-sm font-medium">No exceptions this week</p>
          <p className="mt-1 text-sm font-light text-[#71717a]">When QA flags a lot, it will land here.</p>
        </div>
        <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-[#e4e4e7]">
          <div className="h-full w-2/3 rounded-full bg-[#09090b]" />
        </div>
        <p className="text-xs tabular-nums text-[#71717a]">67% · indexing knowledge graph</p>
      </Section>

      <Section
        activeId={activeId}
        id="navigation"
        title="Navigation"
        subtitle="Top bar 56px. Breadcrumbs. Pagination. Links are ink; current page is medium weight, not underlined rainbow."
      >
        <div className="mb-6 flex h-14 items-center justify-between rounded-[8px] border border-[#e4e4e7] bg-white px-4 text-sm">
          <img src="/work/lumis-chatbot/mareana-logo-black.png" alt="Mareana" className="h-5 w-auto" />
          <div className="hidden gap-6 text-[#71717a] sm:flex">
            <span className="text-[#09090b]">Product</span>
            <span>Docs</span>
            <span>Pricing</span>
          </div>
          <div className="flex gap-2">
            <Btn variant="secondary" size="sm">
              Sign in
            </Btn>
            <Btn size="sm">Get started</Btn>
          </div>
        </div>
        <div className="mb-6 flex items-center gap-1 text-sm text-[#71717a]">
          Dashboard <ChevronRight size={14} /> Batch records{" "}
          <ChevronRight size={14} /> <span className="text-[#09090b]">A2291</span>
        </div>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              className={cn(
                "size-8 cursor-pointer rounded-[6px] text-sm",
                page === n ? "bg-[#09090b] text-white" : "text-[#71717a] hover:bg-[#f4f4f5]",
              )}
            >
              {n}
            </button>
          ))}
        </div>
      </Section>

      <Section
        activeId={activeId}
        id="overlay"
        title="Overlay"
        subtitle="Dialog, menu, tooltip. Scrim is obsidian at 40%. Panels are white, 12px radius, 16px padding. Escape and click-out both close."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Btn onClick={() => setDialog(true)} variant="secondary">
            Open dialog
          </Btn>
          <div className="relative">
            <Btn variant="secondary" size="sm">
              Menu <ChevronDown size={14} />
            </Btn>
            <div className="absolute top-full left-0 z-10 mt-2 w-44 rounded-[8px] border border-[#e4e4e7] bg-white py-1 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              {["Duplicate", "Archive", "Export CSV"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="block w-full cursor-pointer px-3 py-2 text-left text-sm hover:bg-[#f4f4f5]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <span className="relative text-sm text-[#71717a]">
            Hover target
            <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-[6px] bg-[#09090b] px-2 py-1 text-[11px] whitespace-nowrap text-white">
              Cite source
            </span>
          </span>
        </div>
        {dialog ? (
          <div className="mt-6 flex items-center justify-center rounded-[12px] bg-[#09090b]/40 p-10">
            <div className="w-full max-w-sm rounded-[12px] border border-[#e4e4e7] bg-white p-6">
              <p className="text-[22px] font-light tracking-[-0.22px]">Release batch?</p>
              <p className="mt-2 text-sm font-light text-[#71717a]">
                This writes a CoA node to the knowledge graph. It cannot be undone from the UI.
              </p>
              <div className="mt-6 flex justify-end gap-2">
                <Btn variant="secondary" size="sm" onClick={() => setDialog(false)}>
                  Cancel
                </Btn>
                <Btn size="sm">Release</Btn>
              </div>
            </div>
          </div>
        ) : null}
      </Section>

      <Section
        activeId={activeId}
        id="data"
        title="Data display"
        subtitle="Cards, pricing, testimonials, changelog, tables. Product screenshots sit in 16px dark or hairline frames and never crop."
      >
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[12px] border border-[#e4e4e7] bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <h3 className="mb-2 text-[22px] font-light tracking-[-0.22px]">Feature card</h3>
            <p className="mb-4 text-sm font-light text-[#71717a]">
              Default surface-1 tile. 24px padding, hairline, 12px radius.
            </p>
            <Btn variant="secondary" size="sm">
              Explore
            </Btn>
          </div>
          <div className="rounded-[12px] border border-[#27272a] bg-[#09090b] p-8 text-white">
            <Pill dark>Recommended</Pill>
            <h3 className="mt-3 mb-1 text-[22px] font-light tracking-[-0.22px]">Featured tier</h3>
            <p className="text-[28px] font-light tabular-nums">$1,200<span className="text-sm text-[#71717a]">/mo</span></p>
            <p className="mt-2 mb-4 text-sm font-light text-[#71717a]">Dark lift for the plan you want chosen.</p>
            <Btn variant="inverse" size="sm">
              Get started
            </Btn>
          </div>
          <div className="rounded-[12px] border border-[#e4e4e7] bg-[#f4f4f5] p-8">
            <p className="text-[18px] leading-[1.5] font-light">
              “The spec kept generated screens on-brand. We stopped restyling after every prompt.”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#09090b] text-xs text-white">
                AM
              </span>
              <div>
                <p className="text-sm font-medium">A. Mehta</p>
                <p className="text-xs text-[#71717a]">QA lead · Site 1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="divide-y divide-[#e4e4e7] border-t border-[#e4e4e7]">
          {[
            ["v1.0.0", "18 Aug 2026", "Initial spec: tokens, components, critique."],
            ["v0.9.0", "02 Aug 2026", "Added dashboard shell and tabular figure rules."],
          ].map((row) => (
            <div key={row[0]} className="flex flex-col gap-1 py-6 sm:flex-row sm:gap-8">
              <span className="w-24 font-mono text-xs text-[#71717a]">{row[0]}</span>
              <span className="w-32 text-sm text-[#71717a]">{row[1]}</span>
              <span className="text-sm font-light">{row[2]}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        activeId={activeId}
        id="chrome"
        title="App chrome"
        subtitle="Marketing is light canvas. Product UI inverts to an obsidian console. Same type, same pills, opposite polarity."
      >
        <div className="overflow-hidden rounded-[16px] border border-[#27272a] bg-[#09090b] text-white">
          <div className="flex items-center justify-between border-b border-[#27272a] px-4 py-3 text-xs text-[#71717a]">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-[#27272a]" />
              <span className="size-2.5 rounded-full bg-[#27272a]" />
              <span className="size-2.5 rounded-full bg-[#27272a]" />
            </div>
            live_transactions_stream.log
          </div>
          <div className="grid md:grid-cols-[200px_1fr]">
            <div className="border-b border-[#27272a] p-4 text-sm md:border-r md:border-b-0">
              <p className="mb-3 text-[11px] tracking-[0.1em] text-[#71717a] uppercase">Workspace</p>
              {["Overview", "Batches", "Exceptions", "Graph"].map((item, i) => (
                <p
                  key={item}
                  className={cn("rounded-[6px] px-2 py-1.5", i === 1 ? "bg-[#18181b] text-white" : "text-[#71717a]")}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="overflow-x-auto p-4">
              <table className="w-full border-collapse text-sm font-light tabular-nums">
                <thead>
                  <tr>
                    {["TRANSACTION ID", "TIMESTAMP", "AMOUNT", "STATUS"].map((h) => (
                      <th key={h} className="border-b border-[#27272a] py-2 text-left font-normal text-[#71717a]">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["tx_891230491", "2026-08-18 12:28:01", "$12,450.00", "Succeeded"],
                    ["tx_891230492", "2026-08-18 12:28:14", "$3,120.50", "Succeeded"],
                    ["tx_891230493", "2026-08-18 12:29:00", "$890.00", "Processing"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      {row.slice(0, 3).map((cell) => (
                        <td key={cell} className="border-b border-[#18181b] py-3">
                          {cell}
                        </td>
                      ))}
                      <td className="border-b border-[#18181b] py-3">
                        <Pill dark>{row[3]}</Pill>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-[12px] border border-[#e4e4e7] bg-[#f4f4f5] px-8 py-10">
          <p className="text-[11px] font-medium tracking-[0.1em] text-[#71717a] uppercase">Footer</p>
          <div className="mt-4 flex flex-wrap justify-between gap-6 text-xs text-[#71717a]">
            <img src="/work/lumis-chatbot/mareana-logo-black.png" alt="Mareana" className="h-5 w-auto" />
            <div className="flex gap-6">
              <span>Product</span>
              <span>Security</span>
              <span>Status</span>
              <span>Legal</span>
            </div>
            <span>© 2026</span>
          </div>
        </div>
      </Section>

      <Section
        activeId={activeId}
        id="content"
        title="Content & voice"
        subtitle="The system includes how words work. Short, specific, operational. No hype. Numbers always tabular."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[8px] border border-t-4 border-[#e4e4e7] border-t-[#09090b] p-5">
            <p className="mb-2 text-sm font-medium">Write</p>
            <p className="text-sm font-light text-[#3f3f46]">
              “Batch #A2291 CoA released. Assay 99.4% against 98.0–102.0%.”
            </p>
          </div>
          <div className="rounded-[8px] border border-t-4 border-[#e4e4e7] border-t-[#71717a] p-5">
            <p className="mb-2 text-sm font-medium">Don&apos;t write</p>
            <p className="text-sm font-light text-[#3f3f46]">
              “Unlock next-gen insights with our AI-powered CoA magic ✨”
            </p>
          </div>
        </div>
      </Section>

      <Section
        activeId={activeId}
        id="a11y"
        title="Accessibility"
        subtitle="Contrast, focus, tap size, and reduced motion are part of the spec — not a later audit."
      >
        <ul className="list-disc space-y-2 pl-4 text-sm font-light text-[#3f3f46]">
          <li>Ink on canvas and white on dark-card both exceed 7:1 for body.</li>
          <li>Mute (#71717a) on white is for meta only — never body copy.</li>
          <li>All actions ≥40px; forms and tabs ≥44px on touch breakpoints.</li>
          <li>Focus visible: 2px ink ring. Do not remove outline.</li>
          <li>Honor prefers-reduced-motion: skip pulse and spin, keep instant state.</li>
          <li>Icon-only buttons require aria-label.</li>
        </ul>
      </Section>

      <Section
        activeId={activeId}
        id="dos-donts"
        title="Do's and don'ts"
        subtitle="Critique rules the model can check. If a generated screen fails these, it does not ship."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[8px] border border-[#e4e4e7] border-t-4 border-t-[#09090b] p-6">
            <p className="mb-3 text-base font-medium">Do</p>
            <ul className="list-disc space-y-2 pl-4 text-sm leading-[1.6] text-[#3f3f46]">
              <li>Plan layout on the surface ladder before placing components.</li>
              <li>Use thin display (300) with negative tracking.</li>
              <li>Enforce tnum for money, metrics, timestamps, IDs.</li>
              <li>Pill-radius actions; 12px cards; 16px product frames.</li>
              <li>Put product UI on the dark shell; docs on light canvas.</li>
              <li>Reference components by token name in prompts.</li>
            </ul>
          </div>
          <div className="rounded-[8px] border border-[#e4e4e7] border-t-4 border-t-[#71717a] p-6">
            <p className="mb-3 text-base font-medium">Don&apos;t</p>
            <ul className="list-disc space-y-2 pl-4 text-sm leading-[1.6] text-[#3f3f46]">
              <li>Do not introduce accent hues (red, blue, purple, green fills).</li>
              <li>Do not bump display weights above 300.</li>
              <li>Do not use sharp rectangles for primary actions.</li>
              <li>Do not drop heavy shadows on dark shells.</li>
              <li>Do not crop product screenshots or invent extra chrome.</li>
              <li>Do not skip error, empty, loading, and disabled states.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        activeId={activeId}
        id="iteration"
        title="Iteration guide"
        subtitle="How a developer or a model should edit the system without fracturing it."
      >
        <ol className="list-decimal space-y-3 pl-5 text-sm font-light text-[#3f3f46]">
          <li>Change one component token at a time. Name it (`button-primary`, `text-input-focused`).</li>
          <li>Pick the surface lift first when adding a section.</li>
          <li>Default new copy to body 15/300. Default numbers to tnum.</li>
          <li>Add variants as new entries — do not overload one component with flags.</li>
          <li>Run critique against Do/Don&apos;t before merging generated UI.</li>
          <li>If a need is not in the spec, add a Known gap rather than inventing a one-off.</li>
        </ol>
      </Section>

      <Section
        activeId={activeId}
        id="gaps"
        title="Known gaps"
        subtitle="A system that pretends to be finished trains models to hallucinate the rest. These are explicitly out of v1.0.0."
      >
        <ul className="list-disc space-y-2 pl-4 text-sm font-light text-[#3f3f46]">
          <li>In-product priority colors (issue tags) are not on the marketing/docs canvas.</li>
          <li>Chart series beyond mono fills — use position and pattern, not hue, until a data-viz addendum.</li>
          <li>Illustration and photography direction is unspecified; prefer product UI frames.</li>
          <li>Localization and RTL mirroring are not yet in the spec.</li>
          <li>Native iOS/Android density is out of scope for this web markdown.</li>
        </ul>
      </Section>
    </>
  );
}

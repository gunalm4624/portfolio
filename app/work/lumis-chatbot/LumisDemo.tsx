"use client";

import {
  ArrowLeft,
  Bell,
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  CircleHelp,
  ClipboardCheck,
  FileBarChart2,
  FileStack,
  FlagTriangleRight,
  GitBranch,
  Inbox,
  Menu,
  Moon,
  Plus,
  Puzzle,
  ScanLine,
  Search,
  Send,
  Settings,
  Sparkle,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from "react";

import { AiLoader } from "@/components/ui/ai-loader";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const lightTheme = {
  "--background": "#f7f8fa",
  "--foreground": "#111827",
  "--card": "#ffffff",
  "--card-foreground": "#111827",
  "--popover": "#ffffff",
  "--popover-foreground": "#111827",
  "--primary": "#111111",
  "--primary-foreground": "#ffffff",
  "--secondary": "#f3f4f6",
  "--secondary-foreground": "#111827",
  "--muted": "#f3f4f6",
  "--muted-foreground": "#6b7280",
  "--accent": "#eeeeee",
  "--accent-foreground": "#111827",
  "--border": "#e5e7eb",
  "--input": "#eceef2",
  "--ring": "#111111",
  "--radius": "8px",
  "--chart-1": "#111111",
  "--chart-2": "#6b7280",
  "--chart-3": "#9ca3af",
} as CSSProperties;

const darkTheme = {
  "--background": "#000000",
  "--foreground": "#f5f5f5",
  "--card": "#0a0a0a",
  "--card-foreground": "#f5f5f5",
  "--popover": "#0a0a0a",
  "--popover-foreground": "#f5f5f5",
  "--primary": "#ffffff",
  "--primary-foreground": "#000000",
  "--secondary": "#111111",
  "--secondary-foreground": "#f5f5f5",
  "--muted": "#111111",
  "--muted-foreground": "#a3a3a3",
  "--accent": "#171717",
  "--accent-foreground": "#f5f5f5",
  "--border": "#1a1a1a",
  "--input": "#111111",
  "--ring": "#ffffff",
  "--radius": "8px",
  "--chart-1": "#f5f5f5",
  "--chart-2": "#a3a3a3",
  "--chart-3": "#737373",
} as CSSProperties;

const navDashboard = [
  { id: "digitize", label: "Paper Digitize", icon: ScanLine },
  { id: "review", label: "Batch Review", icon: ClipboardCheck },
  { id: "genealogy", label: "Batch Genealogy", icon: GitBranch },
  { id: "spc", label: "Charts SPC", icon: FileBarChart2 },
  { id: "lumis", label: "Lumis AI Assistant", icon: Sparkles },
  { id: "records", label: "Batch Records", icon: FileStack },
] as const;

type PageId = "lumis" | "records";

const navTools = [
  { label: "Exceptions", icon: FlagTriangleRight, badge: "5" },
  { label: "Members", icon: Users },
  { label: "Inbox", icon: Inbox },
  { label: "Integrations", icon: Puzzle },
];

const team = [
  { initials: "DJ", color: "bg-[#f4c7b8] text-[#7a3b2a]" },
  { initials: "AM", color: "bg-[#cde3d8] text-[#2d5a45]" },
  { initials: "RK", color: "bg-[#d6d0f5] text-[#4338ca]" },
  { initials: "PS", color: "bg-[#fde68a] text-[#92400e]" },
];

type ChartSeries = { key: string; label: string };
type RecordRow = { cells: string[]; tone?: "ok" | "warn" | "neutral" };

type AnswerAttachment =
  | {
      kind: "chart";
      title: string;
      xKey: string;
      yDomain?: [number, number];
      series: ChartSeries[];
      data: Record<string, string | number>[];
    }
  | { kind: "records"; title: string; columns: string[]; rows: RecordRow[] };

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: { id: string; label: string }[];
  attachments?: AnswerAttachment[];
  confidence?: number;
};

type SourceDoc = {
  id: string;
  label: string;
  batch: string;
  type: string;
  site: string;
  page: string;
  status: "Released" | "In review" | "Open";
  updated: string;
  excerpt: string;
  fields: { label: string; value: string }[];
  body: string[];
};

const sourceDocs: SourceDoc[] = [
  {
    id: "coa-a2291",
    label: "Batch #A2291 · CoA, p.4",
    batch: "A2291",
    type: "Certificate of Analysis",
    site: "Site 1",
    page: "p.4",
    status: "Released",
    updated: "12 Mar 2026",
    excerpt: "Assay 99.4% · dissolution 98.1% at 30 min · no OOS.",
    fields: [
      { label: "Assay", value: "99.4% (98.0–102.0%)" },
      { label: "Dissolution 30 min", value: "98.1% (≥ 80%)" },
      { label: "Impurities", value: "0.12% (≤ 0.5%)" },
      { label: "Water content", value: "1.8% (≤ 3.0%)" },
    ],
    body: [
      "Released CoA for Batch #A2291. All tests are inside specification. This page is the cited source Lumis used for the assay and dissolution answer.",
      "Signed by QC on 12 Mar 2026. Knowledge-graph node: coa_A2291.",
    ],
  },
  {
    id: "kg-coa-a2291",
    label: "Knowledge graph · coa_A2291",
    batch: "A2291",
    type: "Knowledge graph node",
    site: "Site 1",
    page: "coa_A2291",
    status: "Released",
    updated: "12 Mar 2026",
    excerpt: "Linked CoA node with QC worksheet and master batch record edges.",
    fields: [
      { label: "Node", value: "coa_A2291" },
      { label: "Edges", value: "CoA, QC worksheet, MBR Site 1" },
      { label: "Confidence", value: "High · reviewed" },
    ],
    body: [
      "Graph node that grounds the CoA answer. Every cited field resolves back to the released CoA page and the QC worksheet from Site 1.",
    ],
  },
  {
    id: "qc-site1",
    label: "QC worksheet · Site 1",
    batch: "A2291",
    type: "QC worksheet",
    site: "Site 1",
    page: "WS-441",
    status: "Released",
    updated: "11 Mar 2026",
    excerpt: "Raw QC entries that fed the released CoA for Batch #A2291.",
    fields: [
      { label: "Worksheet", value: "WS-441" },
      { label: "Analyst", value: "A. Mehta" },
      { label: "Instrument", value: "HPLC-12" },
    ],
    body: [
      "Site 1 QC worksheet used as a secondary source for assay and impurities. Values match the released CoA on p.4.",
    ],
  },
  {
    id: "dev-a2288",
    label: "Batch #A2288 · Deviation log",
    batch: "A2288",
    type: "Deviation log",
    site: "Site 1",
    page: "DEV-2288",
    status: "In review",
    updated: "10 Mar 2026",
    excerpt: "Temperature excursion within tolerance · pending QA sign-off.",
    fields: [
      { label: "Deviation", value: "DEV-2288" },
      { label: "Type", value: "Temperature excursion" },
      { label: "Owner", value: "A. Mehta" },
      { label: "Status", value: "Pending QA" },
    ],
    body: [
      "Chamber temperature briefly exceeded the set point during hold. Recorded max was within the validated excursion window. QA sign-off is still open.",
    ],
  },
  {
    id: "br-a2305",
    label: "Batch #A2305 · Batch record, p.12",
    batch: "A2305",
    type: "Batch record",
    site: "Site 2",
    page: "p.12",
    status: "Open",
    updated: "09 Mar 2026",
    excerpt: "Missing signature on the compounding page.",
    fields: [
      { label: "Page", value: "12 · Compounding" },
      { label: "Issue", value: "Missing signature" },
      { label: "Owner", value: "P. Shah" },
    ],
    body: [
      "Page 12 of the batch record is missing the operator signature for the compounding step. Exception remains open until the page is completed.",
    ],
  },
  {
    id: "exc-queue",
    label: "Exceptions queue · this week",
    batch: "—",
    type: "Exceptions queue",
    site: "All sites",
    page: "Queue",
    status: "Open",
    updated: "12 Mar 2026",
    excerpt: "Two open, one closed this week.",
    fields: [
      { label: "Open", value: "2" },
      { label: "Closed", value: "1" },
      { label: "Peak day", value: "Wednesday · 5 opened" },
    ],
    body: [
      "Weekly exceptions queue Lumis summarized. Open items: DEV-2288 (temp excursion) and A2305 missing signature. A2260 label mismatch was closed.",
    ],
  },
  {
    id: "mbr-site1",
    label: "Site 1 · Master batch record",
    batch: "MBR",
    type: "Master batch record",
    site: "Site 1",
    page: "Specs",
    status: "Released",
    updated: "02 Mar 2026",
    excerpt: "Assay 98.0–102.0% · dissolution ≥ 80% at 30 min.",
    fields: [
      { label: "Assay", value: "98.0–102.0%" },
      { label: "Dissolution", value: "≥ 80% at 30 min" },
      { label: "Impurities", value: "≤ 0.5%" },
    ],
    body: [
      "Site 1 master batch record. Release specs match Site 2. This is the cited source for the spec-alignment answer.",
    ],
  },
  {
    id: "mbr-site2",
    label: "Site 2 · Master batch record",
    batch: "MBR",
    type: "Master batch record",
    site: "Site 2",
    page: "Specs",
    status: "Released",
    updated: "02 Mar 2026",
    excerpt: "Same assay and dissolution limits as Site 1.",
    fields: [
      { label: "Assay", value: "98.0–102.0%" },
      { label: "Dissolution", value: "≥ 80% at 30 min" },
      { label: "Impurities", value: "≤ 0.5%" },
    ],
    body: [
      "Site 2 master batch record. No site-specific deviations versus Site 1 on the compared attributes.",
    ],
  },
  {
    id: "kg-spec",
    label: "Knowledge graph · spec_alignment",
    batch: "MBR",
    type: "Knowledge graph node",
    site: "All sites",
    page: "spec_alignment",
    status: "Released",
    updated: "02 Mar 2026",
    excerpt: "Alignment node linking Site 1 and Site 2 master records.",
    fields: [
      { label: "Node", value: "spec_alignment" },
      { label: "Linked", value: "MBR Site 1 · MBR Site 2" },
    ],
    body: [
      "Graph node used to compare release specs across sites. Both master records resolve to the same assay and dissolution limits.",
    ],
  },
];

function findSource(id: string) {
  return sourceDocs.find((doc) => doc.id === id);
}

type UseCaseId = "coa" | "exceptions" | "sites";

const useCases: { id: UseCaseId; label: string; prompt: string; icon: typeof FileStack }[] = [
  {
    id: "coa",
    label: "CoA for Batch #A2291",
    prompt: "Show me the CoA for Batch #A2291",
    icon: FileStack,
  },
  {
    id: "exceptions",
    label: "Open exceptions this week",
    prompt: "Any exceptions flagged this week?",
    icon: FlagTriangleRight,
  },
  {
    id: "sites",
    label: "Compare specs across sites",
    prompt: "Compare release specs across two sites",
    icon: FileBarChart2,
  },
];

const responses: Record<
  UseCaseId,
  { keywords: string[]; content: string; sources: { id: string; label: string }[]; attachments: AnswerAttachment[]; confidence: number }
> = {
  coa: {
    keywords: ["coa", "certificate", "a2291"],
    content:
      "Batch #A2291 has a released Certificate of Analysis. Assay is 99.4% against 98.0–102.0%, dissolution 98.1% at 30 min, no OOS. Here's the cited CoA table and assay history for the last eight lots.",
    sources: [
      { id: "coa-a2291", label: "Batch #A2291 · CoA, p.4" },
      { id: "kg-coa-a2291", label: "Knowledge graph · coa_A2291" },
      { id: "qc-site1", label: "QC worksheet · Site 1" },
    ],
    confidence: 97,
    attachments: [
      {
        kind: "records",
        title: "Certificate of Analysis · Batch #A2291",
        columns: ["Test", "Result", "Spec", "Status"],
        rows: [
          { cells: ["Assay", "99.4%", "98.0–102.0%", "Pass"], tone: "ok" },
          { cells: ["Dissolution 30 min", "98.1%", "≥ 80%", "Pass"], tone: "ok" },
          { cells: ["Impurities", "0.12%", "≤ 0.5%", "Pass"], tone: "ok" },
          { cells: ["Water content", "1.8%", "≤ 3.0%", "Pass"], tone: "ok" },
        ],
      },
      {
        kind: "chart",
        title: "Assay % · last 8 lots",
        xKey: "lot",
        yDomain: [97, 103],
        series: [
          { key: "assay", label: "Assay" },
          { key: "low", label: "Low spec" },
          { key: "high", label: "High spec" },
        ],
        data: [
          { lot: "A2260", assay: 98.2, low: 98, high: 102 },
          { lot: "A2268", assay: 100.8, low: 98, high: 102 },
          { lot: "A2274", assay: 99.1, low: 98, high: 102 },
          { lot: "A2280", assay: 101.4, low: 98, high: 102 },
          { lot: "A2284", assay: 98.4, low: 98, high: 102 },
          { lot: "A2288", assay: 100.2, low: 98, high: 102 },
          { lot: "A2290", assay: 99.0, low: 98, high: 102 },
          { lot: "A2291", assay: 99.4, low: 98, high: 102 },
        ],
      },
    ],
  },
  exceptions: {
    keywords: ["exception", "flag"],
    content:
      "Two exceptions are still open this week: a temperature excursion on Batch #A2288 (pending QA) and a missing signature page on Batch #A2305. Volume peaked mid-week at 5 new flags, then dropped after QA cleared the label mismatch on #A2260.",
    sources: [
      { id: "dev-a2288", label: "Batch #A2288 · Deviation log" },
      { id: "br-a2305", label: "Batch #A2305 · Batch record, p.12" },
      { id: "exc-queue", label: "Exceptions queue · this week" },
    ],
    confidence: 91,
    attachments: [
      {
        kind: "records",
        title: "Open exceptions · this week",
        columns: ["Batch", "Type", "Owner", "Status"],
        rows: [
          { cells: ["#A2288", "Temp. excursion", "A. Mehta", "Pending QA"], tone: "warn" },
          { cells: ["#A2305", "Missing signature", "P. Shah", "Open"], tone: "warn" },
          { cells: ["#A2260", "Label mismatch", "R. Kumar", "Closed"], tone: "ok" },
        ],
      },
      {
        kind: "chart",
        title: "Exceptions opened · last 7 days",
        xKey: "day",
        yDomain: [0, 8],
        series: [
          { key: "opened", label: "Opened" },
          { key: "closed", label: "Closed" },
        ],
        data: [
          { day: "Mon", opened: 1, closed: 2 },
          { day: "Tue", opened: 3, closed: 1 },
          { day: "Wed", opened: 5, closed: 2 },
          { day: "Thu", opened: 2, closed: 4 },
          { day: "Fri", opened: 4, closed: 3 },
          { day: "Sat", opened: 1, closed: 1 },
          { day: "Sun", opened: 2, closed: 3 },
        ],
      },
    ],
  },
  sites: {
    keywords: ["compare", "spec", "site"],
    content:
      "Release specs match across Site 1 and Site 2 (assay 98.0–102.0%). Site 1 has been running a bit higher this month; Site 2 dipped to 98.3% on lot A2280 then recovered. No site-specific deviations on file.",
    sources: [
      { id: "mbr-site1", label: "Site 1 · Master batch record" },
      { id: "mbr-site2", label: "Site 2 · Master batch record" },
      { id: "kg-spec", label: "Knowledge graph · spec_alignment" },
    ],
    confidence: 94,
    attachments: [
      {
        kind: "records",
        title: "Release specs · Site 1 vs Site 2",
        columns: ["Attribute", "Site 1", "Site 2", "Aligned"],
        rows: [
          { cells: ["Assay range", "98.0–102.0%", "98.0–102.0%", "Yes"], tone: "ok" },
          { cells: ["Dissolution 30 min", "≥ 80%", "≥ 80%", "Yes"], tone: "ok" },
          { cells: ["Impurities", "≤ 0.5%", "≤ 0.5%", "Yes"], tone: "ok" },
        ],
      },
      {
        kind: "chart",
        title: "Assay % by site · last 8 lots",
        xKey: "lot",
        yDomain: [97, 103],
        series: [
          { key: "site1", label: "Site 1" },
          { key: "site2", label: "Site 2" },
        ],
        data: [
          { lot: "A2260", site1: 98.4, site2: 99.8 },
          { lot: "A2268", site1: 100.1, site2: 98.6 },
          { lot: "A2274", site1: 99.2, site2: 101.2 },
          { lot: "A2280", site1: 101.6, site2: 98.3 },
          { lot: "A2284", site1: 98.8, site2: 99.4 },
          { lot: "A2288", site1: 100.4, site2: 99.0 },
          { lot: "A2290", site1: 99.7, site2: 100.9 },
          { lot: "A2291", site1: 99.4, site2: 99.1 },
        ],
      },
    ],
  },
};

const fallbackContent =
  "I couldn't find a confident match in the knowledge graph for that. Try a use-case chip — a batch CoA, open exceptions, or a site spec compare — so I can cite the source.";

function findResponse(
  input: string,
  useCaseId?: UseCaseId,
): Pick<Message, "content" | "sources" | "attachments" | "confidence"> {
  if (useCaseId) {
    const entry = responses[useCaseId];
    return {
      content: entry.content,
      sources: entry.sources,
      attachments: entry.attachments,
      confidence: entry.confidence,
    };
  }
  const lower = input.toLowerCase();
  const match = (Object.values(responses) as (typeof responses)[UseCaseId][]).find((entry) =>
    entry.keywords.some((word) => lower.includes(word)),
  );
  if (match) {
    return {
      content: match.content,
      sources: match.sources,
      attachments: match.attachments,
      confidence: match.confidence,
    };
  }
  return { content: fallbackContent, confidence: 38 };
}

function SpecChart({ attachment }: { attachment: Extract<AnswerAttachment, { kind: "chart" }> }) {
  const chartConfig = Object.fromEntries(
    attachment.series.map((series, index) => [
      series.key,
      { label: series.label, color: `var(--chart-${index + 1})` },
    ]),
  ) satisfies ChartConfig;

  return (
    <div className="w-full overflow-hidden rounded-[8px] border border-border bg-card p-3">
      <p className="text-[11px] font-semibold tracking-tight">{attachment.title}</p>
      <ChartContainer config={chartConfig} className="mt-2 aspect-auto h-[200px] w-full min-h-[200px]">
        <LineChart
          accessibilityLayer
          data={attachment.data}
          margin={{ left: 8, right: 8, top: 8, bottom: 0 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey={attachment.xKey} tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={32}
            domain={attachment.yDomain ?? ["auto", "auto"]}
            tickMargin={4}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          {attachment.series.map((series) => {
            const isLimit = series.key === "low" || series.key === "high";
            return (
              <Line
                key={series.key}
                dataKey={series.key}
                type="monotone"
                stroke={`var(--color-${series.key})`}
                strokeWidth={isLimit ? 1.5 : 2.5}
                strokeDasharray={isLimit ? "4 4" : undefined}
                dot={isLimit ? false : { r: 3 }}
                activeDot={isLimit ? false : { r: 4 }}
              />
            );
          })}
        </LineChart>
      </ChartContainer>
    </div>
  );
}

function RecordTable({ attachment }: { attachment: Extract<AnswerAttachment, { kind: "records" }> }) {
  const toneClass = {
    ok: "text-[#2f9e62]",
    warn: "text-[#c24141]",
    neutral: "text-foreground",
  } as const;

  return (
    <div className="w-full overflow-hidden rounded-[8px] border border-border bg-muted/40">
      <p className="border-b border-border px-3 py-2 text-[11px] font-semibold tracking-tight">
        {attachment.title}
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] text-left text-[11px]">
          <thead>
            <tr className="text-muted-foreground">
              {attachment.columns.map((column) => (
                <th key={column} className="px-3 py-2 font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {attachment.rows.map((row) => (
              <tr key={row.cells.join("-")} className="border-t border-border bg-card">
                {row.cells.map((cell, index) => (
                  <td
                    key={`${cell}-${index}`}
                    className={`px-3 py-2 ${index === row.cells.length - 1 && row.tone ? toneClass[row.tone] : ""} ${
                      index === row.cells.length - 1 ? "font-semibold" : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function statusClass(status: SourceDoc["status"]) {
  if (status === "Released") return "text-[#2f9e62]";
  if (status === "Open") return "text-[#c24141]";
  return "text-[#b45309]";
}

function BatchRecordsTable({ onOpenSource }: { onOpenSource: (id: string) => void }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6">
        <div className="mb-4">
          <h2 className="text-lg font-semibold tracking-tight">Batch Records</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Open a row to view the source page Lumis cites in answers.
          </p>
        </div>
        <div className="overflow-hidden rounded-[8px] border border-border bg-card">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50 text-xs text-muted-foreground">
                <th className="px-4 py-2.5 font-medium">Batch</th>
                <th className="px-4 py-2.5 font-medium">Document</th>
                <th className="px-4 py-2.5 font-medium">Site</th>
                <th className="px-4 py-2.5 font-medium">Status</th>
                <th className="px-4 py-2.5 font-medium">Updated</th>
              </tr>
            </thead>
            <tbody>
              {sourceDocs.map((doc) => (
                <tr
                  key={doc.id}
                  className="cursor-pointer border-t border-border transition-colors hover:bg-muted/40"
                  onClick={() => onOpenSource(doc.id)}
                >
                  <td className="px-4 py-3 font-mono text-xs">{doc.batch}</td>
                  <td className="px-4 py-3">
                    <p className="font-medium">{doc.type}</p>
                    <p className="text-xs text-muted-foreground">{doc.label}</p>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{doc.site}</td>
                  <td className={`px-4 py-3 text-xs font-semibold ${statusClass(doc.status)}`}>{doc.status}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{doc.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SourcePage({
  sourceId,
  onBack,
}: {
  sourceId: string;
  onBack: () => void;
}) {
  const doc = findSource(sourceId);
  if (!doc) {
    return (
      <div className="px-6 py-8 text-sm text-muted-foreground">
        Source not found.{" "}
        <button type="button" className="underline" onClick={onBack}>
          Back to Batch Records
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={14} />
        Batch Records
      </button>
      <div className="rounded-[8px] border border-border bg-card p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] text-muted-foreground">{doc.label}</p>
            <h2 className="mt-1 text-lg font-semibold tracking-tight">{doc.type}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Batch {doc.batch} · {doc.site} · {doc.page}
            </p>
          </div>
          <span className={`rounded-[8px] bg-muted px-2 py-1 text-xs font-semibold ${statusClass(doc.status)}`}>
            {doc.status}
          </span>
        </div>
        <p className="mt-4 rounded-[8px] bg-muted/60 px-3 py-2 text-sm">{doc.excerpt}</p>
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {doc.fields.map((field) => (
            <div key={field.label} className="rounded-[8px] border border-border px-3 py-2">
              <p className="text-[11px] text-muted-foreground">{field.label}</p>
              <p className="mt-0.5 text-sm font-medium">{field.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
          {doc.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnswerBody({ message }: { message: Message }) {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <p>{message.content}</p>
      {message.attachments?.map((attachment) =>
        attachment.kind === "chart" ? (
          <SpecChart key={attachment.title} attachment={attachment} />
        ) : (
          <RecordTable key={attachment.title} attachment={attachment} />
        ),
      )}
    </div>
  );
}

function SidebarNav({
  onNavigate,
  isDark,
  activePage,
  onSelectPage,
}: {
  onNavigate?: () => void;
  isDark: boolean;
  activePage: PageId;
  onSelectPage: (page: PageId) => void;
}) {
  return (
    <div className="flex h-full flex-col bg-muted px-3 py-4">
      <div className="flex items-center px-2 py-0.5">
        <img
          src={isDark ? "/work/lumis-chatbot/mareana-logo-white.png" : "/work/lumis-chatbot/mareana-logo-black.png"}
          alt="Mareana"
          className="h-5 w-auto"
        />
      </div>

      <button
        type="button"
        className="mt-4 flex w-full items-center justify-between rounded-[8px] bg-card px-3 py-2 text-left text-xs text-muted-foreground shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
      >
        <span className="truncate">qa@merck.com</span>
        <ChevronsUpDown size={14} />
      </button>

      <div className="relative mt-3">
        <Search size={14} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground" />
        <input
          readOnly
          placeholder="Search"
          className="h-9 w-full rounded-[8px] border border-border bg-card pr-8 pl-9 text-xs text-foreground shadow-[0_1px_2px_rgba(16,24,40,0.04)] outline-none placeholder:text-muted-foreground"
        />
        <span className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded-[8px] border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
          /
        </span>
      </div>

      <p className="mt-5 px-2 text-[11px] font-medium text-muted-foreground">Dashboard</p>
      <nav className="mt-1.5 flex flex-col gap-0.5">
        {navDashboard.map((item) => {
          const isActive = item.id === activePage;
          const clickable = item.id === "lumis" || item.id === "records";
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                if (clickable) onSelectPage(item.id);
                onNavigate?.();
              }}
              className={`flex items-center gap-2.5 rounded-[8px] px-2.5 py-2 text-left text-[13px] font-medium transition-colors ${
                isActive
                  ? "bg-card text-foreground shadow-[0_1px_2px_rgba(16,24,40,0.06)] ring-1 ring-foreground/10"
                  : "text-muted-foreground hover:bg-card/70 hover:text-foreground"
              }`}
            >
              <item.icon size={16} className="shrink-0" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <p className="mt-5 px-2 text-[11px] font-medium text-muted-foreground">Tools</p>
      <nav className="mt-1.5 flex flex-col gap-0.5">
        {navTools.map((item) => (
          <button
            key={item.label}
            type="button"
            className="flex items-center gap-2.5 rounded-[8px] px-2.5 py-2 text-left text-[13px] font-medium text-muted-foreground transition-colors hover:bg-card/70 hover:text-foreground"
          >
            <item.icon size={16} className="shrink-0" />
            <span className="flex-1">{item.label}</span>
            {item.badge ? (
              <span className="rounded-[8px] bg-[#ef4444] px-1.5 py-px text-[10px] font-semibold text-white">
                {item.badge}
              </span>
            ) : null}
          </button>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-0.5">
        <button
          type="button"
          className="flex items-center gap-2.5 rounded-[8px] px-2.5 py-2 text-left text-[13px] font-medium text-muted-foreground hover:bg-card/70 hover:text-foreground"
        >
          <CircleHelp size={16} />
          Help Center
        </button>
        <button
          type="button"
          className="flex items-center gap-2.5 rounded-[8px] px-2.5 py-2 text-left text-[13px] font-medium text-muted-foreground hover:bg-card/70 hover:text-foreground"
        >
          <Settings size={16} />
          Settings
        </button>

        <div className="mt-2 flex items-center gap-2.5 rounded-[8px] bg-card p-2.5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
          <img
            src="/work/lumis-chatbot/gunal-m.png"
            alt="Gunal M"
            className="size-8 shrink-0 rounded-[8px] object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold">Gunal M</p>
            <p className="truncate text-[11px] text-muted-foreground">gunal@merck.com</p>
          </div>
          <ChevronDown size={14} className="text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}

const greetingMessage: Message = {
  id: "greeting",
  role: "assistant",
  content:
    "Hi, I'm Lumis. Pick a use case or ask about a batch record, CoA, or exception — I'll answer from the knowledge graph and cite the source, including charts and records.",
};

function seededThread(): Message[] {
  const coa = responses.coa;
  return [
    greetingMessage,
    { id: "preview-user", role: "user", content: useCases[0].prompt },
    {
      id: "preview-assistant",
      role: "assistant",
      content: coa.content,
      sources: coa.sources,
      attachments: coa.attachments,
      confidence: coa.confidence,
    },
  ];
}

export default function LumisDemo({
  heightClassName = "h-[680px] sm:h-[740px] lg:h-[800px]",
  frameClassName,
  seededConversation = false,
}: {
  heightClassName?: string;
  frameClassName?: string;
  seededConversation?: boolean;
}) {
  const [messages, setMessages] = useState<Message[]>(() =>
    seededConversation ? seededThread() : [greetingMessage],
  );
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activePage, setActivePage] = useState<PageId>("lumis");
  const [activeSourceId, setActiveSourceId] = useState<string | null>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);

  useEffect(() => {
    const thread = threadRef.current;
    if (!thread) return;
    thread.scrollTo({ top: thread.scrollHeight, behavior: "smooth" });
  }, [messages, isThinking]);

  const send = (text: string, useCaseId?: UseCaseId) => {
    const trimmed = text.trim();
    if (!trimmed || isThinking) return;

    nextId.current += 1;
    const userMessage: Message = { id: `msg-${nextId.current}`, role: "user", content: trimmed };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsThinking(true);

    const thinkingDelay = 650 + Math.min(trimmed.length * 8, 400);

    window.setTimeout(() => {
      const answer = findResponse(trimmed, useCaseId);
      nextId.current += 1;
      setMessages((current) => [
        ...current,
        {
          id: `msg-${nextId.current}`,
          role: "assistant",
          content: answer.content,
          sources: answer.sources,
          attachments: answer.attachments,
          confidence: answer.confidence,
        },
      ]);
      setIsThinking(false);
    }, thinkingDelay);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    send(input);
  };

  const openSource = (id: string) => {
    setActivePage("records");
    setActiveSourceId(id);
    setMobileNavOpen(false);
  };

  const goToPage = (page: PageId) => {
    setActivePage(page);
    setActiveSourceId(null);
    setMobileNavOpen(false);
  };

  const theme = isDark ? darkTheme : lightTheme;
  const activeSource = activeSourceId ? findSource(activeSourceId) : undefined;

  return (
    <div
      style={theme}
      className="flex h-full min-h-0 cursor-default flex-col text-foreground [&_button]:cursor-pointer [&_button:disabled]:cursor-not-allowed [&_[data-slot=button]]:cursor-pointer [&_[data-slot=button]:disabled]:cursor-not-allowed [&_[data-slot=avatar]]:rounded-[8px] [&_[data-slot=avatar]]:after:rounded-[8px] [&_[data-slot=avatar-fallback]]:rounded-[8px] [&_[data-slot=avatar-group-count]]:rounded-[8px] [&_[data-slot=badge]]:rounded-[8px] [&_[data-slot=button]]:rounded-[8px]"
    >
      <div
        className={cn(
          "flex min-h-0 overflow-hidden rounded-[8px] border border-border bg-background",
          heightClassName,
          frameClassName,
        )}
      >
        <aside className="hidden h-full w-[250px] shrink-0 md:block">
          <SidebarNav isDark={isDark} activePage={activePage} onSelectPage={goToPage} />
        </aside>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-background">
          <header className="flex shrink-0 items-center gap-3 border-b border-border bg-background px-4 py-3 sm:px-6">
            <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
              <SheetTrigger
                render={
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Menu size={16} />
                  </Button>
                }
              />
              <SheetContent
                side="left"
                style={theme}
                className="w-64 border-border bg-muted p-0 text-foreground"
              >
                <SheetTitle className="sr-only">Lumis navigation</SheetTitle>
                <SidebarNav
                  isDark={isDark}
                  activePage={activePage}
                  onSelectPage={goToPage}
                  onNavigate={() => setMobileNavOpen(false)}
                />
              </SheetContent>
            </Sheet>

            <p className="min-w-0 flex-1 truncate text-sm text-muted-foreground">
              Dashboard <span className="mx-1 text-border">/</span>{" "}
              {activePage === "lumis" ? (
                <span className="font-medium text-foreground">Lumis AI</span>
              ) : activeSource ? (
                <>
                  <button type="button" className="hover:text-foreground" onClick={() => goToPage("records")}>
                    Batch Records
                  </button>
                  <span className="mx-1 text-border">/</span>
                  <span className="font-medium text-foreground">{activeSource.type}</span>
                </>
              ) : (
                <span className="font-medium text-foreground">Batch Records</span>
              )}
            </p>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="size-8 rounded-[8px]"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={() => setIsDark((current) => !current)}
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </Button>

            <div className="hidden items-center gap-2 sm:flex">
              <AvatarGroup>
                {team.map((person) => (
                  <Avatar key={person.initials} size="sm">
                    <AvatarFallback className={`${person.color} text-[9px] font-semibold`}>
                      {person.initials}
                    </AvatarFallback>
                  </Avatar>
                ))}
                <AvatarGroupCount className="size-6 rounded-[8px] bg-muted text-[10px] font-semibold">+4</AvatarGroupCount>
              </AvatarGroup>
              <Button variant="outline" size="icon" className="size-8 rounded-[8px]">
                <Settings size={14} />
              </Button>
              <Button variant="outline" size="icon" className="size-8 rounded-[8px]">
                <Bell size={14} />
              </Button>
              <Button className="h-8 rounded-[8px] px-3">
                <Plus size={14} />
                New query
              </Button>
            </div>
          </header>

          {activePage === "records" ? (
            activeSourceId ? (
              <SourcePage sourceId={activeSourceId} onBack={() => setActiveSourceId(null)} />
            ) : (
              <BatchRecordsTable onOpenSource={openSource} />
            )
          ) : (
            <>
          <div
            ref={threadRef}
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain"
          >
            <div className="flex min-h-full flex-col justify-end gap-5 px-4 py-5 sm:px-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-2.5 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  {message.role === "user" ? (
                    <img
                      src="/work/lumis-chatbot/gunal-m.png"
                      alt="Gunal M"
                      className="mt-0.5 size-6 shrink-0 rounded-[6px] object-cover"
                    />
                  ) : (
                    <Avatar size="sm" className="mt-0.5">
                      <AvatarFallback className="bg-gradient-to-br from-[#7c3aed] via-[#ec4899] to-[#22d3ee] text-white">
                        <Sparkle size={13} strokeWidth={2} />
                      </AvatarFallback>
                    </Avatar>
                  )}

                  <div
                    className={`flex max-w-[88%] flex-col gap-2 sm:max-w-[78%] ${
                      message.role === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`rounded-[8px] px-4 py-2.5 text-sm leading-relaxed ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-card text-card-foreground"
                      }`}
                    >
                      {message.role === "assistant" ? <AnswerBody message={message} /> : message.content}
                    </div>

                    {message.role === "assistant" && message.confidence != null && (
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <span>Answer confidence</span>
                        <span
                          className={`font-semibold tabular-nums ${
                            message.confidence >= 95
                              ? "text-[#2f9e62]"
                              : message.confidence >= 80
                                ? "text-[#b45309]"
                                : "text-[#c24141]"
                          }`}
                        >
                          {message.confidence}%
                        </span>
                        <div className="h-1 w-16 overflow-hidden rounded-full bg-muted">
                          <div
                            className={`h-full rounded-full ${
                              message.confidence >= 95
                                ? "bg-[#2f9e62]"
                                : message.confidence >= 80
                                  ? "bg-[#b45309]"
                                  : "bg-[#c24141]"
                            }`}
                            style={{ width: `${message.confidence}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {message.sources && message.sources.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {message.sources.map((source) => (
                          <button
                            key={source.id}
                            type="button"
                            onClick={() => openSource(source.id)}
                            className="inline-flex"
                          >
                            <Badge
                              variant="secondary"
                              className="cursor-pointer gap-0.5 rounded-[8px] pr-1 font-mono text-[10px] font-normal hover:bg-foreground hover:text-background"
                            >
                              {source.label}
                              <ChevronRight size={11} />
                            </Badge>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isThinking && (
                <div className="flex items-start gap-2.5">
                  <Avatar size="sm" className="mt-0.5">
                    <AvatarFallback className="bg-gradient-to-br from-[#7c3aed] via-[#ec4899] to-[#22d3ee] text-white">
                      <Sparkle size={13} strokeWidth={2} />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex items-center rounded-[8px] border border-border bg-card px-4 py-3">
                    <AiLoader />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="sticky bottom-0 z-10 shrink-0 border-t border-border bg-background px-4 py-3 sm:px-6">
            <BorderBeam size="md" colorVariant="ocean" theme={isDark ? "dark" : "light"}>
              <form
                onSubmit={handleSubmit}
                className="flex min-h-[108px] flex-col gap-3 rounded-[8px] border border-input bg-card p-3"
              >
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about a batch, CoA, or exception…"
                  className="min-h-8 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <div className="mt-auto flex items-end justify-between gap-2">
                  <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
                    {useCases.map((useCase) => (
                      <button
                        key={useCase.label}
                        type="button"
                        onClick={(event) => {
                          event.preventDefault();
                          send(useCase.prompt, useCase.id);
                        }}
                        disabled={isThinking}
                        className="inline-flex items-center gap-1.5 rounded-[8px] border border-border bg-muted px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground disabled:opacity-50"
                      >
                        <useCase.icon size={11} />
                        {useCase.label}
                      </button>
                    ))}
                  </div>
                  <Button
                    type="submit"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-[8px]"
                    disabled={!input.trim() || isThinking}
                  >
                    <Send size={16} />
                  </Button>
                </div>
              </form>
            </BorderBeam>
          </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export const navGroups = [
  {
    title: "Foundations",
    items: [
      { id: "overview", label: "Overview" },
      { id: "setup", label: "Setup & usage" },
      { id: "colors", label: "Color" },
      { id: "typography", label: "Typography" },
      { id: "spacing", label: "Spacing" },
      { id: "radius", label: "Shape & radius" },
      { id: "elevation", label: "Elevation" },
      { id: "motion", label: "Motion" },
      { id: "iconography", label: "Iconography" },
    ],
  },
  {
    title: "Layout",
    items: [
      { id: "layout", label: "Grid & density" },
      { id: "responsive", label: "Responsive" },
    ],
  },
  {
    title: "Components",
    items: [
      { id: "buttons", label: "Buttons" },
      { id: "forms", label: "Inputs & forms" },
      { id: "selection", label: "Selection" },
      { id: "feedback", label: "Feedback" },
      { id: "navigation", label: "Navigation" },
      { id: "overlay", label: "Overlay" },
      { id: "data", label: "Data display" },
      { id: "chrome", label: "App chrome" },
    ],
  },
  {
    title: "Patterns",
    items: [
      { id: "content", label: "Content & voice" },
      { id: "a11y", label: "Accessibility" },
    ],
  },
  {
    title: "Guidelines",
    items: [
      { id: "dos-donts", label: "Do's and don'ts" },
      { id: "iteration", label: "Iteration" },
      { id: "gaps", label: "Known gaps" },
    ],
  },
];

export const colorGroups = [
  {
    title: "Brand & ink",
    swatches: [
      { name: "Primary / Ink", token: "colors.primary", hex: "#09090b", use: "CTAs, display ink, dark shells" },
      { name: "On primary", token: "colors.on-primary", hex: "#ffffff", use: "Text on primary" },
      { name: "Primary press", token: "colors.primary-press", hex: "#27272a", use: "Pressed / hover primary" },
      { name: "Ink secondary", token: "colors.ink-secondary", hex: "#3f3f46", use: "Body, lists" },
      { name: "Ink mute", token: "colors.ink-mute", hex: "#71717a", use: "Meta, captions, placeholders" },
      { name: "Ink faint", token: "colors.ink-faint", hex: "#a1a1aa", use: "Disabled, footnotes" },
    ],
  },
  {
    title: "Surfaces",
    swatches: [
      { name: "Canvas", token: "colors.canvas", hex: "#ffffff", use: "Default page" },
      { name: "Canvas soft", token: "colors.canvas-soft", hex: "#f4f4f5", use: "Sidebar, bands, hover" },
      { name: "Canvas subtle", token: "colors.canvas-subtle", hex: "#e4e4e7", use: "Chips, wells" },
      { name: "Dark card", token: "colors.dark-card", hex: "#09090b", use: "Product / pricing emphasis" },
      { name: "Dark surface", token: "colors.dark-surface", hex: "#18181b", use: "Nested dark rows" },
      { name: "Dark border", token: "colors.dark-border", hex: "#27272a", use: "Dark hairlines" },
    ],
  },
  {
    title: "Line & semantic (mono)",
    swatches: [
      { name: "Hairline", token: "colors.hairline", hex: "#e4e4e7", use: "Card and table borders" },
      { name: "Hairline input", token: "colors.hairline-input", hex: "#d4d4d8", use: "Default input border" },
      { name: "Overlay", token: "colors.overlay", hex: "#09090b", use: "Modal scrim at 40%" },
      { name: "Success", token: "colors.semantic-success", hex: "#18181b", use: "Succeeded — weight, not hue" },
      { name: "Warning", token: "colors.semantic-warning", hex: "#71717a", use: "Processing / pending" },
      { name: "Critical", token: "colors.semantic-critical", hex: "#09090b", use: "Error — ink + stronger rule" },
    ],
  },
];

export const typeRows = [
  { token: "display-xl", sample: "Enterprise Data", spec: "56px / 300 / 1.05 / -1.6px", className: "text-[40px] leading-[1.05] font-light tracking-[-1.2px] sm:text-[56px] sm:tracking-[-1.6px]" },
  { token: "display-lg", sample: "Automated Workflows", spec: "40px / 300 / 1.10 / -1.2px", className: "text-[40px] leading-[1.1] font-light tracking-[-1.2px]" },
  { token: "display-md", sample: "Release pipeline", spec: "32px / 300 / 1.10 / -0.64px", className: "text-[32px] leading-[1.1] font-light tracking-[-0.64px]" },
  { token: "headline", sample: "Pricing & access", spec: "28px / 300 / 1.20 / -0.6px", className: "text-[28px] leading-[1.2] font-light tracking-[-0.6px]" },
  { token: "card-title", sample: "Standard Card", spec: "22px / 300 / 1.25 / -0.22px", className: "text-[22px] leading-[1.25] font-light tracking-[-0.22px]" },
  { token: "subhead", sample: "Lead paragraph for a section opener.", spec: "20px / 300 / 1.40 / -0.2px", className: "text-[20px] leading-[1.4] font-light tracking-[-0.2px]" },
  { token: "body-lg", sample: "Mareana AI orchestrates complex data pipelines.", spec: "18px / 300 / 1.50 / 0", className: "text-[18px] leading-[1.5] font-light" },
  { token: "body", sample: "Default body for docs, forms, and cards.", spec: "15px / 300 / 1.40 / 0", className: "text-[15px] leading-[1.4] font-light" },
  { token: "body-sm", sample: "Secondary copy, table cells, footer links.", spec: "14px / 300 / 1.50 / 0", className: "text-sm font-light" },
  { token: "caption", sample: "META · STATUS · TIMESTAMP", spec: "12px / 400 / 1.40 / 0", className: "text-xs" },
  { token: "button", sample: "Primary Pill Action", spec: "15px / 400 / 1.20 / 0", className: "text-[15px]" },
  { token: "eyebrow", sample: "SYSTEM", spec: "11px / 500 / 1.30 / 0.1em", className: "text-[11px] font-medium tracking-[0.1em] uppercase text-[#71717a]" },
  { token: "mono / tnum", sample: "$1,248,500.00  ·  tx_891230491", spec: "14px / 300 / tnum / -0.4px", className: "text-sm font-light tracking-[-0.4px] tabular-nums" },
];

export const spaceScale = [
  { token: "xxs", px: 2 },
  { token: "xs", px: 4 },
  { token: "sm", px: 8 },
  { token: "md", px: 12 },
  { token: "lg", px: 16 },
  { token: "xl", px: 24 },
  { token: "xxl", px: 32 },
  { token: "huge", px: 64 },
  { token: "section", px: 96 },
];

export const radiusScale = [
  { token: "xs", px: 4, use: "Badges, chips" },
  { token: "sm", px: 6, use: "Inputs, nav items" },
  { token: "md", px: 8, use: "Cards-in-cards, color tiles" },
  { token: "lg", px: 12, use: "Cards, hero banner" },
  { token: "xl", px: 16, use: "Product / dashboard shells" },
  { token: "pill", px: 9999, use: "Buttons, tabs, status" },
];

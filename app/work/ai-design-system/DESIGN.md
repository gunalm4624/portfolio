---
version: 1.0.0
name: Mareana-AI-Design-System
description: "A product design system for Mareana AI. Light canvas for documentation and marketing chrome; dark shells for product UI. Editorial type at weight 300 with negative tracking, pill geometry for actions, tabular figures for money and IDs. Hierarchy is a surface ladder."
colors:
  primary: "#09090b"
  on-primary: "#ffffff"
  primary-press: "#27272a"
  ink: "#09090b"
  ink-secondary: "#3f3f46"
  ink-mute: "#71717a"
  ink-faint: "#a1a1aa"
  canvas: "#ffffff"
  canvas-soft: "#f4f4f5"
  canvas-subtle: "#e4e4e7"
  dark-card: "#09090b"
  dark-surface: "#18181b"
  dark-border: "#27272a"
  hairline: "#e4e4e7"
  hairline-input: "#d4d4d8"
  overlay: "#09090b"
  semantic-success: "#18181b"
  semantic-warning: "#71717a"
  semantic-critical: "#09090b"
typography:
  display-xl: { fontSize: 56px, fontWeight: 300, lineHeight: 1.05, letterSpacing: -1.6px }
  display-lg: { fontSize: 40px, fontWeight: 300, lineHeight: 1.10, letterSpacing: -1.2px }
  display-md: { fontSize: 32px, fontWeight: 300, lineHeight: 1.10, letterSpacing: -0.64px }
  headline: { fontSize: 28px, fontWeight: 300, lineHeight: 1.20, letterSpacing: -0.6px }
  card-title: { fontSize: 22px, fontWeight: 300, lineHeight: 1.25, letterSpacing: -0.22px }
  subhead: { fontSize: 20px, fontWeight: 300, lineHeight: 1.40, letterSpacing: -0.2px }
  body-lg: { fontSize: 18px, fontWeight: 300, lineHeight: 1.50 }
  body: { fontSize: 15px, fontWeight: 300, lineHeight: 1.40 }
  body-sm: { fontSize: 14px, fontWeight: 300, lineHeight: 1.50 }
  caption: { fontSize: 12px, fontWeight: 400, lineHeight: 1.40 }
  button: { fontSize: 15px, fontWeight: 400, lineHeight: 1.20 }
  eyebrow: { fontSize: 11px, fontWeight: 500, letterSpacing: 0.1em }
  mono: { fontSize: 14px, fontWeight: 300, fontVariantNumeric: tabular-nums }
rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  huge: 64px
  section: 96px
motion:
  hover: 150ms
  overlay: 200ms
---

# Mareana AI — Design System

Complete product spec for humans and models. Plan layouts, generate UI, and critique output against this file — not against taste.

## Overview

Light `{colors.canvas}` for docs and marketing chrome. Product UI inverts to `{colors.dark-card}`. Hierarchy is a surface ladder (canvas → soft → subtle → dark), not hue. Display type is 300 with negative tracking. Actions are pills. Numbers are tabular.

## Setup & usage

Attach `DESIGN.md` as the only visual source of truth, then use this prompt:

> You are implementing UI against DESIGN.md. Plan the surface lift first. Use existing component tokens. Critique against Do / Don't. If something is missing, add a Known gap.

- **Claude** — Upload to a Project, or keep the file next to `CLAUDE.md` / `AGENTS.md`. Tell it to load DESIGN.md before UI work.
- **Gemini** — Attach to a Gem as knowledge, or pin the file in chat.
- **ChatGPT** — Custom GPT or Project with DESIGN.md uploaded; attach per session otherwise.
- **Cursor** — Repo file + rule/`AGENTS.md`. `@DESIGN.md` in Agent chat before generating a screen.
- **Antigravity** — Add DESIGN.md to project context. Instruct the agent to read it before any UI generation or critique.

## Foundations

See live spec for color roles, type scale, spacing, radius, elevation, motion, and iconography. Semantic states use contrast and copy — never red/green fills on this canvas.

## Layout

4px base. Max content ~1100–1280px. Cards 3 / 2 / 1 across breakpoints. Comfortable density in docs; compact in tables and the dark shell.

## Components

Buttons (primary, secondary, tertiary, inverse, ghost, icon, sizes, disabled, loading), forms (default, focus, error, disabled, search, textarea), selection (tabs, switch, checkbox, radio), feedback (pills, toast, empty, progress), navigation (top bar, breadcrumbs, pagination), overlay (dialog, menu, tooltip), data (cards, pricing, testimonial, changelog, tables), app chrome (sidebar, dashboard shell, footer).

## Patterns

Operational voice. No hype. Accessibility: 7:1 body contrast, ≥44px touch, visible ink focus, reduced-motion.

## Do / Don't

Do: surface ladder first, display 300, tnum on numbers, pills for actions, dark shell for product frames, token names in prompts.

Don't: chromatic accents, display >300, sharp primary buttons, heavy dark shadows, cropped screenshots, missing empty/error/loading.

## Iteration

1. One component token at a time.
2. Pick surface lift before components.
3. New variants are new entries.
4. Critique against Do/Don't before merge.
5. Unknown needs become Known gaps — not one-offs.

## Known gaps

In-product priority hues, multi-series color charts, illustration, RTL, native mobile density.

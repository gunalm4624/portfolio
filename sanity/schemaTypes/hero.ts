import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "headingLine1",
      title: "Heading — line 1",
      type: "string",
      initialValue: "I deliver websites that",
    }),
    defineField({
      name: "headingLine2",
      title: "Heading — line 2",
      type: "string",
      initialValue: "impress, attract and convert",
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "text",
      rows: 3,
      initialValue:
        "UI/UX and web design for pre-seed and seed companies — designed to scale with you as you grow.",
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA button label",
      type: "string",
      initialValue: "Book an intro call",
    }),
  ],
  preview: {
    select: { title: "headingLine1" },
    prepare: ({ title }) => ({ title: title || "Hero" }),
  },
});

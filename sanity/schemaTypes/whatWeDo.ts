import { defineField, defineType } from "sanity";

export default defineType({
  name: "whatWeDo",
  title: "What I Do",
  type: "document",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section label",
      type: "string",
      initialValue: "< what I do >",
    }),
    defineField({
      name: "textBefore",
      title: "Text — before highlight (dim)",
      type: "text",
      rows: 2,
      initialValue: "I'm Gunal, a solo UI/UX and web designer.",
    }),
    defineField({
      name: "textHighlight",
      title: "Text — highlight (white)",
      type: "text",
      rows: 2,
      initialValue: "I design, write, and build your website —",
    }),
    defineField({
      name: "textAfter",
      title: "Text — after highlight (dim)",
      type: "text",
      rows: 2,
      initialValue: "from concept to launch, no handoffs.",
    }),
  ],
  preview: {
    select: { title: "textHighlight" },
    prepare: ({ title }) => ({ title: title || "What I Do" }),
  },
});

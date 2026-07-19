import { defineField, defineType } from "sanity";

export default defineType({
  name: "faqSection",
  title: "FAQ Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section label",
      type: "string",
      initialValue: "< FAQ >",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Answers to your questions",
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "FAQ Section" }),
  },
});

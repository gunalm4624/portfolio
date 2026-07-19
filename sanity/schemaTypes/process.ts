import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "process",
  title: "Process",
  type: "document",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section label",
      type: "string",
      initialValue: "< The Process >",
    }),
    defineField({
      name: "headingLead",
      title: "Heading — lead (bold)",
      type: "string",
      initialValue: "My method",
    }),
    defineField({
      name: "headingRest",
      title: "Heading — rest (dim)",
      type: "string",
      initialValue: "is simple and transparent at every step, from zero to live.",
    }),
    defineField({
      name: "phases",
      title: "Phases",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "phase",
          fields: [
            defineField({ name: "phase", title: "Phase name", type: "string", validation: (rule) => rule.required() }),
            defineField({
              name: "items",
              title: "Items",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "item",
                  fields: [
                    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
                    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
                    defineField({ name: "actionLabel", title: "Action button label", type: "string" }),
                    defineField({
                      name: "actionHref",
                      title: "Action button link",
                      description:
                        'Use "cal:your-username/event-slug" to open the Cal.com booking modal, or any normal URL/anchor.',
                      type: "string",
                    }),
                  ],
                  preview: {
                    select: { title: "title", subtitle: "description" },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: { title: "phase", items: "items" },
            prepare: ({ title, items }) => ({
              title,
              subtitle: `${items?.length || 0} item(s)`,
            }),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "headingLead" },
    prepare: ({ title }) => ({ title: title || "Process" }),
  },
});

import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section label",
      type: "string",
      initialValue: "< Let it happen >",
    }),
    defineField({
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "button",
          fields: [
            defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
            defineField({
              name: "href",
              title: "Link",
              description:
                'Use "cal:your-username/event-slug" to open the Cal.com booking modal, or any normal URL/anchor.',
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        }),
      ],
    }),
    defineField({
      name: "copyrightText",
      title: "Copyright text",
      description: 'e.g. "© 2026 gunalm.design. All rights reserved."',
      type: "string",
      initialValue: "© 2026 gunalm.design. All rights reserved.",
    }),
  ],
  preview: {
    select: { title: "sectionLabel" },
    prepare: ({ title }) => ({ title: title || "Contact" }),
  },
});

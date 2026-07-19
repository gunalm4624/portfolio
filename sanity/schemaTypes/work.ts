import { defineField, defineType } from "sanity";

export default defineType({
  name: "work",
  title: "Recent Work",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Project name",
      description: 'The bold lead-in, e.g. "Strida"',
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      description:
        'The rest of the headline, e.g. "smooth and powerful experience when presenting your work in a full-screen format"',
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "liveLink",
      title: "Live link",
      type: "url",
    }),
    defineField({
      name: "pageType",
      title: "Page type",
      description: 'e.g. "Multi Page" or "Single Page"',
      type: "string",
      initialValue: "Multi Page",
    }),
    defineField({
      name: "duration",
      title: "Duration",
      description: 'e.g. "3 Weeks"',
      type: "string",
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "object",
      fields: [
        defineField({ name: "quote", title: "Quote", type: "text", rows: 3 }),
        defineField({ name: "name", title: "Name", type: "string" }),
        defineField({ name: "role", title: "Role", type: "string" }),
        defineField({ name: "company", title: "Company", type: "string" }),
        defineField({
          name: "avatar",
          title: "Avatar",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "rating",
          title: "Rating",
          type: "number",
          initialValue: 5,
          validation: (rule) => rule.min(1).max(5),
        }),
      ],
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "description", media: "coverImage" },
  },
});

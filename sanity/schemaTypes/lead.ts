import { defineField, defineType } from "sanity";

export default defineType({
  name: "lead",
  title: "Lead",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "businessName",
      title: "Business name",
      type: "string",
    }),
    defineField({
      name: "contactNumber",
      title: "Contact number",
      type: "string",
    }),
    defineField({
      name: "service",
      title: "Service needed",
      type: "string",
      options: {
        list: [
          { title: "Web Design & Development", value: "web-design" },
          { title: "UI/UX Product Design", value: "ui-ux" },
          { title: "Branding & Identity", value: "branding" },
          { title: "Consulting", value: "consulting" },
        ],
      },
    }),
    defineField({
      name: "about",
      title: "About their business",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Contacted", value: "contacted" },
          { title: "Qualified", value: "qualified" },
          { title: "Won", value: "won" },
          { title: "Lost", value: "lost" },
        ],
      },
      initialValue: "new",
    }),
    defineField({
      name: "source",
      title: "Source",
      description: 'Where this lead came from, e.g. "contact-form"',
      type: "string",
      initialValue: "contact-form",
      readOnly: true,
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted at",
      type: "datetime",
      readOnly: true,
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "email", status: "status" },
    prepare: ({ title, subtitle, status }) => ({
      title,
      subtitle: status ? `${subtitle} — ${status}` : subtitle,
    }),
  },
});

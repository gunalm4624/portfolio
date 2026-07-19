import { defineField, defineType } from "sanity";

import { BOOKING_HREF } from "../../lib/cal";

export default defineType({
  name: "servicesSection",
  title: "Services Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section label",
      type: "string",
      initialValue: "< Services >",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Ready to jam? Let's connect",
    }),
    defineField({
      name: "subheadingPrefix",
      title: "Subheading — text before email",
      type: "string",
      initialValue: "Book a free discovery session or drop us a line to",
    }),
    defineField({
      name: "email",
      title: "Contact email",
      type: "string",
      initialValue: "hey@gunalm.design",
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA button label",
      type: "string",
      initialValue: "Book a 15-min discovery call",
    }),
    defineField({
      name: "ctaHref",
      title: "CTA button link",
      description:
        'Use "cal:your-username/event-slug" to open the Cal.com booking modal, or any normal URL/anchor.',
      type: "string",
      initialValue: BOOKING_HREF,
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "Services Section" }),
  },
});

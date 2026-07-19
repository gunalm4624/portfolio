import type { StructureResolver } from "sanity/structure";

import { singletonTypes } from "./schemaTypes";

const singletonLabels: Record<string, string> = {
  hero: "Hero",
  whatWeDo: "What I Do",
  process: "Process",
  servicesSection: "Services — Section Header",
  faqSection: "FAQ — Section Header",
  contact: "Contact",
};

const namedCollections = ["lead", "service", "faq", "project", "work"];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Leads")
        .schemaType("lead")
        .child(
          S.documentTypeList("lead")
            .title("Leads")
            .defaultOrdering([{ field: "submittedAt", direction: "desc" }]),
        ),
      S.divider(),
      ...Object.entries(singletonLabels).map(([type, title]) =>
        S.listItem()
          .title(title)
          .id(type)
          .child(S.document().schemaType(type).documentId(type)),
      ),
      S.divider(),
      S.listItem()
        .title("Services")
        .schemaType("service")
        .child(S.documentTypeList("service").title("Services")),
      S.listItem()
        .title("FAQs")
        .schemaType("faq")
        .child(S.documentTypeList("faq").title("FAQs")),
      S.divider(),
      S.listItem()
        .title("Projects (marquee)")
        .schemaType("project")
        .child(S.documentTypeList("project").title("Projects")),
      S.listItem()
        .title("Recent Works")
        .schemaType("work")
        .child(S.documentTypeList("work").title("Recent Works")),
      ...S.documentTypeListItems().filter(
        (item) => !singletonTypes.has(item.getId() ?? "") && !namedCollections.includes(item.getId() ?? ""),
      ),
    ]);

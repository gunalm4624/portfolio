import type { StructureResolver } from "sanity/structure";

import { singletonTypes } from "./schemaTypes";

const singletonLabels: Record<string, string> = {
  faqSection: "FAQ — Section Header",
  contact: "Contact",
};

const namedCollections = ["lead", "faq"];

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
        .title("FAQs")
        .schemaType("faq")
        .child(S.documentTypeList("faq").title("FAQs")),
      ...S.documentTypeListItems().filter(
        (item) => !singletonTypes.has(item.getId() ?? "") && !namedCollections.includes(item.getId() ?? ""),
      ),
    ]);

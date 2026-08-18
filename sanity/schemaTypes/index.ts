import contact from "./contact";
import faq from "./faq";
import faqSection from "./faqSection";
import lead from "./lead";

export const schemaTypes = [lead, faqSection, faq, contact];

export const singletonTypes = new Set(["faqSection", "contact"]);

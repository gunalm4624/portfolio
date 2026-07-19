import contact from "./contact";
import faq from "./faq";
import faqSection from "./faqSection";
import hero from "./hero";
import lead from "./lead";
import process from "./process";
import project from "./project";
import service from "./service";
import servicesSection from "./servicesSection";
import whatWeDo from "./whatWeDo";
import work from "./work";

export const schemaTypes = [
  lead,
  hero,
  whatWeDo,
  process,
  servicesSection,
  service,
  faqSection,
  faq,
  contact,
  project,
  work,
];

export const singletonTypes = new Set([
  "hero",
  "whatWeDo",
  "process",
  "servicesSection",
  "faqSection",
  "contact",
]);

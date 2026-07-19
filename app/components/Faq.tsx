import { getFaqSection, getFaqs } from "../../sanity/lib/queries";
import FaqAnimated from "./FaqAnimated";

export default async function Faq() {
  const [section, faqs] = await Promise.all([getFaqSection(), getFaqs()]);

  return <FaqAnimated section={section} faqs={faqs} />;
}

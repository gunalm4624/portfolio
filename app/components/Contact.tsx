import { getContact } from "../../sanity/lib/queries";
import ContactAnimated from "./ContactAnimated";

export default async function Contact() {
  const content = await getContact();

  return <ContactAnimated content={content} />;
}

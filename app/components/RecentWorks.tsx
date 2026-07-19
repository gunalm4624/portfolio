import { getWorks } from "../../sanity/lib/queries";
import RecentWorksAnimated from "./RecentWorksAnimated";

export default async function RecentWorks() {
  const works = await getWorks();

  if (!works.length) return null;

  return <RecentWorksAnimated works={works} />;
}

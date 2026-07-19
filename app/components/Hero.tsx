import { getHero } from "../../sanity/lib/queries";
import HeroAnimated from "./HeroAnimated";

export default async function Hero() {
  const hero = await getHero();

  return <HeroAnimated hero={hero} />;
}

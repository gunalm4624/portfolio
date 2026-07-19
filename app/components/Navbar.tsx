import { getHero } from "../../sanity/lib/queries";
import NavbarAnimated from "./NavbarAnimated";

export default async function Navbar() {
  const hero = await getHero();

  return <NavbarAnimated hero={hero} />;
}

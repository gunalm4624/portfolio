import Explorations from "./components/Explorations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Works from "./components/Works";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Works />
      <Explorations />
      <Footer />
    </div>
  );
}

import About from "./components/About";
import ContactCta from "./components/ContactCta";
import Explorations from "./components/Explorations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Works from "./components/Works";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Works />
        <About />
        <Services />
        <Explorations />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}

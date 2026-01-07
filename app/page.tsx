import Image from "next/image";
import PortfolioHero from "./hero/page";
import MyWorks from "./my-works/page";
import MyToolkit from "./my-toolkit/page";
import Footer from "@/components/Footer";

export default function Home() {
  // JSON-LD structured data for SEO and AI search engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gunal M",
    "jobTitle": "Senior Product Designer",
    "description": "Freelance web developer and UI/UX designer specializing in product design, web development, and app design",
    "url": "https://gunalm.design",
    "image": "https://gunalm.design/Images/DP.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://www.linkedin.com/in/gunalm",
      "https://www.instagram.com/gunalm",
      "https://www.youtube.com/@gunalm"
    ],
    "knowsAbout": [
      "Web Development",
      "Web Design",
      "UI/UX Design",
      "Product Design",
      "App Design",
      "Freelance Development",
      "User Interface Design",
      "User Experience Design"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Freelance Web Developer & Designer",
      "occupationLocation": {
        "@type": "City",
        "name": "Chennai"
      },
      "skills": [
        "Web Development",
        "UI/UX Design",
        "Product Design",
        "App Design",
        "Frontend Development",
        "User Interface Design"
      ]
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data for AI and Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div>
        <PortfolioHero />
        <MyWorks />
        <MyToolkit />
        <Footer />
      </div>
    </>
  );
}

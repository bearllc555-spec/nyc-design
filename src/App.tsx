import { ContactSection } from "./components/ContactSection";
import { FaqSection } from "./components/FaqSection";
import { Hero } from "./components/Hero";
import { MapSection } from "./components/MapSection";
import { PlaceholderSection } from "./components/PlaceholderSection";
import { SiteFooter } from "./components/SiteFooter";

export default function App() {
  return (
    <>
      <Hero />
      <PlaceholderSection
        id="story"
        title="Your journey, elevated"
        description="New Empire Corp works with ambitious teams from our Lexington Avenue office — combining capital, operating experience, and advisory depth for what comes next."
      />
      <PlaceholderSection
        id="rates"
        title="Clear engagement models"
        description="Every mandate is different. We outline scope, economics, and timeline up front so you know how we partner before you commit."
      />
      <PlaceholderSection
        id="benefits"
        title="Why partner with us"
        description="Move faster with disciplined investing, hands-on building, and senior advisory — anchored in New York and built for operators who execute."
      />
      <FaqSection />
      <ContactSection />
      <MapSection />
      <SiteFooter />
    </>
  );
}

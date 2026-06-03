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
        description="VIP Charters connects discerning travelers with private aviation solutions through Aircraft Services Group at Teterboro."
      />
      <PlaceholderSection
        id="rates"
        title="Transparent charter options"
        description="Request a tailored quote based on aircraft class, routing, and schedule. Our team will outline clear pricing before you commit."
      />
      <PlaceholderSection
        id="benefits"
        title="Why fly private"
        description="Save time, protect privacy, and travel on your schedule with dedicated aircraft and crew from the NYC metro's premier general aviation hub."
      />
      <FaqSection />
      <ContactSection />
      <MapSection />
      <SiteFooter />
    </>
  );
}

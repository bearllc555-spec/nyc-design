import { ApproachSection } from "./components/ApproachSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { ContactSection } from "./components/ContactSection";
import { EngagementsSection } from "./components/EngagementsSection";
import { FaqSection } from "./components/FaqSection";
import { Hero } from "./components/Hero";
import { MapSection } from "./components/MapSection";
import { NeighborhoodSection } from "./components/NeighborhoodSection";
import { SiteFooter } from "./components/SiteFooter";
import { StorySection } from "./components/StorySection";

export default function App() {
  return (
    <>
      <Hero />
      <StorySection />
      <CapabilitiesSection />
      <EngagementsSection />
      <ApproachSection />
      <NeighborhoodSection />
      <FaqSection />
      <ContactSection />
      <MapSection />
      <SiteFooter />
    </>
  );
}

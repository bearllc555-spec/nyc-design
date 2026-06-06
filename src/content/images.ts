/** Local copies of reference photography — skylinedevelopers.com, rosenyc.com */
export type SiteImage = {
  src: string;
  alt: string;
};

export const images = {
  story: {
    exterior: {
      src: "/images/building-exterior.jpg",
      alt: "Modern residential tower exterior with landscaped plaza",
    },
    interior: {
      src: "/images/interior-living.jpg",
      alt: "Bright open living room with kitchen and dining area",
    },
  },
  capabilities: {
    investing: {
      src: "/images/rose-exterior-hero.jpg",
      alt: "Daytime exterior of a mixed-use development",
    },
    building: {
      src: "/images/rose-construction.jpg",
      alt: "Construction team on site at an active development",
    },
    advisory: {
      src: "/images/rose-residential.jpg",
      alt: "Residential building facade and streetscape",
    },
  },
  approach: [
    {
      src: "/images/amenity-roof.jpg",
      alt: "Rooftop terrace with city skyline views",
    },
    {
      src: "/images/amenity-fitness.jpg",
      alt: "Residents' fitness center with modern equipment",
    },
    {
      src: "/images/amenity-lounge.jpg",
      alt: "Resident lounge and playroom with natural light",
    },
    {
      src: "/images/amenity-business.jpg",
      alt: "Conference and business center workspace",
    },
  ],
  neighborhood: {
    street: {
      src: "/images/neighborhood-street.jpg",
      alt: "Tree-lined Manhattan street in the Financial District",
    },
    plaza: {
      src: "/images/rose-court-square.jpg",
      alt: "Courtyard and exterior of a landmark office conversion",
    },
  },
  engagements: [
    {
      src: "/images/unit-studio.jpg",
      alt: "Studio apartment floor plan and layout",
    },
    {
      src: "/images/unit-one-bedroom.jpg",
      alt: "One-bedroom apartment floor plan and layout",
    },
    {
      src: "/images/building-exterior.jpg",
      alt: "Tower exterior at dusk",
    },
    {
      src: "/images/rose-court-square.jpg",
      alt: "Mixed-use building at Court Square",
    },
  ],
} as const satisfies Record<string, unknown>;

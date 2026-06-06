export const story = {
  eyebrow: "About New Empire Corp",
  title: "Advisory & development expertise rooted in New York",
  lead: "From our Lexington Avenue headquarters, New Empire Corp partners with owners, investors, and operators on mandates that demand disciplined capital, hands-on building, and senior advisory judgment.",
  body: [
    "Inspired by the rigor of institutional multifamily development and the clarity of best-in-class rental communities, we bring together acquisitions insight, construction oversight, and asset management discipline — tailored to each engagement.",
    "Whether you are repositioning an existing asset, underwriting a ground-up opportunity, or seeking strategic counsel before you commit capital, our team structures the path from first conversation through execution.",
  ],
  stats: [
    { value: "3", label: "Core disciplines" },
    { value: "NYC", label: "Home market" },
    { value: "Midtown", label: "Lexington Ave HQ" },
  ],
} as const;

export const capabilities = [
  {
    id: "investing",
    title: "Investing",
    subtitle: "Acquisitions & capital strategy",
    description:
      "We identify distinctive opportunities across the NY metro and structure partnerships with clear economics, aligned incentives, and realistic hold horizons — from equity placements to joint ventures.",
    highlights: [
      "Deal sourcing & underwriting",
      "Capital stack advisory",
      "Investor alignment",
    ],
  },
  {
    id: "building",
    title: "Building",
    subtitle: "Construction & development",
    description:
      "Our development team brings together project management, design coordination, and cost discipline — whether ground-up construction, conversion, or major repositioning of an existing asset.",
    highlights: [
      "Pre-development planning",
      "Construction oversight",
      "Office-to-residential conversions",
    ],
  },
  {
    id: "advisory",
    title: "Advisory",
    subtitle: "Asset management & strategy",
    description:
      "We approach every asset as if it were our own — strategic planning, financial modeling, capex guidance, and hold/sell analysis on a medium- to long-term horizon.",
    highlights: [
      "Portfolio strategy",
      "Performance reporting",
      "Revenue optimization",
    ],
  },
] as const;

export const engagements = {
  eyebrow: "Current focus",
  title: "Representative mandates",
  description:
    "Every partnership is different. Below is a sample of the engagement types we are actively evaluating and supporting from our Midtown office.",
  rows: [
    {
      name: "Lexington Mixed-Use",
      type: "Development",
      focus: "Midtown East",
      stage: "Pre-development",
      status: "Active",
    },
    {
      name: "Financial District Repositioning",
      type: "Advisory",
      focus: "Lower Manhattan",
      stage: "Asset management",
      status: "Active",
    },
    {
      name: "Bryant Park Acquisition",
      type: "Investing",
      focus: "Midtown",
      stage: "Underwriting",
      status: "Reviewing",
    },
    {
      name: "Plaza District Conversion",
      type: "Building",
      focus: "Midtown West",
      stage: "Construction",
      status: "Active",
    },
  ],
} as const;

export const approach = {
  eyebrow: "How we partner",
  title: "Built for operators who execute",
  items: [
    {
      title: "Data-driven underwriting",
      description:
        "Market analysis, financial modeling, and scenario planning inform every recommendation before capital is committed.",
    },
    {
      title: "Local contractor network",
      description:
        "Deep relationships across NYC trades, lenders, and service providers keep projects moving on schedule and on budget.",
    },
    {
      title: "Resident-minded design",
      description:
        "We study what matters in great buildings — light, layout, amenities, and neighborhood access — then design to that standard.",
    },
    {
      title: "Transparent reporting",
      description:
        "Clear dashboards, regular investor updates, and documented decision trails for every active mandate.",
    },
  ],
  building: [
    "Strategic planning",
    "Financial oversight",
    "Development supervision",
    "Leasing strategy",
    "Capital advisory",
    "Compliance support",
  ],
} as const;

export const neighborhood = {
  eyebrow: "Neighborhood",
  title: "Midtown East",
  description:
    "Our Lexington Avenue office sits in one of Manhattan's most connected districts — steps from Grand Central, Bryant Park, and the city's premier corporate and residential corridors.",
  transit: [
    { line: "4 · 5 · 6", minutes: "4 min" },
    { line: "7", minutes: "6 min" },
    { line: "S", minutes: "5 min" },
    { line: "Metro-North", minutes: "5 min" },
    { line: "LIRR", minutes: "7 min" },
  ],
  landmarks: [
    "Grand Central Terminal",
    "Chrysler Building",
    "Bryant Park",
    "United Nations",
  ],
} as const;

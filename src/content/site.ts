import { business } from "../lib/business";

export const faqs = [
  {
    q: "What does New Empire Corp do?",
    a: "New Empire Corp partners with founders and operators on investing, building, and advisory mandates — from early strategy through execution — with a team based in Midtown Manhattan.",
  },
  {
    q: "How do I get in touch?",
    a: `Call ${business.phone} or use the contact form below. We respond to qualified inquiries with a short discovery call and clear next steps.`,
  },
  {
    q: "Where are you located?",
    a: `Our office is at ${business.addressLine}, in the heart of Midtown East — steps from Grand Central and major transit lines.`,
  },
  {
    q: "Do you work with companies outside New York?",
    a: "Yes. While we are headquartered in NYC, we collaborate with teams nationally and internationally depending on the mandate and stage.",
  },
  {
    q: "What should I prepare for an initial conversation?",
    a: "A concise overview of your business, current priorities, and what you are looking for — capital, operating support, or strategic advisory — helps us make the first meeting productive.",
  },
  {
    q: "How quickly can we schedule a meeting?",
    a: "Most introductory calls are scheduled within a few business days. Share your availability through the form or by phone and we will confirm a time.",
  },
] as const;

export const contactNote =
  "Whether you are exploring a new partnership, capital, or hands-on advisory support, our team at New Empire Corp is ready to hear from you.";

export const footerLinks = [
  { label: "Home", href: "#start" },
  { label: "Story", href: "#story" },
  { label: "Rates", href: "#rates" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

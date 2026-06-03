import { useEffect } from "react";
import { Hero } from "./components/Hero";
import { getSiteUrl } from "./lib/site-url";

export default function App() {
  useEffect(() => {
    const siteUrl = getSiteUrl();
    try {
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute("href", siteUrl);
      } else {
        const link = document.createElement("link");
        link.rel = "canonical";
        link.href = siteUrl;
        document.head.appendChild(link);
      }
    } catch {
      // Ignore invalid URL edge cases in local dev without env.
    }
  }, []);

  return <Hero />;
}

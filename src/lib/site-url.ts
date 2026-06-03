const DEFAULT_SITE_URL = "https://nyc-design.pages.dev";

/** Resolves site URL for metadata; empty CI vars must not break `new URL()`. */
export function getSiteUrl(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL?.trim();
  return fromEnv || DEFAULT_SITE_URL;
}

import { business } from "../lib/business";
import { SITE_VERSION } from "../lib/version";

type VersionLineProps = {
  className?: string;
};

export function VersionLine({ className = "text-white/60" }: VersionLineProps) {
  return (
    <p className={`text-xs font-medium tracking-wide ${className}`.trim()}>
      {business.locationLabel} · {SITE_VERSION}
    </p>
  );
}

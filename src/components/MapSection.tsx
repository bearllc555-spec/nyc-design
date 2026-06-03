import { MapPin, Navigation } from "lucide-react";
import { business, directionsUrl, mapEmbedUrl } from "../lib/business";

export function MapSection() {
  return (
    <section
      id="map"
      className="relative overflow-hidden bg-black"
      aria-label="Location map"
    >
      <div className="map-stage relative min-h-[360px] md:min-h-[440px]">
        <iframe
          title={`${business.name} location`}
          src={mapEmbedUrl}
          className="map-iframe absolute inset-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="map-grid-overlay pointer-events-none absolute inset-0" aria-hidden />
        <div className="map-vignette pointer-events-none absolute inset-0" aria-hidden />
        <div className="map-horizon pointer-events-none absolute inset-0" aria-hidden />

        <div
          className="pointer-events-none absolute left-1/2 top-[46%] z-10 -translate-x-1/2 -translate-y-full"
          aria-hidden
        >
          <span className="map-pin-pulse absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full" />
          <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.55)]">
            <span className="absolute inset-0 rounded-full bg-white/30 blur-sm" />
            <span className="relative h-2 w-2 rounded-full bg-white" />
          </span>
          <span className="mx-auto mt-1 block h-10 w-px bg-gradient-to-b from-white/90 to-transparent" />
        </div>

        <div className="pointer-events-none absolute left-6 top-6 z-10 hidden md:block">
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/45">
            Coordinates
          </p>
          <p className="mt-1 font-mono text-xs text-white/70">40.7587° N · 73.9725° W</p>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col gap-4 p-6 md:flex-row md:items-end md:justify-between md:p-10">
          <div className="liquid-glass max-w-md rounded-2xl border border-white/15 p-6 shadow-2xl">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <MapPin className="h-5 w-5 text-white" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                  Midtown East · NYC
                </p>
                <p className="mt-1 text-lg font-medium tracking-tight text-white md:text-xl">
                  {business.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/75 whitespace-pre-line">
                  {business.address}
                </p>
                <a
                  href={business.phoneHref}
                  className="mt-2 inline-block text-sm text-white/90 transition hover:text-white"
                >
                  {business.phone}
                </a>
              </div>
            </div>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-100 md:self-end"
          >
            <Navigation className="h-4 w-4" aria-hidden />
            Get directions
          </a>
        </div>
      </div>
    </section>
  );
}

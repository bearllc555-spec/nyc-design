import { neighborhood } from "../content/home";
import { images } from "../content/images";
import { directionsUrl } from "../lib/business";
import { SectionImage } from "./SectionImage";

export function NeighborhoodSection() {
  return (
    <section
      id="neighborhood"
      className="border-t border-gray-200 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
              {neighborhood.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl tracking-tight text-[#202A36] md:text-4xl">
              {neighborhood.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {neighborhood.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <SectionImage
                src={images.neighborhood.street.src}
                alt={images.neighborhood.street.alt}
                aspect="wide"
              />
              <SectionImage
                src={images.neighborhood.plaza.src}
                alt={images.neighborhood.plaza.alt}
                aspect="wide"
              />
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Nearby landmarks
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {neighborhood.landmarks.map((landmark) => (
                  <li
                    key={landmark}
                    className="rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700"
                  >
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex text-sm font-semibold text-[#202A36] underline-offset-4 hover:underline"
            >
              Get directions on Google Maps
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-[#f8f9fb] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
              Transit from our office
            </p>
            <ul className="mt-6 space-y-4">
              {neighborhood.transit.map((item) => (
                <li
                  key={item.line}
                  className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                >
                  <span className="font-medium text-[#202A36]">{item.line}</span>
                  <span className="text-sm text-gray-600">{item.minutes}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-gray-500">
              Walking times are approximate from 570 Lexington Avenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

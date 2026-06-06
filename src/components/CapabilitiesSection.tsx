import { capabilities } from "../content/home";
import { images } from "../content/images";
import { SectionImage } from "./SectionImage";

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="border-t border-gray-200 bg-[#f4f5f7] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            Our capabilities
          </p>
          <h2 className="mt-4 text-3xl tracking-tight text-[#202A36] md:text-4xl">
            Investing, building, and advisory — under one roof
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Three disciplines, one partnership model. Each mandate draws on the
            expertise that fits your asset, stage, and timeline.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {capabilities.map((cap) => {
            const image = images.capabilities[cap.id];
            return (
              <article
                key={cap.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <SectionImage
                  src={image.src}
                  alt={image.alt}
                  aspect="video"
                  className="rounded-none"
                />
                <div className="flex flex-1 flex-col p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    {cap.subtitle}
                  </p>
                  <h3 className="mt-3 text-2xl font-medium tracking-tight text-[#202A36]">
                    {cap.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                    {cap.description}
                  </p>
                  <ul className="mt-6 space-y-2 border-t border-gray-100 pt-6">
                    {cap.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-gray-700 before:mr-2 before:text-gray-400 before:content-['—']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { story } from "../content/home";
import { images } from "../content/images";
import { SectionImage } from "./SectionImage";

export function StorySection() {
  return (
    <section id="story" className="border-t border-gray-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            {story.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl tracking-tight text-[#202A36] md:text-5xl">
            {story.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {story.lead}
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <SectionImage
            src={images.story.exterior.src}
            alt={images.story.exterior.alt}
            aspect="wide"
          />
          <SectionImage
            src={images.story.interior.src}
            alt={images.story.interior.alt}
            aspect="wide"
          />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6 text-base leading-relaxed text-gray-600">
            {story.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="rounded-2xl border border-gray-200 bg-[#f8f9fb] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
              At a glance
            </p>
            <dl className="mt-6 grid grid-cols-3 gap-6">
              {story.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-3xl font-light tracking-tight text-[#202A36]">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-600">{stat.label}</dd>
                </div>
              ))}
            </dl>
            <a
              href="#capabilities"
              className="mt-8 inline-flex rounded-full bg-[#202A36] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a2229]"
            >
              Explore our capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

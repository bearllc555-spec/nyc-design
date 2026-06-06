import { approach } from "../content/home";
import { images } from "../content/images";
import { SectionImage } from "./SectionImage";

export function ApproachSection() {
  return (
    <section id="approach" className="border-t border-gray-200 bg-[#202A36] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
            {approach.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl tracking-tight md:text-4xl">
            {approach.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {approach.items.map((item, index) => {
            const image = images.approach[index];
            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <SectionImage
                  src={image.src}
                  alt={image.alt}
                  aspect="wide"
                  className="rounded-none rounded-t-2xl"
                />
                <div className="p-8">
                  <p className="text-xs font-medium text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
            Services across every mandate
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {approach.building.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

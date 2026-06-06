import { engagements } from "../content/home";
import { images } from "../content/images";
import { SectionImage } from "./SectionImage";

export function EngagementsSection() {
  return (
    <section id="engagements" className="border-t border-gray-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            {engagements.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl tracking-tight text-[#202A36] md:text-4xl">
            {engagements.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{engagements.description}</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.engagements.map((image) => (
            <SectionImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              aspect="wide"
            />
          ))}
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-gray-200 bg-[#f8f9fb]">
              <tr>
                <th className="px-6 py-4 font-semibold text-[#202A36]">Mandate</th>
                <th className="px-6 py-4 font-semibold text-[#202A36]">Type</th>
                <th className="px-6 py-4 font-semibold text-[#202A36]">Market</th>
                <th className="px-6 py-4 font-semibold text-[#202A36]">Stage</th>
                <th className="px-6 py-4 font-semibold text-[#202A36]">Status</th>
              </tr>
            </thead>
            <tbody>
              {engagements.rows.map((row, index) => (
                <tr
                  key={row.name}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#fafbfc]"}
                >
                  <td className="px-6 py-5 font-medium text-gray-900">
                    {row.name}
                  </td>
                  <td className="px-6 py-5 text-gray-600">{row.type}</td>
                  <td className="px-6 py-5 text-gray-600">{row.focus}</td>
                  <td className="px-6 py-5 text-gray-600">{row.stage}</td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        row.status === "Active"
                          ? "bg-emerald-50 text-emerald-800"
                          : "bg-amber-50 text-amber-800"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Interested in a similar mandate?{" "}
          <a href="#contact" className="font-medium text-[#202A36] underline-offset-2 hover:underline">
            Start a conversation
          </a>
          .
        </p>
      </div>
    </section>
  );
}

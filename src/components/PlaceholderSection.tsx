type PlaceholderSectionProps = {
  id: string;
  title: string;
  description: string;
};

export function PlaceholderSection({
  id,
  title,
  description,
}: PlaceholderSectionProps) {
  return (
    <section id={id} className="border-t border-gray-200 bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-8 text-center">
        <h2 className="text-3xl tracking-tight text-[#202A36] md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {description}
        </p>
      </div>
    </section>
  );
}

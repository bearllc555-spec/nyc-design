type SectionImageProps = {
  src: string;
  alt: string;
  className?: string;
  aspect?: "video" | "wide" | "portrait";
};

const aspectClasses = {
  video: "aspect-video",
  wide: "aspect-[3/2]",
  portrait: "aspect-[4/5]",
} as const;

export function SectionImage({
  src,
  alt,
  className = "",
  aspect = "video",
}: SectionImageProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-gray-100 ${aspectClasses[aspect]} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

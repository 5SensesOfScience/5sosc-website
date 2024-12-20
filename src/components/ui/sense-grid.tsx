import Highlight from "./highlight"

export default function generateGrid({
  imagesLeft,
  imagesRight,
}: {
  imagesLeft: { src: string; href: string }[];
  imagesRight: { src: string; href: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-[2fr_1fr_1fr]">
      {/* First Column */}
      <div className="grid grid-rows-2 gap-2 md:col-span-1 col-span-3 justify-items-center">
        {imagesLeft.map(({ src, href }, i) => (
          <div
            key={i}
            className="relative w-[70%] h-[90%] rounded-sm overflow-hidden"
            style={{
              aspectRatio: "16 / 9",
            }}
          >
            <Highlight
              title={`Left Image ${i + 1}`}
              image={src}
              href={href}
            />
          </div>
        ))}
      </div>

      {/* Second Column */}
      <div className="grid grid-rows-3 gap-2 hidden md:grid justify-items-start">
        {imagesRight.slice(0, 3).map(({ src, href }, i) => (
          <div
            key={i}
            className="relative w-[80%] h-auto rounded-sm overflow-hidden"
            style={{
              aspectRatio: "16 / 9",
            }}
          >
            <Highlight
              title={`Middle Image ${i + 1}`}
              image={src}
              href={href}
            />
          </div>
        ))}
      </div>

      {/* Third Column */}
      <div className="grid grid-rows-3 gap-2 hidden md:grid justify-items-start">
        {imagesRight.slice(3, 6).map(({ src, href }, i) => (
          <div
            key={i}
            className="relative w-[80%] h-auto rounded-sm overflow-hidden"
            style={{
              aspectRatio: "16 / 9",
            }}
          >
            <Highlight
              title={`Right Image ${i + 1}`}
              image={src}
              href={href}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


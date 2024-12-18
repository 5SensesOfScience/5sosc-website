import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import Image from "next/image";

const senses = [
  {
    name: "see",
    imagesLeft: ["/example.jpg", "/example.jpg"],
    imagesRight: [
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
    ]
  },
  {
    name: "hear",
    imagesLeft: ["/example.jpg", "/example.jpg"],
    imagesRight: [
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
    ]
  },
  {
    name: "smell",
    imagesLeft: ["/example.jpg", "/example.jpg"],
    imagesRight: [
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
    ]
  },
  {
    name: "taste",
    imagesLeft: ["/example.jpg", "/example.jpg"],
    imagesRight: [
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
    ]
  },
  {
    name: "touch",
    imagesLeft: ["/example.jpg", "/example.jpg"],
    imagesRight: [
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
      "/example.jpg",
    ]
  },
];
export default function SensesSection() {
  const t = useTranslations("TextSwitcher");
  return (
    <div className="flex flex-col gap-8">
      {senses.map((sense, index) => (
        <div key={index} className="flex flex-col gap-6">
          {/* Title */}
          <h2 className="text-xl font-fancy text-center md:text-left">
            {t(sense.name) + " " + t("science")}
          </h2>

          {/* Grid of Images */}
          <div
            className="grid gap-4 md:grid-cols-[2fr_1fr_1fr]"
          >
            {/* First Column (2 rows, always visible) */}
            <div className="grid grid-rows-2 gap-2 md:col-span-1 col-span-3 justify-items-center">
              {sense.imagesLeft.map((src, i) => (
                <div
                  key={i}
                  className="relative w-[70%] h-[90%] rounded-sm overflow-hidden"
                  style={{
                    aspectRatio: "16 / 9",
                  }}
                >
                  <Image
                    src={src}
                    alt={`${sense.name} large image ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              ))}
            </div>

            {/* Second Column (3 rows, hidden on small screens) */}
            <div className="grid grid-rows-3 gap-2 hidden md:grid justify-items-start">
              {sense.imagesRight.slice(0, 3).map((src, i) => (
                <div
                  key={i}
                  className="relative w-[80%] h-auto rounded-sm overflow-hidden"
                  style={{
                    aspectRatio: "16 / 9",
                  }}
                >
                  <Image
                    src={src}
                    alt={`${sense.name} middle column image ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              ))}
            </div>

            {/* Third Column (3 rows, hidden on small screens) */}
            <div className="grid grid-rows-3 gap-2 hidden md:grid justify-items-start">
              {sense.imagesRight.slice(3, 6).map((src, i) => (
                <div
                  key={i}
                  className="relative w-[80%] h-auto rounded-sm overflow-hidden"
                  style={{
                    aspectRatio: "16 / 9",
                  }}
                >
                  <Image
                    src={src}
                    alt={`${sense.name} right column image ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* See More Button */}
          <div className="flex justify-end w-full">
            <Link
              href={"/" + sense.name}
              className="text-sm text-blue-400 hover:underline"
            >
              {t("seemore")}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}









/* 
        </Link>
        <Link className="text-xl" href="/hearing">
          Hearing
        </Link>
        <Link className="text-xl" href="/smell">
          Smell
        </Link>
        <Link className="text-xl" href="/taste">
          Taste
        </Link>
        <Link className="text-xl" href="/touch">
          Touch
        </Link>
      </div>
    </div>
  )
}*/

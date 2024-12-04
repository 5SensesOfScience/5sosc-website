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
    <div className="flex flex-col gap-12">
      {senses.map((sense, index) => (
        <div key={index} className="flex flex-col gap-4">
          <h2 className="text-4xl font-fancy text-${sense.name}">{t(sense.name) + " "+ t("science")}</h2>

          <div className="flex w-full gap-8">
            {/* Left big column */}
            <div className="flex flex-col gap-2 flex-[1]">
              {sense.imagesLeft.map((src, i) => (
                <div
                  key={i}
                  className="relative rounded-sm overflow-hidden"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <Image
                    src={src}
                    alt={`${sense.name} large image ${i + 1}`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
              ))}
            </div>

            {/* Right columns */}
            <div className="grid grid-cols-2 gap-0 flex-[1]">
              {sense.imagesRight.map((src, i) => (
                <div
                  key={i}
                  className="relative w-[90%] h-[90%] rounded-sm overflow-hidden"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <Image
                    src={src}
                    alt={`${sense.name} small image ${i + 1}`}
                    layout="fill" 
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* See more Button /// By now i don't have the translations */}
          <div className="flex justify-end w-full">
            <Link
              href={"/" + sense.name}
              className="text-xl text-blue-500 hover:underline"
            >
              See more...
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

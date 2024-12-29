import { useTranslations } from "next-intl"
import SeeMoreButton from "../ui/see-more"
import generateGrid from "../ui/sense-grid";

const senses = [
  {
    name: "see",
    sense: "sight",
    imagesLeft: [{ src: "/example.jpg", href: "/sight" }, { src: "/example.jpg", href: "/sight" }],
    imagesRight: [
      { src: "/example.jpg", href: "/sight" },
      { src: "/example.jpg", href: "/sight" },
      { src: "/example.jpg", href: "/sight" },
      { src: "/example.jpg", href: "/sight" },
      { src: "/example.jpg", href: "/sight" },
      { src: "/example.jpg", href: "/sight" },
    ]
  },
  {
    name: "hear",
    sense: "hearing",
    imagesLeft: [{ src: "/example.jpg", href: "/hearing" }, { src: "/example.jpg", href: "/hearing" }],
    imagesRight: [
      { src: "/example.jpg", href: "/hearing" },
      { src: "/example.jpg", href: "/hearing" },
      { src: "/example.jpg", href: "/hearing" },
      { src: "/example.jpg", href: "/hearing" },
      { src: "/example.jpg", href: "/hearing" },
      { src: "/example.jpg", href: "/hearing" },
    ]
  },
  {
    name: "smell",
    sense: "smell",
    imagesLeft: [{ src: "/example.jpg", href: "/smell" }, { src: "/example.jpg", href: "/smell" }],
    imagesRight: [
      { src: "/example.jpg", href: "/smell" },
      { src: "/example.jpg", href: "/smell" },
      { src: "/example.jpg", href: "/smell" },
      { src: "/example.jpg", href: "/smell" },
      { src: "/example.jpg", href: "/smell" },
      { src: "/example.jpg", href: "/smell" },
    ]
  },
  {
    name: "taste",
    sense: "taste",
    imagesLeft: [{ src: "/example.jpg", href: "/taste" }, { src: "/example.jpg", href: "/taste" }],
    imagesRight: [
      { src: "/example.jpg", href: "/taste" },
      { src: "/example.jpg", href: "/taste" },
      { src: "/example.jpg", href: "/taste" },
      { src: "/example.jpg", href: "/taste" },
      { src: "/example.jpg", href: "/taste" },
      { src: "/example.jpg", href: "/taste" },
    ]
  },
  {
    name: "touch",
    sense: "touch",
    imagesLeft: [{ src: "/example.jpg", href: "/touch" }, { src: "/example.jpg", href: "/touch" }],
    imagesRight: [
      { src: "/example.jpg", href: "/touch" },
      { src: "/example.jpg", href: "/touch" },
      { src: "/example.jpg", href: "/touch" },
      { src: "/example.jpg", href: "/touch" },
      { src: "/example.jpg", href: "/touch" },
      { src: "/example.jpg", href: "/touch" },
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
          <h2 className="text-2xl font-fancy text-center md:text-left">
            <span className={`${"text-"+sense.sense}`}>{t(sense.name)}</span>{" "}
            <span className="text-white">{t("science")}</span>
          </h2>

          {/* Grid of Images */}
          {generateGrid({ imagesLeft: sense.imagesLeft, imagesRight: sense.imagesRight })}

          {/* See More Button */}
          <SeeMoreButton href={"/" + sense.sense} label={t("seemore")} />
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

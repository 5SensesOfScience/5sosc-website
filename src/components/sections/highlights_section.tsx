import { useTranslations } from "next-intl"
import Image from "next/image"

const images = [
  {
    src: "3_keynote_MerceCrosasNavarro.png",
    alt: "Drawing of a scientist giving a talk",
  },
  {
    src: "5_Audrey.png",
    alt: "Drawing of a photographer taking pictures on a scientific conference",
  },
  {
    src: "10_WinonaOliveros.png",
    alt: "Drawing of a scientist explaining a diagram of DNA methylation",
  },
  {
    src: "28_LidiaNeves.png",
    alt: "Drawing of an audience member asking a question to a scientist",
  },
]

export default function HighlightsSection() {
  const t = useTranslations("Highlights")
  return (
    <div className="flex flex-col gap-4">
      <h2 id="highlights" className="text-4xl text-center font-fancy">
        {t("heading")}
      </h2>
      <div className="relative w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div key={index} className="relative w-full h-44">
              <Image
                src={"/preview_pictures/" + image.src}
                alt={image.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

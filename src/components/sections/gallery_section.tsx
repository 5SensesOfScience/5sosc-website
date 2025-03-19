"use client"

import { useTranslations } from "next-intl"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import path from "path"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { ExternalLink } from "lucide-react"
import { Button } from "../ui/button"

interface IGalleryImage {
  src: string
  alt: string
}

const galleryImages: IGalleryImage[] = [
  {
    src: path.join("/gallery", "1.jpg"),
    alt: "A middle-aged man looking at drawings posted on a wall",
  },
  {
    src: path.join("/gallery", "2.jpg"),
    alt: "A young man explaining an experiment to a group of people",
  },
  {
    src: path.join("/gallery", "3.jpg"),
    alt: "2 young women explaining a diagram of the human body to a child",
  },
  {
    src: path.join("/gallery", "4.jpg"),
    alt: "A group of young people smiling at the camera",
  },
  {
    src: path.join("/gallery", "5.jpg"),
    alt: "2 young men sitting at a table with a laptop and some papers",
  },
  {
    src: path.join("/gallery", "6.jpg"),
    alt: "2 men and a woman examining bottles of essential oils",
  },
  {
    src: path.join("/gallery", "7.jpg"),
    alt: "A seated young woman with closed eyes pointing at a man's hand",
  },
  {
    src: path.join("/gallery", "8.jpg"),
    alt: "A woman listening to music on a pair of headphones and a man watching her",
  },
  {
    src: path.join("/gallery", "9.jpg"),
    alt: "A large room with many people sitting on chairs and observing experiments",
  },
  {
    src: path.join("/gallery", "10.jpg"),
    alt: "A little girl pointing at a diagram of a solar system on a screen, and a seated woman next to her",
  },
]

export default function GallerySection() {
  const t = useTranslations("Gallery")

  return (
    <div className="flex flex-col max-w-full pb-6">
      <h2 id="gallery" className="text-4xl font-fancy mb-12 text-center">
        {t("heading")}
      </h2>
      <Carousel
        className="max-w-2xl mx-auto"
        plugins={[Autoplay({ delay: 5000 })]}
        opts={{ loop: true }}
      >
        <CarouselContent className="">
          {galleryImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="max-w-full max-h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={0}
                  height={0}
                  sizes="80vw"
                  className="h-full w-auto mx-auto"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Button variant="link" className="mx-auto mt-4">
        <Link
          href="https://photos.app.goo.gl/gaGXzgdkPj9CM2di7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-row items-center gap-2">
            {t("see_more")} <ExternalLink />
          </div>
        </Link>
      </Button>
    </div>
  )
}

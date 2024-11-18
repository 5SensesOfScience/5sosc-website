import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Highlight({
  title,
  image,
  href,
}: {
  title: string
  image: string
  href: string
}) {
  return (
    <div className="relative w-full aspect-[5/3] rounded-sm">
      <span className="sr-only">{title}</span>
      <Link href={href} passHref className="z-0">
        <Image src={image} alt={title} fill={true} className="z-0 rounded-sm" />
      </Link>
      <div className="absolute w-full h-full opacity-0 hover:opacity-60 bg-background2 transition-opacity duration-300 z-5 cursor-pointer flex flex-col gap-4 items-center justify-center group">
        <span className="font-semibold">{title}</span>
        <ArrowRight />
      </div>
    </div>
  )
}

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Link } from "../../i18n/routing"
import { Post } from "@/lib/server_utils"

export default function Highlight({ post }: { post: Post }) {
  return (
    <div className="relative w-full aspect-[5/3] rounded-sm">
      <span className="sr-only">{post.title}</span>
      <div className="absolute w-full h-full z-0">
        <Image
          src={"/decap_assets/" + post.image}
          alt={post.title}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-auto mx-auto z-0"
        />
      </div>
      <Link
        href={`/${post.sense.toLowerCase()}/${post.key}`}
        className="absolute w-full h-full opacity-0 hover:opacity-60 bg-background2 transition-opacity duration-300 z-5 cursor-pointer flex flex-col gap-4 items-center justify-center group"
      >
        <span className="max-w-[80%] font-semibold text-center">
          {post.title}
        </span>
        <ArrowRight />
      </Link>
    </div>
  )
}

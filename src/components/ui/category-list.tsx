"use client"

import { Link } from "@/i18n/routing"
import Image from "next/image"

export default function CategoryList({
  posts,
  sense,
}: {
  posts: { slug: string; title: string; description: string; image: string }[]
  sense: string
}) {
  return (
    <div className="flex flex-col gap-4">
      {posts.map(
        (post: {
          slug: string
          title: string
          description: string
          image: string
        }) => (
          <Link
            href={`/${sense}/${post.slug}`}
            key={post.slug}
            className="w-full p-2 cursor-pointer hover:bg-background2 transition-all duration-300"
          >
            <div className="w-full h-full flex flex-col-reverse md:flex-row gap-2 items-stretch justify-between">
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-xl">{post.title}</h2>
                <p className="opacity-50">{post.description}</p>
              </div>
              <div className="h-[20vw] max-h-[200px] aspect-[5/3]">
                <Image
                  src={"/decap_assets/" + post.image}
                  alt={post.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-auto mx-auto"
                />
              </div>
            </div>
          </Link>
        )
      )}
    </div>
  )
}

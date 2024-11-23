"use client"

import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function CategoryList({
  posts,
  sense,
}: {
  posts: { slug: string; title: string; description: string; image: string }[]
  sense: string
}) {
  return (
    <div className="flex flex-col">
      {posts.map(
        (post: {
          slug: string
          title: string
          description: string
          image: string
        }) => (
          <div
            key={post.slug}
            className="flex flex-col md:flex-row items-stretch justify-between"
          >
            <div>
              <Link legacyBehavior href={`/${sense}/${post.slug}`}>
                <a className="text-xl">{post.title}</a>
              </Link>
              <p className="opacity-50">{post.description}</p>
            </div>
            <Image src={post.image} alt={post.title} width={200} height={200} />
          </div>
        )
      )}
    </div>
  )
}

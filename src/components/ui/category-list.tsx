"use client"

import { Link } from "@/i18n/routing"

export default function CategoryList({
  posts,
  sense,
}: {
  posts: { slug: string; title: string; description: string }[]
  sense: string
}) {
  return (
    <ul>
      {posts.map(
        (post: { slug: string; title: string; description: string }) => (
          <li key={post.slug}>
            <Link legacyBehavior href={`/${sense}/${post.slug}`}>
              <a className="text-xl">{post.title}</a>
            </Link>
            <p className="opacity-50">{post.description}</p>
          </li>
        )
      )}
    </ul>
  )
}

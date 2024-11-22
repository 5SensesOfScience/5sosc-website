"use client"

import { Link } from "@/i18n/routing"

export default function CategoryList({
  posts,
  sense,
}: {
  posts: { slug: string; title: string }[]
  sense: string
}) {
  return (
    <ul>
      {posts.map((post: { slug: string; title: string }) => (
        <li key={post.slug}>
          <Link href={`/blog/${sense}/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

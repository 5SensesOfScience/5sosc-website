"use client"

import { Link } from "@/i18n/routing"

export default function PostView({
  sense,
  slug,
  post,
  posts,
}: {
  sense: string
  slug: string
  post: { title: string; date: string; content: string }
  posts: { slug: string; title: string }[]
}) {
  const currentIndex = posts.findIndex((p: { slug: string }) => p.slug === slug)
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{new Date(post.date).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      <nav className="flex justify-between mt-8">
        {previousPost && (
          <Link href={`/${sense}/${previousPost.slug}`}>
            <a>&larr; {previousPost.title}</a>
          </Link>
        )}
        {nextPost && (
          <Link href={`/${sense}/${nextPost.slug}`}>
            <a>{nextPost.title} &rarr;</a>
          </Link>
        )}
      </nav>

      <Link href={`/blog/${sense}`}>
        <a>← Back to {sense}</a>
      </Link>
    </article>
  )
}

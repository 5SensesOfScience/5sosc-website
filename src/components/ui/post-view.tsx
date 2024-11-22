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
  post: { title: string; description: string; date: string; content: string }
  posts: { slug: string; title: string }[]
}) {
  const currentIndex = posts.findIndex((p: { slug: string }) => p.slug === slug)
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null

  return (
    <div className="px-4">
      <h1 className="text-2xl font-fancy">{post.title}</h1>
      <p className="text-lg opacity-75">{post.description}</p>
      <p className="text-sm opacity-50">
        Published on {new Date(post.date).toLocaleDateString()}
      </p>
      <hr className="my-2" />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      <nav className="flex justify-between mt-8">
        {previousPost && (
          <Link legacyBehavior href={`/${sense}/${previousPost.slug}`}>
            <a>&larr; {previousPost.title}</a>
          </Link>
        )}
        {nextPost && (
          <Link legacyBehavior href={`/${sense}/${nextPost.slug}`}>
            <a>{nextPost.title} &rarr;</a>
          </Link>
        )}
      </nav>

      <Link legacyBehavior href={`/${sense}`}>
        <a>← Back to {sense}</a>
      </Link>
    </div>
  )
}

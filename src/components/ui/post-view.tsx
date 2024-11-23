"use client"

import { Link } from "@/i18n/routing"
import { useLocale, useTranslations } from "next-intl"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function PostView({
  sense,
  post,
  posts,
}: {
  sense: string
  post: {
    key: string
    title: string
    description: string
    date: string
    content: string
  }
  posts: { slug: string; key: string; title: string }[]
}) {
  const currentIndex = posts.findIndex(
    (p: { key: string }) => p.key === post.key
  )
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null

  const t = useTranslations("PostView")
  const locale = useLocale()

  return (
    <div className="px-4">
      <h1 className="text-2xl font-fancy">{post.title}</h1>
      <p className="text-lg opacity-75">{post.description}</p>
      <p className="text-sm opacity-50">
        Published on {new Date(post.date).toLocaleDateString(locale)}
      </p>
      <hr className="my-2" />
      <div className="markdown">
        <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
      </div>

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
        <a>
          ← {t("back")} {t(sense)}
        </a>
      </Link>
    </div>
  )
}

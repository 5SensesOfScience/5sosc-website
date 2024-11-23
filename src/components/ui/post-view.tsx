"use client"

import { Link } from "@/i18n/routing"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Button } from "./button"
import { ArrowLeft, ArrowRight } from "lucide-react"

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
    image: string
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
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-2xl font-fancy">{post.title}</h1>
        <p className="text-lg opacity-75">{post.description}</p>
        <p className="text-sm opacity-50">
          Published on {new Date(post.date).toLocaleDateString(locale)}
        </p>
      </div>
      <hr className="my-2 border-foreground" />
      <div className="flex flex-col gap-4">
        <div className="max-w-full max-h-[70vh] aspect-[5/3]">
          <Image
            src={"/decap_assets/" + post.image}
            alt={post.title}
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-auto mx-auto"
          />
        </div>
        <div className="markdown">
          <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </div>
      </div>

      <nav className="flex justify-between mt-8">
        {previousPost ? (
          <Link legacyBehavior href={`/${sense}/${previousPost.key}`}>
            <Button className="border-2 rounded-full">
              <ArrowLeft />{" "}
              <span className="hidden md:block">{previousPost.title}</span>
            </Button>
          </Link>
        ) : (
          <div></div>
        )}
        {nextPost ? (
          <Link legacyBehavior href={`/${sense}/${nextPost.key}`}>
            <Button className="border-2 rounded-full">
              <span className="hidden md:block">{nextPost.title}</span>{" "}
              <ArrowRight />
            </Button>
          </Link>
        ) : (
          <div></div>
        )}
      </nav>

      <div className="flex items-center">
        <Link legacyBehavior href={`/${sense}`} className="mx-auto">
          <Button className="mx-auto w-fit">
            ← {t("back")} {t(sense)}
          </Button>
        </Link>
      </div>
    </div>
  )
}

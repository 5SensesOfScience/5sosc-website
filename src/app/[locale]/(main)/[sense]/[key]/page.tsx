import { getPost, getPostsByCategory } from "@/lib/server_utils"
import PostView from "@/components/ui/post-view"
import { notFound } from "next/navigation"

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; sense: string; key: string }>
}) {
  const { locale, sense, key } = await params

  let post
  try {
    post = await getPost(locale, "posts", key)
  } catch {
    notFound()
  }
  const posts = await Promise.all(await getPostsByCategory(locale, "posts"))
  const posts_good = posts.filter(
    (post) => post.title && post.sense.toLowerCase() === sense.toLowerCase()
  )

  if (!post || !post.title) {
    notFound()
  }

  return <PostView sense={sense} post={post} posts={posts_good} />
}

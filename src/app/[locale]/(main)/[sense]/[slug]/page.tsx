import { getPost, getPostsByCategory } from "@/lib/server_utils"
import PostView from "@/components/ui/post-view"

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; sense: string; slug: string }>
}) {
  const { locale, sense, slug } = await params
  const post = await getPost(locale, "posts", slug)
  const posts = await Promise.all(await getPostsByCategory(locale, "posts"))
  const posts_good = posts.filter((post) => post.title)

  return <PostView sense={sense} slug={slug} post={post} posts={posts_good} />
}

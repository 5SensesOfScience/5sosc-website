import { getPost, getPostsByCategory } from "@/lib/server_utils"
import PostView from "@/components/ui/post-view"

export default async function PostPage({
  params: { category, slug },
  locale,
}: {
  params: { category: string; slug: string }
  locale: string
}) {
  const post = await getPost(locale, category, slug)
  const posts = await Promise.all(await getPostsByCategory(locale, category))

  return <PostView sense={post.sense} slug={slug} post={post} posts={posts} />
}

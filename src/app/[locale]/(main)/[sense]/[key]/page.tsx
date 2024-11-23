import { getPost, getPostsByCategory } from "@/lib/server_utils"
import PostView from "@/components/ui/post-view"

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; sense: string; key: string }>
}) {
  const { locale, sense, key } = await params
  const post = await getPost(locale, "posts", key)
  const posts = await Promise.all(await getPostsByCategory(locale, "posts"))
  const posts_good = posts.filter((post) => post.title)

  return <PostView sense={sense} key={key} post={post} posts={posts_good} />
}

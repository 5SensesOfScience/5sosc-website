import CategoryList from "@/components/ui/category-list"
import { getPostsByCategory } from "@/lib/server_utils"

export default async function sensePage({
  params,
  sense,
}: {
  params: { locale: string }
  sense: string
}) {
  const posts = await Promise.all(
    await getPostsByCategory(params.locale, "posts")
  )
  const sense_posts = posts.filter(
    (post: { sense: string }) => post.sense === sense
  )
  return (
    <div>
      <h1>{sense.toUpperCase()}</h1>
      <CategoryList posts={sense_posts} sense={sense} />
    </div>
  )
}

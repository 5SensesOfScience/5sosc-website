import CategoryList from "@/components/ui/category-list"
import { getPostsByCategory } from "@/lib/server_utils"

export default async function sensePage({
  params,
}: {
  params: Promise<{ locale: string; sense: string }>
}) {
  const { locale, sense } = await params
  const posts = await Promise.all(await getPostsByCategory(locale, "posts"))
  const sense_posts = posts.filter(
    (post: { sense: string }) =>
      post.sense && post.sense.toLowerCase() === sense.toLowerCase()
  )
  return (
    <div className="px-4">
      <h1 className="font-fancy text-2xl">{sense.toUpperCase()}</h1>
      <hr className="my-2" />
      <CategoryList posts={sense_posts} sense={sense} />
    </div>
  )
}

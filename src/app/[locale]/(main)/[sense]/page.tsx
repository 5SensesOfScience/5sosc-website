import CategoryList from "@/components/ui/category-list"
import EmptyCategory from "@/components/ui/empty-category"
import SenseHeader from "@/components/ui/sense-header"
import { getPostsByCategory } from "@/lib/server_utils"
import { notFound } from "next/navigation"

export default async function sensePage({
  params,
}: {
  params: Promise<{ locale: string; sense: string }>
}) {
  const senses = ["sight", "hearing", "smell", "taste", "touch"]
  const { locale, sense } = await params
  const posts = await Promise.all(await getPostsByCategory(locale, "posts"))
  const sense_posts = posts.filter(
    (post: { sense: string }) =>
      post.sense && post.sense.toLowerCase() === sense.toLowerCase()
  )

  if (!senses.includes(sense)) {
    notFound()
  }

  return (
    <div className="px-4 pt-[50px]">
      <SenseHeader sense={sense} />
      <hr className="my-2 border-foreground" />
      {sense_posts.length > 0 ? (
        <CategoryList posts={sense_posts} sense={sense} />
      ) : (
        <EmptyCategory />
      )}
    </div>
  )
}

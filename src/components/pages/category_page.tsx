import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { locales as meta_locales } from "@/i18n/meta"
import { Link } from "@/i18n/routing"

export async function getStaticPaths() {
  const locales = meta_locales
  const categories = ["Sight", "Hearing", "Taste", "Smell", "Touch"]

  const paths = locales.flatMap((locale) =>
    categories.map((category) => ({
      params: { category },
      locale,
    }))
  )

  return { paths, fallback: false }
}

export async function getStaticProps({
  params,
  locale,
}: {
  params: any
  locale: string
}) {
  const { category } = params

  const directory = path.join(process.cwd(), locale, category)
  const files = fs.readdirSync(directory)

  const posts = files.map((filename) => {
    const filePath = path.join(directory, filename)
    const fileContents = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContents)
    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      description: data.description,
      image: data.image,
      content,
    }
  })

  return {
    props: { posts, category },
  }
}

export default function CategoryPage({
  posts,
  category,
}: {
  posts: any[]
  category: string
}) {
  return (
    <div>
      <h1>{category.toUpperCase()}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${category}/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

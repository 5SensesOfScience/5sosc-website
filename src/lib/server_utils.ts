import { readdir, readFile } from "fs/promises"
import path from "path"
import matter from "gray-matter"

// Fetch all posts for a given category and locale
export async function getPostsByCategory(locale: string, category: string) {
  const directory = path.join(process.cwd(), "src", "content", locale, category)
  const files = await readdir(directory)

  return files.map(async (filename: string) => {
    const filePath = path.join(directory, filename)
    const fileContents = await readFile(filePath, "utf-8")
    const { data } = matter(fileContents)

    return {
      slug: filename.replace(".md", ""),
      key: data.key,
      title: data.title,
      description: data.description,
      date: data.date,
      image: data.image,
      sense: data.sense,
    }
  })
}

// Fetch a single post by slug
export async function getPost(locale: string, category: string, slug: string) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    locale,
    category,
    `${slug}.md`
  )
  const fileContents = await readFile(filePath, "utf-8")
  const { data, content } = matter(fileContents)

  return {
    key: data.key,
    title: data.title,
    description: data.description,
    date: data.date,
    image: data.image,
    sense: data.sense,
    content,
  }
}

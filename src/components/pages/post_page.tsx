import fs from "fs"
import path from "path"
import matter from "gray-matter"

export async function getStaticProps({
  params,
  locale,
}: {
  params: any
  locale: string
}) {
  const { category, slug } = params

  const filePath = path.join(process.cwd(), locale, category, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContents)

  return {
    props: {
      title: data.title,
      description: data.description,
      date: data.date,
      image: data.image,
      content,
    },
  }
}

export default function BlogPostPage({
  title,
  date,
  content,
}: {
  title: string
  date: string
  content: string
}) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{new Date(date).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

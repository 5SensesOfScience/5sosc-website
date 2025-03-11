import { getPostsByCategory } from "@/lib/server_utils"
import { getTranslations } from "next-intl/server"
import { Post } from "@/lib/server_utils"
import Highlight from "../ui/highlight"

export default async function SensesSection({ locale }: { locale: string }) {
  const t = await getTranslations("TextSwitcher")

  const posts: Array<Post> = await Promise.all(
    await getPostsByCategory(locale, "posts")
  )

  const senses = [
    {
      name: "see",
      sense: "sight",
      posts: posts.filter((post) => post.sense === "Sight"),
    },
    {
      name: "hear",
      sense: "hearing",
      posts: posts.filter((post) => post.sense === "Hearing"),
    },
    {
      name: "smell",
      sense: "smell",
      posts: posts.filter((post) => post.sense === "Smell"),
    },
    {
      name: "taste",
      sense: "taste",
      posts: posts.filter((post) => post.sense === "Taste"),
    },
    {
      name: "touch",
      sense: "touch",
      posts: posts.filter((post) => post.sense === "Touch"),
    },
  ]

  return (
    <>
      <h2 className="text-4xl font-fancy mb-12 text-center">
        {t("virtual_exhibition")}
      </h2>
      <div id="senses" className="flex flex-col gap-8 mb-6">
        {senses.map(
          (sense, index) =>
            sense.posts.length > 0 && (
              <div key={index} className="flex flex-col gap-6">
                {/* Title */}
                <h2 className="text-2xl font-fancy text-center">
                  <span className={`${"text-" + sense.sense}`}>
                    {t(sense.name)}
                  </span>{" "}
                  <span>{t("science")}</span>
                </h2>

                <div className="w-full flex flex-col md:flex-row gap-10 items-center justify-center">
                  {sense.posts.map((post, index) => (
                    <div key={index} className="w-full max-w-[300px]">
                      <Highlight key={index} post={post} />
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </>
  )
}

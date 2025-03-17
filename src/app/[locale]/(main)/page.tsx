// import HighlightsSection from "@/components/sections/highlights_section"
// import SensesSection from "@/components/sections/senses_section"
import WelcomeSection from "@/components/sections/welcome_section"
import TeamSection from "@/components/sections/team_section"
import { setRequestLocale } from "next-intl/server"
import SensesSection from "@/components/sections/senses_section"
import GallerySection from "@/components/sections/gallery_section"

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  setRequestLocale(locale)

  return (
    <div className="px-4 flex flex-col gap-4">
      <WelcomeSection />
      <SensesSection locale={locale} />
      <GallerySection />
      <TeamSection />
    </div>
  )
}

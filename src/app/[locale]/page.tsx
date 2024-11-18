import HighlightsSection from "@/components/sections/highlights_section"
import WelcomeSection from "@/components/sections/welcome_section"
import { setRequestLocale } from "next-intl/server"

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = await params

  setRequestLocale(locale)

  return (
    <div>
      <WelcomeSection />
      <HighlightsSection />
    </div>
  )
}

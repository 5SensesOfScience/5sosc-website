// import HighlightsSection from "@/components/sections/highlights_section"
// import SensesSection from "@/components/sections/senses_section"
import WelcomeSection from "@/components/sections/welcome_section"
import TeamSection from "@/components/sections/team_section"
import VenueSection from "@/components/sections/venue_section"
import ProgrammeSection from "@/components/sections/programme_section"
import { setRequestLocale } from "next-intl/server"

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
      {/*<HighlightsSection />*/}
      <VenueSection />
      <ProgrammeSection />
      {/*<SensesSection />*/}
      <TeamSection />
    </div>
  )
}

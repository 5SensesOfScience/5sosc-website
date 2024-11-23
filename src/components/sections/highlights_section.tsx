import { useTranslations } from "next-intl"
import Highlight from "../ui/highlight"

export default function HighlightsSection() {
  const t = useTranslations("Highlights")
  return (
    <div className="flex flex-col gap-4">
      <h2 id="highlights" className="text-4xl font-fancy">
        {t("heading")}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Highlight title="Example" image="/example.jpg" href="/" />
        <Highlight title="Example" image="/example.jpg" href="/" />
        <Highlight title="Example" image="/example.jpg" href="/" />
        <Highlight title="Example" image="/example.jpg" href="/" />
        <Highlight title="Example" image="/example.jpg" href="/" />
        <Highlight title="Example" image="/example.jpg" href="/" />
        <Highlight title="Example" image="/example.jpg" href="/" />
        <Highlight title="Example" image="/example.jpg" href="/" />
        <Highlight title="Example" image="/example.jpg" href="/" />
        <Highlight title="Example" image="/example.jpg" href="/" />
        <Highlight title="Example" image="/example.jpg" href="/" />
        <Highlight title="Example" image="/example.jpg" href="/" />
        <Highlight title="Example" image="/example.jpg" href="/" />
        <Highlight title="Example" image="/example.jpg" href="/" />
        <Highlight title="Example" image="/example.jpg" href="/" />
        <Highlight title="Example" image="/example.jpg" href="/" />
      </div>
    </div>
  )
}

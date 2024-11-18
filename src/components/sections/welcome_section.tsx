import { ArrowDown } from "lucide-react"
import TextSwitcher from "../ui/text-switcher"

export default function WelcomeSection() {
  return (
    <div className="w-full h-[calc(100svh-100px)] md:h-[calc(100svh-50px)]">
      <h1 id="top" className="hidden"></h1>
      <TextSwitcher />
      <div className="absolute ml-[50%] mr-auto -translate-x-[50%] bottom-16 md:bottom-2">
        <ArrowDown className="w-10 h-10 md:w-6 md:h-6" />
      </div>
    </div>
  )
}

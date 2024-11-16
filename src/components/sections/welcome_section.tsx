import TextSwitcher from "../text_switcher"

export default function WelcomeSection() {
  return (
    <div className="w-full h-[calc(100svh-50px)]">
      <h1 id="top" className="hidden"></h1>
      <TextSwitcher />
    </div>
  )
}

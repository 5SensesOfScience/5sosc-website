"use client"

import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"
import TextTransition, { presets } from "react-text-transition"

const COLVARS = [
  "text-sight",
  "text-hearing",
  "text-touch",
  "text-smell",
  "text-taste",
]

export default function TextSwitcher() {
  const t = useTranslations("TextSwitcher")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  const TEXTS = [t("see"), t("hear"), t("touch"), t("smell"), t("taste")]

  return (
    <div className="w-full h-full flex flex-row items-center justify-center">
      <div className="flex flex-row items-start gap-4 md:gap-6 text-2xl md:text-6xl font-fancy">
        <TextTransition
          springConfig={presets.default}
          inline
          translateValue="100%"
          className=""
        >
          <span className={COLVARS[index % COLVARS.length]}>
            {TEXTS[index % TEXTS.length]}
          </span>
        </TextTransition>
        <span>{t("science")}</span>
      </div>
    </div>
  )
}

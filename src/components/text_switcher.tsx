"use client"

import { useState, useEffect } from "react"
import TextTransition, { presets } from "react-text-transition"

const TEXTS = ["See", "Hear", "Touch", "Smell", "Taste"]
const COLVARS = [
  "text-sight",
  "text-hearing",
  "text-touch",
  "text-smell",
  "text-taste",
]

export default function TextSwitcher() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <div className="w-full h-full flex flex-row items-center justify-center gap-4 md:gap-6 text-4xl md:text-6xl font-fancy">
      <TextTransition
        springConfig={presets.default}
        inline
        translateValue="100%"
        className="-translate-y-2 md:-translate-y-4"
      >
        <span className={COLVARS[index % COLVARS.length]}>
          {TEXTS[index % TEXTS.length]}
        </span>
      </TextTransition>
      <span>Science</span>
    </div>
  )
}

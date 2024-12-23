"use client"

import { useTranslations } from "next-intl"

export default function SenseHeader({ sense }: { sense: string }) {
  const t = useTranslations("PostView")
  return (
    <h1 className="text-3xl font-fancy text-center md:text-left">{t(sense)}</h1>
  )
}

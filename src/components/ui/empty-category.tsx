"use client"

import { useTranslations } from "next-intl"

export default function EmptyCategory() {
  const t = useTranslations("SenseView")
  return <p className="text-lg opacity-75">{t("empty")}</p>
}

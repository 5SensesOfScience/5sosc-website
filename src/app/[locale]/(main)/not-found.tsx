"use client"

import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

export default function NotFound() {
  const t = useTranslations("NotFound")
  return (
    <div className="px-4">
      <h1 className="text-3xl font-fancy text-center md:text-left">
        {t("heading")}
      </h1>
      <hr className="my-2" />
      <p className="text-lg">{t("message")}</p>
      <Link href="/">{t("prompt")}</Link>
    </div>
  )
}

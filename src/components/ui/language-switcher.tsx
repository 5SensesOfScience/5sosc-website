"use client"

import { useRouter } from "next/router"
import { usePathname } from "@/i18n/routing"
import { locales } from "@/i18n/meta"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import { Button } from "./button"
import { useLocale } from "next-intl"

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const curr_locale = useLocale()

  const handleLanguageChange = (newLocale: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale: newLocale }
    )
  }

  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="border-0">
            <span>{curr_locale.toUpperCase()}</span>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {locales.map((locale) => (
            <DropdownMenuItem
              key={locale}
              onClick={() => handleLanguageChange(locale)}
            >
              {locale.toUpperCase()}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

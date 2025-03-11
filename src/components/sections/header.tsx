"use client"

import { Link } from "../../i18n/routing"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { ModeToggle } from "@/components/ui/mode-toggle"
import Hamburger from "@/components/ui/hamburger"
import { useTranslations } from "next-intl"
import LanguageSwitcher from "../ui/language-switcher"
import { Button } from "../ui/button"

function RegisterButton({ className }: { className?: string | undefined }) {
  return (
    <Link
      href="https://www.eventbrite.com/e/entradas-exposicio-5-sentits-de-la-ciencia-1245798499849?aff=oddtdtcreator"
      target="_blank"
      className={className ? className : ""}
    >
      <Button variant="outline">Register now</Button>
    </Link>
  )
}

function Nav({ className }: { className?: string }) {
  const t = useTranslations("Header")

  function makeLink(path: string) {
    return "/" + path
  }

  return (
    <nav className={className}>
      <NavigationMenu>
        <NavigationMenuList className="flex-col md:flex-row">
          <NavigationMenuItem>
            <Link
              href={makeLink("#top")}
              legacyBehavior
              passHref
              className="scroll-smooth"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t("home")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href={makeLink("#exhibition")}
              legacyBehavior
              passHref
              className="scroll-smooth"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t("exhibition")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href={makeLink("#team")}
              legacyBehavior
              passHref
              className="scroll-smooth"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t("team")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <RegisterButton />

      <div className="m-auto w-fit h-fit">
        <ModeToggle />
      </div>

      <div className="m-auto w-fit h-fit">
        <LanguageSwitcher />
      </div>
    </nav>
  )
}

function HamburgerNav({ className }: { className?: string }) {
  return (
    <Hamburger className={className}>
      <Nav />
    </Hamburger>
  )
}

export default function Header() {
  return (
    <div className="sticky top-0 z-10 w-full h-content p-4 flex flex-col md:flex-row items-center justify-center md:justify-between bg-background">
      <Link href="/" passHref className="h-[50px] md:min-h-0">
        <div className="relative mx-4 h-full aspect-square">
          <Image
            src="/five-senses-of-science-logo-transparent.png"
            alt="5 Senses of Science logo"
            fill={true}
          />
        </div>
      </Link>
      <Nav className="hidden md:flex" />
      <HamburgerNav className="md:hidden" />
      <RegisterButton className="pt-4 md:hidden" />
    </div>
  )
}

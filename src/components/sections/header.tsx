"use client"

import { Link } from "../../i18n/routing"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { ModeToggle } from "@/components/ui/mode-toggle"
import Hamburger from "@/components/ui/hamburger"
import { useTranslations } from "next-intl"
import LanguageSwitcher from "../ui/language-switcher"

const senses = ["sight", "hearing", "smell", "taste", "touch"]

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
            <NavigationMenuLink
              href={makeLink("#top")}
              className={navigationMenuTriggerStyle()}
            >
              {t("home")}
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
              <NavigationMenuLink
                href={makeLink("#exhibition")}
                className="scroll-smooth"
              >
                {t("exhibition")}
              </NavigationMenuLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-3 p-4 bg-background">
                {senses.map((sense, index) => (
                  <li key={index}>
                    <NavigationMenuLink
                      href={makeLink("#" + sense)}
                      key={index}
                    >
                      {t(sense)}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href={makeLink("#team")}
              className={navigationMenuTriggerStyle()}
            >
              {t("team")}
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

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
    </div>
  )
}

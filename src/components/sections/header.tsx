import Link from "next/link"
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
import { useLocale, useTranslations } from "next-intl"
import LanguageSwitcher from "../ui/language-switcher"

function Nav({ className, locale }: { className?: string; locale: string }) {
  const t = useTranslations("Header")

  function makeLink(path: string) {
    return "/" + path
  }

  return (
    <nav className={className}>
      <NavigationMenu>
        <NavigationMenuList className="flex-col md:flex-row">
          <NavigationMenuItem>
            <Link href={makeLink("#top")} passHref className="scroll-smooth">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t("home")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={makeLink("#venue")} passHref className="scroll-smooth">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t("venue")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href={makeLink("#program")}
              passHref
              className="scroll-smooth"
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t("program")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={makeLink("#senses")} passHref className="scroll-smooth">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t("senses")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={makeLink("#team")} passHref className="scroll-smooth">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t("team")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={makeLink("#findus")} passHref className="scroll-smooth">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t("find_us")}
              </NavigationMenuLink>
            </Link>
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

function HamburgerNav({
  className,
  locale,
}: {
  className?: string
  locale: string
}) {
  return (
    <Hamburger className={className}>
      <Nav locale={locale} />
    </Hamburger>
  )
}

export default function Header() {
  const locale = useLocale()
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
      <Nav locale={locale} className="hidden md:flex" />
      <HamburgerNav locale={locale} className="md:hidden" />
    </div>
  )
}

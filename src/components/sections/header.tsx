import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import Image from "next/image"
import { ModeToggle } from "./ui/mode-toggle"
import Hamburger from "./ui/hamburger"

function Nav({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <NavigationMenu>
        <NavigationMenuList className="flex-col md:flex-row">
          <NavigationMenuItem>
            <Link href="/#top" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#venue" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Venue
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#program" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Program
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#senses" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Senses
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#team" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Team
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#findus" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Find us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="m-auto w-fit h-fit">
        <ModeToggle />
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
    <div className="relative md:sticky w-full h-content p-4 flex flex-col md:flex-row items-center justify-center md:justify-between">
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

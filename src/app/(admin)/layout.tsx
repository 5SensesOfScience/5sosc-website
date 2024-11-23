import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import "@/app/globals.css"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/meta/theme_provider"
import { routing } from "@/i18n/routing"
import { notFound } from "next/navigation"
import { getMessages, setRequestLocale } from "next-intl/server"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const fancyFont = localFont({
  src: [{ path: "../fonts/tan-nimbus.otf", weight: "700", style: "normal" }],
  variable: "--font-fancy",
})

export const metadata: Metadata = {
  title: "5 Senses of Science",
  description: "Experience science with all your senses",
}

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={fancyFont.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-background text-foreground">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}

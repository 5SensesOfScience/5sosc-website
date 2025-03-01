import type { Metadata } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"
import { NextIntlClientProvider } from "next-intl"
import "@/app/globals.css"
import localFont from "next/font/local"
import Header from "@/components/sections/header"
import { ThemeProvider } from "@/components/meta/theme_provider"
import Footer from "@/components/sections/footer"
import { routing } from "@/i18n/routing"
import { notFound } from "next/navigation"
import { getMessages, setRequestLocale } from "next-intl/server"
import Script from "next/script"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const fancyFont = localFont({
  src: [{ path: "../../fonts/tan-nimbus.otf", weight: "700", style: "normal" }],
  variable: "--font-fancy",
})

export const metadata: Metadata = {
  title: "5 Senses of Science",
  description: "Experience science with all your senses",
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!routing.locales.includes(locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} className={fancyFont.variable} suppressHydrationWarning>
      <head>
        <Script
          id={`Cookiebot`}
          async={true}
          src={`https://consent.cookiebot.com/uc.js`}
          strategy={`beforeInteractive`}
          data-cbid={`a27bbf30-67eb-4848-97d6-dd2ba67f2e59`}
          data-blockingmode={`auto`}
          type={`text/javascript`}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="bg-background text-foreground min-h-screen">
              <Header />
              <div className="min-h-[70vh]">{children}</div>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-LRTX2JK3CR" />
    </html>
  )
}

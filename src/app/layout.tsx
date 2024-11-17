import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"
import Header from "@/components/sections/header"
import { ThemeProvider } from "@/components/meta/theme_provider"
import Footer from "@/components/sections/footer"

const fancyFont = localFont({
  src: [{ path: "fonts/tan-nimbus.otf", weight: "700", style: "normal" }],
  variable: "--font-fancy",
})

export const metadata: Metadata = {
  title: "5 Senses of Science",
  description: "Experience science with all your senses",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fancyFont.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-background text-foreground">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

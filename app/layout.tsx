import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import { IgkfastAnnouncementPopup } from "@/components/igkfast-announcement-popup"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Karahisarlıoğlu Yapı Tasarım | Yazılım ve E-ticaret Ekosistemi",
  description:
    "Karahisarlıoğlu Yapı Tasarım: IGKfast e-ticaret SaaS, IGK Yapı ve Banyolia mağazaları ile yazılım ve perakende ekosistemi.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${syne.variable}`}>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
        <IgkfastAnnouncementPopup />
        <Toaster />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import { IgkfastAnnouncementPopup } from "@/components/igkfast-announcement-popup"
import "./globals.css"

export const metadata: Metadata = {
  title: "Karahisarlıoğlu Yapı - Modern İnşaat ve Mimarlık",
  description: "Profesyonel inşaat ve mimarlık hizmetleri. Modern tasarım ve kaliteli işçilik.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="dark">
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

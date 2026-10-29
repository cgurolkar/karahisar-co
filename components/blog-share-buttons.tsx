"use client"

import { Facebook, Linkedin, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  /** Absolute URL or path starting with / */
  url: string
  title: string
}

function openShare(href: string) {
  window.open(href, "_blank", "noopener,noreferrer,width=640,height=480")
}

function getShareUrl(url: string): string {
  if (typeof window === "undefined") return url
  if (url.startsWith("http://") || url.startsWith("https://")) {
    try {
      const parsed = new URL(url)
      return `${window.location.origin}${parsed.pathname}${parsed.search}`
    } catch {
      return url
    }
  }
  return `${window.location.origin}${url.startsWith("/") ? url : `/${url}`}`
}

export function BlogShareButtons({ url, title }: Props) {
  const share = (builder: (absolute: string) => string) => {
    const absolute = getShareUrl(url)
    openShare(builder(absolute))
  }

  const shareNative = async () => {
    const absolute = getShareUrl(url)
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url: absolute, text: title })
        return
      } catch {
        // kullanıcı iptal ettiyse sessiz geç
      }
    }
    try {
      await navigator.clipboard.writeText(absolute)
      alert("Bağlantı panoya kopyalandı.")
    } catch {
      openShare(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(absolute)}&text=${encodeURIComponent(title)}`,
      )
    }
  }

  return (
    <div className="mt-12 border-t border-[var(--border-soft)] pt-8">
      <h3 className="mb-4 text-lg font-semibold text-[var(--ink)]">Paylaş</h3>
      <div className="flex flex-wrap gap-3">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() =>
            share((absolute) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(absolute)}`)
          }
        >
          <Facebook className="mr-2 h-4 w-4" />
          Facebook
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() =>
            share(
              (absolute) =>
                `https://twitter.com/intent/tweet?url=${encodeURIComponent(absolute)}&text=${encodeURIComponent(title)}`,
            )
          }
        >
          <span className="mr-2 text-sm font-bold">𝕏</span>
          X
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() =>
            share(
              (absolute) =>
                `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(absolute)}`,
            )
          }
        >
          <Linkedin className="mr-2 h-4 w-4" />
          LinkedIn
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() =>
            share(
              (absolute) =>
                `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} — ${absolute}`)}`,
            )
          }
        >
          WhatsApp
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={shareNative}>
          <Share2 className="mr-2 h-4 w-4" />
          Paylaş / Kopyala
        </Button>
      </div>
    </div>
  )
}

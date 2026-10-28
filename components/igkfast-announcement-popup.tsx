"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, ArrowRight, ArrowUpRight } from "lucide-react"

const STORAGE_KEY = "igkfast-product-popup-v2"

export function IgkfastAnnouncementPopup() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const seen = typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY)
    if (!seen) {
      setVisible(true)
    }
  }, [mounted])

  const close = () => {
    setVisible(false)
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "1")
    }
  }

  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(close, 12000)
    return () => clearTimeout(timer)
  }, [visible])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" aria-hidden onClick={close} />
      <div className="relative w-full max-w-md overflow-hidden border border-[var(--border-soft)] bg-[var(--surface)] shadow-2xl animate-fade-up">
        <button
          type="button"
          onClick={close}
          className="absolute top-3 right-3 z-10 p-1.5 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
          aria-label="Kapat"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="p-8 pt-10 text-center">
          <div className="mb-6 flex justify-center bg-black px-6 py-5">
            <img
              src="/logos/igkfast-logo.svg"
              alt="IGKfast"
              className="h-12 w-auto max-w-full object-contain"
            />
          </div>
          <p className="text-xl font-semibold text-[var(--ink)] font-[family-name:var(--font-display)] mb-3">
            IGKfast — yazılım ürünümüz
          </p>
          <p className="text-[var(--ink-muted)] leading-relaxed mb-6">
            Diğer işletmelere e-ticaret SaaS altyapısı sunuyoruz. Ürün videosu, panel ekranları ve Tech
            Provider açıklaması IGKfast sayfasında.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/igkfast"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 bg-[var(--ink)] text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
            >
              IGKfast sayfası
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://igkfast.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[var(--border-soft)] text-[var(--ink)] px-5 py-2.5 text-sm font-semibold hover:border-[var(--brand-warm)] transition"
            >
              igkfast.com
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

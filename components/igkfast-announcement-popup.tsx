"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

const STORAGE_KEY = "igkfast-popup-seen"

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
    const timer = setTimeout(close, 10000)
    return () => clearTimeout(timer)
  }, [visible])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden
      />
      <div className="relative w-full max-w-md rounded-xl bg-white shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <button
          type="button"
          onClick={close}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
          aria-label="Kapat"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="p-8 pt-10 text-center">
          <div className="mb-6 flex justify-center rounded-lg bg-black px-6 py-5">
            <img
              src="/logos/igkfast-logo.png"
              alt="IGKfast"
              className="h-12 w-auto max-w-full object-contain"
            />
          </div>
          <p className="text-xl font-semibold text-slate-800 mb-3">Çok yakında hizmete girecek</p>
          <p className="text-base text-slate-600 leading-relaxed">
            Grup şirketimiz IGKfast, e-ticaret ve SaaS teknolojilerinde sizlerle{" "}
            <a
              href="https://igkfast.com"
              className="text-slate-800 font-medium underline underline-offset-2 hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              igkfast.com
            </a>{" "}
            üzerinden buluşmak için hazırlanıyor. Dijital dönüşüm ve e-ticaret çözümlerinde güvenilir
            ortağınız olmaya devam edeceğiz.
          </p>
        </div>
      </div>
    </div>
  )
}

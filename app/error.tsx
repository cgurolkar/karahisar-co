"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--surface)] text-[var(--ink)] px-4">
      <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand-warm)] mb-3">Hata</p>
      <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
        Bir şeyler ters gitti
      </h1>
      <p className="text-[var(--ink-muted)] mb-8 text-center max-w-md">
        Sayfa yüklenirken bir sorun oluştu. Tekrar deneyebilir veya ana sayfaya dönebilirsiniz.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center bg-[var(--ink)] text-white px-6 py-3 text-sm font-semibold"
        >
          Yeniden dene
        </button>
        <Link
          href="/"
          className="inline-flex items-center border border-[var(--border-soft)] px-6 py-3 text-sm font-semibold"
        >
          Ana sayfa
        </Link>
      </div>
    </div>
  )
}

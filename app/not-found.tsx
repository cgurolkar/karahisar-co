import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--surface)] text-[var(--ink)] px-4">
      <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand-warm)] mb-3">404</p>
      <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
        Sayfa bulunamadı
      </h1>
      <p className="text-[var(--ink-muted)] mb-8 text-center max-w-md">
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
      </p>
      <Link
        href="/"
        className="inline-flex items-center bg-[var(--ink)] text-white px-6 py-3 text-sm font-semibold"
      >
        Ana sayfaya dön
      </Link>
    </div>
  )
}

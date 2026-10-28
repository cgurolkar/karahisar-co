"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="tr">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", textAlign: "center" }}>
        <h1>Bir hata oluştu</h1>
        <p style={{ color: "#666" }}>{error.message || "Beklenmeyen bir sorun."}</p>
        <button type="button" onClick={reset} style={{ marginTop: "1rem", padding: "0.75rem 1.5rem" }}>
          Yeniden dene
        </button>
      </body>
    </html>
  )
}

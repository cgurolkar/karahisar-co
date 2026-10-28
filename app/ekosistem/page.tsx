import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight } from "lucide-react"

export default function EkosistemPage() {
  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <Navigation />

      <section className="pt-28 pb-14 relative overflow-hidden border-b border-[var(--border-soft)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--surface-tint)_0%,_transparent_55%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center text-sm text-[var(--ink-muted)] mb-6">
            <Link href="/" className="hover:text-[var(--ink)] transition-colors">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--ink)]">Ekosistem</span>
          </div>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">
            Grup yapısı
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)] font-[family-name:var(--font-display)] max-w-3xl text-balance">
            Yazılım ve perakende ayrı hatlar
          </h1>
          <p className="mt-4 text-lg text-[var(--ink-muted)] max-w-2xl">
            Tech Provider doğrulaması ve net konumlandırma için IGKfast ile mağazalarımızı ayrı
            sayfalarda anlatıyoruz.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <Link
            href="/igkfast"
            className="group border border-[var(--border-soft)] p-8 md:p-10 hover:border-[var(--brand-warm)] transition-colors"
          >
            <div className="flex items-center justify-center h-24 bg-black mb-6">
              <img src="/logos/igkfast-logo.svg" alt="IGKfast" className="max-h-12 object-contain" />
            </div>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--ink-muted)] mb-2">
              SaaS · Tech Provider
            </p>
            <h2 className="text-2xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)] group-hover:text-[var(--brand-warm)] transition-colors">
              IGKfast
            </h2>
            <p className="mt-3 text-[var(--ink-muted)] leading-relaxed mb-6">
              Diğer işletmelere e-ticaret altyapısı sunan yazılım ürünümüz. Video, panel ekranları ve
              ürün açıklaması.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)]">
              IGKfast sayfası
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link
            href="/magazalar"
            className="group border border-[var(--border-soft)] p-8 md:p-10 hover:border-[var(--brand-warm)] transition-colors"
          >
            <div className="flex items-center justify-center gap-6 h-24 bg-[var(--surface-elevated)] mb-6 px-4">
              <img src="/logos/igkyapi-logo.png" alt="IGK Yapı" className="max-h-12 object-contain" />
              <img src="/logos/banyolia-logo.png" alt="Banyolia" className="max-h-12 object-contain" />
            </div>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--ink-muted)] mb-2">
              Perakende e-ticaret
            </p>
            <h2 className="text-2xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)] group-hover:text-[var(--brand-warm)] transition-colors">
              Mağazalar
            </h2>
            <p className="mt-3 text-[var(--ink-muted)] leading-relaxed mb-6">
              IGK Yapı ve Banyolia — banyo, duş ve batarya ürünlerinde kendi online satış kanallarımız.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)]">
              Mağazalar sayfası
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

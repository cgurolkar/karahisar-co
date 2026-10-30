import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const capabilities = [
  {
    title: "Çok kiracılı SaaS",
    body: "Her işletme kendi mağazasını yönetir; altyapı, güvenlik ve güncellemeler IGKfast tarafında kalır.",
  },
  {
    title: "Tema & vitrin",
    body: "Hazır tema mağazası ve özelleştirilebilir vitrinlerle marka kimliğinizi dakikalar içinde yayına alın.",
  },
  {
    title: "Eklenti ekosistemi",
    body: "CRM, B2B, SMS, formlar ve Google Marketing Tools ile operasyonu tek panelden büyütün.",
  },
]

const productShots = [
  {
    src: "/media/igkfast/theme-store.png",
    label: "Tema mağazası",
  },
  {
    src: "/media/igkfast/plugins.png",
    label: "Eklentiler",
  },
  {
    src: "/media/igkfast/orders-map.png",
    label: "Sipariş analitiği",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <Navigation />

      {/* Hero — IGKfast first, product as full-bleed visual */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[#0c0f14]" aria-hidden />
        <div
          className="absolute inset-0 opacity-[0.35] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/media/igkfast/theme-store.png')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f14] via-[#0c0f14]/88 to-[#0c0f14]/45" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,_rgba(196,140,74,0.22)_0%,_transparent_50%)]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-28">
          <div className="animate-hero-in max-w-3xl">
            <div className="mb-8 inline-flex items-center bg-white px-5 py-3">
              <img
                src="/logos/igkfast-logo-591.png"
                alt="IGKfast"
                className="h-7 w-auto object-contain"
              />
            </div>
            <p className="text-sm tracking-[0.28em] uppercase text-white/60 mb-4">
              Karahisarlıoğlu Yapı Tasarım · Tech
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight font-[family-name:var(--font-display)] text-balance leading-[1.05]">
              E-ticaret için SaaS altyapısı
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              IGKfast ile işletmeler kendi mağazalarını kurar, ölçekler ve yönetir. Biz yazılım
              platformunu sunarız.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/igkfast"
                className="inline-flex items-center gap-2 bg-[var(--brand-warm)] text-[var(--ink)] px-6 py-3 text-sm font-semibold tracking-wide hover:brightness-110 transition"
              >
                IGKfast’i keşfet
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://igkfast.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/35 text-white px-6 py-3 text-sm font-semibold tracking-wide hover:bg-white/10 transition"
              >
                igkfast.com
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product proof strip */}
      <section className="border-b border-[var(--border-soft)] bg-[var(--ink)] py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/70">
            <span className="tracking-[0.18em] uppercase text-[var(--brand-warm)] text-xs font-medium">
              Platform
            </span>
            <span>Tema mağazası</span>
            <span className="hidden sm:inline text-white/25">·</span>
            <span>Eklenti paneli</span>
            <span className="hidden sm:inline text-white/25">·</span>
            <span>Sipariş & analitik</span>
            <span className="hidden sm:inline text-white/25">·</span>
            <span>Tech Provider</span>
          </div>
        </div>
      </section>

      {/* IGKfast spotlight */}
      <section className="py-24 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 animate-fade-up">
              <p className="text-sm tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">
                Ürün
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)] text-balance">
                IGKfast önde
              </h2>
              <p className="mt-4 text-[var(--ink-muted)] text-lg leading-relaxed">
                Karahisarlıoğlu Yapı Tasarım’ın odak ürünü: diğer işletmelere e-ticaret SaaS sunan
                teknoloji platformu. Ölçüm, tema ve operasyon aynı mimaride.
              </p>
              <ul className="mt-8 space-y-3 text-[var(--ink)]">
                {[
                  "Çok kiracılı mağaza mimarisi",
                  "Google Ads, Analytics ve Merchant Center uyumu",
                  "Modüler eklenti ve entegrasyonlar",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-warm)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/igkfast"
                className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[var(--ink)] border-b-2 border-[var(--brand-warm)] pb-0.5 hover:text-[var(--brand-warm)] transition-colors"
              >
                Ürün sayfası
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-7 animate-fade-up" style={{ animationDelay: "80ms" }}>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0f14] border border-[var(--border-soft)]">
                <img
                  src="/media/igkfast/plugins.png"
                  alt="IGKfast eklenti paneli"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-[var(--surface-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">
              Yetenekler
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)] text-balance">
              Teknoloji ile satış altyapısı
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {capabilities.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-semibold text-[var(--ink)] font-[family-name:var(--font-display)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--ink-muted)] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screens */}
      <section className="py-24 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">
                Arayüz
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)]">
                Platformdan kareler
              </h2>
            </div>
            <a
              href="https://igkfast.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] border-b border-[var(--brand-warm)] pb-0.5 hover:text-[var(--brand-warm)] transition-colors"
            >
              Canlı ürün
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {productShots.map((shot) => (
              <figure key={shot.src} className="group">
                <div className="aspect-[4/3] overflow-hidden bg-[#0c0f14] border border-[var(--border-soft)] mb-3">
                  <img
                    src={shot.src}
                    alt={shot.label}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="text-sm text-[var(--ink-muted)]">{shot.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Retail secondary */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">
              Ek ekosistem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)] text-balance">
              Kendi mağazalarımız da aynı teknolojiyle
            </h2>
            <p className="mt-4 text-[var(--ink-muted)] text-lg leading-relaxed">
              IGK Yapı ve Banyolia, grubumuzun e-ticaret kanallarıdır — ürün vitrinleri IGKfast
              yaklaşımıyla dijitalde büyür.
            </p>
            <Link
              href="/magazalar"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[var(--ink)] border-b-2 border-[var(--brand-warm)] pb-0.5 hover:text-[var(--brand-warm)] transition-colors"
            >
              Mağazaları gör
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8 min-h-[160px] bg-[var(--surface-elevated)] border border-[var(--border-soft)] px-8">
            <img src="/logos/igkyapi-logo.png" alt="IGK Yapı" className="max-h-12 object-contain" />
            <img src="/logos/banyolia-logo.png" alt="Banyolia" className="max-h-12 object-contain" />
          </div>
        </div>
      </section>

      {/* About + CTA */}
      <section className="py-24 bg-[var(--ink)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">
              Şirket
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-balance">
              Teknoloji odaklı bir yazılım grubu
            </h2>
          </div>
          <div>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Karahisarlıoğlu Yapı Tasarım; IGKfast SaaS platformu ve dijital mağaza markalarıyla
              e-ticaret teknolojisi geliştirir. Odak noktamız yazılım ürünü ve ölçeklenebilir
              altyapıdır.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-[var(--brand-warm)] pb-0.5 hover:text-[var(--brand-warm)] transition-colors"
              >
                Hakkımızda
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
              >
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-[var(--border-soft)] animate-fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)]">
              Altyapınızı konuşalım
            </h2>
            <p className="mt-2 text-[var(--ink-muted)] max-w-md">
              IGKfast demo, iş ortaklığı veya teknik sorularınız için yazın.
            </p>
          </div>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center gap-2 bg-[var(--ink)] text-white px-8 py-4 text-sm font-semibold hover:bg-[var(--ink)]/90 transition"
          >
            İletişime geç
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

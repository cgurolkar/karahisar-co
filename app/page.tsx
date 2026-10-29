import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { projects } from "@/lib/projects-data"
import { ArrowRight } from "lucide-react"

const pillars = [
  {
    title: "SaaS altyapı",
    body: "IGKfast ile e-ticaret mağazalarını hızla kuran, ölçeklenebilir bir yazılım platformu sunuyoruz.",
  },
  {
    title: "E-ticaret mağazacılık",
    body: "IGK Yapı ve Banyolia üzerinden banyo aksesuarı, duş ve batarya ürünlerinde perakende deneyimi işletiyoruz.",
  },
  {
    title: "Uygulama geçmişi",
    body: "Yılların inşaat ve uygulama referansları, grubumuzun disiplinini ve teslim anlayışını gösterir.",
  },
]

export default function HomePage() {
  const featured = projects.slice(0, 3)

  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <Navigation />

      {/* Hero — brand first, one composition */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-karahisarlioglu-1.jpg')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/75 to-[var(--ink)]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,_rgba(196,140,74,0.18)_0%,_transparent_45%)]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32">
          <div className="animate-hero-in max-w-3xl">
            <p className="text-sm tracking-[0.28em] uppercase text-white/70 mb-5">
              Karahisarlıoğlu Yapı Tasarım
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight font-[family-name:var(--font-display)] text-balance leading-[1.05]">
              Geleceği inşa ediyor, dijital dünyayı tasarlıyoruz
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              IGKfast SaaS, IGK Yapı ve Banyolia — 35 yıllık mühendislik disiplinini yazılım ve
              e-ticaret ekosisteminde buluşturuyoruz.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/igkfast"
                className="inline-flex items-center gap-2 bg-[var(--brand-warm)] text-[var(--ink)] px-6 py-3 text-sm font-semibold tracking-wide hover:brightness-110 transition"
              >
                IGKfast yazılım
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/magazalar"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3 text-sm font-semibold tracking-wide hover:bg-white/10 transition"
              >
                Mağazalar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two paths: software vs retail */}
      <section className="py-24 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl animate-fade-up">
            <p className="text-sm tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">İki yol</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)] text-balance">
              Yazılım ve mağazalar ayrı
            </h2>
            <p className="mt-4 text-[var(--ink-muted)] text-lg">
              IGKfast diğer işletmelere e-ticaret altyapısı sunar; IGK Yapı ve Banyolia kendi perakende
              mağazalarımızdır.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/igkfast"
              className="group border border-[var(--border-soft)] p-8 md:p-10 hover:border-[var(--brand-warm)] transition-colors animate-fade-up"
            >
              <div className="flex items-center justify-center h-20 bg-black mb-6 px-4">
                <img src="/logos/igkfast-logo.svg" alt="IGKfast" className="max-h-10 object-contain" />
              </div>
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--ink-muted)] mb-2">
                Yazılım · SaaS · Tech Provider
              </p>
              <h3 className="text-2xl font-semibold text-[var(--ink)] font-[family-name:var(--font-display)] group-hover:text-[var(--brand-warm)] transition-colors">
                IGKfast
              </h3>
              <p className="mt-3 text-[var(--ink-muted)] leading-relaxed">
                Diğer markaların mağaza kurduğu e-ticaret altyapısı. Tema, eklenti, sipariş ve ölçüm
                araçları.
              </p>
              <span className="inline-flex items-center gap-1 mt-6 text-sm font-medium text-[var(--ink)]">
                Ürün sayfası
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href="/magazalar"
              className="group border border-[var(--border-soft)] p-8 md:p-10 hover:border-[var(--brand-warm)] transition-colors animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              <div className="flex items-center justify-center gap-6 h-20 bg-[var(--surface-elevated)] mb-6 px-4">
                <img src="/logos/igkyapi-logo.png" alt="IGK Yapı" className="max-h-10 object-contain" />
                <img src="/logos/banyolia-logo.png" alt="Banyolia" className="max-h-10 object-contain" />
              </div>
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--ink-muted)] mb-2">
                E-ticaret perakende
              </p>
              <h3 className="text-2xl font-semibold text-[var(--ink)] font-[family-name:var(--font-display)] group-hover:text-[var(--brand-warm)] transition-colors">
                Mağazalarımız
              </h3>
              <p className="mt-3 text-[var(--ink-muted)] leading-relaxed">
                IGK Yapı ve Banyolia — banyo aksesuarı, duş ve batarya ürünlerinde online satış.
              </p>
              <span className="inline-flex items-center gap-1 mt-6 text-sm font-medium text-[var(--ink)]">
                Mağazaları gör
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-24 bg-[var(--surface-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)] mb-4 max-w-xl text-balance">
            Ne yapıyoruz
          </h2>
          <p className="text-[var(--ink-muted)] text-lg mb-14 max-w-xl">
            Bugün odağımız yazılım ve e-ticaret; geçmişimiz uygulama disiplininde.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="text-xl font-semibold text-[var(--ink)] font-[family-name:var(--font-display)] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[var(--ink-muted)] leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References teaser */}
      <section className="py-24 border-t border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">Referanslar</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)]">
                Geçmiş uygulamalardan
              </h2>
            </div>
            <Link
              href="/referanslar"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] border-b border-[var(--brand-warm)] pb-0.5 hover:text-[var(--brand-warm)] transition-colors"
            >
              Tüm referanslar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((project) => (
              <Link
                key={project.id}
                href={`/referanslar/${project.slug}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden mb-4 bg-[var(--surface-elevated)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="text-xs uppercase tracking-wider text-[var(--ink-muted)] mb-1">
                  {project.year}
                </p>
                <h3 className="text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--brand-warm)] transition-colors line-clamp-2">
                  {project.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About summary */}
      <section className="py-24 bg-[var(--ink)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">Hakkımızda</p>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-balance">
              35 yıllık deneyim, bugünün ekosistemi
            </h2>
          </div>
          <div>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Şirket ortaklarının uzun sektör deneyimi üzerine kurulan Karahisarlıoğlu Yapı Tasarım,
              bugün yazılım ve e-ticaret markalarıyla büyümeye devam ediyor.
            </p>
            <Link
              href="/hakkimizda"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-[var(--brand-warm)] pb-0.5 hover:text-[var(--brand-warm)] transition-colors"
            >
              Devamını oku
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-20 border-t border-[var(--border-soft)] animate-fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)]">
              Projenizi konuşalım
            </h2>
            <p className="mt-2 text-[var(--ink-muted)] max-w-md">
              IGKfast, mağaza veya genel işbirliği için bizimle iletişime geçin.
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

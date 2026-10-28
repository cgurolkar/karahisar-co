import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function AboutPage() {
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
            <span className="text-[var(--ink)]">Hakkımızda</span>
          </div>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">
            Kimiz
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)] font-[family-name:var(--font-display)] max-w-3xl text-balance">
            İnşaattan gruba: yazılım ve e-ticaret
          </h1>
          <p className="mt-4 text-lg text-[var(--ink-muted)] max-w-2xl">
            Karahisarlıoğlu Yapı Tasarım; 35 yıllık sektör deneyimini bugün IGKfast, IGK Yapı ve
            Banyolia ile yazılım ve perakende ekosistemine taşıyor.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)] mb-6 text-balance">
              Hikâyemiz
            </h2>
            <p className="text-[var(--ink-muted)] leading-relaxed mb-6">
              Şirket ortaklarının uzun yıllara dayanan çalışması sonucu kurulan firmamız; uygulama ve
              danışmanlık deneyimini koruyarak odağını yazılım ve e-ticarete kaydırdı.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "IGKfast ile e-ticaret SaaS altyapısı",
                "IGK Yapı ve Banyolia mağazaları",
                "Tamamlanan uygulama referansları",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--ink)]">
                  <CheckCircle className="h-5 w-5 text-[var(--brand-warm)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/igkfast"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] border-b-2 border-[var(--brand-warm)] pb-0.5 hover:text-[var(--brand-warm)] transition-colors"
            >
              IGKfast yazılımı
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="aspect-[4/3] overflow-hidden bg-[var(--surface-elevated)]">
            <img
              src="/modern-construction-building-exterior.jpg"
              alt="Karahisarlıoğlu Yapı Tasarım"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--ink)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed font-[family-name:var(--font-display)] mb-8">
            “Deneyimimizi yazılım ve e-ticaret markalarımızla geleceğe taşıyoruz. Her işte güven ve
            kalite önceliğimizdir.”
          </blockquote>
          <cite className="text-[var(--brand-warm)] font-semibold tracking-wide not-italic">
            C. Gürol Karahisarlıoğlu — Yönetici
          </cite>
        </div>
      </section>

      <section className="py-20 border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">Bugün</p>
              <h2 className="text-3xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)]">
                Grup şirketlerimiz
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/igkfast"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] hover:text-[var(--brand-warm)] transition-colors"
              >
                IGKfast
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/magazalar"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] hover:text-[var(--brand-warm)] transition-colors"
              >
                Mağazalar
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/igkfast"
              className="block border border-[var(--border-soft)] p-6 hover:border-[var(--brand-warm)] transition-colors"
            >
              <div className="flex items-center justify-center h-16 mb-5 bg-black">
                <img src="/logos/igkfast-logo.svg" alt="IGKfast" className="max-h-10 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--ink)] font-[family-name:var(--font-display)] mb-2">
                IGKfast
              </h3>
              <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                Diğer işletmelere e-ticaret SaaS altyapısı sunan yazılım ürünümüz.
              </p>
            </Link>
            <Link
              href="/magazalar"
              className="block border border-[var(--border-soft)] p-6 hover:border-[var(--brand-warm)] transition-colors"
            >
              <div className="flex items-center justify-center gap-4 h-16 mb-5 bg-[var(--surface-elevated)] px-4">
                <img src="/logos/igkyapi-logo.png" alt="IGK Yapı" className="max-h-10 object-contain" />
                <img src="/logos/banyolia-logo.png" alt="Banyolia" className="max-h-10 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--ink)] font-[family-name:var(--font-display)] mb-2">
                Mağazalar
              </h3>
              <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                IGK Yapı ve Banyolia perakende e-ticaret kanallarımız.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">Geçmiş</p>
            <h2 className="text-3xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)] mb-4">
              Referanslarımız
            </h2>
            <p className="text-[var(--ink-muted)] leading-relaxed mb-6">
              Spor tesisleri, villa ve otel uygulamaları ile iç mimari tadilatlardan oluşan arşivimiz,
              grubumuzun uygulama disiplinini belgeler.
            </p>
            <Link
              href="/referanslar"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] border-b-2 border-[var(--brand-warm)] pb-0.5 hover:text-[var(--brand-warm)] transition-colors"
            >
              Referansları incele
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/projects/corum/_GUR4290.jpg" alt="" className="aspect-square object-cover" />
            <img src="/projects/park/NIKON D8007751-1.jpg" alt="" className="aspect-square object-cover mt-8" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--surface-elevated)] border-t border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[var(--surface)] border border-[var(--border-soft)] rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-[var(--ink)]">
                CK
              </div>
              <h3 className="text-lg font-semibold text-[var(--ink)]">C. Gürol Karahisarlıoğlu</h3>
              <p className="text-[var(--brand-warm)] text-sm mt-1">Yönetici Ortak</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[var(--surface)] border border-[var(--border-soft)] rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-[var(--ink)]">
                İK
              </div>
              <h3 className="text-lg font-semibold text-[var(--ink)]">İlke Karahisarlıoğlu</h3>
              <p className="text-[var(--brand-warm)] text-sm mt-1">Ortak</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

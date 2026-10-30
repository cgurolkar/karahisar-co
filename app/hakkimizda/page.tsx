import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, CheckCircle } from "lucide-react"

const brands = [
  {
    name: "IGKfast",
    href: "https://igkfast.com",
    local: "/igkfast",
    domain: "igkfast.com",
    title: "Yeni Nesil E-Ticaret SaaS Altyapısı",
    body: "Odak ürünümüz. Dijitalde satış yapmak ve ölçeklenmek isteyen işletmeler için yüksek performanslı, kesintisiz, güvenli ve modern SaaS tabanlı e-ticaret altyapısı geliştiriyoruz.",
    logo: "/logos/igkfast-logo.svg",
    logoBg: "bg-black",
  },
  {
    name: "IGK Yapı",
    href: "https://www.igkyapi.com.tr",
    local: "/magazalar",
    domain: "igkyapi.com.tr",
    title: "Dijital perakende — yapı ve banyo",
    body: "Lüks banyo malzemeleri, duş sistemleri ve batarya çözümlerini online mağaza deneyimiyle sunuyoruz.",
    logo: "/logos/igkyapi-logo.png",
    logoBg: "bg-[var(--surface-elevated)]",
  },
  {
    name: "Banyolia",
    href: "https://banyolia.com",
    local: "/magazalar",
    domain: "banyolia.com",
    title: "Dijital perakende — banyo aksesuarı",
    body: "Seçkin banyo aksesuarları koleksiyonlarıyla yaşam alanlarına değer katan e-ticaret markamız.",
    logo: "/logos/banyolia-logo.png",
    logoBg: "bg-[var(--surface-elevated)]",
  },
]

const values = [
  {
    title: "Ürün disiplini",
    body: "Stabil altyapı, test edilebilir kod ve ölçülebilir kalite — IGKfast’te her sürümde aynı standart.",
  },
  {
    title: "Tasarım ve deneyim",
    body: "İşlevsel olduğu kadar net, modern arayüzler ve vitrin deneyimleri üretiyoruz.",
  },
  {
    title: "Yenilikçi teknoloji",
    body: "SaaS, entegrasyonlar ve pazarlama araçlarıyla işletmelerin dijital satışını hızlandırıyoruz.",
  },
  {
    title: "Şeffaf ortaklık",
    body: "İş ortaklarımız ve müşterilerimizle sürdürülebilir, açık ilişkiler kuruyoruz.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <Navigation />

      <section className="relative min-h-[70svh] flex items-end overflow-hidden border-b border-[var(--border-soft)]">
        <div className="absolute inset-0 bg-[#0c0f14]" aria-hidden />
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('/media/igkfast/banner1.png')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f14] via-[#0c0f14]/85 to-[#0c0f14]/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <div className="flex items-center text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Hakkımızda</span>
          </div>
          <div className="mb-6 inline-flex items-center bg-black/80 border border-white/10 px-5 py-3">
            <img src="/logos/igkfast-logo.svg" alt="IGKfast" className="h-7 w-auto object-contain" />
          </div>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-4">
            Karahisarlıoğlu Yapı Tasarım
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-display)] max-w-4xl text-balance leading-[1.08]">
            Teknoloji odaklı yazılım grubu
          </h1>
          <p className="mt-5 text-lg text-white/85 max-w-2xl leading-relaxed">
            IGKfast e-ticaret SaaS platformu ve dijital mağaza markalarıyla işletmelerin satış
            altyapısını geliştiriyoruz.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)] mb-6 text-balance">
              Yazılım ürünü merkezde
            </h2>
            <p className="text-[var(--ink-muted)] leading-relaxed mb-5">
              Karahisarlıoğlu Yapı Tasarım Ltd. Şti. olarak odağımız teknolojidir. Ana ürünümüz{" "}
              <strong className="text-[var(--ink)]">IGKfast</strong>; diğer işletmelere e-ticaret
              SaaS altyapısı sunar. Kaliteyi, estetiği ve ölçeklenebilir mimariyi aynı ürün
              çatısı altında birleştiriyoruz.
            </p>
            <p className="text-[var(--ink-muted)] leading-relaxed mb-8">
              IGK Yapı ve Banyolia, grubumuzun kendi e-ticaret kanallarıdır; dışarıya anlattığımız
              asıl değer ise IGKfast platformudur.
            </p>
            <ul className="space-y-3">
              {[
                "IGKfast — e-ticaret SaaS (odak ürün)",
                "IGK Yapı & Banyolia — dijital mağazalar",
                "Tema, eklenti ve ölçüm ekosistemi",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--ink)]">
                  <CheckCircle className="h-5 w-5 text-[var(--brand-warm)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-[#0c0f14] border border-[var(--border-soft)]">
              <img
                src="/media/igkfast/banner1.png"
                alt="IGKfast platform"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--surface-elevated)] border-y border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">
              Markalarımız
            </p>
            <h2 className="text-3xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)] text-balance">
              Ürün ve kanallar
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <article key={brand.name} className="flex flex-col">
                <div className={`flex items-center justify-center h-16 mb-5 px-4 ${brand.logoBg}`}>
                  <img src={brand.logo} alt={brand.name} className="max-h-10 object-contain" />
                </div>
                <p className="text-xs tracking-wide uppercase text-[var(--brand-warm)] mb-2">
                  {brand.domain}
                </p>
                <h3 className="text-xl font-semibold text-[var(--ink)] font-[family-name:var(--font-display)] mb-2">
                  {brand.name}
                </h3>
                <p className="text-sm font-medium text-[var(--ink)] mb-3">{brand.title}</p>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed flex-1 mb-5">
                  {brand.body}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--ink)] border-b border-[var(--brand-warm)] pb-0.5 hover:text-[var(--brand-warm)] transition-colors"
                  >
                    Siteye git
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    href={brand.local}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--ink-muted)] hover:text-[var(--brand-warm)] transition-colors"
                  >
                    Özet
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">
              Vizyon
            </p>
            <h2 className="text-3xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)]">
              Değerlerimiz
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-10">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="text-lg font-semibold text-[var(--ink)] font-[family-name:var(--font-display)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--ink-muted)] leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--ink)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed font-[family-name:var(--font-display)] mb-8 text-balance">
            “Dijitalde geleceğinizi inşa ederken yanınızdayız — mühendislik disiplini, ürün tutkusu
            ve ölçeklenebilir teknolojiyle.”
          </blockquote>
          <cite className="not-italic block">
            <span className="text-[var(--brand-warm)] font-semibold tracking-wide">
              C. Gürol Karahisarlıoğlu
            </span>
            <span className="block mt-2 text-white/70 text-sm">
              Şirket Ortağı — Genel Müdür
            </span>
            <span className="block mt-1 text-white/50 text-sm">
              Karahisarlıoğlu Yapı Tasarım Ltd. Şti.
            </span>
          </cite>
        </div>
      </section>

      <section className="py-16 border-t border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)] mb-2">
              IGKfast’i konuşalım
            </h2>
            <p className="text-[var(--ink-muted)] max-w-xl">
              Demo, iş ortaklığı veya teknik sorularınız için bizimle iletişime geçin.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-[var(--brand-warm)] text-[var(--ink)] px-6 py-3 text-sm font-semibold hover:brightness-110 transition"
            >
              İletişim
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/igkfast"
              className="inline-flex items-center gap-2 border border-[var(--border-soft)] text-[var(--ink)] px-6 py-3 text-sm font-semibold hover:border-[var(--brand-warm)] transition"
            >
              IGKfast
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

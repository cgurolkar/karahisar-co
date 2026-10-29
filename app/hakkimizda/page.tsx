import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, CheckCircle } from "lucide-react"

const brands = [
  {
    name: "IGK Yapı",
    href: "https://www.igkyapi.com.tr",
    local: "/magazalar",
    domain: "igkyapi.com.tr",
    title: "Yapı ve Banyo Çözümlerinde Güvenilir Mühendislik",
    body: "Modern yaşam alanlarının en kritik noktası olan ıslak zeminlerde; lüks banyo malzemeleri, fonksiyonel duş sistemleri ve batarya/musluk çözümleri sunuyoruz. Sahadan gelen mühendislik bilgimizle dayanıklılığı, modern mimari trendlerle zarafeti harmanlayarak projelere değer katıyoruz.",
    logo: "/logos/igkyapi-logo.png",
    logoBg: "bg-[var(--surface-elevated)]",
  },
  {
    name: "Banyolia",
    href: "https://banyolia.com",
    local: "/magazalar",
    domain: "banyolia.com",
    title: "Yaşam Alanlarına Değer Katan Estetik Dokunuşlar",
    body: "Banyoları sadece birer kullanım alanı değil, birer konfor ve huzur noktası olarak tasarlıyoruz. Detaylardaki şıklığa, fonksiyonel dekorasyona ve sıcak çizgilere odaklanan seçkin banyo aksesuarları koleksiyonlarımızla evlere zarafet taşıyoruz.",
    logo: "/logos/banyolia-logo.png",
    logoBg: "bg-[var(--surface-elevated)]",
  },
  {
    name: "IGKfast",
    href: "https://igkfast.com",
    local: "/igkfast",
    domain: "igkfast.com",
    title: "Yeni Nesil E-Ticaret ve SaaS Altyapısı",
    body: "İnşaatta gösterdiğimiz sağlam temel yaklaşımını yazılım mimarisine taşıdık. Dijital dünyada satış yapmak ve ölçeklenmek isteyen işletmeler için yüksek performanslı, kesintisiz, güvenli ve modern SaaS tabanlı e-ticaret altyapı çözümleri geliştiriyoruz.",
    logo: "/logos/igkfast-logo.svg",
    logoBg: "bg-black",
  },
]

const values = [
  {
    title: "Mühendislik Disiplini",
    body: 'İnşaatın temel kuralı olan "sağlam zemin ve sıfır hata" anlayışını hem banyo mimarisine hem de geliştirdiğimiz yazılım kodlarına entegre ediyoruz.',
  },
  {
    title: "Tasarım ve Estetik",
    body: "Sadece işlevsel değil; göze hitap eden, zamansız ve modern yaşam biçimlerini destekleyen ürün ve arayüzler üretiyoruz.",
  },
  {
    title: "Yenilikçi Teknoloji",
    body: "Geleneksel ticaret ile dijital SaaS modellerini harmanlayarak müşterilerimize geleceğe hazır çözümler sunuyoruz.",
  },
  {
    title: "Koşulsuz Güven",
    body: "35 yılı aşkın sektörel mirasımızın bize yüklediği sorumlulukla, tüm iş ortaklarımız ve müşterilerimizle şeffaf ve sürdürülebilir bağlar kuruyoruz.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <Navigation />

      {/* Full-bleed hero with image #2 */}
      <section className="relative min-h-[70svh] flex items-end overflow-hidden border-b border-[var(--border-soft)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-karahisarlioglu-2.jpg')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-[var(--ink)]/30" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <div className="flex items-center text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Hakkımızda</span>
          </div>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-4">
            Karahisarlıoğlu Yapı Tasarım
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-display)] max-w-4xl text-balance leading-[1.08]">
            Geleceği İnşa Ediyor, Dijital Dünyayı Tasarlıyoruz
          </h1>
          <p className="mt-5 text-lg text-white/85 max-w-2xl leading-relaxed">
            35 yılı aşkın inşaat mühendisliği tecrübesini yazılım, e-ticaret ve modern mekan
            tasarımıyla birleştiren dönüşüm ekosistemi.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)] mb-6 text-balance">
              Köklü tecrübe, kapsamlı dönüşüm
            </h2>
            <p className="text-[var(--ink-muted)] leading-relaxed mb-5">
              Karahisarlıoğlu Yapı Tasarım Ltd. Şti. olarak, temellerimizi inşaat mühendisliği
              alanındaki 35 yılı aşkın köklü tecrübe, disiplin ve güven vizyonu üzerine kurduk.
              Sahadaki fiziki yapı üretiminde edindiğimiz mühendislik hassasiyetini, günümüzün
              hızla dijitalleşen dünyasında yazılım, e-ticaret altyapıları ve modern mekan
              tasarımıyla birleştirerek kapsamlı bir dönüşüm ekosistemine dönüştürdük.
            </p>
            <p className="text-[var(--ink-muted)] leading-relaxed mb-8">
              Fiziksel alanların inşasından dijital altyapıların mimarisine uzanan bu yolculukta;
              kaliteyi, estetiği ve teknolojiyi üç ana markamız çatısı altında bir araya getiriyoruz.
            </p>
            <ul className="space-y-3">
              {[
                "IGK Yapı — ıslak zemin ve armatür çözümleri",
                "Banyolia — seçkin banyo aksesuarları",
                "IGKfast — SaaS e-ticaret altyapısı",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--ink)]">
                  <CheckCircle className="h-5 w-5 text-[var(--brand-warm)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-[var(--surface-elevated)]">
              <img
                src="/hero-karahisarlioglu-2.jpg"
                alt="Karahisarlıoğlu Yapı Tasarım — vizyon"
                className="w-full h-full object-cover"
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
              Faaliyet alanlarımız
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <article key={brand.name} className="flex flex-col">
                <div
                  className={`flex items-center justify-center h-16 mb-5 px-4 ${brand.logoBg}`}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-10 object-contain"
                  />
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
            “Her proje sağlam bir vizyonla başlar. İster hayalinizdeki evi dekore ediyor olun, ister
            dijitalde geleceğinizi inşa ediyor olun; mühendislik bilgimiz, tasarım tutkumuz ve
            teknolojik çözümlerimizle yanınızdayız.”
          </blockquote>
          <cite className="not-italic block">
            <span className="text-[var(--brand-warm)] font-semibold tracking-wide">
              C. Gürol Karahisarlıoğlu
            </span>
            <span className="block mt-2 text-white/70 text-sm">
              Şirket Ortağı — Genel Müdür / İnşaat Mühendisi
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
              Birlikte geleceği inşa edelim
            </h2>
            <p className="text-[var(--ink-muted)] max-w-xl">
              Yazılım, mağaza veya proje danışmanlığı için bizimle iletişime geçin.
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
              href="/blog"
              className="inline-flex items-center gap-2 border border-[var(--border-soft)] text-[var(--ink)] px-6 py-3 text-sm font-semibold hover:border-[var(--brand-warm)] transition"
            >
              Blog
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

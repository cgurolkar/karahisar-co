import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, ArrowUpRight, CheckCircle } from "lucide-react"

const screens = [
  {
    src: "/media/igkfast/theme-store.png",
    title: "Tema mağazası",
    body: "Hazır vitrin temaları ile mağazayı dakikalar içinde açın; sektöre göre görsel dil seçin.",
  },
  {
    src: "/media/igkfast/plugins.png",
    title: "Eklenti & entegrasyonlar",
    body: "CRM, B2B, SMS, Google Marketing Tools ve daha fazlası — modüler eklenti paneli.",
  },
  {
    src: "/media/igkfast/orders-map.png",
    title: "Sipariş & analitik",
    body: "Coğrafi dağılım, şehir bazlı sipariş yoğunluğu ve gelir özetleri tek ekranda.",
  },
]

const capabilities = [
  "Çok kiracılı e-ticaret SaaS — her işletme kendi mağazasını yönetir",
  "Tema motoru ve vitrin özelleştirme",
  "Sipariş, katalog, müşteri ve kampanya yönetimi",
  "Pazarlama eklentileri: CRM, SMS, formlar, ürün paketleri",
  "Google Analytics, Ads, Tag Manager ve Merchant Center entegrasyonları",
  "Diğer işletmelerin Meta / reklam ve ölçüm ihtiyaçlarına altyapı desteği",
]

export default function IgkfastPage() {
  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <Navigation />

      <section className="relative overflow-hidden border-b border-[var(--border-soft)] pt-28 pb-16">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top right, var(--surface-tint) 0%, transparent 55%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center text-sm text-[var(--ink-muted)]">
            <Link href="/" className="transition-colors hover:text-[var(--ink)]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--ink)]">IGKfast</span>
          </div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand-warm)]">
            Yazılım · Tech Provider
          </p>
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center bg-black px-5 py-3">
                <img
                  src="/logos/igkfast-logo.svg"
                  alt="IGKfast"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <h1
                className="text-balance text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Diğer işletmeler için e-ticaret altyapısı
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--ink-muted)]">
                IGKfast, Karahisarlıoğlu Yapı Tasarım bünyesinde geliştirilen çok kiracılı bir SaaS
                platformudur. Markalar kendi mağazalarını kurar; sipariş, tema, eklenti ve ölçüm
                araçlarını tek panelden yönetir.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://igkfast.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  igkfast.com
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border border-[var(--border-soft)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--brand-warm)]"
                >
                  İletişim
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
              <div className="w-full max-w-[280px] sm:max-w-[320px]">
                <div className="aspect-[9/16] overflow-hidden border border-[var(--border-soft)] bg-black shadow-[0_24px_60px_-28px_rgba(0,0,0,0.45)]">
                  <video
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/media/igkfast/banner1.png"
                  >
                    <source src="/media/igkfast/presentation.mp4" type="video/mp4" />
                    Tarayıcınız video etiketini desteklemiyor.
                  </video>
                </div>
                <p className="mt-2 text-xs text-[var(--ink-muted)] text-center">
                  IGKfast ürün tanıtım videosu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-soft)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Platformdan ekranlar
          </h2>
          <p className="mb-12 max-w-2xl text-[var(--ink-muted)]">
            Gerçek mağaza paneli görüntüleri — tema seçimi, eklenti yönetimi ve sipariş analitikleri.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {screens.map((screen) => (
              <figure key={screen.src}>
                <div className="mb-4 aspect-[4/3] overflow-hidden border border-[var(--border-soft)] bg-[var(--surface-elevated)]">
                  <img
                    src={screen.src}
                    alt={screen.title}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <figcaption>
                  <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                    {screen.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--ink-muted)]">{screen.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-elevated)] py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--brand-warm)]">
              Ne sunuyoruz
            </p>
            <h2
              className="mb-6 text-balance text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              İşletmelere yazılım hizmeti
            </h2>
            <p className="mb-8 leading-relaxed text-[var(--ink-muted)]">
              IGKfast bir perakende vitrini değil; diğer şirketlerin kendi e-ticaret operasyonlarını
              yürüttüğü bir teknoloji platformudur. Bu nedenle Meta Business ve benzeri iş varlıkları
              bağlamında Tech Provider (teknoloji sağlayıcı) olarak konumlanır.
            </p>
            <ul className="space-y-3">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-warm)]" />
                  <span className="text-[var(--ink-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-[var(--border-soft)] bg-[var(--surface)] p-8 md:p-10">
            <h3 className="mb-4 text-xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              Doğrulama ve şeffaflık
            </h3>
            <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
              Platform; mağaza sahiplerinin Google Analytics, Google Ads, Tag Manager, Merchant Center
              ve reklam / ölçüm araçlarını kendi hesaplarıyla kullanmasına olanak tanır. Veri
              işleme ve gizlilik politikaları ürün sitesinde yayımlanır.
            </p>
            <p className="mb-6 leading-relaxed text-[var(--ink-muted)]">
              Detaylı ürün bilgisi, fiyatlandırma, başvuru ve yasal metinler için birincil adres{" "}
              <strong className="text-[var(--ink)]">igkfast.com</strong> sitesidir.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://igkfast.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[var(--brand-warm)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] transition hover:brightness-110"
              >
                Ürün sitesine git
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://igkfast.com/tr/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[var(--border-soft)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--brand-warm)]"
              >
                Gizlilik politikası
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border-soft)] py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Demo veya iş birliği
            </h2>
            <p className="mt-2 max-w-md text-[var(--ink-muted)]">
              IGKfast hakkında konuşmak veya Tech Provider süreçleri için bizimle iletişime geçin.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://igkfast.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white"
            >
              igkfast.com
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/magazalar"
              className="inline-flex items-center gap-2 border border-[var(--border-soft)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--brand-warm)]"
            >
              Mağazalarımız
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

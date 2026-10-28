import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ecosystemBrands } from "@/lib/ecosystem-data"
import { ArrowUpRight } from "lucide-react"

const stores = [
  {
    name: "IGK Yapı",
    logo: "/logos/igkyapi-logo.png",
    url: "https://www.igkyapi.com.tr",
    tagline: "Banyo aksesuarları, duş ve batarya",
    description:
      "Batarya ve musluklar, duş sistemleri, banyo aksesuarları ve yapı malzemeleri satan e-ticaret mağazamız. Kaliteli markaları tek çatı altında buluşturuyoruz.",
  },
  {
    name: "Banyolia",
    logo: "/logos/banyolia-logo.png",
    url: "https://banyolia.com",
    tagline: "Modern banyo çözümleri",
    description:
      "Banyo aksesuarları ve dekoratif çözümler sunan e-ticaret platformumuz. Günlük kullanıma uygun, şık ürün seçkisi.",
  },
]

export default function MagazalarPage() {
  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <Navigation />

      <section className="pt-28 pb-14 relative overflow-hidden border-b border-[var(--border-soft)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--surface-tint)_0%,_transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center text-sm text-[var(--ink-muted)] mb-6">
            <Link href="/" className="hover:text-[var(--ink)] transition-colors">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--ink)]">Mağazalar</span>
          </div>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">
            E-ticaret perakende
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)] font-[family-name:var(--font-display)] max-w-3xl text-balance">
            IGK Yapı ve Banyolia
          </h1>
          <p className="mt-4 text-lg text-[var(--ink-muted)] max-w-2xl">
            Grup bünyesindeki perakende mağazalarımız. Yazılım platformumuz için{" "}
            <Link href="/igkfast" className="text-[var(--ink)] underline underline-offset-2 hover:text-[var(--brand-warm)]">
              IGKfast sayfasına
            </Link>{" "}
            bakın.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {stores.map((store, index) => (
            <article
              key={store.name}
              className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center animate-fade-up ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="md:col-span-5 flex items-center justify-center min-h-[160px] px-8 py-10 bg-[var(--surface-elevated)] border border-[var(--border-soft)]">
                <img
                  src={store.logo}
                  alt={store.name}
                  className="max-h-16 w-auto max-w-full object-contain"
                />
              </div>
              <div className="md:col-span-7">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--ink-muted)] mb-2">
                  Online mağaza
                </p>
                <h2 className="text-3xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)] mb-2">
                  {store.name}
                </h2>
                <p className="text-[var(--brand-warm)] font-medium mb-4">{store.tagline}</p>
                <p className="text-[var(--ink-muted)] leading-relaxed mb-6 max-w-xl">
                  {store.description}
                </p>
                <a
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] border-b-2 border-[var(--brand-warm)] pb-0.5 hover:text-[var(--brand-warm)] transition-colors"
                >
                  Mağazayı ziyaret et
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-[var(--border-soft)] bg-[var(--surface-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)] mb-3">
            Çalıştığımız markalar
          </h2>
          <p className="text-[var(--ink-muted)] mb-10 max-w-xl">
            IGK Yapı vitrininde yer alan seçili marka portföyü.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {ecosystemBrands.map((brand) => (
              <a
                key={brand.id}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-3 p-6 bg-[var(--surface)] border border-[var(--border-soft)] hover:border-[var(--brand-warm)] transition-colors min-h-[140px]"
              >
                <img src={brand.logo} alt={brand.name} className="h-12 w-auto object-contain" />
                <span className="text-sm font-medium text-[var(--ink)] text-center">{brand.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

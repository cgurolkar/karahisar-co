import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { projects } from "@/lib/projects-data"
import { fullProjectArchiveList } from "@/lib/ecosystem-data"
import { ArrowUpRight, MapPin } from "lucide-react"

export default function ReferanslarPage() {
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
            <span className="text-[var(--ink)]">Referanslar</span>
          </div>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">
            Arşiv
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)] font-[family-name:var(--font-display)] max-w-3xl text-balance">
            Tamamlanan uygulamalar
          </h1>
          <p className="mt-4 text-lg text-[var(--ink-muted)] max-w-2xl">
            İnşaat ve uygulama geçmişimizden seçilmiş referanslar. Bugün odak noktamız yazılım ve
            e-ticaret ekosistemidir; bu çalışmalar grubumuzun uygulama deneyimini gösterir.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="group animate-fade-up"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <Link href={`/referanslar/${project.slug}`} className="block">
                  <div className="aspect-[4/3] overflow-hidden mb-5 bg-[var(--surface-elevated)]">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[var(--ink-muted)] mb-2">
                    <span>{project.year}</span>
                    <span aria-hidden>·</span>
                    <span>{project.category}</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-[var(--ink)] font-[family-name:var(--font-display)] group-hover:text-[var(--brand-warm)] transition-colors">
                    {project.title}
                  </h2>
                  <p className="mt-2 flex items-center text-sm text-[var(--ink-muted)]">
                    <MapPin className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                    {project.location}
                  </p>
                  <p className="mt-3 text-[var(--ink-muted)] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center mt-4 text-sm font-medium text-[var(--ink)]">
                    İncele
                    <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </article>
            ))}
          </div>

          <div className="border-t border-[var(--border-soft)] pt-12">
            <h2 className="text-2xl font-semibold text-[var(--ink)] font-[family-name:var(--font-display)] mb-6">
              Tüm referans listesi
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-[var(--ink-muted)] columns-1 md:columns-2 gap-x-12">
              {fullProjectArchiveList.map((item, index) => (
                <li key={index} className="pl-1 mb-3 break-inside-avoid">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

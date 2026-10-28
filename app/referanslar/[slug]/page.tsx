import { notFound } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects-data"
import { ArrowLeft, MapPin } from "lucide-react"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export default async function ReferansDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const basePath = `/projects/${project.slug}`

  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <Navigation />

      <section className="pt-28 pb-12 relative overflow-hidden border-b border-[var(--border-soft)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--surface-tint)_0%,_transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center text-sm text-[var(--ink-muted)] mb-6">
            <Link href="/" className="hover:text-[var(--ink)] transition-colors">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link href="/referanslar" className="hover:text-[var(--ink)] transition-colors">
              Referanslar
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--ink)] truncate max-w-[200px] sm:max-w-none">{project.title}</span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-warm)] mb-3">
            {project.category}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--ink)] font-[family-name:var(--font-display)] max-w-4xl">
            {project.title}
          </h1>
          <div className="flex items-center text-[var(--ink-muted)] text-sm mt-4">
            <MapPin className="w-4 h-4 mr-2 shrink-0" />
            {project.location}
          </div>
          <p className="text-[var(--ink-muted)] mt-1">{project.year}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/referanslar"
            className="inline-flex items-center text-[var(--ink)] hover:text-[var(--brand-warm)] font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tüm referanslara dön
          </Link>

          <p className="text-lg text-[var(--ink-muted)] leading-relaxed mb-12 max-w-3xl">
            {project.description}
          </p>

          <h2 className="text-2xl font-semibold text-[var(--ink)] font-[family-name:var(--font-display)] mb-6">
            Proje görselleri
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((img) => (
              <a
                key={img}
                href={`${basePath}/${encodeURIComponent(img)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[4/3] overflow-hidden bg-[var(--surface-elevated)] border border-[var(--border-soft)]"
              >
                <img
                  src={`${basePath}/${encodeURIComponent(img)}`}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

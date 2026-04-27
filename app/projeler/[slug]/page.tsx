import { notFound } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { NewsletterForm } from "@/components/newsletter-form"
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects-data"
import { ArrowLeft, MapPin } from "lucide-react"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const basePath = `/projects/${project.slug}`

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-12 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/construction-blueprint-pattern.png')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-white">
            <div className="flex items-center text-sm text-white/70 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <span className="mx-2">—</span>
              <Link href="/projeler" className="hover:text-white transition-colors">Projeler</Link>
              <span className="mx-2">—</span>
              <span className="text-white truncate max-w-[200px] sm:max-w-none">{project.title}</span>
            </div>
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider bg-teal-900/50 px-3 py-1 rounded">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-2">{project.title}</h1>
            <div className="flex items-center text-white/80 text-sm">
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
              {project.location}
            </div>
            <p className="text-white/70 mt-1">{project.year}</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projeler"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tüm projelere dön
          </Link>

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl">
            {project.description}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">Proje Görselleri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((img) => (
              <a
                key={img}
                href={`${basePath}/${encodeURIComponent(img)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[4/3] rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow"
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

      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <img src="/kara-logo-2.png" alt="Karahisarlıoğlu Yapı" className="h-10 w-auto" />
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>© Karahisarlıoğlu Yapı Tasarım Ltd.Şti</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

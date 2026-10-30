import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { blogPosts, blogCategories } from "@/lib/blog-data"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Karahisarlıoğlu Yapı Tasarım",
  description:
    "IGKfast e-ticaret SaaS, banyo çözümleri ve dijital dönüşüm üzerine yazılar. Karahisarlıoğlu Yapı Tasarım blog.",
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const featuredPost = featuredPosts[0]
  const otherPosts = blogPosts.filter((post) => post.id !== featuredPost?.id)

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
            <span className="text-[var(--ink)]">Blog</span>
          </div>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--brand-warm)] mb-3">
            Yazılım & ürün
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)] font-[family-name:var(--font-display)] max-w-3xl text-balance">
            Blog
          </h1>
          <p className="mt-4 text-lg text-[var(--ink-muted)] max-w-2xl">
            IGKfast, e-ticaret SaaS ve dijital büyüme — teknoloji odaklı, uygulanabilir içerikler.
          </p>
        </div>
      </section>

      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Badge className="bg-[var(--brand-warm)]/15 text-[var(--ink)] border-[var(--brand-warm)]/30">
                Öne çıkan
              </Badge>
            </div>

            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="grid lg:grid-cols-2 gap-0 border border-[var(--border-soft)] overflow-hidden hover:border-[var(--brand-warm)] transition-colors">
                <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[360px] overflow-hidden relative bg-[var(--surface-elevated)]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-[var(--ink)] text-white">
                    {featuredPost.category}
                  </Badge>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center bg-[var(--surface)]">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--ink)] font-[family-name:var(--font-display)] group-hover:text-[var(--brand-warm)] transition-colors text-balance">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[var(--ink-muted)] mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--ink-muted)] mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(featuredPost.date).toLocaleDateString("tr-TR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime} okuma</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center text-[var(--ink)] font-semibold">
                    Devamını oku
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="py-16 bg-[var(--surface-elevated)] border-t border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2 className="text-3xl font-bold text-[var(--ink)] font-[family-name:var(--font-display)]">
              Tüm yazılar
            </h2>
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="border-[var(--border-soft)] text-[var(--ink-muted)]"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block group h-full">
                <Card className="overflow-hidden border-[var(--border-soft)] hover:border-[var(--brand-warm)] transition-colors h-full bg-[var(--surface)] shadow-none rounded-none">
                  <div className="aspect-[16/10] overflow-hidden relative bg-[var(--surface-elevated)]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-[var(--ink)]/90 text-white">
                      {post.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-xs text-[var(--ink-muted)] mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString("tr-TR")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-[var(--ink)] font-[family-name:var(--font-display)] group-hover:text-[var(--brand-warm)] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-[var(--ink-muted)] text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center text-[var(--ink)] font-medium text-sm">
                      Devamını oku
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

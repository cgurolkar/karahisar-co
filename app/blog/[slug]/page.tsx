import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { NewsletterForm } from "@/components/newsletter-form"
import { BlogShareButtons } from "@/components/blog-share-buttons"
import { blogPosts, getPostBySlug } from "@/lib/blog-data"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const SITE_URL = "https://www.karahisarliogluyapi.com.tr"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return { title: "Yazı bulunamadı" }
  }
  return {
    title: `${post.title} | Blog`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [{ url: post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}` }],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const shareUrl = `/blog/${post.slug}`
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <Navigation />

      <section className="pt-28 pb-10 border-b border-[var(--border-soft)] bg-[var(--ink)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Blog&apos;a dön
          </Link>

          <Badge className="mb-4 bg-[var(--brand-warm)] text-[var(--ink)] border-0">
            {post.category}
          </Badge>

          <h1 className="text-3xl md:text-5xl font-bold text-balance mb-6 font-[family-name:var(--font-display)]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(post.date).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} okuma</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[21/9] overflow-hidden bg-[var(--surface-elevated)]">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12">
            <div className="flex-1 min-w-0">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-[var(--ink)]
                  prose-headings:font-[family-name:var(--font-display)]
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-[var(--ink-muted)] prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-[var(--ink)] prose-strong:font-semibold
                  prose-a:text-[var(--brand-warm)] prose-a:no-underline hover:prose-a:underline
                  prose-ul:my-6 prose-li:my-2 prose-li:text-[var(--ink-muted)]
                  prose-blockquote:border-[var(--brand-warm)] prose-blockquote:text-[var(--ink)]
                  prose-img:rounded-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <BlogShareButtons url={shareUrl} title={post.title} />
            </div>

            <aside className="hidden lg:block w-80 shrink-0">
              <div className="sticky top-24 space-y-6">
                <Card className="rounded-none shadow-none border-[var(--border-soft)]">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-[var(--ink)]">Yazar</h3>
                    <p className="text-sm text-[var(--ink-muted)] mb-4">{post.author}</p>
                    <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
                      Karahisarlıoğlu Yapı Tasarım: IGKfast, IGK Yapı ve Banyolia ile yazılım ve
                      perakende ekosistemi.
                    </p>
                  </CardContent>
                </Card>

                <Card className="rounded-none shadow-none border-[var(--border-soft)]">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-[var(--ink)]">Blog&apos;dan haberdar olun</h3>
                    <p className="text-sm text-[var(--ink-muted)] mb-4">
                      Yeni yazılardan haberdar olmak için abone olun.
                    </p>
                    <NewsletterForm />
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[var(--surface-elevated)] border-t border-[var(--border-soft)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-[var(--ink)] font-[family-name:var(--font-display)]">
              İlgili yazılar
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block group">
                  <Card className="overflow-hidden border-[var(--border-soft)] hover:border-[var(--brand-warm)] transition-colors h-full rounded-none shadow-none bg-[var(--surface)]">
                    <div className="aspect-video overflow-hidden bg-[var(--surface-elevated)]">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>

                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3 border-[var(--border-soft)]">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2 text-[var(--ink)] group-hover:text-[var(--brand-warm)] transition-colors line-clamp-2 font-[family-name:var(--font-display)]">
                        {relatedPost.title}
                      </h3>
                      <p className="text-[var(--ink-muted)] text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  )
}

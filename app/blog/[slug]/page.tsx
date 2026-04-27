import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { NewsletterForm } from "@/components/newsletter-form"
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Blog verileri (gerçek uygulamada database'den gelir)
const blogPosts = [
  {
    id: 1,
    slug: "insaat-sektorunde-2025-trendleri",
    title: "İnşaat Sektöründe 2025 Trendleri",
    excerpt: "2025 yılında inşaat sektöründe bizi bekleyen yenilikler ve trendler.",
    image: "/projects/corum/_GUR4290.jpg",
    category: "Sektör Haberleri",
    author: "C.Gürol Karahisarlıoğlu",
    date: "2025-01-15",
    readTime: "5 dk",
    content: `
      <h2>İnşaat Sektöründe Yeni Dönem</h2>
      <p>2025 yılı inşaat sektörü için heyecan verici yeniliklerle dolu. Sürdürülebilir yapı malzemeleri, akıllı binalar ve yeşil inşaat uygulamaları sektörün geleceğini şekillendiriyor.</p>
      
      <h3>1. Sürdürülebilir Yapı Malzemeleri</h3>
      <p>Çevre dostu malzemeler ve enerji verimliliği odaklı çözümler artık standart haline geliyor. Düşük karbon ayak izi bırakan malzemeler tercih ediliyor.</p>
      
      <h3>2. Akıllı Bina Teknolojileri</h3>
      <p>IoT sensörleri, otomasyon sistemleri ve yapay zeka destekli yönetim sistemleri modern binaların vazgeçilmezi.</p>
      
      <h3>3. Modüler İnşaat</h3>
      <p>Hızlı ve ekonomik çözümler sunan modüler inşaat yöntemleri popülerlik kazanıyor.</p>
      
      <h3>4. Yeşil Sertifikalar</h3>
      <p>LEED, BREEAM gibi yeşil bina sertifikaları artık zorunluluk haline geliyor.</p>
      
      <p>Karahisarlıoğlu Yapı olarak, bu trendleri yakından takip ediyor ve projelerimizde uyguluyoruz. 35 yıllık deneyimimizle, sektördeki yenilikleri müşterilerimize sunmaya devam ediyoruz.</p>
    `,
  },
  {
    id: 2,
    slug: "dogru-insaat-firmasi-secimi",
    title: "Doğru İnşaat Firması Nasıl Seçilir?",
    excerpt: "İnşaat projeniz için doğru firmayı seçerken dikkat etmeniz gereken kriterler.",
    image: "/projects/anka/IMG_0466.JPG",
    category: "Rehber",
    author: "Karahisarlıoğlu Yapı",
    date: "2025-01-10",
    readTime: "7 dk",
    content: `
      <h2>İnşaat Firması Seçiminde Dikkat Edilmesi Gerekenler</h2>
      <p>Hayalinizdeki projeyi gerçekleştirmek için doğru inşaat firması seçimi kritik öneme sahiptir.</p>
      
      <h3>1. Deneyim ve Referanslar</h3>
      <p>Firmanın sektördeki deneyimi ve tamamlanmış projeleri mutlaka incelenmeli. Referans projelerine bakın, müşteri yorumlarını okuyun.</p>
      
      <h3>2. Yasal Belgeler</h3>
      <p>Şirketin ticaret sicil belgesi, vergi levhası ve sektör yetkinlik belgeleri kontrol edilmeli.</p>
      
      <h3>3. Teknik Ekip</h3>
      <p>Uzman mühendis ve mimar kadrosu, kalifiye işçiler firmayı güvenilir kılar.</p>
      
      <h3>4. Maliyet ve Şeffaflık</h3>
      <p>Detaylı metraj ve keşif raporu alın. Gizli maliyetlere dikkat edin.</p>
      
      <h3>5. İletişim ve Süreç Yönetimi</h3>
      <p>Proje boyunca düzenli raporlama ve iletişim çok önemlidir.</p>
      
      <p>Karahisarlıoğlu Yapı olarak, 15 yıldır şeffaf ve güvenilir hizmet anlayışıyla çalışıyoruz. %100 müşteri memnuniyeti odaklı yaklaşımımızla yanınızdayız.</p>
    `,
  },
]

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Diğer önerilen yazılar
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/construction-blueprint-pattern.png')] bg-cover bg-center"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/blog" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Blog'a Dön
          </Link>

          <Badge className="mb-4 bg-primary text-primary-foreground">{post.category}</Badge>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white text-balance mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} okuma</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[21/9] overflow-hidden rounded-lg shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12">
            {/* Main Content */}
            <div className="flex-1">
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-foreground
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-ul:my-6 prose-li:my-2
                  prose-img:rounded-lg prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Buttons */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4">Paylaş:</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block w-80">
              <div className="sticky top-24 space-y-6">
                {/* Author Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Yazar</h3>
                    <p className="text-sm text-muted-foreground mb-4">{post.author}</p>
                    <p className="text-xs text-muted-foreground">
                      Karahisarlıoğlu Yapı ailesi olarak, 35 yıllık deneyimimizle sektördeki gelişmeleri sizlerle paylaşıyoruz.
                    </p>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Blog'dan Haberdar Olun</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Yeni yazılarımızdan haberdar olmak için abone olun.
                    </p>
                    <NewsletterForm />
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-secondary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">İlgili Yazılar</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">{relatedPost.category}</Badge>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
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

      {/* Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/kara-logo-2.png" alt="Karahisarlıoğlu Yapı" className="h-12 w-auto" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                35 yıllık deneyim ve 15 yıllık firma geçmişimizle, inşaat sektöründe güvenilir ve kaliteli hizmet sunuyoruz.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">İletişim</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📞 +90 532 743 41 33</p>
                <p>📧 info@karahisarliogluyapi.com.tr</p>
                <p>📍 İlkbahar Mahallesi Güneypark Kümeevler Sinpaş Altınoran Çarşı 19/B -2. Bodrum Katı No:31 - Çankaya / ANKARA</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Şirket</h4>
              <div className="space-y-2 text-sm">
                <Link href="/hakkimizda" className="text-gray-400 hover:text-white block transition-colors">
                  HAKKIMIZDA
                </Link>
                <Link href="/projeler" className="text-gray-400 hover:text-white block transition-colors">
                  PROJELER
                </Link>
                <Link href="/ortaklar" className="text-gray-400 hover:text-white block transition-colors">
                  ORTAKLAR
                </Link>
                <Link href="/blog" className="text-gray-400 hover:text-white block transition-colors">
                  BLOG
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Haberlerimize Abone Olun</h4>
              <p className="text-gray-400 text-sm mb-4">
                Projelerimiz ve yeniliklerimiz hakkında güncel bilgileri almak için abone olun
              </p>
              <NewsletterForm />
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              <a href="https://igkfast.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                IGKfast
              </a>
              {" "}@ Karahisarlıoğlu Yapı Tasarım Markasıdır
              <br />
              Tüm hakları saklıdır © 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

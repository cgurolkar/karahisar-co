import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { NewsletterForm } from "@/components/newsletter-form"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Blog yazıları - Buraya yeni blog ekleyebilirsiniz
const blogPosts = [
  {
    id: 1,
    slug: "insaat-sektorunde-2025-trendleri",
    title: "İnşaat Sektöründe 2025 Trendleri",
    excerpt: "2025 yılında inşaat sektöründe bizi bekleyen yenilikler ve trendler. Sürdürülebilir yapı malzemeleri, akıllı binalar ve yeşil inşaat uygulamaları.",
    content: "Blog içeriği buraya gelecek...",
    image: "/projects/corum/_GUR4290.jpg",
    category: "Sektör Haberleri",
    author: "C.Gürol Karahisarlıoğlu",
    date: "2025-01-15",
    readTime: "5 dk",
    featured: true,
  },
  {
    id: 2,
    slug: "dogru-insaat-firmasi-secimi",
    title: "Doğru İnşaat Firması Nasıl Seçilir?",
    excerpt: "İnşaat projeniz için doğru firmayı seçerken dikkat etmeniz gereken kriterler. Deneyim, referanslar ve kalite standartları.",
    content: "Blog içeriği buraya gelecek...",
    image: "/projects/anka/IMG_0466.JPG",
    category: "Rehber",
    author: "Karahisarlıoğlu Yapı",
    date: "2025-01-10",
    readTime: "7 dk",
    featured: true,
  },
  {
    id: 3,
    slug: "modern-banyo-tasarimlari",
    title: "2025'in Modern Banyo Tasarımları",
    excerpt: "Modern banyo dekorasyonunda minimal tasarım, fonksiyonellik ve estetik bir arada. İşte en popüler banyo trendleri.",
    content: "Blog içeriği buraya gelecek...",
    image: "/projects/interior/IMG_2139.JPG",
    category: "Tasarım",
    author: "Karahisarlıoğlu Yapı",
    date: "2025-01-05",
    readTime: "6 dk",
    featured: false,
  },
  {
    id: 4,
    slug: "insaat-proje-yonetimi",
    title: "Başarılı İnşaat Proje Yönetimi İçin İpuçları",
    excerpt: "İnşaat projelerinde zaman ve maliyet yönetimi, kalite kontrol ve risk yönetimi için pratik öneriler.",
    content: "Blog içeriği buraya gelecek...",
    image: "/projects/park/NIKON D8007751-1.jpg",
    category: "Proje Yönetimi",
    author: "C.Gürol Karahisarlıoğlu",
    date: "2024-12-28",
    readTime: "8 dk",
    featured: false,
  },
]

const categories = ["Tümü", "Sektör Haberleri", "Rehber", "Tasarım", "Proje Yönetimi"]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const otherPosts = blogPosts.filter(post => post.id !== featuredPost?.id)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/construction-blueprint-pattern.png')] bg-cover bg-center"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-white">
            <div className="flex items-center text-sm text-white/70 mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Ana Sayfa
              </Link>
              <span className="mx-2">—</span>
              <span className="text-white">Blog</span>
            </div>

            <div className="mb-4 text-sm font-medium text-teal-400 tracking-wider uppercase">BLOG & HABERLER</div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Blog</h1>
            <p className="text-xl text-white/90 text-pretty max-w-3xl">
              İnşaat sektöründeki yenilikler, projelerimiz ve uzman görüşleri
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Badge className="bg-primary/10 text-primary border-primary/20">ÖNE ÇIKAN</Badge>
            </div>
            
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-primary/20">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] lg:aspect-auto overflow-hidden relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {featuredPost.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground text-pretty mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString('tr-TR')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime} okuma</span>
                      </div>
                    </div>

                    <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                      Devamını Oku
                      <ArrowRight className="h-5 w-5 ml-2 group-hover:ml-0 transition-all" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* Other Posts */}
      <section className="py-16 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Tüm Yazılar</h2>
            
            {/* Categories Filter */}
            <div className="hidden md:flex gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm text-pretty mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-primary font-medium text-sm">
                      Devamını Oku
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
                <p>
                  📍 İlkbahar Mahallesi Güneypark Kümeevler Sinpaş Altınoran Çarşı 19/B -2. Bodrum Katı No:31
                  <br />
                  Çankaya / ANKARA
                </p>
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
              <a href="https://www.igksoft.com.tr" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                IGKSoft
              </a>
              {" "}@ Karahisarlıoğlu Yapı Tasarım Markasıdır
              <br />
              Tüm hakları saklıdır © 2025
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors cursor-pointer">
                <span className="text-slate-900 font-bold text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors cursor-pointer">
                <span className="text-slate-900 font-bold text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors cursor-pointer">
                <span className="text-slate-900 font-bold text-sm">in</span>
              </div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors cursor-pointer">
                <span className="text-slate-900 font-bold text-sm">@</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

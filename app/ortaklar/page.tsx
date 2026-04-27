import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { NewsletterForm } from "@/components/newsletter-form"
import { Users, Award, Handshake, Star, Globe, CheckCircle } from "lucide-react"
import Link from "next/link"

// Kardeş Firmalarımız
const sisterCompanies = [
  {
    id: 1,
    name: "IGKfast",
    category: "Teknoloji & Yazılım",
    logo: "/logos/igkfast-logo.png",
    url: "https://igkfast.com",
    description: "Yazılım geliştirme, web tasarımı ve dijital tasarım çözümleri sunan teknoloji firmamız. Modern web uygulamaları, mobil çözümler ve kurumsal yazılım projeleri geliştirmektedir.",
    established: "Teknoloji grubu",
  },
  {
    id: 2,
    name: "IGK Yapı",
    category: "E-Ticaret & Yapı Malzemeleri",
    logo: "/logos/igkyapi-logo.png",
    url: "https://www.igkyapi.com.tr",
    description: "Banyo aksesuarları, batarya ve musluklar, duş sistemleri gibi dekorasyon ürünleri ve ekipmanlarının satışını gerçekleştiren e-ticaret platformumuz. Kaliteli ve güvenilir ürünler sunmaktadır.",
    established: "E-Ticaret grubu",
  },
  {
    id: 3,
    name: "Banyolia",
    category: "E-Ticaret & Banyo Ürünleri",
    logo: "/logos/banyolia-logo.png",
    url: "https://www.banyolia.com.tr",
    description: "Banyo aksesuarları, batarya ve musluklar, duş sistemleri gibi dekorasyon ürünleri ve ekipmanlarının satışını gerçekleştiren e-ticaret platformumuz. Modern ve şık banyo çözümleri sunmaktadır.",
    established: "E-Ticaret grubu",
  },
]

// Çalıştığımız Markalar
const brands = [
  {
    id: 1,
    name: "Çelik Banyo",
    category: "Banyo Aksesuarları",
    logo: "/logos/brands/celikbanyo.png",
    url: "https://www.igkyapi.com.tr/marka/celikbanyo-18",
  },
  {
    id: 2,
    name: "DUXXA",
    category: "Banyo Aksesuarları",
    logo: "/logos/brands/duxxa.png",
    url: "https://www.igkyapi.com.tr/marka/duxxa",
  },
  {
    id: 3,
    name: "Easton",
    category: "Banyo Ürünleri",
    logo: "/logos/brands/easton.png",
    url: "https://www.igkyapi.com.tr/marka/easton",
  },
  {
    id: 4,
    name: "GPD",
    category: "Armatür & Batarya",
    logo: "/logos/brands/gpd.png",
    url: "https://www.igkyapi.com.tr/marka/gpd",
  },
  {
    id: 5,
    name: "Kare Batarya",
    category: "Batarya Sistemleri",
    logo: "/logos/brands/kare.png",
    url: "https://www.igkyapi.com.tr/marka/karebatarya",
  },
  {
    id: 6,
    name: "NKP",
    category: "Banyo Aksesuarları",
    logo: "/logos/brands/nkp.png",
    url: "https://www.igkyapi.com.tr/marka/nkp",
  },
  {
    id: 7,
    name: "TEMA",
    category: "Duş & Banyo",
    logo: "/logos/brands/tema.jpg",
    url: "https://www.igkyapi.com.tr/marka/tema",
  },
  {
    id: 8,
    name: "XinDa",
    category: "Endüstriyel Ürünler",
    logo: "/logos/brands/xinda.png",
    url: "https://www.igkyapi.com.tr/marka/xinda",
  },
]

const partners = [
  {
    id: 1,
    name: "Yapı Kredi Bankası",
    category: "Finansal Partner",
    logo: "/placeholder.svg?height=80&width=200&text=Yapı+Kredi",
    description: "İnşaat projelerimizde finansal destek sağlayan güvenilir bankacılık ortağımız.",
    partnership: "2020'den beri",
  },
  {
    id: 2,
    name: "Akçansa Çimento",
    category: "Malzeme Tedarikçisi",
    logo: "/placeholder.svg?height=80&width=200&text=Akçansa",
    description: "Yüksek kaliteli çimento ve yapı malzemeleri tedarikçimiz.",
    partnership: "2018'den beri",
  },
  {
    id: 3,
    name: "Bosch Termoteknik",
    category: "Teknoloji Ortağı",
    logo: "/placeholder.svg?height=80&width=200&text=Bosch",
    description: "Akıllı ev sistemleri ve ısıtma çözümleri ortağımız.",
    partnership: "2019'dan beri",
  },
  {
    id: 4,
    name: "Kale Seramik",
    category: "Malzeme Tedarikçisi",
    logo: "/placeholder.svg?height=80&width=200&text=Kale+Seramik",
    description: "Premium seramik ve banyo ürünleri tedarikçimiz.",
    partnership: "2017'den beri",
  },
  {
    id: 5,
    name: "Schneider Electric",
    category: "Teknoloji Ortağı",
    logo: "/placeholder.svg?height=80&width=200&text=Schneider",
    description: "Elektrik sistemleri ve otomasyon çözümleri ortağımız.",
    partnership: "2021'den beri",
  },
  {
    id: 6,
    name: "İstanbul Büyükşehir Belediyesi",
    category: "Kamu Ortağı",
    logo: "/placeholder.svg?height=80&width=200&text=İBB",
    description: "Kamu projelerinde işbirliği yaptığımız belediye ortağımız.",
    partnership: "2016'dan beri",
  },
]

const clients = [
  {
    name: "Ahmet Yılmaz",
    project: "Modern Villa",
    testimonial: "Karahisarlıoğlu Yapı ile çalışmak harika bir deneyimdi. Profesyonel ekip ve kaliteli işçilik.",
    rating: 5,
    location: "İstanbul",
  },
  {
    name: "Mehmet Demir",
    project: "Ticari Bina",
    testimonial: "Zamanında teslim, bütçeye uygun ve mükemmel kalite. Kesinlikle tavsiye ederim.",
    rating: 5,
    location: "Ankara",
  },
  {
    name: "Fatma Kaya",
    project: "Apartman Yenileme",
    testimonial: "Detaylara gösterdikleri özen ve müşteri memnuniyeti odaklı yaklaşımları çok etkileyici.",
    rating: 5,
    location: "İzmir",
  },
]

const stats = [
  { number: "50+", label: "Güvenilir Partner", icon: Handshake },
  { number: "1000+", label: "Mutlu Müşteri", icon: Users },
  { number: "5+", label: "Firma Olarak Faaliyet Yılı", icon: Award },
  { number: "25+", label: "Şehir", icon: Globe },
]

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-16 bg-industrial-darker relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/construction-blueprint-pattern.png')] bg-cover bg-center"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-white">
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm text-white/70 mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Ana Sayfa
              </Link>
              <span className="mx-2">—</span>
              <span className="text-white">Ortaklar</span>
            </div>

            <div className="mb-4 text-sm font-medium text-accent tracking-wider uppercase">İŞ ORTAKLARI</div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Ortaklarımız</h1>
            <p className="text-xl text-white/90 text-pretty max-w-3xl">
              Güçlü ortaklıklar ve memnun müşterilerle birlikte büyüyen bir aile.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sister Companies Section */}
      <section className="py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4 text-sm font-medium text-muted-foreground tracking-wider uppercase">
              KARDEŞ FİRMALARIMIZ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
              Grup <span className="text-accent">Şirketlerimiz</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
              Farklı sektörlerde faaliyet gösteren kardeş firmalarımız ile güçlü bir grup yapısı oluşturuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sisterCompanies.map((company) => (
              <Card key={company.id} className="group hover:shadow-2xl transition-all duration-300 border-2 border-accent/20 hover:border-accent/50">
                <CardContent className="p-8 text-center">
                  <div
                    className={`mb-6 rounded-lg p-4 shadow-sm flex items-center justify-center min-h-[104px] ${
                      company.id === 1 ? "bg-black" : "bg-white"
                    }`}
                  >
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      className="h-20 mx-auto object-contain"
                    />
                  </div>

                  <Badge variant="default" className="mb-4 bg-accent text-accent-foreground">
                    {company.category}
                  </Badge>

                  <h3 className="text-2xl font-bold mb-3">{company.name}</h3>

                  <p className="text-muted-foreground text-pretty mb-6 leading-relaxed">{company.description}</p>

                  <div className="text-sm font-medium text-accent mb-4">{company.established}</div>

                  <a 
                    href={company.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      WEB SİTESİNİ ZİYARET ET →
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4 text-sm font-medium text-muted-foreground tracking-wider uppercase">
              ÇALIŞTIĞIMIZ MARKALAR
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
              Dünya Markaları ile <span className="text-accent">Çalışıyoruz</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
              Projelerimizde dünya çapında tanınmış, kaliteli markaların ürünlerini tercih ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <a
                key={brand.id}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/50 cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 h-16 flex items-center justify-center">
                      <img
                        src={brand.logo || "/placeholder.svg"}
                        alt={brand.name}
                        className="max-h-16 mx-auto object-contain grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <h4 className="text-sm font-bold mb-1 group-hover:text-accent transition-colors">{brand.name}</h4>
                    <p className="text-xs text-muted-foreground">{brand.category}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-industrial-darker relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/construction-blueprint-pattern.png')] bg-cover bg-center"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="mb-4 text-sm font-medium text-accent tracking-wider uppercase">MÜŞTERİ YORUMLARI</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-balance mb-6">
              Müşterilerimiz <span className="text-accent">Ne Diyor?</span>
            </h2>
            <p className="text-lg text-white/80 text-pretty max-w-3xl mx-auto">
              Projelerimizi tamamladığımız müşterilerimizin deneyimlerini dinleyin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(client.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-white/90 text-pretty mb-6 italic">"{client.testimonial}"</blockquote>

                  <div className="border-t border-white/20 pt-4">
                    <div className="font-semibold text-white">{client.name}</div>
                    <div className="text-sm text-white/70">{client.project}</div>
                    <div className="text-sm text-accent">{client.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 text-sm font-medium text-muted-foreground tracking-wider uppercase">ORTAKLIK</div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Bizimle <span className="text-accent">Ortaklık Kurun</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty mb-8">
            Sektörde güçlü bir yer edinmek ve kaliteli projeler üretmek için bizimle ortaklık kurmak istiyorsanız, size
            özel çözümler sunabiliriz.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-center space-x-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-semibold">Güçlü İş Birliği</h4>
                <p className="text-muted-foreground text-sm">Uzun vadeli ve karşılıklı kazançlı ortaklıklar</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-semibold">Kaliteli Projeler</h4>
                <p className="text-muted-foreground text-sm">Yüksek standartlarda proje geliştirme</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground">
              ORTAKLIK BAŞVURUSU
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              DAHA FAZLA BİLGİ
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-industrial-darker py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/kara-logo-2.png" alt="Karahisarlıoğlu Yapı" className="h-12 w-auto" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                35 yıllık deneyim ve 5 yıllık firma geçmişimizle, inşaat sektöründe güvenilir ve kaliteli hizmet sunuyoruz. Müşteri memnuniyeti odaklı yaklaşımımızla projelerinizi hayata geçiriyoruz.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">İletişim</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📞 +90 532 743 41 33</p>
                <p>📧 info@karahisarliogluyapi.com.tr</p>
                <p>📍 İlkbahar Mahallesi Güneypark Kümeevler Sinpaş Altınoran Çarşı 19/B -2. Bodrum Katı No:31 Çankaya/ANKARA</p>
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
                <Link href="/iletisim" className="text-gray-400 hover:text-white block transition-colors">
                  İLETİŞİM
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
              <a href="https://igkfast.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                IGKfast
              </a>
              {" "}@ Karahisarlıoğlu Yapı Tasarım Markasıdır
              <br />
              © Karahisarlıoğlu Yapı Tasarım Ltd.Şti
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">in</span>
              </div>
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">@</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

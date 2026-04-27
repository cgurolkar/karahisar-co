"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  TrendingUp,
  Target,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { NewsletterForm } from "@/components/newsletter-form"
import { useState, useEffect } from "react"

const heroSlides = [
  {
    id: 1,
    image: "/projects/corum/_GUR4290.jpg",
    title: "ÇÖZÜM VE GÜVEN",
    subtitle: "İÇİN",
    description:
      "Şirket ortaklarının 35 yıllık deneyim ve çalışması sonucu kurulan firmamız 5 yıllık bir çalışma geçmişiyle bir çok işe hem uygulama hem de danışmanlık yapmıştır.",
    smallText: "başından sonuna",
  },
  {
    id: 2,
    image: "/projects/anka/IMG_0466.JPG",
    title: "ANKARA ANKAPARK",
    subtitle: "OTOROBOT BİNASI",
    description: "Ankara'nın eğlence parkı olarak tasarlanan AnkaPark içerisinde yer alan Otorobot binasının kazı işleri, temel yalıtım ve kaba inşaat imalatları.",
  },
  {
    id: 3,
    image: "/projects/park/NIKON D8007751-1.jpg",
    title: "MÜSTAKİL VİLLA",
    subtitle: "İNŞAATI",
    description: "Çankaya Park Caddesinde 500 m² arsa üzerine toplamda 300 m² inşaat alanı olarak projelendirilen villa binasının tüm imalatları.",
  },
  {
    id: 4,
    image: "/projects/golbasi/IMG_2180-1.jpg",
    title: "HAVUZ VE ÇEVRE",
    subtitle: "DÜZENLEMESİ",
    description: "Gölbaşı öğrenci yurduna ek bina olarak tasarlanan kapalı havuz ve yurt binasının çevre düzenleme işleri.",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-darker/20" />

        {/* Slider Images */}
        <div className="absolute inset-0 opacity-30">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image || "/placeholder.svg"}
                alt={`${slide.title} ${slide.subtitle}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4">
                    {slide.title}
                    <span className="block text-primary">{slide.subtitle}</span>
                    {"smallText" in slide && (
                      <span className="block text-lg md:text-xl text-white/80 mt-2 font-normal">{slide.smallText}</span>
                    )}
                  </h1>
                  <p className="text-base md:text-lg text-white/90 text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/projeler">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3">
                        PROJELERİMİZ
                      </Button>
                    </Link>
                    <Link href="/iletisim">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10 px-6 py-3 bg-transparent"
                      >
                        İLETİŞİM
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slider Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Carousel Photos */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center space-x-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-24 h-24 ring-2 ring-primary ring-offset-2 ring-offset-transparent"
                    : "w-20 h-20 hover:w-22 hover:h-22"
                }`}
              >
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={`${slide.title} thumbnail`}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-black/20 ${
                    index === currentSlide ? "bg-black/0" : "hover:bg-black/10"
                  } transition-all duration-300`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-36 left-1/2 -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-primary w-8" : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sister Companies Section */}
      <section className="py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">KARDEŞ FİRMALARIMIZ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
              Grup
              <span className="block text-primary">Şirketlerimiz</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Farklı sektörlerde faaliyet gösteren kardeş firmalarımız ile güçlü bir grup yapısı oluşturuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6 rounded-lg bg-white p-4 shadow-sm flex justify-center items-center min-h-[88px]">
                  <img
                    src="/logos/igkfast-logo-591.png"
                    alt="IGKfast"
                    className="h-14 mx-auto object-fill"
                  />
                </div>
                <Badge className="mb-3 bg-primary text-primary-foreground">Teknoloji & Yazılım</Badge>
                <h3 className="text-xl font-bold mb-3">
                  <span className="font-bold">IGK</span>
                  <span className="italic font-semibold">fast</span>
                </h3>
                <p className="text-muted-foreground text-sm mb-4">Yazılım geliştirme, web tasarımı ve dijital çözümler</p>
                <a 
                  href="https://igkfast.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Ziyaret Et →
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6 bg-white rounded-lg p-4 shadow-sm">
                  <img
                    src="/logos/igkyapi-logo.png"
                    alt="IGK Yapı"
                    className="h-16 mx-auto object-contain"
                  />
                </div>
                <Badge className="mb-3 bg-primary text-primary-foreground">E-Ticaret</Badge>
                <h3 className="text-xl font-bold mb-3">IGK Yapı</h3>
                <p className="text-muted-foreground text-sm mb-4">Banyo aksesuarları ve yapı malzemeleri</p>
                <a 
                  href="https://www.igkyapi.com.tr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Ziyaret Et →
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6 bg-white rounded-lg p-4 shadow-sm">
                  <img
                    src="/logos/banyolia-logo.png"
                    alt="Banyolia"
                    className="h-16 mx-auto object-contain"
                  />
                </div>
                <Badge className="mb-3 bg-primary text-primary-foreground">E-Ticaret</Badge>
                <h3 className="text-xl font-bold mb-3">Banyolia</h3>
                <p className="text-muted-foreground text-sm mb-4">Modern banyo çözümleri ve aksesuarlar</p>
                <a 
                  href="https://banyolia.com.tr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Ziyaret Et →
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">ÇALIŞTIĞIMIZ MARKALAR</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
              Dünya Markaları ile
              <span className="block text-primary">Çalışıyoruz</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Çelik Banyo", logo: "/logos/brands/celikbanyo.png" },
              { name: "DUXXA", logo: "/logos/brands/duxxa.png" },
              { name: "Easton", logo: "/logos/brands/easton.png" },
              { name: "GPD", logo: "/logos/brands/gpd.png" },
              { name: "Kare Batarya", logo: "/logos/brands/kare.png" },
              { name: "NKP", logo: "/logos/brands/nkp.png" },
              { name: "TEMA", logo: "/logos/brands/tema.jpg" },
              { name: "XinDa", logo: "/logos/brands/xinda.png" },
            ].map((brand, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-card rounded-lg border hover:shadow-lg transition-all group">
                <div className="text-center">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    className="h-12 mx-auto object-contain mb-2 grayscale group-hover:grayscale-0 transition-all"
                  />
                  <div className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                    {brand.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/ortaklar">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                TÜM ORTAKLARIMIZI GÖRÜN →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-industrial-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-darker to-industrial-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">GELECEĞE DÖNÜK HISSEDIYORUZ</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white text-balance mb-6">
                Fikirlerinizi ve Yeniliklerinizi
                <span className="block text-primary">Hayata Geçiriyoruz</span>
              </h2>
              <p className="text-lg text-white/80 text-pretty mb-8 leading-relaxed">
                Şirket ortaklarının 35 yıllık deneyim ve çalışması sonucu kurulan firmamız 5 yıllık bir çalışma geçmişiyle bir çok işe hem uygulama hem de danışmanlık yapmıştır.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Başarıyla Tamamlanan Projeler</h4>
                    <p className="text-white/70 text-sm">Yüksek kalite standartlarında</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Target className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Tasarımda Sadelik ve Pratiklik</h4>
                    <p className="text-white/70 text-sm">Modern yaklaşımlarla</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Award className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Yüksek Seviye İnşaat Kontrol Onayı</h4>
                    <p className="text-white/70 text-sm">Güvenilir süreç yönetimi</p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6">
                ŞİRKET HAKKINDA
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">50+</div>
                  <div className="text-white/80">İnşaat Mühendisliği</div>
                  <div className="text-white/60 text-sm">Aktif Projeler</div>
                </div>

                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">100%</div>
                  <div className="text-white/80">İnşaat Uygulamaları</div>
                  <div className="text-white/60 text-sm">Memnuyiyet Oranı</div>
                </div>
              </div>

              <div className="mt-8">
                <img
                  src="/projects/corum/_GUR4290.jpg"
                  alt="Modern İnşaat Projesi"
                  className="rounded-lg shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">SÜRDÜRÜLEBİLİR İNŞAAT</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-balance mb-8">
                Neden <span className="text-primary">Bizi</span> Seçmelisiniz
              </h2>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Tamamlanan Projeler</div>
                  <div className="text-xs text-muted-foreground">Her Yıl</div>
                </div>

                
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">İnşaat Uygulamaları</div>
                  <div className="text-xs text-muted-foreground">Memnuyiyet Oranı</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Grup Şirketleri</div>
                  <div className="text-xs text-muted-foreground">Yazılım Geliştirme ve E-Ticaret</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-muted-foreground text-pretty leading-relaxed">
                35 yıllık deneyimimiz ve 5 yıllık firma geçmişimizle, inşaat sektöründe güvenilir ve kaliteli hizmet sunmaya devam ediyoruz. Müşteri memnuniyeti odaklı yaklaşımımız ve profesyonel ekibimizle her projede en yüksek standartları sağlıyoruz.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">01</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Uzman Kadro ve Deneyim</h4>
                    <p className="text-muted-foreground text-sm text-pretty">
                      35 yıllık sektör deneyimi ve uzman mühendis kadromuzla, her projede profesyonel çözümler sunuyoruz. Kalite ve güvenilirlik önceliğimizdir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">02</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Zamanında Teslimat</h4>
                    <p className="text-muted-foreground text-sm text-pretty">
                      Projelerimizi planlanan süre içinde, kaliteden ödün vermeden tamamlıyoruz. Müşteri memnuniyeti %100'dür.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">03</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Kaliteli Malzeme ve İşçilik</h4>
                    <p className="text-muted-foreground text-sm text-pretty">
                      Dünya markası ürünler ve kalifiye işçilik ile projelerinizi en yüksek kalite standartlarında hayata geçiriyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Hakkımızda
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
                Deneyim ve Kalite
                <span className="block text-primary">Bir Arada</span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty mb-6 leading-relaxed">
                Şirket ortaklarının 35 yıllık deneyim ve çalışması sonucu kurulan firmamız 5 yıllık bir çalışma geçmişiyle bir çok işe hem uygulama hem de danışmanlık yapmıştır. Müşteri memnuniyeti odaklı yaklaşımımızla, hayalinizdeki yapıları en yüksek kalite standartlarında inşa ediyoruz.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">35+</div>
                  <div className="text-sm text-muted-foreground">Yıl Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Tamamlanan Proje</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Müşteri Memnuniyeti</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/projects/park/NIKON D8007751-1.jpg"
                alt="Modern İnşaat Projesi"
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Hizmetlerimiz
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Kapsamlı İnşaat
              <span className="block text-primary">Çözümleri</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
              Mimari tasarımdan inşaat sürecine kadar tüm aşamalarda profesyonel hizmet sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Building2 className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4">Konut İnşaatı</h3>
                <p className="text-muted-foreground text-pretty">
                  Modern villa ve apartman projeleri için kapsamlı inşaat hizmetleri.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4">Ticari Yapılar</h3>
                <p className="text-muted-foreground text-pretty">
                  Ofis binaları, mağazalar ve endüstriyel tesisler için özel çözümler.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4">Mimari Tasarım</h3>
                <p className="text-muted-foreground text-pretty">Yaratıcı ve fonksiyonel mimari tasarım hizmetleri.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Projelerimiz
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Başarılı
              <span className="block text-primary">Projelerimiz</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/projects/corum/_GUR4290.jpg"
                  alt="Çorum Spor Kompleksi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Çorum Ortaköy Spor Kompleksi</h3>
                <p className="text-muted-foreground text-pretty">
                  Nizami Sentetik Çim Yüzeyli Futbol Sahası ve 480 Kişilik Tribün İnşaatı.
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/projects/anka/IMG_0466.JPG"
                  alt="AnkaPark Projesi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Ankara AnkaPark Otorobot Binası</h3>
                <p className="text-muted-foreground text-pretty">Eğlence parkı içinde kaba inşaat imalatları.</p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/projects/park/NIKON D8007751-1.jpg"
                  alt="Villa Projesi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Çankaya Park Caddesi Villa</h3>
                <p className="text-muted-foreground text-pretty">300 m² müstakil villa inşaatı ve tüm imalatlar.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              İletişim
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Projenizi
              <span className="block text-primary">Konuşalım</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
              Hayalinizdeki projeyi gerçeğe dönüştürmek için bizimle iletişime geçin.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-muted-foreground">+90 532 743 41 33</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">E-posta</h3>
                    <p className="text-muted-foreground">info@karahisarliogluyapi.com.tr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Adres</h3>
                    <p className="text-muted-foreground text-pretty">İlkbahar Mahallesi Güneypark Kümeevler Sinpaş Altınoran Çarşı 19/B -2. Bodrum Katı No:31 Çankaya/ANKARA</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ad Soyad</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">E-posta</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="E-posta adresiniz"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Konu</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Mesaj konusu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mesaj</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Mesaj Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
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
                  HİZMETLER
                </Link>
                <Link href="/projeler" className="text-gray-400 hover:text-white block transition-colors">
                  PROJELER
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
              © Karahisarlıoğlu Yapı Tasarım Ltd.Şti
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

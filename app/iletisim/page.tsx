"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { NewsletterForm } from "@/components/newsletter-form"
import { Phone, Mail, MapPin, User, Facebook, Instagram, Linkedin, Send } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

const ADRES = "İlkbahar Mahallesi Güneypark Kümeevler Sinpaş Altınoran Çarşı 19/B -2. Bodrum Katı No:31 Çankaya/ANKARA"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    details: ["+90 532 743 41 33"],
    description: "Pazartesi - Cuma: 08:00 - 18:00",
  },
  {
    icon: Mail,
    title: "E-posta",
    details: ["info@karahisarliogluyapi.com.tr"],
    description: "24 saat içinde yanıt garantisi",
  },
  {
    icon: MapPin,
    title: "Adres",
    details: [ADRES],
    description: "Merkez ofisimiz",
  },
  {
    icon: User,
    title: "Yönetici",
    details: ["C.Gürol KARAHİSARLIOĞLU"],
    description: "Karahisarlıoğlu Yapı Tasarım",
  },
]

const services = [
  "Konut İnşaatı",
  "Ticari Yapılar",
  "Endüstriyel Tesisler",
  "Mimari Tasarım",
  "Proje Danışmanlığı",
  "Yapı Denetimi",
  "Tadilat ve Renovasyon",
  "Peyzaj Düzenlemesi",
]

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    privacy: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.privacy) {
      toast({
        title: "Gizlilik onayı gerekli",
        description: "Devam etmek için Gizlilik Politikası'nı kabul etmelisiniz.",
        variant: "destructive",
      })
      return
    }
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          service: form.service || undefined,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        toast({
          title: "Hata",
          description: data.message || "Gönderilemedi. Lütfen tekrar deneyin.",
          variant: "destructive",
        })
        return
      }
      toast({
        title: "Mesajınız iletildi",
        description: data.message,
      })
      setForm({ name: "", email: "", phone: "", service: "", message: "", privacy: false })
    } catch {
      toast({
        title: "Hata",
        description: "Bir hata oluştu. Lütfen tekrar deneyin.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <span className="text-white">İletişim</span>
            </div>

            <div className="mb-4 text-sm font-medium text-accent tracking-wider uppercase">İLETİŞİM</div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">İletişim</h1>
            <p className="text-xl text-white/90 text-pretty max-w-3xl">
              Hayalinizdeki projeyi gerçeğe dönüştürmek için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-border/50">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                    <info.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="font-medium">
                        {detail}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-4 text-sm font-medium text-muted-foreground tracking-wider uppercase">
                İLETİŞİM
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
                BİZE <span className="text-accent">Yazın</span>
              </h2>
              <p className="text-muted-foreground text-pretty mb-4">
                Aşağıdaki formu doldurarak veya doğrudan e-posta ile bize ulaşabilirsiniz.
              </p>
              <a
                href="mailto:info@karahisarliogluyapi.com.tr"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:underline mb-8"
              >
                <Mail className="h-5 w-5" />
                info@karahisarliogluyapi.com.tr
              </a>

              <Card className="border-border/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Ad Soyad *</label>
                        <input
                          type="text"
                          required
                          minLength={2}
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="Adınız ve soyadınız"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Telefon</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                          className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="Telefon numaranız"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">E-posta *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="E-posta adresiniz"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Hizmet Türü</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      >
                        <option value="">Hizmet türü seçin</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Proje Detayları / Mesajınız *</label>
                      <textarea
                        rows={5}
                        required
                        minLength={10}
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                        placeholder="Projeniz veya mesajınız hakkında detaylı bilgi verin..."
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        checked={form.privacy}
                        onChange={(e) => setForm((f) => ({ ...f, privacy: e.target.checked }))}
                        className="mt-1 h-4 w-4 text-accent border-border rounded focus:ring-accent"
                      />
                      <label htmlFor="privacy" className="text-sm text-muted-foreground">
                        Kişisel verilerimin işlenmesine ve{" "}
                        <Link href="#" className="text-accent hover:underline">
                          Gizlilik Politikası
                        </Link>
                        &apos;nı kabul ediyorum.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50"
                      size="lg"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {isSubmitting ? "GÖNDERİLİYOR..." : "MESAJ GÖNDER"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div>
              <div className="mb-4 text-sm font-medium text-muted-foreground tracking-wider uppercase">KONUM</div>
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
                Ofisimizi <span className="text-accent">Ziyaret Edin</span>
              </h2>

              {/* Map Placeholder */}
              <Card className="mb-8 border-border/50">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Harita Yükleniyor...</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {ADRES}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Sosyal Medyada Takip Edin</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors"
                    >
                      <Facebook className="h-6 w-6 text-accent" />
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors"
                    >
                      <Instagram className="h-6 w-6 text-accent" />
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors"
                    >
                      <Linkedin className="h-6 w-6 text-accent" />
                    </Link>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4">
                    Projelerimizi ve güncel haberlerimizi sosyal medya hesaplarımızdan takip edebilirsiniz.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-industrial-darker relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/construction-blueprint-pattern.png')] bg-cover bg-center"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="mb-4 text-sm font-medium text-accent tracking-wider uppercase">SIK SORULAN SORULAR</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-balance mb-6">
              Merak <span className="text-accent">Edilenler</span>
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 text-white">Proje süresi ne kadar?</h3>
                <p className="text-white/80">
                  Proje süresi, yapının büyüklüğü ve karmaşıklığına göre değişir. Ortalama bir konut projesi 6-12 ay,
                  ticari projeler ise 8-18 ay sürmektedir.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 text-white">Ücretsiz keşif hizmeti veriyor musunuz?</h3>
                <p className="text-white/80">
                  Evet, tüm potansiyel müşterilerimize ücretsiz keşif ve ön değerlendirme hizmeti sunuyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2 text-white">Hangi bölgelerde hizmet veriyorsunuz?</h3>
                <p className="text-white/80">
                  Başta İstanbul olmak üzere, Türkiye'nin birçok ilinde projeler gerçekleştiriyoruz. Detaylı bilgi için
                  bizimle iletişime geçebilirsiniz.
                </p>
              </CardContent>
            </Card>
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
                35 yıllık deneyim ve 15 yıllık firma geçmişimizle, inşaat sektöründe güvenilir ve kaliteli hizmet sunuyoruz. Müşteri memnuniyeti odaklı yaklaşımımızla projelerinizi hayata geçiriyoruz.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">İletişim</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📞 +90 532 743 41 33</p>
                <p>📧 info@karahisarliogluyapi.com.tr</p>
                <p>📍 {ADRES}</p>
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
              <a href="https://www.igksoft.com.tr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                IGKSoft
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

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { NewsletterForm } from "@/components/newsletter-form"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-16 bg-slate-900 relative overflow-hidden">
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
              <span className="text-white">Hakkımızda</span>
            </div>

            <div className="mb-4 text-sm font-medium text-teal-400 tracking-wider uppercase">İNŞAAT FİRMALARI</div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Hakkımızda</h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-4 text-sm font-medium text-slate-600 tracking-wider uppercase">KİMİZ</div>
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
                Fikirlerinizi ve Yeniliklerinizi <span className="text-teal-600">Hayata Geçiriyoruz</span>
              </h2>
              <p className="text-gray-600 text-pretty leading-relaxed mb-8">
                Şirket ortaklarının 35 yıllık deneyim ve çalışması sonucu kurulan firmamız 5 yıllık bir çalışma geçmişiyle Bir Çok İşe Hem Uygulama Hem De Danışmanlık Yapmıştır. İnşaat ve yapısal ekibimiz, topluluklarımız için sürdürülebilir, yaratıcı ve verimli mühendislik çözümleri sağlamaya kararlıdır.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Kaba inşaat, ince inşaat ve tadilat işleri</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Proje danışmanlığı ve uygulama yönetimi</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Mimari ve betonarme proje üretimi</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Başından sonuna kaliteli ve güvenilir hizmet</span>
                </div>
              </div>

              <Link href="/iletisim">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-3 rounded-none uppercase tracking-wide">
                  ŞİMDİ DANIŞIN
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src="/projects/corum/_GUR4290.jpg"
                alt="İnşaat Ekibi"
                className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/construction-blueprint-pattern.png')] bg-cover bg-center"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="mb-4 text-sm font-medium text-teal-400 tracking-wider uppercase">KİMİZ</div>
          <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-8">
            "35 yıllık deneyimimizle müşterilerimize güven veren, sözünde duran bir firma olarak hizmet veriyoruz. Her
            projede en yüksek kalite standartlarını uygulayarak, uzun ömürlü ve dayanıklı yapılar inşa ediyoruz."
          </blockquote>
          <cite className="text-yellow-500 font-semibold tracking-wider uppercase">C.GÜROL KARAHİSARLIOĞLU - Yönetici</cite>
        </div>
      </section>

      {/* Grup Şirketlerimiz - IGK Soft & IGK Yapı */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4 text-sm font-medium text-slate-600 tracking-wider uppercase">GRUP ŞİRKETLERİMİZ</div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
              Kardeş <span className="text-teal-600">Firmalarımız</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Karahisarlıoğlu Yapı Tasarım çatısı altında, farklı sektörlerde hizmet veren kardeş firmalarımız bulunmaktadır.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 flex flex-col items-center text-center">
              <div className="mb-4 bg-white rounded-lg p-4 shadow-sm w-full flex justify-center">
                <img
                  src="/logos/igksoft-logo.png"
                  alt="IGK Soft"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">IGK Soft</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Teknoloji ve yazılım alanında faaliyet gösteren grup şirketimizdir. E-ticaret SaaS platformu, kurumsal yazılım, web uygulamaları ve dijital dönüşüm çözümleri sunmaktadır. İşletmelerin dijitalleşme süreçlerinde güvenilir ortağıdır.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 flex flex-col items-center text-center">
              <div className="mb-4 bg-white rounded-lg p-4 shadow-sm w-full flex justify-center">
                <img
                  src="/logos/igkyapi-logo.png"
                  alt="IGK Yapı"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">IGK Yapı</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Banyo aksesuarları, batarya ve musluklar, duş sistemleri ile yapı ve dekorasyon malzemeleri alanında e-ticaret hizmeti veren grup şirketimizdir. Kaliteli markaları tek çatı altında buluşturarak sektöre hizmet vermektedir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Şirket Ortakları */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4 text-sm font-medium text-slate-600 tracking-wider uppercase">ŞİRKET ORTAKLARI</div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
              Yönetim <span className="text-teal-600">Kadromuz</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Firmamız, sektör deneyimi yüksek iki ortağımız öncülüğünde hizmet vermektedir.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border border-gray-100">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">CK</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">C.Gürol Karahisarlıoğlu</h3>
              <p className="text-teal-600 font-medium">Yönetici Ortak</p>
              <p className="text-gray-600 text-sm mt-2">35 yılı aşkın inşaat ve yapı sektörü deneyimi</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border border-gray-100">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">İK</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">İlke Karahisarlıoğlu</h3>
              <p className="text-teal-600 font-medium">Ortak</p>
              <p className="text-gray-600 text-sm mt-2">Proje yönetimi ve uygulama süreçleri</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4 text-sm font-medium text-slate-600 tracking-wider uppercase">GELECEĞI HİSSET</div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
              Öne Çıkan <span className="text-teal-600">Hizmetler</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="/projects/park/NIKON D8007751-1.jpg" alt="İnşaat Süreci" className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]" />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Süreç ve Proje Yönetimi</h3>
              <p className="text-gray-600 text-pretty leading-relaxed mb-8">
                Hafriyattan çatıya, çevre düzenlemesinden ince işlere kadar tüm aşamalarda projelerinizi yönetiyoruz. 
                Zamanında teslimat ve kalite standartlarına uygunluk önceliğimizdir.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Planlama ve uygulama takibi</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Kaliteli malzeme ve işçilik</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Müşteri memnuniyeti odaklı çalışma</span>
                </div>
              </div>

              <Link href="/projeler">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-6 py-2 rounded-none uppercase tracking-wide">
                  PROJELERİMİZ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="aspect-square overflow-hidden">
              <img
                src="/projects/park/NIKON D8007751-1.jpg"
                alt="Modern Konut"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src="/projects/corum/_GUR4290.jpg"
                alt="Spor Kompleksi"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src="/projects/interior/IMG_2139.JPG"
                alt="İç Mekan"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Neden Bizi Seçmelisiniz</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">35+</div>
              <p className="text-gray-600">Yıllık Deneyim</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">5+</div>
              <p className="text-gray-600">Firma Olarak Faaliyet Yılı</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
              <p className="text-gray-600">Müşteri Memnuniyeti</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">200+</div>
              <p className="text-gray-600">Tamamlanan Proje</p>
            </div>
          </div>

          <p className="text-center text-gray-600 text-pretty max-w-3xl mx-auto mb-12">
            Spor tesisleri, villa inşaatları, otel projeleri ve iç mimari tadilat işlerinde referanslarımızla fark yaratıyoruz.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl mx-auto mb-4">
                01
              </div>
              <h3 className="text-xl font-bold mb-4">Benzersiz Projeler</h3>
              <p className="text-gray-600 text-pretty">
                Çorum Spor Kompleksi, AnkaPark, Side otel projeleri gibi referanslarla sektörde güvenilir bir isim olduk.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl mx-auto mb-4">
                02
              </div>
              <h3 className="text-xl font-bold mb-4">Şeffaf ve Güvenilir İş Takibi</h3>
              <p className="text-gray-600 text-pretty">Proje süreçlerini müşteriyle uyum içinde yürütüyor, zamanında teslimat sağlıyoruz.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl mx-auto mb-4">
                03
              </div>
              <h3 className="text-xl font-bold mb-4">Uzman Kadro</h3>
              <p className="text-gray-600 text-pretty">
                35 yıllık sektör deneyimine sahip ortaklarımız ve uzman ekibimizle her projede kalite garantisi sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer matching projects page */}
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
                <p>
                  📍 İlkbahar Mahallesi Güneypark Kümeevler Sinpaş Altınoran Çarşı 19/B -2. Bodrum Katı No:31 Çankaya/ANKARA
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
              <a href="https://www.igksoft.com.tr" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                IGKSoft
              </a>
              {" "}@ Karahisarlıoğlu Yapı Tasarım Markasıdır
              <br />
              © Karahisarlıoğlu Yapı Tasarım Ltd.Şti
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">in</span>
              </div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">@</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

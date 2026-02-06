import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { NewsletterForm } from "@/components/newsletter-form"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Çorum Ortaköy Belediyesi Spor Kompleksi Yapım İşi",
    location: "Ortaköy, Çorum",
    image: "/projects/corum/_GUR4290.jpg",
    description: "Nizami Sentetik Çim Yüzeyli (Fifa Quality Belgeli) Futbol Sahası, Prefabrik Soyunma Odası Ve 480 Kişilik Portatif Çelik Tribün, Gençlik Merkezi İle Basketbol-Voleybol Sahası İnşaat Yapım İşi. İnşaat İmalatları halen devam etmekte olup 2022 Temmuz ayında teslim edilecektir.",
    year: "2021-2022",
    category: "Spor Kompleksi",
  },
  {
    id: 2,
    title: "Gölbaşı Öğrenci Yurdu Havuz ve Çevre Düzenleme İşi",
    location: "Gölbaşı, Ankara",
    image: "/projects/golbasi/IMG_2180-1.jpg",
    description: "Ankara'nın Gölbaşı ilçesinde bitmiş durumdaki bir erkek öğrenci yurduna ek bina olarak tasarlanan kapalı havuz ve yurt binasının çevre düzenleme işleri yapılmıştır. İş kapsamında havuz kazı, seramik, yalıtım işleri havuzun üstünün kapanması ve ince işleri yapılmıştır. Çevre Düzenlemesi işinde çevre duvarları, saha betonları ve kaplama işlerinin yanısıra bordür ve tretuar işleri de yapılmıştır.",
    year: "2017",
    category: "Çevre Düzenleme",
  },
  {
    id: 3,
    title: "Ankara AnkaPark Otorobot Binası Kaba İnşaat İmalatları",
    location: "AnkaPark, Ankara",
    image: "/projects/anka/IMG_0466.JPG",
    description: "Ankara'nın eğlence parkı olarak da tasarlanan AnkaPark(Wonderland) içerisinde yer alan Otorobot binasının kazı işleri, temel yalıtım ve kaba inşaat imalatlarının tamamı firmamız tarafından yapılmıştır.",
    year: "2015-2016",
    category: "Kaba İnşaat",
  },
  {
    id: 4,
    title: "Ankara Çankaya Park Caddesi Müstakil Villa İnşaatı",
    location: "Çayyolu, Ankara",
    image: "/projects/park/NIKON D8007751-1.jpg",
    description: "500 m² arsa üzerine toplamda 300 m² inşaat alanı olarak projelendirilen villa binasının hafriyat işlerinden çatısına, çevre düzenlemesinden ince işlerine kadar tüm imalatları yapılmıştır.",
    year: "2014",
    category: "Müstakil Villa",
  },
  {
    id: 5,
    title: "Antalya Side-Manavgat 5* Tatil Köyü İnşaatı",
    location: "Side, Antalya",
    image: "/projects/side1/Hewlett-Packard hp photosmart 720_20030821_142621.jpg",
    description: "Antalya Manavgat ilçesinin tatil beldesi olan Side'de 7 blok üzerine kurulu 20.000 m² inşaat alanı olan 5 yıldızlı tatil köyü kompleksinin tüm kaba ve ince-kaba imalatları 4 ay gibi kısa sürede bitirilmiştir.",
    year: "2003-2004",
    category: "Otel İnşaatı",
  },
  {
    id: 6,
    title: "Antalya Side-Manavgat 5* Otel İnşaatı",
    location: "Side, Antalya",
    image: "/projects/side2/Hewlett-Packard hp photosmart 720_20040411_153304.jpg",
    description: "Antalya Manavgat ilçesinin tatil beldesi olan Side'de 5 blok, lobi binası ve otoparkı olan 15.000 m² inşaat alanı olan 5 yıldızlı tatil köyü ve otel binalarının yapımı için düşünülen 5 aylık süre içinde tüm kaba ve ince-kaba imalatları yapılmıştır.",
    year: "2004",
    category: "Otel İnşaatı",
  },
  {
    id: 7,
    title: "Muhtelif Yerlerde Daire İç Tasarım Tadilat ve Onarım İşi",
    location: "Ankara",
    image: "/projects/interior/IMG_2139.JPG",
    description: "Muhtelif sayıda, her türlü daire iç mimari ve tadilat işleri ile birlikte tüm dekorasyon işleri (İsteğe Bağlı olarak), malzeme seçimleri, projelendirme işleri de tamamlanarak yapılmıştır.",
    year: "2009-2018",
    category: "İç Mimari",
  },
  {
    id: 8,
    title: "Ankara İncek Villa Sitesi ve Havuz Yapım İşi",
    location: "İncek, Ankara",
    image: "/projects/incek/NIKON D80011038.jpg",
    description: "Türkiye'nin bir çok ilinde çok sayıda Statik(Betonarme) ve Mimari projeler üretilmiştir. Projenin tüm yönetmelik ve kanunlara uygun şekilde üretilerek yapı ruhsatı işlemleri yapılmaktadır.",
    year: "2009-2018",
    category: "Villa Sitesi",
  },
]

// Orijinal sitedeki tam proje listesi (PROJELERİMİZ bölümü)
const fullProjectList = [
  "Çorum Ortaköy Belediyesi Spor Kompleksi Yapım İşi",
  "Gölbaşı Öğrenci Yurdu Kapalı Havuz ve Çevre Düzenleme İşi",
  "Ankara AnkaPark Otorobot binası kaba İnşaat İmalatları ve muhtelif İşler",
  "Ankara AnkaPark LaserTag binası kaba İnşaat İmalatları ve muhtelif İşler",
  "Ankara Çayyolu Park Caddesi Müstakil Villa İnşaatı",
  "Antalya Manavgat Side 5 Yıldızlı Tatil köyü İnşaatına ait kaba ve ince-kaba İmalat İşleri (Koza Ltd.Şti)",
  "Antalya Manavgat Side 5 Yıldızlı otel İnşaatına ait kaba ve İnce-kaba İmalat işleri (Süral grup)",
  "Muhtelif Yerlerde Daire İç Tasarım tadilat ve dekorasyon işleri",
  "Ankara İncek 10 villalık Site içerisine Villa, ve tüm villalara havuz ve Kapalı Site Otoparkı (1000m²) Yapım işi",
  "Ankara Batıkent Kadın Yaşam Merkezi İnşaatı Kaba inşaat işleri",
  "Mimar Ve betonarme proje Üretimi",
]

export default function ProjectsPage() {
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
              <span className="text-white">Projelerimiz</span>
            </div>

            <div className="mb-4 text-sm font-medium text-teal-400 tracking-wider uppercase">İNŞAAT FİRMALARI</div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Projelerimiz</h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-slate-900 font-semibold px-3 py-1 rounded text-sm">
                    {project.year}
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider bg-teal-50 px-3 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{project.title}</h3>

                  <div className="flex items-center text-sm text-teal-600 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {project.location}
                  </div>

                  <p className="text-gray-600 text-pretty mb-6 leading-relaxed line-clamp-3">{project.description}</p>

                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-6 py-2 rounded-none uppercase tracking-wide">
                    DETAYLAR
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* PROJELERİMİZ - Tam liste (orijinal siteden) */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Projelerimiz</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              {fullProjectList.map((item, index) => (
                <li key={index} className="pl-2">{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

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

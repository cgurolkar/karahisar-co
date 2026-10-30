export type EcosystemCompany = {
  id: number
  name: string
  category: string
  logo: string
  url: string
  description: string
  tagline: string
  darkLogo?: boolean
}

export const ecosystemCompanies: EcosystemCompany[] = [
  {
    id: 1,
    name: "IGKfast",
    category: "E-ticaret SaaS",
    logo: "/logos/igkfast-logo-591.png",
    url: "https://igkfast.com",
    tagline: "E-ticaret altyapısı",
    description:
      "Markaların kendi mağazalarını hızlıca kurmasına olanak tanıyan e-ticaret SaaS platformumuz. Sipariş, katalog ve ödeme süreçlerini tek yerden yönetin.",
  },
  {
    id: 2,
    name: "IGK Yapı",
    category: "E-ticaret mağaza",
    logo: "/logos/igkyapi-logo.png",
    url: "https://www.igkyapi.com.tr",
    tagline: "Banyo & armatür",
    description:
      "Banyo aksesuarları, batarya ve musluklar, duş sistemleri ve yapı malzemeleri satan e-ticaret mağazamız.",
  },
  {
    id: 3,
    name: "Banyolia",
    category: "E-ticaret mağaza",
    logo: "/logos/banyolia-logo.png",
    url: "https://banyolia.com",
    tagline: "Banyo aksesuarları",
    description:
      "Modern banyo aksesuarları ve çözümleri sunan e-ticaret platformumuz. Şık ve kullanışlı ürünlerle banyonuzu yenileyin.",
  },
]

export const ecosystemBrands = [
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

export const fullProjectArchiveList = [
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

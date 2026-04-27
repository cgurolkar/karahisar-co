// public/projects klasör isimleri ile eşleşen slug ve galeri görselleri

export type Project = {
  id: number
  slug: string
  title: string
  location: string
  image: string
  description: string
  year: string
  category: string
  images: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "corum",
    title: "Çorum Ortaköy Belediyesi Spor Kompleksi Yapım İşi",
    location: "Ortaköy, Çorum",
    image: "/projects/corum/_GUR4290.jpg",
    description: "Nizami Sentetik Çim Yüzeyli (Fifa Quality Belgeli) Futbol Sahası, Prefabrik Soyunma Odası Ve 480 Kişilik Portatif Çelik Tribün, Gençlik Merkezi İle Basketbol-Voleybol Sahası İnşaat Yapım İşi. İnşaat İmalatları halen devam etmekte olup 2022 Temmuz ayında teslim edilecektir.",
    year: "2021-2022",
    category: "Spor Kompleksi",
    images: ["_GUR4278.jpg", "_GUR4287.jpg", "_GUR4288.jpg", "_GUR4290.jpg", "_GUR4292.jpg", "_GUR4295.jpg", "_GUR4299.jpg", "_GUR4302.jpg", "_GUR4305.jpg", "_GUR4308.jpg"],
  },
  {
    id: 2,
    slug: "golbasi",
    title: "Gölbaşı Öğrenci Yurdu Havuz ve Çevre Düzenleme İşi",
    location: "Gölbaşı, Ankara",
    image: "/projects/golbasi/IMG_2180-1.jpg",
    description: "Ankara'nın Gölbaşı ilçesinde bitmiş durumdaki bir erkek öğrenci yurduna ek bina olarak tasarlanan kapalı havuz ve yurt binasının çevre düzenleme işleri yapılmıştır. İş kapsamında havuz kazı, seramik, yalıtım işleri havuzun üstünün kapanması ve ince işleri yapılmıştır. Çevre Düzenlemesi işinde çevre duvarları, saha betonları ve kaplama işlerinin yanısıra bordür ve tretuar işleri de yapılmıştır.",
    year: "2017",
    category: "Çevre Düzenleme",
    images: ["IMG_2179-1.jpg", "IMG_2180-1.jpg", "IMG_2182-1.jpg", "IMG_2186-1.jpg", "IMG_2188-1.jpg"],
  },
  {
    id: 3,
    slug: "anka",
    title: "Ankara AnkaPark Otorobot Binası Kaba İnşaat İmalatları",
    location: "AnkaPark, Ankara",
    image: "/projects/anka/IMG_0466.JPG",
    description: "Ankara'nın eğlence parkı olarak da tasarlanan AnkaPark(Wonderland) içerisinde yer alan Otorobot binasının kazı işleri, temel yalıtım ve kaba inşaat imalatlarının tamamı firmamız tarafından yapılmıştır.",
    year: "2015-2016",
    category: "Kaba İnşaat",
    images: ["IMG_0466.JPG", "hero-w.jpg", "IMG_0630.JPG", "NIKON D80010923-1.jpg", "NIKON D80010925-1.jpg"],
  },
  {
    id: 4,
    slug: "park",
    title: "Ankara Çankaya Park Caddesi Müstakil Villa İnşaatı",
    location: "Çayyolu, Ankara",
    image: "/projects/park/NIKON D8007751-1.jpg",
    description: "500 m² arsa üzerine toplamda 300 m² inşaat alanı olarak projelendirilen villa binasının hafriyat işlerinden çatısına, çevre düzenlemesinden ince işlerine kadar tüm imalatları yapılmıştır.",
    year: "2014",
    category: "Müstakil Villa",
    images: ["NIKON D8007744-1.jpg", "NIKON D8007751-1.jpg", "NIKON D8007767-1.jpg", "NIKON D8007777-1.jpg", "NIKON D8007781-1.jpg"],
  },
  {
    id: 5,
    slug: "side1",
    title: "Antalya Side-Manavgat 5* Tatil Köyü İnşaatı",
    location: "Side, Antalya",
    image: "/projects/side1/Hewlett-Packard hp photosmart 720_20030821_142621.jpg",
    description: "Antalya Manavgat ilçesinin tatil beldesi olan Side'de 7 blok üzerine kurulu 20.000 m² inşaat alanı olan 5 yıldızlı tatil köyü kompleksinin tüm kaba ve ince-kaba imalatları 4 ay gibi kısa sürede bitirilmiştir.",
    year: "2003-2004",
    category: "Otel İnşaatı",
    images: [
      "Hewlett-Packard hp photosmart 720_20030821_142621.jpg",
      "Hewlett-Packard hp photosmart 720_20030821_144130.jpg",
      "Hewlett-Packard hp photosmart 720_20031014_173954.jpg",
      "Hewlett-Packard hp photosmart 720_20031014_174220.jpg",
      "Hewlett-Packard hp photosmart 720_20031115_075503.jpg",
    ],
  },
  {
    id: 6,
    slug: "side2",
    title: "Antalya Side-Manavgat 5* Otel İnşaatı",
    location: "Side, Antalya",
    image: "/projects/side2/Hewlett-Packard hp photosmart 720_20040411_153304.jpg",
    description: "Antalya Manavgat ilçesinin tatil beldesi olan Side'de 5 blok, lobi binası ve otoparkı olan 15.000 m² inşaat alanı olan 5 yıldızlı tatil köyü ve otel binalarının yapımı için düşünülen 5 aylık süre içinde tüm kaba ve ince-kaba imalatları yapılmıştır.",
    year: "2004",
    category: "Otel İnşaatı",
    images: [
      "Hewlett-Packard hp photosmart 720_20040411_153304.jpg",
      "Hewlett-Packard hp photosmart 720_20040411_160906.jpg",
      "Hewlett-Packard hp photosmart 720_20040602_191452.jpg",
      "Hewlett-Packard hp photosmart 720_20040602_193706.jpg",
      "Hewlett-Packard hp photosmart 720_20040602_194039.jpg",
    ],
  },
  {
    id: 7,
    slug: "interior",
    title: "Muhtelif Yerlerde Daire İç Tasarım Tadilat ve Onarım İşi",
    location: "Ankara",
    image: "/projects/interior/IMG_2139.JPG",
    description: "Muhtelif sayıda, her türlü daire iç mimari ve tadilat işleri ile birlikte tüm dekorasyon işleri (İsteğe Bağlı olarak), malzeme seçimleri, projelendirme işleri de tamamlanarak yapılmıştır.",
    year: "2009-2018",
    category: "İç Mimari",
    images: ["IMG_2139.JPG", "IMG_2143.JPG", "NIKON D8006933-1.jpg", "NIKON D8006981-1.jpg", "NIKON D8007035-1.jpg"],
  },
  {
    id: 8,
    slug: "incek",
    title: "Ankara İncek Villa Sitesi ve Havuz Yapım İşi",
    location: "İncek, Ankara",
    image: "/projects/incek/NIKON D80011038.jpg",
    description: "Türkiye'nin bir çok ilinde çok sayıda Statik(Betonarme) ve Mimari projeler üretilmiştir. Projenin tüm yönetmelik ve kanunlara uygun şekilde üretilerek yapı ruhsatı işlemleri yapılmaktadır.",
    year: "2009-2018",
    category: "Villa Sitesi",
    images: ["IMG_20170306_145718470-1.jpg", "IMG_20170306_150250392-1.jpg", "IMG_20170507-1.jpg", "IMG_20170510-1.jpg", "IMG_20170511-1.jpg", "NIKON D80011038.jpg"],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}

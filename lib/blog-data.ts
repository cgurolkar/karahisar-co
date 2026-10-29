export type BlogPost = {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  date: string
  readTime: string
  featured: boolean
  metaDescription: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "igkfast-eticaret-saas-altyapisi",
    title: "IGKfast ile E-Ticaret SaaS Altyapısı: İşletmeler İçin Ne Anlama Geliyor?",
    excerpt:
      "Kendi mağazanızı kurmak, ölçeklemek ve güvenli satış yapmak isteyen işletmeler için IGKfast SaaS platformunun sunduğu avantajları özetledik.",
    image: "/media/igkfast/theme-store.png",
    category: "Yazılım & SaaS",
    author: "Karahisarlıoğlu Yapı Tasarım",
    date: "2026-10-20",
    readTime: "7 dk",
    featured: true,
    metaDescription:
      "IGKfast e-ticaret SaaS altyapısı nedir? Tema, eklenti, sipariş ve ölçüm araçlarıyla işletmelere nasıl değer kattığını keşfedin.",
    content: `
      <p>Dijitalde satış yapmak isteyen markalar için kritik soru nettir: Mağazayı sıfırdan mı kodlayacaksınız, yoksa güvenilir bir <strong>e-ticaret SaaS altyapısı</strong> mı kullanacaksınız? Karahisarlıoğlu Yapı Tasarım bünyesindeki <a href="https://igkfast.com" target="_blank" rel="noopener noreferrer">IGKfast</a>, ikinci yolu seçen işletmeler için geliştirilmiş çok kiracılı bir platformdur.</p>

      <h2>SaaS e-ticaret altyapısı ne işe yarar?</h2>
      <p>IGKfast ile her işletme kendi mağazasını yönetir: katalog, sipariş, müşteri, kampanya, tema ve eklentiler tek panelde toplanır. Bu model; yazılım ekibi kurmadan, yüksek performanslı ve güncellenen bir altyapıyla satışa başlamanızı sağlar.</p>

      <h3>Tema mağazası ve vitrin</h3>
      <p>Hazır temalar sayesinde vitrininizi sektöre uygun şekilde hızla açabilirsiniz. Görsel dil, vitrin blokları ve mobil uyumluluk platform tarafında yönetilir; siz ürün ve markanıza odaklanırsınız.</p>

      <h3>Eklentiler ve entegrasyonlar</h3>
      <p>CRM, B2B, SMS, formlar, ürün paketleri ve Google Marketing Tools gibi modüllerle pazarlama ve operasyonu genişletebilirsiniz. Google Analytics, Ads, Tag Manager ve Merchant Center gibi araçlarla ölçüm altyapısı kurulabilir.</p>

      <h3>Sipariş ve analitik</h3>
      <p>Sipariş yoğunluğu, coğrafi dağılım ve gelir özetleri panoda izlenebilir. Sağlam operasyon görünürlüğü, doğru stok ve kampanya kararları için temeldir.</p>

      <h2>Neden IGKfast?</h2>
      <ul>
        <li>Diğer işletmelere hizmet veren <strong>Tech Provider</strong> konumundaki SaaS ürün</li>
        <li>Kesintisiz, güvenli ve modern mimari yaklaşım</li>
        <li>İnşaat mühendisliği disiplininden gelen “sağlam zemin” anlayışı</li>
      </ul>

      <p>Detaylı ürün bilgisi, demo ve başvuru için <a href="https://igkfast.com" target="_blank" rel="noopener noreferrer">igkfast.com</a> adresini ziyaret edin. Holding sitemizdeki özet için <a href="/igkfast">IGKfast sayfamıza</a> da bakabilirsiniz.</p>
    `,
  },
  {
    id: 2,
    slug: "banyo-aksesuarlari-ve-armatur-secimi",
    title: "Banyo Aksesuarı, Duş ve Batarya Seçerken Nelere Dikkat Etmelisiniz?",
    excerpt:
      "Islak zeminlerde dayanıklılık ve zarafeti dengeleyen ürün seçimi: IGK Yapı ve Banyolia perspektifinden pratik bir rehber.",
    image: "/hero-karahisarlioglu-2.jpg",
    category: "Banyo & Tasarım",
    author: "Karahisarlıoğlu Yapı Tasarım",
    date: "2026-10-18",
    readTime: "6 dk",
    featured: true,
    metaDescription:
      "Banyo aksesuarı, duş sistemi ve batarya seçiminde dikkat edilecekler. IGK Yapı ve Banyolia mağazalarımızdan ilham alan rehber.",
    content: `
      <p>Modern yaşam alanlarında ıslak zeminler hem teknik hem estetik açıdan kritiktir. Yanlış armatür veya zayıf aksesuar, kısa sürede bakım ve konfor kaybına yol açar. <strong>Karahisarlıoğlu Yapı Tasarım</strong> olarak sahadaki mühendislik birikimimizi <a href="https://www.igkyapi.com.tr" target="_blank" rel="noopener noreferrer">igkyapi.com.tr</a> ve <a href="https://banyolia.com" target="_blank" rel="noopener noreferrer">banyolia.com</a> mağazalarımızda ürün seçkisine taşıyoruz.</p>

      <h2>1. Kullanım yoğunluğuna göre malzeme</h2>
      <p>Yoğun kullanılan banyolarda kaplama kalitesi, korozyon dayanımı ve yedek parça bulunabilirliği öne çıkar. Lüks görünüm kadar uzun ömürlü yüzey ve montaj uyumu da önemlidir.</p>

      <h2>2. Duş sistemlerinde basınç ve konfor</h2>
      <p>Fonksiyonel duş sistemlerinde su basıncı, termostatik kontrol ve kolay temizlik detayları konforu belirler. Projeye uygun boyut ve montaj tipi seçilmelidir.</p>

      <h2>3. Batarya ve muslukta tasarım + servis</h2>
      <p>Zamansız çizgiler, kartuş kalitesi ve servis ağı; hem ev hem ticari projelerde fark yaratır. Estetik tercihleri teknik şartname ile birlikte değerlendirin.</p>

      <h2>4. Aksesuarlarda detay şıklığı</h2>
      <p>Banyolia yaklaşımıyla banyoyu yalnızca kullanım alanı değil; konfor ve huzur noktası olarak düşünüyoruz. Fonksiyonel dekorasyon ve sıcak çizgiler, mekâna değer katar.</p>

      <p>Ürünleri incelemek için <a href="/magazalar">mağazalar sayfamızı</a> ziyaret edebilir; IGK Yapı ve Banyolia vitrinlerine doğrudan gidebilirsiniz.</p>
    `,
  },
  {
    id: 3,
    slug: "gelecegi-insa-ediyor-dijital-dunayi-tasarliyoruz",
    title: "Geleceği İnşa Ediyor, Dijital Dünyayı Tasarlıyoruz",
    excerpt:
      "35 yıllık inşaat mühendisliği tecrübesini yazılım, e-ticaret ve mekan tasarımıyla birleştiren dönüşüm hikâyemiz.",
    image: "/hero-karahisarlioglu-1.jpg",
    category: "Kurumsal",
    author: "C. Gürol Karahisarlıoğlu",
    date: "2026-10-15",
    readTime: "5 dk",
    featured: false,
    metaDescription:
      "Karahisarlıoğlu Yapı Tasarım: inşaattan IGKfast, IGK Yapı ve Banyolia ekosistemine uzanan dijital dönüşüm vizyonu.",
    content: `
      <p><strong>Karahisarlıoğlu Yapı Tasarım Ltd. Şti.</strong> olarak temellerimizi inşaat mühendisliği alanındaki 35 yılı aşkın köklü tecrübe, disiplin ve güven vizyonu üzerine kurduk. Sahadaki fiziki yapı üretiminde edindiğimiz mühendislik hassasiyetini; yazılım, e-ticaret altyapıları ve modern mekan tasarımıyla birleştirerek kapsamlı bir dönüşüm ekosistemine dönüştürdük.</p>

      <h2>Üç marka, tek vizyon</h2>
      <p>Fiziksel alanların inşasından dijital altyapıların mimarisine uzanan yolculukta kaliteyi, estetiği ve teknolojiyi üç ana marka çatısı altında buluşturuyoruz:</p>
      <ul>
        <li><strong>IGK Yapı</strong> — ıslak zeminlerde lüks malzeme, duş ve batarya çözümleri</li>
        <li><strong>Banyolia</strong> — yaşam alanlarına değer katan banyo aksesuarları</li>
        <li><strong>IGKfast</strong> — yeni nesil e-ticaret SaaS altyapısı</li>
      </ul>

      <h2>Değerlerimiz</h2>
      <p><strong>Mühendislik disiplini:</strong> Sağlam zemin ve sıfır hata anlayışını hem banyo mimarisine hem yazılım koduna entegre ediyoruz.</p>
      <p><strong>Tasarım ve estetik:</strong> İşlevsel olduğu kadar göze hitap eden, zamansız çözümler üretiyoruz.</p>
      <p><strong>Yenilikçi teknoloji:</strong> Geleneksel ticaret ile dijital SaaS modellerini harmanlıyoruz.</p>
      <p><strong>Koşulsuz güven:</strong> 35 yıllık mirasın sorumluluğuyla şeffaf ve sürdürülebilir ilişkiler kuruyoruz.</p>

      <blockquote>
        <p>“Her proje sağlam bir vizyonla başlar. İster hayalinizdeki evi dekore ediyor olun, ister dijitalde geleceğinizi inşa ediyor olun; mühendislik bilgimiz, tasarım tutkumuz ve teknolojik çözümlerimizle yanınızdayız.”</p>
        <p><em>— C. Gürol Karahisarlıoğlu, Şirket Ortağı / Genel Müdür</em></p>
      </blockquote>

      <p>Daha fazlası için <a href="/hakkimizda">hakkımızda</a> sayfamızı okuyabilirsiniz.</p>
    `,
  },
  {
    id: 4,
    slug: "eticaret-altyapisi-nasil-secilir",
    title: "E-Ticaret Altyapısı Nasıl Seçilir? 2026 İçin Pratik Kontrol Listesi",
    excerpt:
      "Tema, ödeme, entegrasyon, güvenlik ve ölçeklenebilirlik: doğru SaaS veya e-ticaret altyapısını seçerken bakmanız gerekenler.",
    image: "/media/igkfast/plugins.png",
    category: "Yazılım & SaaS",
    author: "Karahisarlıoğlu Yapı Tasarım",
    date: "2026-10-12",
    readTime: "8 dk",
    featured: false,
    metaDescription:
      "E-ticaret altyapısı seçim rehberi: performans, tema, eklenti, Google/Meta ölçüm ve güvenlik kriterleri. IGKfast perspektifi.",
    content: `
      <p>Yanlış altyapı seçimi; yavaş vitrin, entegrasyon kısıtı ve büyüyememe riski demektir. Aşağıdaki kontrol listesi, özellikle <strong>SaaS e-ticaret</strong> düşünen KOBİ ve markalar için hazırlandı.</p>

      <h2>1. Performans ve mobil deneyim</h2>
      <p>Sayfa hızı, mobil uyumluluk ve vitrin kararlılığı dönüşümü doğrudan etkiler. Altyapının CDN, önbellek ve tema performansı hakkında net bilgi isteyin.</p>

      <h2>2. Tema ve özelleştirme</h2>
      <p>Hazır tema mağazası var mı? Marka kimliğinizi bozmadan vitrin kurabiliyor musunuz? IGKfast’te tema mağazası bu ihtiyaca cevap verir.</p>

      <h2>3. Eklenti ve pazarlama araçları</h2>
      <p>CRM, SMS, B2B fiyat listeleri, formlar ve kampanya modülleri operasyonu büyütür. İhtiyacınız olan eklentilerin yol haritasını sorun.</p>

      <h2>4. Ölçüm ve reklam ekosistemi</h2>
      <p>Google Analytics, Ads, Tag Manager, Merchant Center ve reklam platformlarıyla uyum; veriye dayalı büyüme için kritiktir. Tech Provider konumundaki platformlar bu entegrasyonları bilinçli sunar.</p>

      <h2>5. Güvenlik ve sürdürülebilirlik</h2>
      <p>SSL, yedekleme, güncelleme politikası ve veri gizliliği (aydınlatma / gizlilik metinleri) şeffaf olmalıdır.</p>

      <p>IGKfast’i incelemek için <a href="https://igkfast.com" target="_blank" rel="noopener noreferrer">igkfast.com</a> ve sitemizdeki <a href="/igkfast">ürün özeti</a> iyi bir başlangıç noktasıdır.</p>
    `,
  },
  {
    id: 5,
    slug: "muhendislik-disiplini-ve-dijital-urunler",
    title: "Mühendislik Disiplini Dijital Ürünlere Nasıl Taşınır?",
    excerpt:
      "Sağlam zemin ve sıfır hata yaklaşımının banyo ürünleri ile yazılım mimarisinde nasıl karşılık bulduğunu anlatıyoruz.",
    image: "/media/igkfast/orders-map.png",
    category: "Vizyon",
    author: "C. Gürol Karahisarlıoğlu",
    date: "2026-10-08",
    readTime: "5 dk",
    featured: false,
    metaDescription:
      "İnşaat mühendisliği disiplinini e-ticaret SaaS ve banyo çözümlerine taşıyan Karahisarlıoğlu yaklaşımı.",
    content: `
      <p>İnşaatın temel kuralı nettir: <strong>sağlam zemin</strong> ve ölçülebilir kalite. Aynı ilkeyi dijital ürünlerde “kararlı altyapı, test edilebilir kod ve şeffaf operasyon” olarak okuyoruz.</p>

      <h2>Fiziksel üründe disiplin</h2>
      <p>IGK Yapı ve Banyolia seçkilerinde dayanıklılık, montaj uyumu ve estetik bir arada düşünülür. Detaylara hâkimiyet, sahada yıllarca süren uygulama deneyiminden gelir.</p>

      <h2>Yazılımda disiplin</h2>
      <p>IGKfast’te çok kiracılı mimari, panel modülleri ve entegrasyonlar; kesintisiz satış için tasarlanır. Hata toleransı düşük operasyonlarda güvenilirlik, pazarlama vaadinden önce gelir.</p>

      <h2>Güven bağı</h2>
      <p>35 yılı aşkın sektörel miras; iş ortakları ve müşterilerle şeffaf, sürdürülebilir ilişkiler kurma sorumluluğunu beraberinde getirir. Bu sorumluluk hem mağaza hem SaaS hattında geçerlidir.</p>

      <p>Vizyonumuzu <a href="/hakkimizda">hakkımızda</a> sayfasında, ürünleri ise <a href="/igkfast">IGKfast</a> ve <a href="/magazalar">mağazalar</a> sayfalarında bulabilirsiniz.</p>
    `,
  },
]

export const blogCategories = [
  "Tümü",
  "Yazılım & SaaS",
  "Banyo & Tasarım",
  "Kurumsal",
  "Vizyon",
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}

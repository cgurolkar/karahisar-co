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
      <p>Dijitalde satış yapmak isteyen markalar için kritik soru nettir: Mağazayı sıfırdan mı kodlayacaksınız, yoksa güvenilir bir <strong>e-ticaret SaaS altyapısı</strong> mı kullanacaksınız? Karahisarlıoğlu Yapı Tasarım’ın teknoloji ürünü <a href="https://igkfast.com" target="_blank" rel="noopener noreferrer">IGKfast</a>, ikinci yolu seçen işletmeler için geliştirilmiş çok kiracılı bir platformdur.</p>

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
        <li>Ölçeklenebilir çok kiracılı e-ticaret altyapısı</li>
      </ul>

      <p>Detaylı ürün bilgisi, demo ve başvuru için <a href="https://igkfast.com" target="_blank" rel="noopener noreferrer">igkfast.com</a> adresini ziyaret edin. Holding sitemizdeki özet için <a href="/igkfast">IGKfast sayfamıza</a> bakabilirsiniz.</p>
    `,
  },
  {
    id: 2,
    slug: "eticaret-altyapisi-nasil-secilir",
    title: "E-Ticaret Altyapısı Nasıl Seçilir? 2026 İçin Pratik Kontrol Listesi",
    excerpt:
      "Tema, ödeme, entegrasyon, güvenlik ve ölçeklenebilirlik: doğru SaaS e-ticaret altyapısını seçerken bakmanız gerekenler.",
    image: "/media/igkfast/plugins.png",
    category: "Yazılım & SaaS",
    author: "Karahisarlıoğlu Yapı Tasarım",
    date: "2026-10-18",
    readTime: "8 dk",
    featured: true,
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
      <p>SSL, yedekleme, güncelleme politikası ve veri gizliliği şeffaf olmalıdır.</p>

      <p>IGKfast’i incelemek için <a href="https://igkfast.com" target="_blank" rel="noopener noreferrer">igkfast.com</a> ve sitemizdeki <a href="/igkfast">ürün özeti</a> iyi bir başlangıç noktasıdır.</p>
    `,
  },
  {
    id: 3,
    slug: "cok-kiracili-saas-eticaret",
    title: "Çok Kiracılı SaaS E-Ticaret: Neden Tek Kod Tabanı, Birçok Mağaza?",
    excerpt:
      "Multi-tenant mimari e-ticarette ne kazandırır? IGKfast’in her işletmeye ayrı mağaza sunarken altyapıyı nasıl ortak yönettiğini anlatıyoruz.",
    image: "/media/igkfast/orders-map.png",
    category: "Teknoloji",
    author: "Karahisarlıoğlu Yapı Tasarım",
    date: "2026-10-15",
    readTime: "6 dk",
    featured: false,
    metaDescription:
      "Çok kiracılı (multi-tenant) SaaS e-ticaret mimarisi nedir? IGKfast ile mağaza izolasyonu ve ortak altyapı avantajları.",
    content: `
      <p><strong>Çok kiracılı SaaS</strong>, aynı yazılım ürününün birçok bağımsız işletmeye hizmet vermesidir. Her kiracı kendi kataloğunu, siparişlerini ve markasını yönetir; altyapı, güvenlik yamaları ve yeni özellikler merkezî olarak gelir.</p>

      <h2>Tek ürün, birçok mağaza</h2>
      <p>IGKfast bu modeli e-ticarete uygular: işletmeler kendi vitrinlerini açar, biz platformu geliştirir ve işletiriz. Böylece her markanın ayrı bir yazılım projesi kurmasına gerek kalmaz.</p>

      <h2>Operasyonel avantajlar</h2>
      <ul>
        <li>Ortak güncelleme ve güvenlik politikası</li>
        <li>Tema ve eklenti ekosisteminin tüm kiracılara yayılması</li>
        <li>Ölçüm ve pazarlama araçlarının standartlaşması</li>
      </ul>

      <h2>Kimler için uygun?</h2>
      <p>Hızlı yayına almak, kendi sunucu ekibini büyütmeden ölçeklemek ve modern bir panel deneyimi isteyen perakende ve B2B markaları için uygundur.</p>

      <p>Daha fazla teknik özet için <a href="/igkfast">IGKfast ürün sayfasına</a> göz atın.</p>
    `,
  },
  {
    id: 4,
    slug: "google-marketing-tools-eticaret",
    title: "E-Ticarette Google Marketing Tools: Ölçümden Reklama Tek Hat",
    excerpt:
      "Analytics, Ads, Tag Manager ve Merchant Center’ı e-ticaret SaaS’e bağlamak neden kritik? IGKfast yaklaşımını özetledik.",
    image: "/media/igkfast/plugins.png",
    category: "Pazarlama Teknolojisi",
    author: "Karahisarlıoğlu Yapı Tasarım",
    date: "2026-10-12",
    readTime: "5 dk",
    featured: false,
    metaDescription:
      "E-ticaret SaaS’te Google Analytics, Ads, Tag Manager ve Merchant Center entegrasyonu. IGKfast Marketing Tools özeti.",
    content: `
      <p>Modern e-ticarette satış yalnızca vitrinle bitmez; <strong>ölçüm ve reklam</strong> hattı dönüşümü belirler. Google ekosistemi — Analytics, Ads, Tag Manager, Merchant Center — doğru bağlandığında kampanya ve katalog verisi aynı dilde konuşur.</p>

      <h2>Neden platform seviyesinde entegrasyon?</h2>
      <p>Her mağazanın ayrı ayrı etiket ve feed kurması maliyetlidir. SaaS tarafında hazır Marketing Tools modülleri, kiracıların daha hızlı ve tutarlı ölçüm kurmasını sağlar.</p>

      <h2>IGKfast’te ne sunuluyor?</h2>
      <p>Eklenti paneli üzerinden Google araçlarına yönelik bağlantılar kurulabilir; böylece pazarlama ekibi teknik borç biriktirmeden ilerler. Tech Provider konumumuz, diğer işletmelerin reklam ve ölçüm ihtiyaçlarına altyapı desteği vermeyi de kapsar.</p>

      <p>Ürün demosu ve detay için <a href="https://igkfast.com" target="_blank" rel="noopener noreferrer">igkfast.com</a>.</p>
    `,
  },
  {
    id: 5,
    slug: "teknoloji-odakli-yazilim-grubu",
    title: "Teknoloji Odaklı Bir Yazılım Grubu: IGKfast’i Neden Öne Çıkarıyoruz?",
    excerpt:
      "Karahisarlıoğlu Yapı Tasarım’ın ürün stratejisi net: e-ticaret SaaS. IGKfast neden markanın merkezinde?",
    image: "/media/igkfast/theme-store.png",
    category: "Kurumsal",
    author: "C. Gürol Karahisarlıoğlu",
    date: "2026-10-08",
    readTime: "4 dk",
    featured: false,
    metaDescription:
      "Karahisarlıoğlu Yapı Tasarım’ın teknoloji odaklı vizyonu ve IGKfast e-ticaret SaaS ürününün merkezî rolü.",
    content: `
      <p>Bugün Karahisarlıoğlu Yapı Tasarım’ı bir <strong>teknoloji şirketi</strong> olarak konumlandırıyoruz. Odak ürünümüz <a href="https://igkfast.com" target="_blank" rel="noopener noreferrer">IGKfast</a>: diğer işletmelere e-ticaret SaaS altyapısı sunan yazılım platformu.</p>

      <h2>Ürün önceliği</h2>
      <p>Yazılım yol haritası, performans, güvenlik ve entegrasyonlar — bunlar ana gündemimiz. Dijital mağaza markalarımız (IGK Yapı, Banyolia) aynı ekosistem içinde büyür; ancak dışarıya anlattığımız asıl değer IGKfast’tir.</p>

      <h2>Ne vaat ediyoruz?</h2>
      <ul>
        <li>Ölçeklenebilir mağaza altyapısı</li>
        <li>Tema, eklenti ve ölçüm araçları</li>
        <li>Şeffaf iş ortaklığı ve sürekli ürün geliştirme</li>
      </ul>

      <p>Şirket özeti için <a href="/hakkimizda">hakkımızda</a>, ürün için <a href="/igkfast">IGKfast</a> sayfalarına bakabilirsiniz.</p>
    `,
  },
]

export const blogCategories = [
  "Tümü",
  "Yazılım & SaaS",
  "Teknoloji",
  "Pazarlama Teknolojisi",
  "Kurumsal",
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug)
}

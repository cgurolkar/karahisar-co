# 📝 Blog Sistemi Kullanım Kılavuzu

## ✅ Blog Sistemi Aktif!

Blog bölümü başarıyla eklendi ve **database'e gerek YOK**! Basit ve etkili bir çözüm uygulandı.

---

## 🎯 Mevcut Yapı

### 1. Blog Ana Sayfa
- **URL**: `/blog`
- **Dosya**: `app/blog/page.tsx`
- Tüm blog yazılarını listeler
- Öne çıkan yazı (featured) ayrı gösterilir
- Kategori filtreleme (opsiyonel)

### 2. Blog Detay Sayfası
- **URL**: `/blog/[slug]`
- **Dosya**: `app/blog/[slug]/page.tsx`
- Her blog yazısının detay sayfası
- İlgili yazılar önerisi
- Paylaşma butonları
- Yazar bilgisi

---

## 📝 Yeni Blog Yazısı Nasıl Eklenir?

### Adım 1: Blog Listesine Ekleyin

`app/blog/page.tsx` dosyasını açın ve `blogPosts` dizisine yeni yazı ekleyin:

```typescript
const blogPosts = [
  // ... mevcut yazılar
  {
    id: 5, // Benzersiz ID
    slug: "yeni-yazinizin-slug-i", // URL'de görünecek
    title: "Yazınızın Başlığı",
    excerpt: "Kısa özet (150-200 karakter)",
    content: "Detaylı içerik...", // HTML olarak yazılabilir
    image: "/projects/corum/_GUR4290.jpg", // Görsel yolu
    category: "Sektör Haberleri", // Kategori
    author: "Yazar Adı",
    date: "2025-01-20", // Tarih (YYYY-MM-DD)
    readTime: "6 dk", // Okuma süresi
    featured: false, // true ise öne çıkar
  },
]
```

### Adım 2: Detay Sayfasına da Ekleyin

`app/blog/[slug]/page.tsx` dosyasını açın ve aynı yazıyı `blogPosts` dizisine ekleyin.

> **Not**: İki yerde aynı veriyi tutuyoruz. Gerçek projede bu bir API'den gelir.

---

## 🎨 İçerik Formatlama

Blog içeriğinde HTML kullanabilirsiniz:

```typescript
content: `
  <h2>Ana Başlık</h2>
  <p>Normal paragraf metni...</p>
  
  <h3>Alt Başlık</h3>
  <p>Daha fazla içerik...</p>
  
  <ul>
    <li>Madde 1</li>
    <li>Madde 2</li>
  </ul>
  
  <blockquote>Alıntı metni</blockquote>
  
  <strong>Kalın metin</strong> ve <em>italik metin</em>
`
```

---

## 🔄 Gelecekte Database'e Geçiş (Opsiyonel)

Eğer ilerleyen zamanda yüzlerce blog yazınız olursa, aşağıdaki seçenekleri değerlendirebilirsiniz:

### Seçenek 1: Markdown Dosyaları (Önerilen ✅)
```bash
# blog klasörü yapısı
/content
  /blog
    - 2025-01-insaat-trendleri.md
    - 2025-01-dogru-firma-secimi.md
```

**Avantajlar**:
- Database gereksiz
- Git ile versiyon kontrolü
- Markdown ile kolay yazım
- Otomatik SEO

**Kurulum**:
```bash
npm install gray-matter remark remark-html
```

### Seçenek 2: Headless CMS

#### A) Sanity.io (Ücretsiz Plan Mevcut)
- Görsel panel
- Türkçe desteği
- Kolay yönetim

#### B) Contentful
- Güçlü API
- Ücretsiz başlangıç

#### C) Strapi (Self-hosted)
- Kendi sunucunuzda
- Tam kontrol

### Seçenek 3: Gerçek Database
```typescript
// PostgreSQL + Prisma örneği
// prisma/schema.prisma
model BlogPost {
  id        Int      @id @default(autoincrement())
  slug      String   @unique
  title     String
  excerpt   String
  content   String
  image     String
  category  String
  author    String
  date      DateTime @default(now())
  readTime  String
  featured  Boolean  @default(false)
}
```

---

## 📊 Mevcut Özellikler

✅ Blog listeleme sayfası  
✅ Blog detay sayfası  
✅ Öne çıkan yazı  
✅ Kategoriler  
✅ Okuma süresi  
✅ Yazar bilgisi  
✅ İlgili yazılar  
✅ Paylaşma butonları  
✅ Responsive tasarım  
✅ SEO dostu URL'ler  
✅ Newsletter entegrasyonu  

---

## 🚀 Hızlı Başlangıç

1. **Yeni yazı ekleyin** → `app/blog/page.tsx` ve `app/blog/[slug]/page.tsx`
2. **Görsel ekleyin** → `/public/projects/` klasöründen kullanın
3. **Kategori oluşturun** → İsterseniz yeni kategori ekleyin
4. **Featured yapın** → `featured: true` ile öne çıkarın

---

## 💡 İpuçları

1. **Görsel Optimizasyonu**: Next.js Image component'i kullanabilirsiniz (performans için)
2. **SEO**: Her yazı için meta description eklenebilir
3. **Sitemap**: Otomatik sitemap oluşturulabilir
4. **RSS Feed**: Blog için RSS feed eklenebilir
5. **Arama**: Blog içinde arama özelliği eklenebilir

---

## 📞 Yardıma mı İhtiyacınız Var?

Blog sistemi şu an **basit ve işlevsel** olarak çalışıyor. Gelecekte daha karmaşık ihtiyaçlar için:

- Markdown sistemine geçiş
- CMS entegrasyonu
- Database bağlantısı
- Yorum sistemi
- Sosyal medya paylaşım sayaçları

gibi özellikler eklenebilir.

---

## 🎉 Sonuç

**Database'siz blog sistemi tamam!** 

- Blog yazılarınızı kod içinde yönetin
- Gerekirse kolayca database'e geçin
- Şimdilik basit ve hızlı çözüm kullanın

**Başarılar!** 🚀

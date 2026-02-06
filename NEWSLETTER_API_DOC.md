# Newsletter API Dokümantasyonu

## 📋 Genel Bakış

Newsletter API'si, kullanıcıların e-posta listenize abone olmalarını sağlar. Email adresleri `data/newsletter-subscribers.json` dosyasına kaydedilir.

---

## 🔌 API Endpoints

### 1. Newsletter Kayıt (POST)

**Endpoint:** `/api/newsletter`  
**Method:** `POST`  
**Content-Type:** `application/json`

#### Request Body:
```json
{
  "email": "kullanici@example.com"
}
```

#### Başarılı Response (201):
```json
{
  "success": true,
  "message": "E-posta listemize başarıyla kaydoldunuz"
}
```

#### Hata Responses:

**400 - Geçersiz Email:**
```json
{
  "success": false,
  "message": "Geçersiz email adresi"
}
```

**409 - Duplicate Email:**
```json
{
  "success": false,
  "message": "Bu email adresi zaten kayıtlı"
}
```

**500 - Server Error:**
```json
{
  "success": false,
  "message": "Bir hata oluştu. Lütfen tekrar deneyin."
}
```

---

### 2. Aboneleri Görüntüleme (GET) - Admin Only

**Endpoint:** `/api/newsletter`  
**Method:** `GET`  
**Authorization:** `Bearer YOUR_ADMIN_API_KEY`

#### Request Headers:
```
Authorization: Bearer your-admin-api-key
```

#### Başarılı Response (200):
```json
{
  "success": true,
  "subscribers": [
    {
      "email": "user@example.com",
      "subscribedAt": "2025-01-15T10:30:00.000Z",
      "ip": "192.168.1.1",
      "userAgent": "Mozilla/5.0..."
    }
  ],
  "count": 1
}
```

---

## 🔧 Kurulum ve Kullanım

### 1. Environment Variables

`.env.local` dosyası oluşturun:

```bash
ADMIN_API_KEY=super-secret-admin-key-123
```

### 2. Aboneleri Görüntüleme

#### Postman veya cURL ile:

```bash
curl -X GET http://localhost:3000/api/newsletter \
  -H "Authorization: Bearer super-secret-admin-key-123"
```

#### Browser'da (JavaScript):

```javascript
const response = await fetch('/api/newsletter', {
  headers: {
    'Authorization': 'Bearer super-secret-admin-key-123'
  }
});
const data = await response.json();
console.log(data.subscribers);
```

---

## 📊 Veri Yapısı

Aboneler `data/newsletter-subscribers.json` dosyasında şu formatta saklanır:

```json
[
  {
    "email": "user@example.com",
    "subscribedAt": "2025-01-15T10:30:00.000Z",
    "ip": "192.168.1.1",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)..."
  }
]
```

---

## 🚀 Gelişmiş Entegrasyonlar

### Resend ile Email Gönderme (Önerilen)

1. **Resend hesabı oluşturun:** https://resend.com
2. **API Key alın** ve `.env.local`'e ekleyin:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxx
   ```
3. **Resend paketini yükleyin:**
   ```bash
   npm install resend
   ```
4. **API route'una ekleyin:**

```typescript
// app/api/newsletter/route.ts içine ekleyin
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

async function sendWelcomeEmail(email: string) {
  try {
    await resend.emails.send({
      from: 'Karahisarlıoğlu Yapı <onboarding@resend.dev>',
      to: email,
      subject: 'Hoş Geldiniz! 🎉',
      html: `
        <h1>Hoş Geldiniz!</h1>
        <p>E-posta listemize katıldığınız için teşekkür ederiz.</p>
        <p>Projelerimiz ve yeniliklerimiz hakkında düzenli olarak bilgilendirileceksiniz.</p>
      `
    })
  } catch (error) {
    console.error('Email gönderme hatası:', error)
  }
}

// POST endpoint'inde subscribers.push(newSubscriber) satırından sonra:
await sendWelcomeEmail(email)
```

---

### Mailchimp Entegrasyonu

```bash
npm install @mailchimp/mailchimp_marketing
```

```typescript
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
})

async function addToMailchimp(email: string) {
  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID!, {
      email_address: email,
      status: "subscribed",
    })
  } catch (error) {
    console.error('Mailchimp error:', error)
  }
}
```

---

## 📧 Admin Panel (Opsiyonel)

Aboneleri yönetmek için basit bir admin sayfası oluşturabilirsiniz:

**`app/admin/newsletter/page.tsx`:**

```typescript
"use client"

import { useState, useEffect } from "react"

export default function NewsletterAdmin() {
  const [subscribers, setSubscribers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSubscribers()
  }, [])

  const fetchSubscribers = async () => {
    const response = await fetch('/api/newsletter', {
      headers: {
        'Authorization': 'Bearer super-secret-admin-key-123'
      }
    })
    const data = await response.json()
    setSubscribers(data.subscribers || [])
    setLoading(false)
  }

  if (loading) return <div>Yükleniyor...</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Newsletter Aboneleri ({subscribers.length})
      </h1>
      <table className="w-full">
        <thead>
          <tr>
            <th>Email</th>
            <th>Kayıt Tarihi</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((sub: any) => (
            <tr key={sub.email}>
              <td>{sub.email}</td>
              <td>{new Date(sub.subscribedAt).toLocaleDateString('tr-TR')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

---

## 🔒 Güvenlik Notları

1. ✅ **Environment Variables:** API key'leri asla kodda saklamayın
2. ✅ **Rate Limiting:** Production'da rate limiting ekleyin (Vercel otomatik sağlar)
3. ✅ **Email Validation:** API tarafında doğrulama yapılıyor
4. ✅ **Duplicate Check:** Aynı email tekrar kaydedilemiyor
5. ⚠️ **Admin Auth:** Production'da daha güvenli authentication kullanın

---

## 📝 Notlar

- `data/` klasörü `.gitignore`'a eklenmiştir
- Subscriber verileri sunucuda lokal olarak saklanır
- Production'da veritabanı (PostgreSQL, MongoDB) kullanmanız önerilir
- Email servisleri tamamen opsiyoneldir

---

## 🎯 Test Etme

1. **Geliştirme sunucusunu çalıştırın:**
   ```bash
   npm run dev
   ```

2. **Bir email adresi ile kayıt olun** (web sitesinden)

3. **Verileri kontrol edin:**
   ```bash
   cat data/newsletter-subscribers.json
   ```

4. **Admin endpoint'i test edin:**
   ```bash
   curl -X GET http://localhost:3000/api/newsletter \
     -H "Authorization: Bearer super-secret-admin-key-123"
   ```

---

## 💡 İpuçları

- **Excel Export:** Subscriber listesini CSV olarak export edebilirsiniz
- **Email Campaigns:** Resend/SendGrid ile toplu email gönderebilirsiniz
- **Analytics:** Google Analytics event tracking ekleyebilirsiniz
- **GDPR:** Unsubscribe endpoint'i ekleyebilirsiniz

---

Sorularınız için: info@karahisarliogluyapi.com.tr

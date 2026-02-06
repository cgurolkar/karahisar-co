# cPanel (Linux) Sunucuya Next.js Projesi Yükleme Rehberi

Bu proje Next.js kullanıyor ve **Node.js** ile çalışır. cPanel’de “Node.js App” veya benzeri özellik varsa aşağıdaki adımları uygulayın.

---

## 1. Sunucu Gereksinimleri

- cPanel’de **“Setup Node.js App”** veya **“Node.js Selector”** olmalı (birçok paylaşımlı hosting’de vardır).
- Node.js sürümü: **18.x** veya **20.x** önerilir.
- SSH erişimi veya cPanel **Terminal** / **Dosya Yöneticisi** kullanabilirsiniz.

---

## 2. Yerelde (Bilgisayarınızda) Build Alın

Proje klasöründe:

```bash
npm run build
```

Build bittikten sonra şu klasör oluşur:

- `.next/standalone/` — çalıştırılacak Node uygulaması
- `.next/standalone/.next/static/` — static dosyalar (kopyalanacak)
- `public/` — resim, logo vb. (standalone’a kopyalanacak)

---

## 3. Sunucuya Gönderilecek Dosyaları Hazırlayın

### Yöntem A: Yerelde hazırlayıp ZIP ile yüklemek

Build sonrası tek bir “deploy” klasörü oluşturup sunucuya atacaksınız.

**Windows (PowerShell veya CMD):**

```cmd
mkdir deploy
xcopy /E /I .next\standalone deploy
xcopy /E /I .next\static deploy\.next\static
xcopy /E /I public deploy\public
```

**Linux / Mac:**

```bash
mkdir -p deploy
cp -r .next/standalone/* deploy/
cp -r .next/static deploy/.next/
cp -r public deploy/
```

`deploy` klasörünün **içeriğini** (server.js, .next, node_modules, public vb.) ZIP’leyip cPanel Dosya Yöneticisi veya FTP ile Node.js uygulama köküne (örn. `karahisarlioglu`) yükleyin.

### Yöntem B: Sunucuda build (SSH varsa)

Tüm proje dosyalarını (node_modules hariç) sunucuya atıp SSH ile sunucuda:

```bash
cd /home/kullanici_adiniz/node_uygulama
npm install --production
npm run build
```

Sonra aşağıdaki “Sunucuda çalıştırma” adımına geçin; uygulama `.next/standalone` içinden çalışacak.

---

## 4. cPanel’de Node.js Uygulaması Oluşturma

1. cPanel’e girin.
2. **“Setup Node.js App”** veya **“Application Manager”** bölümünü açın.
3. **“Create Application”** (Uygulama Oluştur):
   - **Node.js version:** 18 veya 20
   - **Application root:** Örnek: `karahisarlioglu` (sunucuda `~/karahisarlioglu` gibi bir klasör olacak)
   - **Application URL:** Alt alan adı veya ana domain (örn. `site.com` veya `www.site.com`)
   - **Application startup file:** `server.js` (standalone build’de bu dosya `standalone` içinde oluşur)
4. Oluştur’a tıklayın. cPanel size **Application URL** ve çalışacağı **port** bilgisini verir.

---

## 5. Dosyaları Doğru Yere Koyma

- Eğer **Application root** `karahisarlioglu` ise, tüm içeriği **bu klasörün içine** koyun.
- Standalone ile çalışacaksanız:
  - `standalone` klasörünün **içindeki her şeyi** (server.js, .next, node_modules vb.) `karahisarlioglu` içine atın.
  - `.next/static` ve `public` klasörlerini yukarıdaki gibi doğru yerlere kopyaladığınızdan emin olun.

Örnek dizin yapısı (sunucuda):

```
/home/kullanici/karahisarlioglu/
├── server.js          (standalone’dan)
├── .next/
│   ├── static/        (mutlaka burada olmalı)
│   └── ...
├── node_modules/      (standalone’dan veya npm install)
└── public/            (logolar, resimler)
```

---

## 6. Sunucuda Çalıştırma

### cPanel “Run Script” / “Start App” varsa

- Start/Restart butonu ile uygulamayı başlatın. cPanel genelde `node server.js` veya `npm start` çalıştırır.

### SSH ile (port cPanel’in verdiği port olmalı)

```bash
cd /home/kullanici_adiniz/karahisarlioglu
PORT=3000 node server.js
```

Port numarasını cPanel’deki Node.js uygulaması sayfasından alın (örn. 3000, 4000). Kalıcı çalışması için **PM2** kullanabilirsiniz:

```bash
npm install -g pm2
PORT=3000 pm2 start server.js --name karahisar
pm2 save
pm2 startup
```

---

## 7. Domain’i Uygulamaya Yönlendirme

cPanel’de:

- **“Application URL”** zaten ayarlıysa, o adres Node uygulamasına yönlenir.
- Değilse **“Domains”** veya **“Subdomains”** bölümünde:
  - Gerekirse **Proxy (Reverse Proxy)** ayarı yapın: domain → `http://127.0.0.1:PORT`
- Bazı hostinger’larda “Proxy” veya “Node.js” sekmesinde “Enable proxy” gibi bir seçenek bulunur; portu oraya yazın.

---

## 8. Ortam Değişkenleri (İsteğe Bağlı)

Newsletter API’de `ADMIN_API_KEY` kullanıyorsanız, cPanel Node.js uygulaması ayarlarında “Environment Variables” varsa ekleyin:

- `ADMIN_API_KEY` = belirlediğiniz güçlü bir anahtar

---

## 9. Veri Klasörü (Newsletter / İletişim Formu)

Uygulama `data/` klasörüne newsletter ve iletişim kayıtlarını yazar. Sunucuda bu klasörün:

- Yazılabilir olduğundan (chmod 755 veya 775),
- Mümkünse yedeklendiğinden emin olun.

---

## 10. Özet Kontrol Listesi

- [ ] `npm run build` yerelde veya sunucuda çalıştı.
- [ ] `.next/standalone` + `.next/static` + `public` doğru yapıda sunucuya gitti.
- [ ] cPanel’de Node.js 18 veya 20 ile uygulama oluşturuldu.
- [ ] Startup file: `server.js`.
- [ ] Port doğru; domain bu porta proxy ile yönlendirildi.
- [ ] `data/` klasörü yazılabilir.

Sorun olursa cPanel **Error Log** ve Node uygulaması **log** çıktısına bakın; hata mesajı genelde yolu veya portu gösterir.

# Hetzner Sunucuda Çoklu Site Barındırma ve Deploy Rehberi

Bu rehber, Hetzner Cloud sunucunuzda (örn. private-01) **birden fazla site** barındırmak ve bu Next.js projesini deploy etmek için gereken adımları anlatır.

---

## Genel mimari

- **Nginx**: Reverse proxy; gelen isteği domain’e göre ilgili uygulamaya yönlendirir.
- **Node.js + PM2**: Next.js (Karahisarlıoğlu) port 3000’de çalışır.
- **Docker**: İkinci uygulama (icsp-reporter) port 3001’de çalışır.
- **Her site**: Kendi portunda çalışır. Nginx dışarıda 80/443’ü dinler, içeride bu portlara yönlendirir.

**Bu sunucuda iki site:**

| Domain | Uygulama | Port |
|--------|----------|------|
| karahisarliogluyapi.com.tr | Bu proje (Next.js, PM2) | 3000 |
| report.icspiling.com | icsp-reporter (Docker) | 3001 |

---

## 1. Sunucuya bağlanma

Bilgisayarınızdan (PowerShell veya terminal):

```bash
ssh root@46.225.110.180
```

Şifre sorulursa Hetzner’den aldığınız root şifresini girin.

**SSH key ile giriş (önerilen):**  
Sunucuya ilk kez şifreyle girdikten sonra public key’inizi ekleyeceğiz; bir sonraki girişte şifre istemez.

---

## 2. İlk kurulum (sunucuda)

Sunucuya bağlandıktan sonra sırayla:

```bash
# Güncellemeler
apt update && apt upgrade -y

# Gerekli paketler
apt install -y curl git nginx ufw

# Firewall (22 SSH, 80 HTTP, 443 HTTPS)
ufw allow 22
ufw allow 80
ufw allow 443
ufw --force enable
```

---

## 3. SSH public key’i sunucuya ekleme

Böylece şifresiz `ssh root@46.225.110.180` ile girebilirsiniz.

**Kendi bilgisayarınızda** (Windows’ta `type` veya Linux/Mac’te `cat`):

```bash
# Public key içeriğini kopyalayın (genelde şu dosyada)
type $env:USERPROFILE\.ssh\id_ed25519.pub
# veya id_rsa.pub
```

Çıkan satırı kopyalayın (ssh-ed25519 ... veya ssh-rsa ... ile başlayan).

**Sunucuda:**

```bash
mkdir -p ~/.ssh
echo "BURAYA_KOPYALADIGINIZ_PUBLIC_KEY_YAPISTIRIN" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Sonra kendi bilgisayarınızdan çıkıp tekrar `ssh root@46.225.110.180` deneyin; şifre sormamalı.

---

## 4. Node.js kurulumu

Sunucuda:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
node -v   # v20.x
npm -v
```

---

## 5. PM2 kurulumu (Node uygulamaları sürekli çalışsın)

```bash
npm install -g pm2
```

---

## 6. İlk site: Karahisarlıoğlu (bu proje) deploy

### 6.1 Proje klasörü ve clone

```bash
mkdir -p /var/www
cd /var/www
git clone https://github.com/cgurolkar/karahisar-co.git karahisar
cd karahisar
```

### 6.2 Build

```bash
npm install
npm run build
```

### 6.3 Standalone çalıştırma için dosyalar

Next.js `output: "standalone"` ile build aldığı için:

```bash
cp -r .next/standalone/* .
cp -r .next/static .next/
cp -r public .
```

### 6.4 PM2 ile başlatma

```bash
PORT=3000 node server.js
```

Çalıştığını kontrol edin (Ctrl+C ile durdurun), sonra PM2 ile kalıcı yapın:

```bash
PORT=3000 pm2 start server.js --name karahisar
pm2 save
pm2 startup
# Çıkan komutu (systemd...) kopyalayıp çalıştırın
```

Site şu an `http://46.225.110.180:3000` üzerinden açılır (firewall’da 3000 açmak istemezseniz sadece Nginx üzerinden erişeceksiniz, aşağıda).

---

## 7. Nginx: Karahisarlıoğlu (karahisarliogluyapi.com.tr) için reverse proxy

Bu projede hazır Nginx config dosyası var: **`deploy/nginx-karahisarliogluyapi.conf`**

Domain’iniz sunucu IP’sine yönlendirildiyse, sunucuda projeyi clone ettikten sonra:

```bash
cp /var/www/karahisar/deploy/nginx-karahisarliogluyapi.conf /etc/nginx/sites-available/karahisar
```

Veya elle oluşturmak isterseniz:

```bash
nano /etc/nginx/sites-available/karahisar
```

İçerik (karahisarliogluyapi.com.tr → port 3000). `default_server` sayesinde sunucu IP’si ile veya bilinmeyen Host ile girildiğinde bu site açılır; diğer site (report.icspiling.com) sadece kendi domain’inde açılır:

```nginx
server {
    listen 80 default_server;
    server_name karahisarliogluyapi.com.tr www.karahisarliogluyapi.com.tr;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Aktifleştirip test edin:

```bash
ln -s /etc/nginx/sites-available/karahisar /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
```

Tarayıcıda `http://karahisarliogluyapi.com.tr` veya `http://46.225.110.180` deneyin. **Default site:** Karahisarlıoğlu config’inde `listen 80 default_server` kullanılıyor; böylece IP ile girildiğinde veya Host eşleşmezse bu site açılır. Diğer sitede (report.icspiling.com) `default_server` olmamalı.

---

## 8. SSL (HTTPS) – Let’s Encrypt

Domain sunucuya yönlendirildikten sonra:

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d karahisarliogluyapi.com.tr -d www.karahisarliogluyapi.com.tr
```

Soru cevaplayın; Nginx otomatik güncellenir. Yenileme: `certbot renew` (cron ile zaten eklenir).

---

## 9. İkinci (ve daha fazla) site ekleme

Her ek site için:

1. **Uygulamayı çalıştırın** (farklı port, örn. 3001):
   ```bash
   cd /var/www/ikinci-site
   PORT=3001 pm2 start server.js --name ikinci-site
   pm2 save
   ```

2. **Nginx’e yeni server bloğu ekleyin:**
   ```bash
   nano /etc/nginx/sites-available/ikinci-site
   ```
   İçerik:
   ```nginx
   server {
       listen 80;
       server_name ikincisite.com www.ikincisite.com;
       location / {
           proxy_pass http://127.0.0.1:3001;
           proxy_http_version 1.1;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

3. Aktifleştirip SSL:
   ```bash
   ln -s /etc/nginx/sites-available/ikinci-site /etc/nginx/sites-enabled/
   nginx -t && systemctl reload nginx
   certbot --nginx -d ikincisite.com -d www.ikincisite.com
   ```

Aynı sunucuda istediğiniz kadar site için farklı port (3002, 3003…) ve farklı `server_name` ile tekrarlayın.

---

## 10. İkinci site: Docker (icsp-reporter)

İkinci site **Docker container** olarak çalışıyorsa (ör. `icsp-reporter`, `docker compose up` ile ayağa kaldırıldı) aşağıdaki adımları uygulayın. Container’ın hangi **host port**’a map edildiğini bilmeniz gerekir (örn. `docker-compose.yml` içinde `ports: - "3001:3000"` ise Nginx’te `3001` kullanılır).

### 10.1 Docker komutları (icsp-reporter)

Proje klasörü örnek: `/var/www/icsp-reporter` (kendi yolunuza göre değiştirin).

| İşlem | Komut |
|--------|--------|
| Container’ları arka planda başlat | `cd /var/www/icsp-reporter && docker compose up -d` |
| Durdur | `cd /var/www/icsp-reporter && docker compose down` |
| Yeniden başlat | `cd /var/www/icsp-reporter && docker compose down && docker compose up -d` |
| Logları izle | `cd /var/www/icsp-reporter && docker compose logs -f` |
| Çalışan container’lar | `docker ps` |
| Durum | `docker compose ps` |

Container’ın dinlediği **host port**’u görmek için:

```bash
docker ps
```

Çıktıda `0.0.0.0:3001->3000/tcp` gibi bir satır varsa, Nginx’te **3001** kullanacaksınız. Port farklıysa (örn. 8080) aşağıdaki Nginx ayarında o portu yazın.

### 10.2 Nginx’e icsp-reporter ekleme

Yeni bir site dosyası oluşturun:

```bash
nano /etc/nginx/sites-available/icsp-reporter
```

Aşağıdaki bloğu yapıştırın. **`server_name`** ve **port**’u kendi domain ve Docker portunuza göre değiştirin (port genelde 3001 veya docker-compose’daki ilk sayı):

```nginx
server {
    listen 80;
    server_name rapor.example.com;
    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

- **server_name:** icsp-reporter için kullandığınız domain veya alt alan adı (örn. `reporter.siteniz.com`).
- **proxy_pass port:** Docker’ın host’ta dinlediği port (örn. `3001`). `docker ps` ile kontrol edin.

Aktifleştirip Nginx’i yenileyin:

```bash
ln -s /etc/nginx/sites-available/icsp-reporter /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

### 10.3 icsp-reporter için SSL (HTTPS)

Domain DNS’i sunucuya yönlendikten sonra:

```bash
certbot --nginx -d rapor.example.com
```

`rapor.example.com` yerine kendi domain’inizi yazın. Certbot Nginx yapılandırmasını otomatik günceller.

### 10.4 Özet: icsp-reporter komutları

| Ne yapıyorsunuz | Komut |
|-----------------|--------|
| Container başlat | `cd /var/www/icsp-reporter && docker compose up -d` |
| Container durdur | `cd /var/www/icsp-reporter && docker compose down` |
| Yeniden başlat | `cd /var/www/icsp-reporter && docker compose restart` veya `down` + `up -d` |
| Loglar | `docker compose -f /var/www/icsp-reporter/docker-compose.yml logs -f` |
| Nginx’i icsp-reporter sonrası yenile | `nginx -t && systemctl reload nginx` |

---

## 11. Özet komutlar (tek site – Karahisarlıoğlu)

| Ne yapıyorsunuz | Komut |
|-----------------|--------|
| Sunucuya giriş | `ssh root@46.225.110.180` |
| Proje güncelleme | `cd /var/www/karahisar && git pull && npm install && npm run build` |
| Static kopyalama | `cp -r .next/static .next/` ve `cp -r public .` (standalone için) |
| PM2 yeniden başlatma | `pm2 restart karahisar` |
| PM2 durum | `pm2 status` |
| Nginx test | `nginx -t` |
| Nginx yenile | `systemctl reload nginx` |

---

## 12. Data klasörü (newsletter / iletişim)

Uygulama `data/` klasörüne yazar. Sunucuda yazılabilir olmalı:

```bash
cd /var/www/karahisar
mkdir -p data
chmod 755 data
```

---

## 13. Güvenlik notları

- Root şifresini ve SSH private key’i **hiçbir yere yazmayın**, paylaşmayın.
- Mümkünse root yerine normal kullanıcı + sudo kullanın; SSH’de root login’i kapatıp key ile giriş yapın.
- Hetzner Console’dan **Backups**’ı açarsanız sunucu yedeklenir (ücretli olabilir).

Domain’iniz henüz yoksa, önce `server_name _` veya IP ile tek bir Nginx site açıp `proxy_pass http://127.0.0.1:3000` ile test edebilir; domain ekleyince `server_name` satırını güncellersiniz.

---

## Sorun giderme: Bağlantı reddedildi (ERR_CONNECTION_REFUSED)

Site açılmıyor, tarayıcıda **"Bu siteye ulaşılamıyor" / "bağlanmayı reddetti" / ERR_CONNECTION_REFUSED** görüyorsanız, sunucuya hiç ulaşılamıyor demektir. **Sunucuda** (SSH ile bağlanıp) sırayla şunları kontrol edin:

| Kontrol | Komut | Beklenen |
|--------|--------|----------|
| Nginx çalışıyor mu? | `systemctl status nginx` | `active (running)` |
| Nginx'i başlat | `systemctl start nginx` | — |
| 80 portu dinleniyor mu? | Aşağıdaki bloktan `ss` komutunu kopyalayın | `:80` ve `nginx` |
| Firewall 80 açık mı? | `ufw status` | `80/tcp ALLOW` |
| PM2'de Karahisarlıoğlu çalışıyor mu? | `pm2 list` | `karahisar` online |
| Port 3000 dinleniyor mu? | Aşağıdaki bloktan `ss` komutunu kopyalayın | `:3000` ve `node` |
| Uygulamayı başlat / yenile | `pm2 restart karahisar` veya bloktaki `pm2 start` | — |
| Nginx config geçerli mi? | `nginx -t` | `syntax is ok` |
| Nginx'i yenile | `systemctl reload nginx` | — |

Sunucuda kopyala-yapıştır için (pipe `|` karakteri düz yazılmalı, `\|` değil):

```bash
systemctl status nginx
ss -tlnp | grep :80
ss -tlnp | grep :3000
ufw status
pm2 list
nginx -t
systemctl reload nginx
```

**DNS:** Kendi bilgisayarınızda `ping karahisarliogluyapi.com.tr` veya `nslookup karahisarliogluyapi.com.tr` ile domain'in **46.225.110.180**'e çözüldüğünü doğrulayın. Farklı bir IP görüyorsanız domain sağlayıcınızda A kaydını 46.225.110.180 yapacak şekilde güncelleyin.

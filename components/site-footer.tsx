import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/kara-logo-2.png" alt="Karahisarlıoğlu Yapı" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Karahisarlıoğlu Yapı Tasarım; yazılım, e-ticaret ve yapı ekosistemini aynı çatı altında
              buluşturuyor. 35 yıllık deneyimle güvenilir çözümler sunuyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">İletişim</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>+90 532 743 41 33</p>
              <p>info@karahisarliogluyapi.com.tr</p>
              <p>
                İlkbahar Mahallesi Güneypark Kümeevler Sinpaş Altınoran Çarşı 19/B -2. Bodrum Katı
                No:31 Çankaya/ANKARA
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Şirket</h4>
            <div className="space-y-2 text-sm">
              <Link href="/hakkimizda" className="text-gray-400 hover:text-white block transition-colors">
                Hakkımızda
              </Link>
              <Link href="/igkfast" className="text-gray-400 hover:text-white block transition-colors">
                IGKfast
              </Link>
              <Link href="/magazalar" className="text-gray-400 hover:text-white block transition-colors">
                Mağazalar
              </Link>
              <Link href="/referanslar" className="text-gray-400 hover:text-white block transition-colors">
                Referanslar
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-white block transition-colors">
                Blog
              </Link>
              <Link href="/iletisim" className="text-gray-400 hover:text-white block transition-colors">
                İletişim
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
            <a
              href="https://igkfast.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--brand-warm)] transition-colors"
            >
              IGKfast
            </a>
            {" "}@ Karahisarlıoğlu Yapı Tasarım Markasıdır
            <br />
            © Karahisarlıoğlu Yapı Tasarım Ltd.Şti
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {["f", "t", "in", "@"].map((label) => (
              <div
                key={label}
                className="w-8 h-8 bg-[var(--brand-warm)] rounded-full flex items-center justify-center"
              >
                <span className="text-slate-900 font-bold text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

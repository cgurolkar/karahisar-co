import { NextRequest, NextResponse } from "next/server"
import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Newsletter subscriber interface
interface Subscriber {
  email: string
  subscribedAt: string
  ip?: string
  userAgent?: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Geçersiz email adresi" },
        { status: 400 }
      )
    }

    // Data klasörünü oluştur (yoksa)
    const dataDir = path.join(process.cwd(), "data")
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }

    const filePath = path.join(dataDir, "newsletter-subscribers.json")

    // Mevcut subscribers'ları oku
    let subscribers: Subscriber[] = []
    if (existsSync(filePath)) {
      const fileContent = await readFile(filePath, "utf-8")
      subscribers = JSON.parse(fileContent)
    }

    // Email zaten kayıtlı mı kontrol et
    const existingSubscriber = subscribers.find(
      (sub) => sub.email.toLowerCase() === email.toLowerCase()
    )

    if (existingSubscriber) {
      return NextResponse.json(
        { success: false, message: "Bu email adresi zaten kayıtlı" },
        { status: 409 }
      )
    }

    // Yeni subscriber ekle
    const newSubscriber: Subscriber = {
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || undefined,
      userAgent: request.headers.get("user-agent") || undefined,
    }

    subscribers.push(newSubscriber)

    // Dosyaya kaydet
    await writeFile(filePath, JSON.stringify(subscribers, null, 2), "utf-8")

    // ============================================
    // İSTEĞE BAĞLI: Email servis entegrasyonu
    // ============================================
    // Burada Resend, SendGrid, Mailchimp vb. servislere istek atabilirsiniz
    
    // Örnek: Resend ile hoşgeldin email'i gönderme
    // await sendWelcomeEmail(email)
    
    // Örnek: Mailchimp'e ekleme
    // await addToMailchimp(email)

    return NextResponse.json(
      {
        success: true,
        message: "E-posta listemize başarıyla kaydoldunuz",
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Newsletter API Error:", error)
    return NextResponse.json(
      { success: false, message: "Bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 }
    )
  }
}

// GET endpoint - Admin için subscriber listesini görmek
export async function GET(request: NextRequest) {
  try {
    // Basit bir authentication kontrolü (production'da daha güvenli olmalı)
    const authHeader = request.headers.get("authorization")
    const adminKey = process.env.ADMIN_API_KEY || "admin-secret-key"

    if (authHeader !== `Bearer ${adminKey}`) {
      return NextResponse.json(
        { success: false, message: "Yetkisiz erişim" },
        { status: 401 }
      )
    }

    const filePath = path.join(process.cwd(), "data", "newsletter-subscribers.json")

    if (!existsSync(filePath)) {
      return NextResponse.json(
        { success: true, subscribers: [], count: 0 },
        { status: 200 }
      )
    }

    const fileContent = await readFile(filePath, "utf-8")
    const subscribers: Subscriber[] = JSON.parse(fileContent)

    return NextResponse.json(
      {
        success: true,
        subscribers,
        count: subscribers.length,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Newsletter GET API Error:", error)
    return NextResponse.json(
      { success: false, message: "Bir hata oluştu" },
      { status: 500 }
    )
  }
}

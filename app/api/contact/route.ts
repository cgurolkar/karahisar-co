import { NextRequest, NextResponse } from "next/server"
import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export interface ContactSubmission {
  name: string
  email: string
  phone?: string
  service?: string
  message: string
  submittedAt: string
  ip?: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Lütfen geçerli bir ad soyad girin." },
        { status: 400 }
      )
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Geçersiz e-posta adresi." },
        { status: 400 }
      )
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "Mesajınız en az 10 karakter olmalıdır." },
        { status: 400 }
      )
    }

    const dataDir = path.join(process.cwd(), "data")
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }

    const filePath = path.join(dataDir, "contact-submissions.json")
    let submissions: ContactSubmission[] = []
    if (existsSync(filePath)) {
      const fileContent = await readFile(filePath, "utf-8")
      submissions = JSON.parse(fileContent)
    }

    const submission: ContactSubmission = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: typeof phone === "string" ? phone.trim() : undefined,
      service: typeof service === "string" ? service.trim() : undefined,
      message: message.trim(),
      submittedAt: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || undefined,
    }
    submissions.push(submission)
    await writeFile(filePath, JSON.stringify(submissions, null, 2), "utf-8")

    return NextResponse.json(
      {
        success: true,
        message: "Mesajınız alındı. En kısa sürede size dönüş yapacağız.",
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Contact API Error:", error)
    return NextResponse.json(
      { success: false, message: "Bir hata oluştu. Lütfen tekrar deneyin." },
      { status: 500 }
    )
  }
}

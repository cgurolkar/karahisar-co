"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Geçersiz Email",
        description: "Lütfen geçerli bir e-posta adresi girin.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        toast({
          title: data.message || "Hata",
          description: response.status === 409 
            ? "Bu email adresi zaten kayıtlı." 
            : "Lütfen tekrar deneyin.",
          variant: "destructive",
        })
        return
      }
      
      toast({
        title: "Başarılı! 🎉",
        description: data.message || "E-posta listemize başarıyla kaydoldunuz.",
      })
      
      setEmail("")
    } catch (error) {
      console.error("Newsletter error:", error)
      toast({
        title: "Hata",
        description: "Bir hata oluştu. Lütfen tekrar deneyin.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-posta adresiniz"
        className="flex-1 px-3 py-2 bg-gray-800 text-white text-sm border border-gray-700 focus:outline-none focus:border-teal-500 disabled:opacity-50"
        disabled={isLoading}
        required
      />
      <Button 
        type="submit"
        disabled={isLoading}
        className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-4 py-2 rounded-none disabled:opacity-50"
      >
        {isLoading ? "..." : "→"}
      </Button>
    </form>
  )
}

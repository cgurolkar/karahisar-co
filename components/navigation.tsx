"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/igkfast", label: "IGKfast" },
    { href: "/magazalar", label: "Mağazalar" },
    { href: "/referanslar", label: "Referanslar" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/blog", label: "Blog" },
    { href: "/iletisim", label: "İletişim" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--surface)]/85 backdrop-blur-md border-b border-[var(--border-soft)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/kara-logo-2.png" alt="Karahisarlıoğlu Yapı" className="h-11 w-auto bg-white rounded-sm" />
            <div className="hidden sm:block">
              <div className="text-lg font-bold tracking-tight text-[var(--ink)] font-[family-name:var(--font-display)]">
                KARAHİSARLIOĞLU
              </div>
              <div className="text-xs text-[var(--ink-muted)] -mt-0.5 tracking-wide">YAPI TASARIM</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--border-soft)]">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

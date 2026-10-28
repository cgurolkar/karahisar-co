"use client"

import { useEffect, useState, type CSSProperties, type ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  as?: "div" | "figure" | "section"
}

/** Client-side nav'da CSS animasyonunun yeniden çalışması için remount. */
export function AnimateOnMount({ children, className = "", style, as: Tag = "div" }: Props) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const safeClassName = ready
    ? className
    : className.replace(/\banimate-[\w-]+\b/g, "").replace(/\s+/g, " ").trim()

  return (
    <Tag className={safeClassName || undefined} style={style}>
      {children}
    </Tag>
  )
}

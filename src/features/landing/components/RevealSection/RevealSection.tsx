"use client"

import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react"
import css from "./RevealSection.module.css"

type RevealSectionProps = {
  children: ReactNode
  /** Зсув порогу (чим менше — тим раніше з’являється при скролі вниз) */
  rootMargin?: string
}

const RevealSection = ({
  children,
  rootMargin = "0px 0px -10% 0px",
}: RevealSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof window === "undefined") return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      queueMicrotask(() => {
        setVisible(true)
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { root: null, rootMargin, threshold: 0.06 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div
      ref={ref}
      className={`${css.wrap} ${visible ? css.visible : ""}`}
    >
      {children}
    </div>
  )
}

export default RevealSection

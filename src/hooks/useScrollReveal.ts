'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * useScrollReveal
 * Fade up once when element enters viewport.
 * Threshold=0 + rootMargin untuk trigger awal, timeout fallback untuk mobile.
 */
export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Safety fallback — tunjuk section selepas 2.5s jika observer tak trigger
    const fallback = setTimeout(() => setIsVisible(true), 2500)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          clearTimeout(fallback)
          observer.unobserve(el)
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -30px 0px', // trigger sebelum element tiba di viewport
      },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return { ref, isVisible }
}

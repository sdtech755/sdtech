'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  threshold?: number
}

export default function ScrollReveal({
  children,
  className = '',
  threshold = 0.12,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal(threshold)

  return (
    <div
      ref={ref}
      className={[
        'scroll-reveal',
        isVisible ? 'scroll-reveal--visible' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}

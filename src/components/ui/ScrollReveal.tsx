'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
}

export default function ScrollReveal({
  children,
  className = '',
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

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

'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChefHat,
  Fan,
  Snowflake,
  Sparkles,
  Building2,
  Hammer,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import type { HeroSlide } from '@/types'

const slides: HeroSlide[] = [
  {
    id: 1,
    category: 'Engineering & Contracting',
    label: 'HVAC Contractor',
    line1: 'Commercial HVAC &',
    line2: 'Ventilation Contractor',
    description:
      'With over 10 years of hands-on experience in duct steelwork and mechanical air systems, we deliver end-to-end ventilation solutions engineered for lasting performance.',
    bgImage: '/images/hero/slide-1-hvac.jpg',
    align: 'left',
    Icon: Building2,
    ctaLabel: 'Get a Quote',
    ctaHref:
      'https://wa.me/60389575808?text=Hello%20Steel%20Duct,%20I%20would%20like%20to%20request%20a%20quote%20for%20HVAC%20and%20ventilation%20services.',
    secondaryLabel: 'Learn More',
    secondaryHref: '#services',
  },
  {
    id: 2,
    category: 'NFPA 96 & Certified HVAC',
    label: 'Kitchen Hood Installation',
    line1: 'NFPA 96 Kitchen Hood',
    line2: 'Installation & Ductwork',
    description:
      'Certified HVAC supply and installation of commercial kitchen hood systems, continuous liquid-tight welded grease ductwork, and fire safety ventilation compliant with NFPA 96 standards.',
    bgImage: '/images/hero/slide-2-kitchen-hood.jpg',
    align: 'right',
    Icon: ChefHat,
    ctaLabel: 'Get a Quote',
    ctaHref:
      'https://wa.me/60389575808?text=Hello%20Steel%20Duct,%20I%20would%20like%20to%20request%20a%20quote%20for%20NFPA%2096%20Kitchen%20Hood%20Installation.',
    secondaryLabel: 'Learn More',
    secondaryHref: '#services',
  },
  {
    id: 3,
    category: 'Airflow & Extraction',
    label: 'Exhaust Fan',
    line1: 'Industrial & Commercial',
    line2: 'Exhaust Fan Systems',
    description:
      'Supply and installation of industrial and residential exhaust fans for kitchens, bathrooms, and commercial facilities — engineered for quiet, continuous ventilation.',
    bgImage: '/images/hero/slide-3-exhaust-fan.jpg',
    align: 'left',
    Icon: Fan,
    ctaLabel: 'Get a Quote',
    ctaHref:
      'https://wa.me/60389575808?text=Hello%20Steel%20Duct,%20I%20would%20like%20to%20request%20a%20quote%20for%20Exhaust%20Fan%20Systems.',
    secondaryLabel: 'Learn More',
    secondaryHref: '#services',
  },
  {
    id: 4,
    category: 'Temperature Control',
    label: 'Air Cooler',
    line1: 'Energy-Efficient',
    line2: 'Commercial Air Coolers',
    description:
      'Installation and servicing of evaporative and mechanical air cooling units suited for both open commercial areas, kitchens, and enclosed residential spaces.',
    bgImage: '/images/hero/slide-4-air-cooler.jpg',
    align: 'right',
    Icon: Snowflake,
    ctaLabel: 'Get a Quote',
    ctaHref:
      'https://wa.me/60389575808?text=Hello%20Steel%20Duct,%20I%20would%20like%20to%20request%20a%20quote%20for%20Commercial%20Air%20Coolers.',
    secondaryLabel: 'Learn More',
    secondaryHref: '#services',
  },
  {
    id: 5,
    category: 'Air Quality & Deodorisation',
    label: 'Air Fresher',
    line1: 'Indoor Air Quality &',
    line2: 'Odour Control Systems',
    description:
      'Integrated air freshening and deodorizing systems designed to neutralize stubborn cooking odours, reduce airborne impurities, and maintain a cleaner indoor atmosphere.',
    bgImage: '/images/hero/slide-5-air-fresher.jpg',
    align: 'left',
    Icon: Sparkles,
    ctaLabel: 'Get a Quote',
    ctaHref:
      'https://wa.me/60389575808?text=Hello%20Steel%20Duct,%20I%20would%20like%20to%20request%20a%20quote%20for%20Air%20Fresher%20and%20Odour%20Control.',
    secondaryLabel: 'Learn More',
    secondaryHref: '#services',
  },
  {
    id: 6,
    category: 'Ductwork Specialisation',
    label: 'Duct Steel',
    line1: 'Precision Steel',
    line2: 'Duct Installation',
    description:
      'Supply and installation of stainless steel grease ducts and galvanised iron HVAC ductwork — precisely fitted to your site drawings with full compliance to Malaysian fire safety and health codes.',
    bgImage: '/images/hero/slide-6-duct-steel.jpg',
    align: 'right',
    Icon: Hammer,
    ctaLabel: 'Get a Quote',
    ctaHref:
      'https://wa.me/60389575808?text=Hello%20Steel%20Duct,%20I%20would%20like%20to%20request%20a%20quote%20for%20duct%20steel%20installation.',
    secondaryLabel: 'Learn More',
    secondaryHref: '#services',
  },
]

const AUTOPLAY_INTERVAL = 7500

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [animating, setAnimating] = useState(false)
  // animKey forces React to fully remount animated elements on every slide change,
  // which restarts CSS animations fresh — the industry-standard approach.
  const [animKey, setAnimKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Lazy load slides 2 to 6 so initial page load is instant
  const [loadedImages, setLoadedImages] = useState<number[]>([0])

  useEffect(() => {
    // Progressively lazy-load remaining slides after initial render
    const idleTimer = setTimeout(() => {
      setLoadedImages([0, 1, 2, 3, 4, 5])
    }, 1500)
    return () => clearTimeout(idleTimer)
  }, [])

  const goTo = useCallback(
    (index: number) => {
      if (animating) return
      setAnimating(true)
      setLoadedImages((prev) => (prev.includes(index) ? prev : [...prev, index]))
      setCurrent(index)
      setAnimKey((k) => k + 1) // bump key → remounts all animated children
      setTimeout(() => setAnimating(false), 350)
    },
    [animating],
  )

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    if (paused) return
    timerRef.current = setTimeout(next, AUTOPLAY_INTERVAL)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [current, paused, next])

  const slide = slides[current]
  const CurrentIcon = slide.Icon
  const isLeft = slide.align === 'left'

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-black pt-28 pb-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background Images Layer with Next.js Image Optimization & Priority Preload ── */}
      {slides.map((s, idx) => {
        const isCurrent = idx === current
        const isLoaded = loadedImages.includes(idx)
        if (!isLoaded && !isCurrent) return null

        return (
          <div
            key={s.bgImage}
            aria-hidden="true"
            className={[
              'absolute inset-0 transition-opacity duration-[400ms] ease-in-out',
              isCurrent ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none -z-10',
            ].join(' ')}
          >
            <Image
              src={s.bgImage}
              alt={s.label}
              fill
              priority={idx === 0}
              quality={75}
              sizes="100vw"
              className="object-cover object-center select-none pointer-events-none"
            />
          </div>
        )
      })}

      {/* ── Dynamic Directional Dark Gradients for Text Legibility ── */}
      <div
        aria-hidden="true"
        className={[
          'pointer-events-none absolute inset-0 transition-all duration-[400ms] z-10',
          isLeft
            ? 'bg-gradient-to-r from-black/95 via-black/85 lg:via-black/75 to-black/50 lg:to-black/25'
            : 'bg-gradient-to-r lg:bg-gradient-to-l from-black/95 via-black/85 lg:via-black/75 to-black/50 lg:to-black/25',
        ].join(' ')}
      />

      {/* ── Top and Bottom Vignette Overlays ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 18%, transparent 80%, rgba(0,0,0,0.95) 100%)',
        }}
      />

      {/* ── Top accent border ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent z-20"
      />

      {/* ── Main Content Container with Left / Right Alternation on Desktop ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* Content Box: Strictly Alternating Left (1, 3, 5) / Right (2, 4, 6) on Desktop */}
        <div
          className={[
            'max-w-3xl',
            isLeft
              ? 'lg:mr-auto text-left items-start'
              : 'lg:ml-auto text-left lg:text-right items-start lg:items-end',
          ].join(' ')}
        >
          {/* ── Semua content fade up SERENTAK sebagai satu blok ── */}
          <div key={`content-${animKey}`} className="hero-anim-content">

            {/* Decorative Icon */}
            <div
              className={[
                'flex mb-5',
                isLeft ? 'justify-start' : 'justify-start lg:justify-end',
              ].join(' ')}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/40 text-orange-400 backdrop-blur-md shadow-lg shadow-black/50">
                <CurrentIcon size={26} strokeWidth={1.75} />
              </div>
            </div>

            {/* Category Eyebrow */}
            <div
              className={[
                'flex items-center gap-2.5 mb-4 min-h-[24px]',
                isLeft ? 'justify-start' : 'justify-start lg:justify-end',
              ].join(' ')}
            >
              <span className="h-px w-6 bg-orange-500" />
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                {slide.id === 2 ? 'Kitchen Hoods • NFPA 96 Certified' : slide.category}
              </span>
              <span className="h-px w-6 bg-orange-500" />
            </div>

            {/* Main Headline */}
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] font-extrabold leading-[1.18] tracking-tight text-white mb-6 drop-shadow-md"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              <span className="block text-white lg:whitespace-nowrap">{slide.line1}</span>
              <span className="block text-orange-500 lg:whitespace-nowrap">{slide.line2}</span>
            </h1>

            {/* Description */}
            <p
              className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 drop-shadow"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              {slide.description}
            </p>

            {/* Call-To-Action Buttons */}
            <div
              className={[
                'flex flex-col sm:flex-row items-start gap-4',
                isLeft ? 'justify-start' : 'justify-start lg:justify-end',
              ].join(' ')}
            >
              <a
                href={slide.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={slide.ctaLabel}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md bg-[#25D366] hover:bg-[#20ba5a] text-gray-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#25D366]/30 hover:-translate-y-px"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                <WhatsAppIcon size={18} />
                <span>{slide.ctaLabel}</span>
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
              <a
                href={slide.secondaryHref}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-black/50 backdrop-blur-md border border-gray-700 hover:border-orange-500 text-gray-200 hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                {slide.secondaryLabel}
              </a>
            </div>

            {/* Value & Guarantee Strip */}
            <div
              className={[
                'mt-7 pt-5 border-t border-gray-800/80 flex flex-wrap items-center gap-2.5 sm:gap-3',
                isLeft ? 'justify-start' : 'justify-start lg:justify-end',
              ].join(' ')}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold backdrop-blur-md">
                <CheckCircle2 size={14} className="text-orange-500 flex-shrink-0" />
                <span>Free Site Inspection &amp; Advice</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-gray-800 text-gray-200 text-xs font-medium backdrop-blur-md">
                <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                <span>Transparent Itemised Quotation</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-gray-800 text-gray-200 text-xs font-medium backdrop-blur-md">
                <ShieldCheck size={14} className="text-orange-400 flex-shrink-0" />
                <span>Quality Within Budget. Guaranteed.</span>
              </div>
            </div>

          </div>{/* end hero-anim-content */}
        </div>
      </div>

      {/* ── Side Prev/Next Arrows (Desktop & Tablet — hidden on mobile to avoid overlapping text) ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-black/70 backdrop-blur-md border border-gray-600 hover:border-orange-500 hover:bg-orange-500/20 text-white hover:text-orange-400 transition-all duration-200 cursor-pointer shadow-xl"
      >
        <ChevronLeft size={22} strokeWidth={2.5} />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-black/70 backdrop-blur-md border border-gray-600 hover:border-orange-500 hover:bg-orange-500/20 text-white hover:text-orange-400 transition-all duration-200 cursor-pointer shadow-xl"
      >
        <ChevronRight size={22} strokeWidth={2.5} />
      </button>

      {/* ── Bottom Navigation Bar (Dots + Mobile Arrows integrated at bottom, 100% free of text overlap) ── */}
      <div
        className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-3 px-4"
      >
        {/* Mobile Prev Arrow */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-black/80 backdrop-blur-md border border-gray-700 text-gray-300 active:bg-orange-500 active:text-black transition-colors"
        >
          <ChevronLeft size={16} strokeWidth={2.5} />
        </button>

        {/* Dots Selection */}
        <div
          role="tablist"
          aria-label="Hero slide selection"
          className="flex items-center justify-center gap-2"
        >
          {slides.map((s, i) => (
            <button
              key={s.label}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}: ${s.label}`}
              onClick={() => goTo(i)}
              className="relative flex items-center justify-center cursor-pointer"
              style={{ width: '26px', height: '16px' }}
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '26px' : '8px',
                  height: '8px',
                  backgroundColor:
                    i === current ? 'rgb(249 115 22)' : 'rgb(156 163 175)',
                }}
              />
            </button>
          ))}
        </div>

        {/* Mobile Next Arrow */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-black/80 backdrop-blur-md border border-gray-700 text-gray-300 active:bg-orange-500 active:text-black transition-colors"
        >
          <ChevronRight size={16} strokeWidth={2.5} />
        </button>
      </div>

    </section>
  )
}

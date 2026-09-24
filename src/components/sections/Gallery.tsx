'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import {
  Maximize2,
  X,
  MapPin,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Wrench,
} from 'lucide-react'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import LazySection from '@/components/ui/LazySection'
import type { GalleryItem } from '@/types'

const galleryCategories = [
  { key: 'all', label: 'All Projects' },
  { key: 'kitchen-hood', label: 'Kitchen Hood' },
  { key: 'ducting', label: 'Ducting Installation' },
  { key: 'make-up-air', label: 'Make-Up Air Balance' },
  { key: 'air-cleaner', label: 'Air Cleaner System' },
]

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Kitchen Hood Installation',
    category: 'Kitchen Hood',
    categoryKey: 'kitchen-hood',
    description:
      'Heavy-duty construction for lasting performance. Our kitchen hood ventilation systems are custom engineered and fabricated with high-grade stainless steel to withstand the demanding thermal and grease load of high-volume commercial kitchens.',
    location: 'Klang Valley, Selangor & KL',
    leadTime: '3 – 5 Working Days',
    scope: 'Custom 304 Stainless Steel Fabrication & Full Exhaust Duct Routing',
    applications: 'Commercial Kitchens, Central Kitchens, Hotel Restaurants, F&B Franchises',
    compliance: 'CIDB M01 Certified • BOMBA Fire Safety Compliant',
    specifications: [
      'Heavy-duty grade 304 stainless steel hood & ductwork construction',
      'Engineered for high-volume commercial kitchens & heavy-duty cooking lines',
      'Custom fabrication tailored to exact on-site ceiling & kitchen layout',
      'Optimal exhaust airflow with high-efficiency grease extraction baffle filters',
    ],
    image: '/images/gallery/kitchen-hood-installation.png',
  },
  {
    id: 2,
    title: 'Ducting Installation',
    category: 'Ducting Installation',
    categoryKey: 'ducting',
    description:
      'Engineered for tight spaces and optimal airflow. Our exterior and interior ductwork integrates flawlessly with building architecture, maximizing exhaust efficiency while minimizing backpressure and vibration.',
    location: 'Klang Valley, Selangor & KL',
    leadTime: '4 – 7 Working Days',
    scope: 'Exterior High-Rise Wall Risers, Fan Placement & Structural Bracing',
    applications: 'Commercial Shoplots, High-Rise Buildings, Industrial Facilities',
    compliance: 'CIDB Certified Engineering • Structural Wind Load Safe',
    specifications: [
      'Custom sheet metal & exterior high-rise duct routing with weatherproof seals',
      'Engineered for tight spaces & multi-storey exterior wall risers',
      'Balanced airflow dynamics with low static pressure drop and acoustic insulation',
      'Heavy-duty standoff brackets with safe boom-lift certified installation',
    ],
    image: '/images/gallery/ducting-installation.jpg',
  },
  {
    id: 3,
    title: 'Make-Up Air Balance',
    category: 'Make-Up Air Balance',
    categoryKey: 'make-up-air',
    description:
      'Complete fresh air replacement and air balance system. Designed with evaporative cooling integration to maintain balanced static pressure, prevent kitchen odor migration, and keep ambient room temperatures comfortable for kitchen crew.',
    location: 'Klang Valley, Selangor & KL',
    leadTime: '3 – 6 Working Days',
    scope: 'Fresh Air Supply Diffusers, Make-Up Air Fans & Evaporative Cooling',
    applications: 'Enclosed Kitchens, Cloud Kitchens, Food Courts, Production Bakeries',
    compliance: 'ASHRAE Standards Compliant • Balanced Airflow Dynamics',
    specifications: [
      'Complete make-up air & exhaust ventilation static pressure balance',
      'Evaporative fresh air cooling integration for optimal temperature control',
      'Maintains comfortable kitchen room temperature & healthy indoor air quality',
      'Even air delivery through heavy-duty ceiling-mounted distribution diffusers',
    ],
    image: '/images/gallery/make-up-air-balance.jpg',
  },
  {
    id: 4,
    title: 'Air Cleaner system',
    category: 'Air Cleaner System',
    categoryKey: 'air-cleaner',
    description:
      'High-performance electrostatic precipitator (ESP) oil and smoke filtration system. Effectively eliminates heavy cooking fumes, grease particles, and smoke before exhausting to the environment, ensuring full environmental compliance.',
    location: 'Klang Valley, Selangor & KL',
    leadTime: '2 – 4 Working Days',
    scope: 'Electrostatic Precipitator (ESP) Supply, Ceiling Rigging & Power Wiring',
    applications: 'Shopping Mall F&B Outlets, Enclosed Shoplots, High-Density Commercial Hubs',
    compliance: 'DOE (Jabatan Alam Sekitar) Compliant • Shopping Mall Standard',
    specifications: [
      'High-efficiency electrostatic oil & smoke precipitation (up to 95%+ efficiency)',
      'Removes strong cooking odours, grease haze, fine particulates & cooking fumes',
      'Essential compliance for shopping malls, shoplots & enclosed commercial venues',
      'Heavy-duty ceiling mount with accessible quick-release servicing panels',
    ],
    image: '/images/gallery/air-cleaner-system.jpg',
  },
]

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredItems =
    activeTab === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.categoryKey === activeTab)

  const handleOpenModal = (item: GalleryItem) => {
    setSelectedItem(item)
  }

  const handleCloseModal = useCallback(() => {
    setSelectedItem(null)
  }, [])

  const handleNextItem = useCallback(() => {
    if (!selectedItem) return
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedItem(filteredItems[nextIndex])
  }, [selectedItem, filteredItems])

  const handlePrevItem = useCallback(() => {
    if (!selectedItem) return
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedItem(filteredItems[prevIndex])
  }, [selectedItem, filteredItems])

  // Body scroll lock management
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedItem])

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return
      if (e.key === 'Escape') handleCloseModal()
      if (e.key === 'ArrowRight') handleNextItem()
      if (e.key === 'ArrowLeft') handlePrevItem()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedItem, handleCloseModal, handleNextItem, handlePrevItem])

  return (
    <section id="gallery" className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Top divider with warm gradient */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
      />

      {/* Grid texture for background (kotak-kotak) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 50% 20%, rgba(249,115,22,0.08), transparent 70%)',
        }}
      />

      <LazySection>
        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-12 gap-4">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-8 bg-orange-500" />
              <span
                className="text-xs font-semibold tracking-[0.3em] uppercase text-orange-500"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Project Showcase
              </span>
              <span className="h-px w-8 bg-orange-500" />
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Installation &amp; <span className="text-orange-500">Project Gallery</span>
            </h2>

            <p
              className="max-w-2xl text-gray-300 text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Explore our real-world on-site commercial kitchen exhaust hood installations, custom ductwork fabrication, make-up air systems, and electrostatic smoke cleaners.
            </p>
          </div>

          {/* ── Filter Tabs (Smooth horizontal swipe on mobile, centered on desktop) ── */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-3 sm:pb-0 sm:flex-wrap sm:justify-center -mx-2 px-2 sm:mx-0 sm:px-0 mb-10 sm:mb-12">
            {galleryCategories.map((cat) => {
              const isActive = activeTab === cat.key
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveTab(cat.key)}
                  className={[
                    'whitespace-nowrap flex-shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer',
                    isActive
                      ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/25 scale-100 sm:scale-105'
                      : 'bg-gray-900/90 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 hover:border-gray-700',
                  ].join(' ')}
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* ── Gallery Showcase Grid (2x2 / 4-Col Layout) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenModal(item)}
                className="group relative flex flex-col rounded-3xl bg-gray-950/90 border border-gray-800/90 hover:border-orange-500/60 overflow-hidden shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 cursor-pointer"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={item.id <= 2}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className="inline-block px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-orange-500/40 text-orange-400 text-[11px] font-bold tracking-wider uppercase"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* View Details Icon */}
                  <div className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/80 backdrop-blur-md border border-gray-700 text-gray-300 group-hover:text-orange-400 group-hover:border-orange-500 transition-colors duration-200">
                    <Maximize2 size={14} />
                  </div>
                </div>

                {/* Content Box */}
                <div className="flex flex-col flex-grow p-5 justify-between bg-gradient-to-b from-gray-950 to-black">
                  <div>
                    {/* Location tag */}
                    <div className="flex items-center gap-1 text-xs text-gray-400 mb-2 font-medium">
                      <MapPin size={13} className="text-orange-500 flex-shrink-0" />
                      <span>{item.location}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg font-extrabold text-white group-hover:text-orange-400 transition-colors duration-200 mb-2 leading-snug"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm sm:text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {item.description}
                    </p>

                    {/* Specifications List */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {item.specifications.slice(0, 2).map((spec, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm sm:text-xs text-gray-200">
                            <CheckCircle2
                              size={15}
                              className="text-emerald-400 flex-shrink-0 mt-0.5"
                            />
                            <span className="line-clamp-1">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card bottom action */}
                  <div className="mt-4 pt-3.5 border-t border-gray-900 flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-500 group-hover:text-orange-400 tracking-wide uppercase transition-colors">
                      View Specifications
                    </span>
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 transition-all duration-200">
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom Section CTA ── */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-6 sm:p-8 rounded-2xl bg-gray-950 border border-gray-800 max-w-3xl mx-auto shadow-2xl">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 flex-shrink-0">
                <Sparkles size={24} />
              </div>
              <div className="text-center sm:text-left flex-grow">
                <h4
                  className="text-lg font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  Need Custom Ductwork or a Site Inspection?
                </h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  Share your kitchen or building layout with our team for a fast, tailored quotation.
                </p>
              </div>
              <a
                href="https://wa.me/60389575808?text=Hello%20Steel%20Duct,%20I%20would%20like%20to%20request%20a%20site%20inspection%20and%20quotation%20for%20a%20ventilation%20project."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Request WhatsApp Quote for Ventilation Project"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-gray-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#25D366]/20 hover:-translate-y-0.5"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>
      </LazySection>

      {/* ── Gallery Lightbox Modal (Portaled to document.body) ── */}
      {mounted &&
        selectedItem &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-md animate-hero-fade"
            onClick={handleCloseModal}
          >
            {/* Modal Card – Zero-scroll design: Desktop side-by-side, Mobile compact all-in-one view */}
            <div
              className="relative w-full max-w-4xl max-h-[calc(100dvh-24px)] md:max-h-[90dvh] rounded-2xl bg-[#0c0d12] border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col md:flex-row my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Left Column (Desktop) / Top Banner (Mobile) ── */}
              <div className="relative w-full md:w-5/12 h-40 sm:h-48 md:h-auto min-h-[160px] md:min-h-[460px] bg-black flex-shrink-0">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center"
                  priority
                />
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0c0d12] via-transparent to-black/30 pointer-events-none" />

                {/* Category badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className="px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md border border-orange-500/60 text-orange-400 text-[10px] font-bold tracking-widest uppercase shadow-md"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    {selectedItem.category}
                  </span>
                </div>

                {/* Prev / Next navigation buttons */}
                {filteredItems.length > 1 && (
                  <div className="absolute inset-x-2.5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-between pointer-events-none">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePrevItem()
                      }}
                      aria-label="Previous project"
                      className="pointer-events-auto flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/80 hover:bg-black border border-white/30 text-white active:scale-95 transition-all shadow-lg"
                    >
                      <ChevronLeft size={18} strokeWidth={2.5} />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleNextItem()
                      }}
                      aria-label="Next project"
                      className="pointer-events-auto flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/80 hover:bg-black border border-white/30 text-white active:scale-95 transition-all shadow-lg"
                    >
                      <ChevronRight size={18} strokeWidth={2.5} />
                    </button>
                  </div>
                )}
              </div>

              {/* ── Right Column (Desktop) / Bottom Content (Mobile) ── */}
              <div className="relative w-full md:w-7/12 p-3.5 sm:p-5 md:p-6 flex flex-col justify-between gap-2 sm:gap-3.5 overflow-y-auto">
                {/* X Close button – top right of card */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCloseModal()
                  }}
                  aria-label="Close popup"
                  className="absolute top-3 right-3 z-30 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-orange-500 shadow-md active:scale-90 transition-all duration-200"
                >
                  <X size={18} strokeWidth={2.5} />
                </button>

                {/* 1. Header: Location & Lead Time */}
                <div className="flex flex-wrap items-center gap-2 text-xs pr-10">
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <MapPin size={12} className="text-orange-500 flex-shrink-0" />
                    <span className="text-[11px] sm:text-xs">{selectedItem.location}</span>
                  </div>
                  {selectedItem.leadTime && (
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[10px] sm:text-[11px] font-semibold">
                      <Clock size={11} />
                      <span>{selectedItem.leadTime}</span>
                    </div>
                  )}
                </div>

                {/* 2. Title & Description */}
                <div>
                  <h3
                    className="text-base sm:text-lg md:text-xl font-extrabold text-white leading-tight mb-1"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    {selectedItem.title}
                  </h3>
                  <p
                    className="text-xs sm:text-[13px] text-gray-300 leading-snug"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {selectedItem.description}
                  </p>
                </div>

                {/* 3. Engineering Details Quick Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedItem.scope && (
                    <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.03] border border-white/10 flex flex-col gap-0.5">
                      <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-orange-400 uppercase tracking-wider">
                        <Wrench size={12} />
                        <span>Fabrication & Scope</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-300 leading-tight">{selectedItem.scope}</p>
                    </div>
                  )}
                  {selectedItem.compliance && (
                    <div className="p-2 sm:p-2.5 rounded-lg bg-white/[0.03] border border-white/10 flex flex-col gap-0.5">
                      <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                        <ShieldCheck size={12} />
                        <span>Compliance Standard</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-300 leading-tight">{selectedItem.compliance}</p>
                    </div>
                  )}
                </div>

                {/* 4. Key Specifications */}
                <div>
                  <h4
                    className="text-[10px] sm:text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-1.5"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Engineering Specifications:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {selectedItem.specifications.map((spec, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-gray-300 leading-tight">
                        <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 5. Direct WhatsApp Action Button */}
                <div className="pt-1">
                  <a
                    href={`https://wa.me/60389575808?text=Hello%20Steel%20Duct,%20I%20am%20interested%20in%20a%20project%20similar%20to:%20${encodeURIComponent(selectedItem.title)}%20(${selectedItem.location})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-gray-950 font-extrabold text-xs sm:text-[13px] uppercase tracking-wider transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#25D366]/25"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <WhatsAppIcon size={17} />
                    <span>Inquire About This Project</span>
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  )
}

'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import {
  Maximize2,
  X,
  MapPin,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
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
      'Heavy-duty construction for lasting performance. Our systems are built to withstand the demands of high-volume commercial kitchens.',
    location: 'Klang Valley, Selangor & KL',
    specifications: [
      'Heavy-duty stainless steel hood & ductwork construction',
      'Engineered for high-volume commercial kitchens & restaurants',
      'Custom fabrication tailored to exact on-site kitchen layout',
      'Optimal exhaust airflow and efficient grease extraction',
    ],
    image: '/images/gallery/kitchen-hood-installation.png',
  },
  {
    id: 2,
    title: 'Ducting Installation',
    category: 'Ducting Installation',
    categoryKey: 'ducting',
    description:
      'Engineered for tight spaces and optimal airflow. Our ductwork integrates flawlessly, maximizing kitchen layout efficiency.',
    location: 'Klang Valley, Selangor & KL',
    specifications: [
      'Custom sheet metal & exterior high-rise duct routing',
      'Engineered for tight spaces & multi-storey wall risers',
      'Balanced airflow dynamics with low static pressure drop',
      'Heavy-duty standoff brackets with safe boom-lift installation',
    ],
    image: '/images/gallery/ducting-installation.jpg',
  },
  {
    id: 3,
    title: 'Make-Up Air Balance',
    category: 'Make-Up Air Balance',
    categoryKey: 'make-up-air',
    description:
      'Complete system with ventilation and controlled room temperature.',
    location: 'Klang Valley, Selangor & KL',
    specifications: [
      'Complete make-up air & exhaust ventilation balance',
      'Evaporative fresh air cooling integration for temperature control',
      'Maintains comfortable kitchen room temperature & indoor air quality',
      'Even air delivery through ceiling-mounted distribution diffusers',
    ],
    image: '/images/gallery/make-up-air-balance.jpg',
  },
  {
    id: 4,
    title: 'Air Cleaner system',
    category: 'Air Cleaner System',
    categoryKey: 'air-cleaner',
    description:
      'An effective oil and smoke filtration system that removes odors and smoke, especially for premises in enclosed areas.',
    location: 'Klang Valley, Selangor & KL',
    specifications: [
      'High-efficiency electrostatic oil & smoke precipitation',
      'Removes strong cooking odours, grease haze & fine fumes',
      'Essential compliance for shopping malls, shoplots & enclosed venues',
      'Heavy-duty ceiling mount with accessible servicing panels',
    ],
    image: '/images/gallery/air-cleaner-system.jpg',
  },
]

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filteredItems =
    activeTab === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.categoryKey === activeTab)

  const handleOpenModal = (item: GalleryItem) => {
    setSelectedItem(item)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseModal = useCallback(() => {
    setSelectedItem(null)
    document.body.style.overflow = ''
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

          {/* ── Filter Tabs ── */}
          <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-12">
            {galleryCategories.map((cat) => {
              const isActive = activeTab === cat.key
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveTab(cat.key)}
                  className={[
                    'px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer',
                    isActive
                      ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/25 scale-105'
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
                      className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {item.description}
                    </p>

                    {/* Specifications List */}
                    <div className="mb-4">
                      <ul className="space-y-1.5">
                        {item.specifications.slice(0, 2).map((spec, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                            <CheckCircle2
                              size={14}
                              className="text-emerald-400 flex-shrink-0 mt-0.5"
                            />
                            <span className="line-clamp-1">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card bottom action */}
                  <div className="pt-3 border-t border-gray-900 flex items-center justify-between text-xs font-bold text-orange-500 group-hover:text-orange-400">
                    <span>View Specifications</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      &rarr;
                    </span>
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

      {/* ── Fullscreen Interactive Lightbox Modal ── */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-xl animate-hero-fade"
          onClick={handleCloseModal}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gray-950 border border-gray-800 shadow-2xl flex flex-col lg:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              aria-label="Close project modal"
              className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/80 hover:bg-orange-500 border border-gray-700 hover:border-orange-500 text-gray-300 hover:text-black transition-all duration-200 cursor-pointer shadow-lg"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Left/Top: High-Res Image with Prev/Next Navigation */}
            <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[460px] bg-black">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center bg-black"
                priority
              />

              {filteredItems.length > 1 && (
                <>
                  {/* Prev Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePrevItem()
                    }}
                    aria-label="Previous project"
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black/70 hover:bg-orange-500 hover:text-black border border-gray-700 hover:border-orange-500 text-white transition-all duration-200 cursor-pointer"
                  >
                    <ChevronLeft size={20} strokeWidth={2.5} />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNextItem()
                    }}
                    aria-label="Next project"
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black/70 hover:bg-orange-500 hover:text-black border border-gray-700 hover:border-orange-500 text-white transition-all duration-200 cursor-pointer"
                  >
                    <ChevronRight size={20} strokeWidth={2.5} />
                  </button>
                </>
              )}
            </div>

            {/* Right/Bottom: Project Technical Details */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Category & Location Header */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className="px-3 py-1 rounded-md bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-bold tracking-wider uppercase"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    {selectedItem.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                    <MapPin size={13} className="text-orange-500" />
                    <span>{selectedItem.location}</span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl sm:text-2xl font-extrabold text-white mb-3 tracking-tight"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  {selectedItem.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-gray-300 leading-relaxed mb-6"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {selectedItem.description}
                </p>

                {/* Specifications Checklist */}
                <div className="mb-6">
                  <h4
                    className="text-xs font-bold tracking-widest uppercase text-orange-400 mb-3"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Key Engineering Specifications:
                  </h4>
                  <ul className="space-y-2">
                    {selectedItem.specifications.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-gray-200">
                        <CheckCircle2
                          size={15}
                          className="text-emerald-400 flex-shrink-0 mt-0.5"
                        />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="pt-4 border-t border-gray-800">
                <a
                  href={`https://wa.me/60389575808?text=Hello%20Steel%20Duct,%20I%20am%20interested%20in%20a%20project%20similar%20to:%20${encodeURIComponent(
                    selectedItem.title
                  )}%20(${selectedItem.location})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-gray-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#25D366]/20"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  <WhatsAppIcon size={18} />
                  <span>Inquire About This Project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

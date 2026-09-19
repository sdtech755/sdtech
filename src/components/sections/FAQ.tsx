'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import LazySection from '@/components/ui/LazySection'
import type { FAQItem } from '@/types'

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'What is the difference between a standard aircond and a professional HVAC system?',
    answer:
      'A standard residential air conditioner only cools an individual room. A professional HVAC (Heating, Ventilation & Air Conditioning) system is a comprehensive, building-wide engineering solution that regulates temperature, fresh air intake, humidity, and indoor air quality simultaneously. HVAC systems are built for commercial, food & beverage, and industrial facilities requiring certified engineering contractors.',
  },
  {
    id: 2,
    question: 'Is Steel Duct CIDB certified for HVAC and ductwork in Malaysia?',
    answer:
      'Yes. Steel Duct is registered with the Construction Industry Development Board (CIDB) Malaysia under the M01 category (Air Conditioning and Ventilation Systems). All electrical and mechanical installations strictly comply with the Energy Commission of Malaysia (ST) and local fire authority standards.',
  },
  {
    id: 3,
    question: 'Why is NFPA 96 compliance essential for commercial kitchen hood installation?',
    answer:
      'Commercial kitchen exhaust hoods produce high-temperature grease, oil vapors, and heat. Standard ductwork is susceptible to grease leaks and severe fire hazards. As Certified HVAC contractors, we install NFPA 96 compliant heavy-gauge galvanised iron and grade 304/316 stainless steel ductwork with liquid-tight welded joints that meet strict BOMBA fire safety codes, NFPA 96 standards, and local health department requirements.',
  },
  {
    id: 4,
    question: 'How long does a commercial kitchen hood duct installation take?',
    answer:
      'A standard kitchen hood duct installation typically takes 1 to 2 working days. Larger commercial kitchens, multi-storey duct routing, or custom hood configurations may require 3 to 4 days including CFM airflow testing and commissioning. We conduct site measurements beforehand to ensure a fast, precise fit.',
  },
  {
    id: 5,
    question: 'Do you provide maintenance and servicing for exhaust fans and duct systems?',
    answer:
      'Yes. We provide scheduled preventative maintenance contracts covering exhaust fan impeller degreasing, motor and belt tension checks, duct grease inspection, vibration diagnostics, and CFM airflow balancing. Routine servicing prolongs equipment lifespan and prevents grease fire risks.',
  },
  {
    id: 6,
    question: 'Can your air cooling and air fresher systems improve Indoor Air Quality (IAQ)?',
    answer:
      'Yes. IAQ management is a core engineering specialty. We install evaporative air cooling and integrated deodorizing fresh-air filtration units that remove airborne particulates, effectively reduce persistent cooking odours, and supply positive fresh-air pressure in compliance with DOSH and ASHRAE IAQ guidelines.',
  },
]

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-800/80 transition-colors duration-200">
      {/* Question row */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
      >
        <span
          className={[
            'text-base sm:text-lg font-semibold leading-snug transition-colors duration-200',
            isOpen ? 'text-orange-400' : 'text-white group-hover:text-orange-300',
          ].join(' ')}
          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
        >
          {item.question}
        </span>

        {/* Chevron icon rotates 180° when open */}
        <span
          className={[
            'flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300',
            isOpen
              ? 'bg-orange-500/10 text-orange-400 rotate-180'
              : 'text-gray-400 group-hover:text-white rotate-0',
          ].join(' ')}
        >
          <ChevronDown
            size={18}
            strokeWidth={2}
            className={isOpen ? 'text-orange-400' : 'text-gray-400 group-hover:text-white'}
          />
        </span>
      </button>

      {/* Answer panel — CSS max-height for smooth slide */}
      <div
        className="transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? '500px' : '0px',
          overflow: 'hidden',
        }}
      >
        <div className="pb-6 pt-1">
          <p
            className="text-base text-gray-300 leading-relaxed pt-4"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1)

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Top divider */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"
      />

      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(249,115,22,0.07) 0%, transparent 70%)',
        }}
      />

      <LazySection minHeight="500px">
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-8 bg-orange-500" />
              <span
                className="text-xs font-semibold tracking-[0.3em] uppercase text-orange-500"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Clear Answers
              </span>
              <span className="h-px w-8 bg-orange-500" />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            <p
              className="max-w-xl text-gray-300 text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Essential answers regarding HVAC licensing, commercial kitchen codes,
              duct steel systems, and installation timelines in Malaysia.
            </p>
          </div>

          {/* Open Accordion List — TIADA KOTAK */}
          <div className="flex flex-col border-t border-gray-800/80">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                item={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
        </div>
      </LazySection>

      {/* Bottom divider */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"
      />
    </section>
  )
}

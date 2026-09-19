import type { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import Services from '@/components/sections/Services'
import Gallery from '@/components/sections/Gallery'
import Expertise from '@/components/sections/Expertise'
import Sectors from '@/components/sections/Sectors'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Steel Duct Environmental | Commercial Ventilation & HVAC Contractor Malaysia',
  description:
    'Custom kitchen hood ductwork, industrial exhaust fans, commercial air coolers, and HVAC solutions in Malaysia. Certified CIDB M01 engineering team for commercial kitchens, factories, and commercial facilities.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-black">
      {/* Navigation */}
      <Navigation />

      <main>
        {/* 1 – Hero Section (own entrance animation, no scroll reveal needed) */}
        <Hero />

        {/* 2 – Trust & Credibility Metrics (negative translateY overlap with Hero — no scroll reveal) */}
        <StatsBar />

        {/* 3 – Core Ventilation & Duct Steel Fabrication Services */}
        <ScrollReveal>
          <Services />
        </ScrollReveal>

        {/* 4 – Project Showcase & Visual Gallery */}
        <ScrollReveal>
          <Gallery />
        </ScrollReveal>

        {/* 5 – Full Lifecycle Engineering & Support */}
        <ScrollReveal>
          <Expertise />
        </ScrollReveal>

        {/* 6 – Industries & Sectors Served */}
        <ScrollReveal>
          <Sectors />
        </ScrollReveal>

        {/* 7 – Frequently Asked Questions */}
        <ScrollReveal>
          <FAQ />
        </ScrollReveal>

        {/* 8 – Direct Contact & Project Team */}
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      {/* Footer — no scroll reveal, always visible */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  )
}

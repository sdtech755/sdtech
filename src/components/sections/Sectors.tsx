import { UtensilsCrossed, Factory, Building2, HeartPulse, ShoppingBag, Server } from 'lucide-react'
import LazySection from '@/components/ui/LazySection'
import type { SectorItem } from '@/types'

const sectors: SectorItem[] = [
  {
    id: 1,
    title: 'Commercial Kitchens & Restaurants',
    description:
      'NFPA 96 compliant kitchen hood installation, custom grease ductwork, and fire-safe exhaust systems engineered by certified HVAC specialists for restaurants, hotel galleys, and central kitchens.',
    Icon: UtensilsCrossed,
  },
  {
    id: 2,
    title: 'Factories & Industrial Warehouses',
    description:
      'Industrial-grade ventilation, high-volume exhaust fans, and custom duct steel fabrication for manufacturing facilities, workshops, and production cleanrooms.',
    Icon: Factory,
  },
  {
    id: 3,
    title: 'Corporate Office Towers',
    description:
      'Centralised HVAC systems, VRV/VRF ducting networks, and fresh air distribution ensuring consistent climate control and fresh air circulation across multi-storey buildings.',
    Icon: Building2,
  },
  {
    id: 4,
    title: 'Hospitals & Healthcare Clinics',
    description:
      'Critical air filtration, pressure-controlled HVAC installations, and clean ventilation ductwork preventing cross-contamination in line with health authority guidelines.',
    Icon: HeartPulse,
  },
  {
    id: 5,
    title: 'Shopping Malls & Retail Centres',
    description:
      'High-capacity central cooling and mechanical ventilation systems engineered to balance energy efficiency with maximum comfort for high-density public visitor traffic.',
    Icon: ShoppingBag,
  },
  {
    id: 6,
    title: 'Data Centres & Tech Facilities',
    description:
      'Precision cooling duct systems maintaining tight temperature and humidity control 24/7 to safeguard mission-critical server hardware from heat downtime.',
    Icon: Server,
  },
]

export default function Sectors() {
  return (
    <section id="sectors" className="relative bg-gray-950 py-24 px-6">
      {/* Top divider */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
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

      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 10%, rgba(249,115,22,0.06), transparent 70%)',
        }}
      />

      <LazySection minHeight="520px">
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-8 bg-orange-500" />
              <span
                className="text-xs font-semibold tracking-[0.3em] uppercase text-orange-500"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Industries Served
              </span>
              <span className="h-px w-8 bg-orange-500" />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Tailored for <span className="text-orange-500">Every Environment</span>
            </h2>
            <p
              className="max-w-2xl text-gray-300 text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Different industries carry vastly different airflow demands. We tailor ductwork materials,
              fan capacities, and filtration systems to meet strict sector regulations across Malaysia.
            </p>
          </div>

          {/* Sectors Grid (6 items — Perfectly Balanced Heights & Baselines) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map(({ id, title, description, Icon }) => (
              <div
                key={id}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-black border border-gray-800/80 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 h-full"
              >
                <div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-500 mb-5 group-hover:scale-105 transition-transform duration-300">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3
                    className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-200 mb-2.5 min-h-[52px] flex items-center"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-base text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors duration-300 min-h-[76px] sm:min-h-[72px]"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {description}
                  </p>
                </div>
              </div>
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

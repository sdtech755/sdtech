import { siteConfig } from '@/config/site'

const navLinks = siteConfig.navLinks


export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-gray-900">
      {/* Top orange rule */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Brand block */}
          <div className="flex flex-col gap-3 max-w-sm">
            <a
              href="#home"
              className="text-2xl font-extrabold tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              aria-label="Steel Duct – back to top"
            >
              <span className="text-white">Steel</span>
              <span className="text-orange-500">Duct</span>
            </a>
            <p
              className="text-sm text-gray-400 leading-relaxed"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Certified HVAC contractor &amp; NFPA 96 kitchen hood installation specialist.
              Exhaust fans, air coolers, and steel ductwork supply &amp; installation
              across Selangor, Kuala Lumpur, and Malaysia.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-orange-500 transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-sm text-gray-400 text-center sm:text-left"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            &copy; 2015 SD Technical Engineering Commercial Ventilation — First-pass inspection clearance guaranteed on all commercial extraction retrofits.
          </p>
          <p
            className="text-sm text-gray-400"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            NFPA 96 CERTIFIED — ZERO-CLEARANCE FABRICATION
          </p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import WhatsAppIcon from './WhatsAppIcon'

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble on desktop */}
      <div className="hidden sm:flex items-center px-3.5 py-1.5 rounded-full bg-gray-900 border border-[#25D366]/40 text-xs font-semibold text-white shadow-xl">
        <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2 animate-pulse" />
        Chat on WhatsApp (+60 3-8957 5808)
      </div>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/60389575808?text=Hello%20Steel%20Duct,%20I%20would%20like%20to%20request%20a%20quote%20for%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Steel Duct on WhatsApp (+60 3-8957 5808)"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-gray-950 shadow-2xl shadow-[#25D366]/40 hover:scale-105 transition-all duration-200"
      >
        <WhatsAppIcon size={28} />
      </a>
    </aside>
  )
}

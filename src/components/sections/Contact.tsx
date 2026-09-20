'use client'

import { useState } from 'react'
import { MapPin, Phone, CheckCircle2, ShieldCheck } from 'lucide-react'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import LazySection from '@/components/ui/LazySection'

const serviceOptions = [
  'Kitchen Hood Installation (NFPA 96 & Certified HVAC)',
  'Industrial Exhaust Fan Systems',
  'Commercial Air Cooler / Evaporative Cooling',
  'Sheet Metal & Steel Duct Fabrication (GI / SS 304)',
  'Kitchen Hood Cleaning & Maintenance Servicing',
  'General MVAC / HVAC Project Consultation',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: serviceOptions[0],
    location: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Format mesej WhatsApp yang tersusun dan mudah dibaca
    const lines = [
      '📋 *PERTANYAAN PROJEK — STEEL DUCT*',
      '',
      `👤 *Nama:* ${formData.name}`,
      `📞 *No. Telefon:* ${formData.phone}`,
      `📧 *Email:* ${formData.email || 'Tidak diberikan'}`,
      `🔧 *Perkhidmatan:* ${formData.service}`,
      `📍 *Lokasi Projek:* ${formData.location || 'Tidak diberikan'}`,
      '',
      '💬 *Butiran & Keperluan:*',
      formData.message,
      '',
      '_Dihantar melalui Borang Pertanyaan Laman Web Steel Duct_',
    ]

    const waUrl = `https://wa.me/60389575808?text=${encodeURIComponent(lines.join('\n'))}`

    // Buka WhatsApp dengan mesej yang telah diisi
    window.open(waUrl, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative bg-gray-950 py-24 px-6">
      {/* Top divider */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"
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

      {/* Subtle glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(249,115,22,0.06), transparent 70%)',
        }}
      />

      <LazySection>
        <div className="relative max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-8 bg-orange-500" />
              <span
                className="text-xs font-semibold tracking-[0.3em] uppercase text-orange-500"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Get In Touch
              </span>
              <span className="h-px w-8 bg-orange-500" />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Contact <span className="text-orange-500">Our Team</span>
            </h2>
            <p
              className="max-w-2xl text-gray-300 text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Send an inquiry directly to our engineering desk at{' '}
              <a
                href="mailto:sdtechnic@gmail.com"
                className="text-orange-400 hover:text-orange-300 underline underline-offset-2 font-medium"
              >
                sdtechnic@gmail.com
              </a>{' '}
              or reach out via phone and WhatsApp.
            </p>
          </div>

          {/* ── Value & Satisfaction Guarantee Banner ── */}
          <div className="mb-10 rounded-2xl bg-gradient-to-r from-orange-500/15 via-orange-500/5 to-transparent border border-orange-500/30 p-5 sm:p-6 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-400 flex-shrink-0 shadow-lg shadow-orange-500/10">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h3
                  className="text-base sm:text-lg font-bold text-white mb-1 tracking-tight"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  Free Site Inspection, Expert Advice &amp; Quotation
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Uncompromised engineering quality tailored to fit within your budget. Guaranteed.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase tracking-wider shadow-md"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>100% Free &middot; No Obligation</span>
              </span>
            </div>
          </div>

          {/* ── Direct Email Inquiry Form ── */}
          <div className="mb-16 rounded-3xl bg-black/70 border border-gray-800 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800/80">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
                <Mail size={22} />
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white tracking-tight"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  WhatsApp Inquiry Form
                </h3>
                <p className="text-xs text-gray-400">
                  Isi borang dan klik <span className="text-green-400 font-semibold">Send Now</span> — mesej tersusun akan dihantar terus ke WhatsApp kami.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366]/20 text-[#25D366] mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h4
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  WhatsApp Dibuka!
                </h4>
                <p className="text-sm text-gray-300 max-w-lg mx-auto mb-6 leading-relaxed">
                  Mesej pertanyaan anda telah disediakan. Jika WhatsApp tidak terbuka secara automatik, klik butang di bawah:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/60389575808?text=${encodeURIComponent([
                      '📋 *PERTANYAAN PROJEK — STEEL DUCT*',
                      '',
                      `👤 *Nama:* ${formData.name}`,
                      `📞 *No. Telefon:* ${formData.phone}`,
                      `📧 *Email:* ${formData.email || 'Tidak diberikan'}`,
                      `🔧 *Perkhidmatan:* ${formData.service}`,
                      `📍 *Lokasi Projek:* ${formData.location || 'Tidak diberikan'}`,
                      '',
                      '💬 *Butiran & Keperluan:*',
                      formData.message,
                      '',
                      '_Dihantar melalui Borang Pertanyaan Laman Web Steel Duct_',
                    ].join('\n'))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-gray-950 font-extrabold text-xs uppercase tracking-wider transition-all duration-200"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    <WhatsAppIcon size={16} />
                    Buka WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: serviceOptions[0],
                        location: '',
                        message: '',
                      })
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-300 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Hantar Pertanyaan Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="inquiry-name"
                      className="text-xs font-semibold tracking-wider uppercase text-orange-400"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      Your Name / Company Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ahmad Razif / Restaurant ABC"
                      className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-gray-500 text-sm focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="inquiry-phone"
                      className="text-xs font-semibold tracking-wider uppercase text-orange-400"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      Phone / WhatsApp Number <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +60 12-345 6789"
                      className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-gray-500 text-sm focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="inquiry-email"
                      className="text-xs font-semibold tracking-wider uppercase text-orange-400"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      Email Address (Optional)
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. yourname@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-gray-500 text-sm focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Service Needed */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="inquiry-service"
                      className="text-xs font-semibold tracking-wider uppercase text-orange-400"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      Service Required
                    </label>
                    <select
                      id="inquiry-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white text-sm focus:border-orange-500 focus:outline-none transition-colors"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-gray-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Location */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="inquiry-location"
                    className="text-xs font-semibold tracking-wider uppercase text-orange-400"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Project Location / Town / State
                  </label>
                  <input
                    id="inquiry-location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Petaling Jaya, Selangor / KLCC / Shah Alam"
                    className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-gray-500 text-sm focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="inquiry-message"
                    className="text-xs font-semibold tracking-wider uppercase text-orange-400"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Project Details &amp; Requirements <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your kitchen exhaust hood requirements, ductwork dimensions, factory specifications, or site inspection requests..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-gray-500 text-sm focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit button */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-gray-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:-translate-y-0.5 cursor-pointer"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    <WhatsAppIcon size={16} />
                    <span>Send Now</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Info cards grid (3 cards: Office Address, Office Phone, WhatsApp Direct Line) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address Card */}
            <div className="group relative flex flex-col justify-between p-7 rounded-2xl bg-black border border-gray-800 hover:border-orange-500/40 transition-all duration-300 h-full">
              <div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 group-hover:border-orange-500/40 group-hover:bg-orange-500/10 transition-all duration-300 mb-5">
                  <MapPin
                    size={22}
                    strokeWidth={1.75}
                    className="text-gray-400 group-hover:text-orange-500 transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1.5 min-h-[130px]">
                  <p
                    className="text-xs font-semibold tracking-widest uppercase text-orange-500"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Office Address
                  </p>
                  <p
                    className="text-base text-gray-300 leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    Block A-G-01, Jalan LP 7/3,
                    <br />
                    Taman Lestari Perdana,
                    <br />
                    43300 Seri Kembangan,
                    <br />
                    Selangor, Malaysia
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Block+A-G-01+Jalan+LP+7/3+Taman+Lestari+Perdana+43300+Seri+Kembangan+Selangor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Steel Duct Office Address on Google Maps"
                className="mt-6 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-md bg-gray-900 hover:bg-gray-850 border border-gray-800 hover:border-orange-500/50 text-orange-500 hover:text-orange-400 text-xs font-bold tracking-wider uppercase transition-all duration-200"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                View on Google Maps
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Office Phone Card */}
            <div className="group relative flex flex-col justify-between p-7 rounded-2xl bg-black border border-gray-800 hover:border-orange-500/40 transition-all duration-300 h-full">
              <div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 group-hover:border-orange-500/40 group-hover:bg-orange-500/10 transition-all duration-300 mb-5">
                  <Phone
                    size={22}
                    strokeWidth={1.75}
                    className="text-gray-400 group-hover:text-orange-500 transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1.5 min-h-[130px]">
                  <p
                    className="text-xs font-semibold tracking-widest uppercase text-orange-500"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Office Phone
                  </p>
                  <a
                    href="tel:+60389575808"
                    aria-label="Call Steel Duct office phone at +60 3-8957 5808"
                    className="text-xl font-bold text-white hover:text-orange-400 transition-colors duration-200 block"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    +60 3-8957 5808
                  </a>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                    Operating Hours:
                    <br />
                    Monday – Saturday: 8:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              <a
                href="tel:+60389575808"
                aria-label="Call Steel Duct office phone at +60 3-8957 5808"
                className="mt-6 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-md bg-gray-900 hover:bg-gray-850 border border-gray-800 hover:border-orange-500/50 text-orange-500 hover:text-orange-400 text-xs font-bold tracking-wider uppercase transition-all duration-200"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Call Office Directly
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* WhatsApp Direct Line Card */}
            <div className="group relative flex flex-col justify-between p-7 rounded-2xl bg-black border border-orange-500/40 hover:border-orange-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/15 h-full">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] transition-all duration-300">
                    <WhatsAppIcon size={22} />
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase text-orange-500 border border-orange-500/40 rounded px-2 py-0.5"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Instant Reply
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 min-h-[130px]">
                  <p
                    className="text-xs font-semibold tracking-widest uppercase text-[#25D366]"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    WhatsApp Enquiries &amp; Quotes
                  </p>
                  <a
                    href="https://wa.me/60389575808?text=Hello%20Steel%20Duct,%20I%20would%20like%20to%20request%20a%20quote%20for%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with Steel Duct on WhatsApp: +60 3-8957 5808"
                    className="text-xl font-bold text-white hover:text-[#25D366] transition-colors duration-200 block"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    +60 3-8957 5808
                  </a>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                    Available for immediate project consultations, PDF quotation sharing, and site inspections.
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/60389575808?text=Hello%20Steel%20Duct,%20I%20would%20like%20to%20request%20a%20quote%20for%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Steel Duct on WhatsApp: +60 3-8957 5808"
                className="mt-6 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-[#25D366] hover:bg-[#20ba5a] text-gray-950 text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-md shadow-[#25D366]/20"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                <WhatsAppIcon size={16} />
                Chat on WhatsApp
              </a>
            </div>
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

export const siteConfig = {
  name: 'Steel Duct Environmental Sdn Bhd',
  shortName: 'Steel Duct',
  alternateName: 'Still Duct Technical Engineering',
  description:
    'Custom kitchen hood ductwork, industrial exhaust fans, commercial air coolers, and HVAC solutions in Malaysia. Certified CIDB M01 engineering team for commercial kitchens, factories, and commercial facilities.',
  url: 'https://steelduct.com.my',
  ogImage: 'https://steelduct.com.my/og-image.jpg',

  // Contact details
  contact: {
    phone: '+60 3-8957 5808',
    phoneRaw: '+60389575808',
    email: 'sdtechnic@gmail.com',
    whatsappUrl: 'https://wa.me/60389575808',
    whatsappMessage: 'Hello Steel Duct, I would like to request a quote.',
  },

  // Address
  address: {
    street: 'Block A-G-01, Jalan LP 7/3, Taman Lestari Perdana',
    locality: 'Seri Kembangan',
    postalCode: '43300',
    region: 'Selangor',
    country: 'MY',
    full: 'Block A-G-01, Jalan LP 7/3, Taman Lestari Perdana, 43300 Seri Kembangan, Selangor, Malaysia',
    geo: {
      latitude: 3.0319,
      longitude: 101.7097,
    },
  },

  // Operating Hours
  hours: {
    days: 'Monday – Saturday',
    time: '8:00 AM – 6:00 PM',
    closed: 'Sunday & Public Holidays',
  },

  // Navigation Links
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Support', href: '#expertise' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
} as const

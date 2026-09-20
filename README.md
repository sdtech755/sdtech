# Steel Duct Environmental Sdn Bhd — Website

Laman web rasmi untuk **Steel Duct Environmental Sdn Bhd**, syarikat kontraktor HVAC dan ventilasi komersial bertauliah di Malaysia.

## Tech Stack

- **Framework**: Next.js 15 (Static Export)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Cloudflare Pages

## Cara Jalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) dalam browser.

## Build untuk Production

```bash
npm run build
```

Output folder: `out/`

## Deploy

Push ke branch `main` — Cloudflare Pages akan auto-deploy.

## Konfigurasi Domain

Edit satu baris dalam `src/config/site.ts`:

```ts
url: 'https://domain-anda.com',
```

Atau set environment variable `NEXT_PUBLIC_SITE_URL` dalam Cloudflare Pages dashboard.

## Struktur Projek

```
src/
├── app/             # Next.js App Router
├── components/
│   ├── layout/      # Navbar, Sidebar, Footer, Navigation
│   ├── sections/    # Hero, Services, Gallery, FAQ, Contact, dll
│   └── ui/          # ScrollReveal, LazySection, FloatingWhatsApp
├── config/          # site.ts — konfigurasi domain & contact
├── hooks/           # useScrollReveal
└── types/           # TypeScript interfaces
```

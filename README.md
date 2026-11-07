# Maison Aura — Luxury Haute Parfumerie Scrollytelling Experience

An “Awwwards”-grade, high-performance, single-page scrollytelling luxury e-commerce experience engineered for **Maison Aura**. The site showcases three legendary fragrances:
1. **Clive Christian** — *Regal. Rare. Iconic.* (Extrait Edition)
2. **Roja Parfums** — *Bright. Addictive. Airborne.* (Elite Edition)
3. **Bleu de Chanel Parfum** — *Night. Clean. Powerful.* (Iconic Edition)

Built with **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and a high-efficiency **HTML5 Canvas** rendering engine for smooth 120-frame 3D rotation image sequences.

---

## 🌟 Key Features

- **60fps Sticky Scrollytelling Engine (`h-[500vh]`):** Responsive HTML5 Canvas with `requestAnimationFrame` and automatic `contain` scaling for seamless frame sequencing.
- **Dynamic Chromatic Adaptation:** The site dynamically transitions root and ambient lighting to match each fragrance's bespoke luxury palette:
  - Clive Christian: Imperial Gold (`#D8B36A`)
  - Roja Parfums: Airborne Cyan (`#3FE3D1`)
  - Bleu de Chanel: Deep Royal Midnight (`#2B57FF`)
- **Synchronized Text Overlays:** Smooth `useTransform` reveals across 4 distinct phases (Hero Opening, Formulation Accord, Dry-down Heart, and Climax Aura).
- **Graceful Canvas Fallback:** Includes a procedural vector flacon generator with real-time reflections and liquid core illumination, ensuring the canvas is never blank even before images are loaded.
- **Full Commerce Funnel:**
  - Dynamic visual specifications and Grasse craftsmanship metrics
  - Quantity selection, bespoke gift-wrap toggle with atelier seal
  - Instant allocation feedback and micro-guarantees
- **Static Export Ready:** Pre-configured with `output: 'export'` and `images: { unoptimized: true }` for zero-configuration Netlify Drop, Cloudflare Pages, Vercel, or AWS S3 deployment.

---

## 📂 Project Architecture

```
website/
├── app/
│   ├── globals.css              # Custom CSS variables, selection styling & sleek scrollbars
│   ├── layout.tsx               # Root layout with Google 'Outfit' font & SEO metadata
│   └── page.tsx                 # Master page orchestration, AnimatePresence & navigation
├── components/
│   ├── Navbar.tsx               # Fixed header, abstract atom/crown SVG & glowing CTA
│   ├── ProductBottleScroll.tsx  # Canvas engine (500vh sticky scroll + 120-frame renderer)
│   ├── ProductTextOverlays.tsx  # Framer Motion scroll-driven editorial typography
│   ├── ProductDetails.tsx       # Specifications, stats grid & olfactory profile
│   ├── BuyNowSection.tsx        # Commerce module, quantity selector & cart feedback
│   └── Footer.tsx               # 4-column luxury dark footer with private gazette signup
├── data/
│   └── products.ts              # Exact luxury marketing copy, notes, pricing & gradients
├── public/
│   └── images/
│       ├── clive/               # 1.webp to 120.webp (pre-extracted sample sequence)
│       ├── roja/                # 1.webp to 120.webp
│       └── bleu/                # 1.webp to 120.webp
├── next.config.mjs              # Static export configuration
├── tailwind.config.ts           # Custom color tokens and animations
├── tsconfig.json                # TypeScript App Router configuration
└── package.json                 # Project dependencies & scripts
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production (Static Export)
```bash
npm run build
```
This generates a production-optimized `out/` folder ready for instant drag-and-drop deployment on **Netlify Drop** or hosting on any static server.

---

## 🖼️ Image Sequence Placement

Each perfume loads 120 frames named sequentially from `1.webp` to `120.webp` inside `public/images/{perfume}/`:
- Clive Christian: `public/images/clive/1.webp` … `120.webp`
- Roja Parfums: `public/images/roja/1.webp` … `120.webp`
- Bleu de Chanel: `public/images/bleu/1.webp` … `120.webp`

*(Note: The canvas engine also provides seamless `.jpg` fallback and a procedural flacon renderer if images are absent).*

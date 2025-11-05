# KATEPE DIGITAL - Company Profile Webapp

Company profile website dengan animasi halus dan responsif untuk KATEPE DIGITAL menggunakan **Shadcn/UI**, React, dan Framer Motion.

## 🚀 Tech Stack

- **React 18** - UI Library
- **Vite** - Build tool yang cepat dan ringan
- **TypeScript** - Type safety
- **Shadcn/UI** - Komponen UI yang customizable dan accessible
- **Framer Motion** - Animasi halus dan smooth
- **Tailwind CSS** - Styling responsif
- **Radix UI** - Accessibility (built-in dengan shadcn)

## ✨ Fitur

- ✨ Animasi smooth dengan Framer Motion
- 📱 Fully responsive design
- 🎨 Dark & Light mode dengan shadcn theme system
- 🌐 Multi-language (Indonesian & English)
- 🔍 Product catalog dengan detail modal menggunakan shadcn Dialog
- ⚡ Fast loading dengan Vite
- 🎯 Smooth scroll dan transitions
- ♿ Accessible (keyboard navigation, ARIA labels - built-in Radix UI)

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

## 🎨 Shadcn/UI Components

Project ini menggunakan shadcn/ui components yang dapat di-customize:

- **Button** - Untuk CTA, navigation, actions
- **Card** - Untuk product cards, content sections
- **Dialog** - Untuk product detail modal
- **Badge** - Untuk technologies, status labels
- **Separator** - Untuk section dividers
- **Sheet** - Untuk mobile navigation
- **Switch** - Untuk theme toggle

Semua components dapat di-edit di folder `src/components/ui/`

## 📁 Struktur Project

```
src/
├── components/
│   ├── ui/              # shadcn components (customizable)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── badge.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   └── switch.tsx
│   ├── Header.tsx       # Navigation dengan Sheet untuk mobile
│   ├── Hero.tsx         # Hero section
│   ├── ProductCatalog.tsx  # Product grid
│   ├── ProductCard.tsx     # Product card component
│   ├── ProductDetailModal.tsx  # Detail modal dengan Dialog
│   └── Footer.tsx       # Footer component
├── contexts/
│   ├── ThemeContext.tsx  # Theme management (light/dark)
│   └── LanguageContext.tsx  # Language management (ID/EN)
├── lib/
│   └── utils.ts         # shadcn cn() utility
├── data/
│   └── products.ts      # Product data
├── translations/
│   └── index.ts         # ID & EN translations
├── utils/
│   └── productTranslations.ts  # Product translation helper
├── types.ts             # TypeScript types
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles dengan shadcn CSS variables
```

## 🎭 Animasi

Aplikasi menggunakan Framer Motion untuk berbagai animasi:
- Page entrance animations dengan stagger
- Hover effects pada cards dan buttons
- Modal transitions dengan spring physics
- Scroll-triggered animations (whileInView)
- Smooth scroll behaviors

## 🌓 Dark Mode

Dark mode menggunakan shadcn/ui theme system dengan CSS variables:
- CSS variables untuk easy theming
- Automatic persistence di localStorage
- Smooth transitions

## 🌍 Multi-Language

- Indonesian (ID)
- English (EN)
- Language preference disimpan di localStorage
- Product translations untuk semua produk

## 📱 Responsive Design

- **Desktop (≥1024px)**: 3 kolom grid, full navigation
- **Tablet (768-1023px)**: 2 kolom grid, full navigation
- **Mobile (<768px)**: 1 kolom grid, Sheet untuk mobile menu

## 🎯 Produk yang Tersedia

1. **Cash Management System** - Available
2. **Warehouse Management System** - Available
3. **Human Resource Information System** - Available
4. **Courier System** - Available
5. **Freight Management System** - Coming Soon

## 🔧 Customization

### Mengubah Theme Colors

Edit CSS variables di `src/index.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Blue */
  /* ... other colors */
}
```

### Menambah Shadcn Component

```bash
npx shadcn-ui@latest add [component-name]
```

### Customize Components

Edit langsung di `src/components/ui/[component].tsx`

## ⚡ Performance

- Lazy load images
- Optimize animations (transform/opacity only)
- Fast initial load (<3s)
- Smooth 60fps
- Shadcn components sudah optimized by default

## ♿ Accessibility

- Keyboard navigation (built-in Radix UI)
- Screen reader compatible (ARIA labels)
- Focus management
- Semantic HTML

## 📝 Notes

- Semua shadcn components dapat di-customize sepenuhnya
- Components di-copy ke project, bukan runtime dependency
- Dark mode menggunakan CSS variables untuk easy theming
- Combine shadcn transitions dengan Framer Motion untuk best results

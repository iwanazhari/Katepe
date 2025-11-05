# Prompt Dokumentasi untuk AI - Company Profile dengan Shadcn/UI

## Prompt Utama untuk AI

```
Buatkan webapp company profile yang responsif dan smooth dengan animasi menakjubkan untuk KATEPE DIGITAL. 
Website ini harus memiliki catalog product interaktif dengan animasi detail yang smooth menggunakan Shadcn/UI.

## Requirements Utama:

### 1. Tech Stack
- Framework: React 18 dengan Vite (untuk performa cepat)
- UI Library: Shadcn/UI (komponen yang customizable dan accessible)
- Styling: Tailwind CSS untuk responsive design
- Animasi: Framer Motion untuk animasi smooth dan menakjubkan
- Language: TypeScript untuk type safety
- Build Tool: Vite (ringan dan cepat)
- Base: Radix UI (untuk accessibility - built-in dengan shadcn)

### 2. Setup Shadcn/UI

**Installation:**
```bash
# Create Vite project
npm create vite@latest katepe-digital -- --template react-ts
cd katepe-digital
npm install

# Install shadcn/ui
npx shadcn-ui@latest init
# Pilih: Style: Default, Base color: Slate, CSS variables: Yes

# Install required components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add sheet
npx shadcn-ui@latest add switch
npx shadcn-ui@latest add select

# Install Framer Motion
npm install framer-motion
```

**Configuration:**
- Setup `components.json` dengan path yang benar
- Configure `tailwind.config.js` untuk shadcn theme
- Setup CSS variables untuk dark mode di `globals.css`

### 3. Struktur Halaman

#### Header Section
- **Component:** Gunakan shadcn `Sheet` untuk mobile menu, `Button` untuk navigation
- Fixed navigation bar dengan backdrop blur
- Logo/Company name: "KATEPE DIGITAL" dengan custom styling
- Navigation links: Home, Products, About, Contact (gunakan `Button` variant="ghost")
- Theme switcher: Gunakan shadcn `Switch` atau custom toggle
- Language switcher: Gunakan shadcn `Select` atau Button group
- Smooth scroll animation saat muncul dengan Framer Motion
- Sticky header saat scroll

#### Hero Section
- **Component:** Gunakan shadcn `Button` untuk CTA
- Background dengan efek blur/gradient overlay
- Judul utama: "Grow Your Business With Us" dengan gradient text
- Subtitle: "Transform your business with our innovative solutions"
- CTA button dengan shadcn `Button` variant="default" dan hover animation
- Entrance animation (fade in + slide up) dengan Framer Motion

#### Product Catalog Section
- **Component:** Gunakan shadcn `Card`, `CardHeader`, `CardContent`, `Separator`, `Badge`
- Section title: "Our Product Services" dengan shadcn `Separator` untuk underline
- Grid layout responsif:
  - Desktop: 3 kolom
  - Tablet: 2 kolom
  - Mobile: 1 kolom
- Setiap product card menggunakan shadcn `Card`:
  - Image dengan hover effect (zoom + brightness change)
  - `CardHeader` untuk title dengan hover color change
  - `CardContent` untuk description (2 lines max dengan line-clamp-2)
  - shadcn `Button` variant="outline" untuk "LEARN MORE"
  - Smooth entrance animation dengan stagger effect
  - Card lift effect saat hover (scale + shadow glow)

#### Product Detail Modal
- **Component:** Gunakan shadcn `Dialog`, `Card`, `Badge`
- Full-screen modal dengan shadcn `Dialog` component
- Backdrop blur (built-in dengan Dialog)
- Smooth spring animation saat open/close dengan Framer Motion
- Close button dengan rotate animation
- Product image dengan zoom effect
- Detail informasi menggunakan shadcn components:
  - `CardHeader` untuk title besar
  - `CardContent` untuk overview description
  - Features list dengan checkmark icons (stagger animation)
  - Technologies menggunakan shadcn `Badge` dengan pop-in animation
- Close dengan ESC key atau click backdrop (built-in Dialog)
- Smooth scroll dalam modal jika konten panjang

#### Footer Section
- **Component:** Gunakan shadcn `Card`, `Button`, `Separator`
- 4 kolom layout (responsif menjadi grid)
- Kolom 1: Company Info
  - "KATEPE DIGITAL"
  - "PT Kolaborasi Tujuh Pelangi"
  - Address lengkap
  - Email dan Phone dengan link menggunakan shadcn `Button` variant="link"
- Kolom 2: Profile
  - Link: About Us menggunakan shadcn `Button` variant="link"
- Kolom 3: Services
  - Links: Digital Marketing, IT Solutions menggunakan shadcn `Button` variant="link"
- Kolom 4: Follow Us
  - Social media icons (Facebook, LinkedIn, YouTube, Instagram) menggunakan shadcn `Button`
  - Hover animation pada icons dengan Framer Motion
- Copyright text di bawah dengan shadcn `Separator` untuk divider

### 4. Product Data

Buatkan 5 produk dengan detail berikut:

1. **Cash Management System**
   - Description: "Smart Solution for Attendance, Overtime, and Leave Requests."
   - Status: Available
   - Features:
     - Real-time attendance tracking
     - Automated overtime calculation
     - Leave request management
     - Comprehensive reporting dashboard
     - Mobile app support
   - Technologies: React, Node.js, PostgreSQL, AWS (gunakan shadcn `Badge`)
   - Image: Dashboard dengan charts dan data tables

2. **Warehouse Management System**
   - Description: "Smart Inventory Control for Efficient Warehouse Operations."
   - Status: Available
   - Features:
     - Real-time inventory tracking
     - Automated stock alerts
     - Barcode scanning integration
     - Advanced analytics and reporting
     - Multi-warehouse support
   - Technologies: Vue.js, Python, MongoDB, Docker (gunakan shadcn `Badge`)
   - Image: Dashboard dengan bar charts dan pie charts

3. **Human Resource Information System**
   - Description: "Integrated HR Management for the Modern Workplace."
   - Status: Available
   - Features:
     - Employee database management
     - Performance tracking
     - Payroll integration
     - Recruitment management
     - Employee self-service portal
   - Technologies: Angular, Java, MySQL, Kubernetes (gunakan shadcn `Badge`)
   - Image: HR dashboard dengan user profiles dan performance charts

4. **Courier System**
   - Description: "Integrated Courier Management System"
   - Status: Available
   - Features:
     - Route optimization
     - Real-time tracking
     - Delivery status updates
     - Driver management
     - Customer notifications
   - Technologies: React Native, Node.js, PostgreSQL, Google Maps API (gunakan shadcn `Badge`)
   - Image: Dashboard dengan map, delivery routes, dan status charts

5. **Freight Management System** (atau bisa ditambahkan lebih)
   - Description: "Integrated Freight Management System"
   - Status: Coming Soon
   - Overlay "COMING SOON" menggunakan shadcn `Badge` atau `Alert` dengan styling bold
   - Features tetap ada untuk preview
   - Technologies: Next.js, Python, MongoDB, AWS (gunakan shadcn `Badge`)

### 5. Animasi Requirements (Semua harus smooth dan menakjubkan)

#### Page Load Animations
- Header: Fade in + slide down menggunakan Framer Motion
- Hero: Fade in + slide up dengan delay
- Product cards: Stagger animation (muncul satu per satu dengan delay)
- Footer: Fade in saat scroll ke bawah

#### Hover Animations
- Product cards: 
  - Lift up (translateY -10px)
  - Scale image (1.1x)
  - Brightness increase
  - Shadow glow dengan accent color
  - Border color change
- Buttons (shadcn Button):
  - Scale up (1.05x)
  - Background color transition
  - Border highlight (menggunakan shadcn variants)
- Social icons:
  - Scale up + lift
  - Shadow effect

#### Modal Animations
- Backdrop: Fade in dengan blur (built-in Dialog)
- Modal container: 
  - Spring animation (scale 0.8 → 1.0)
  - Slide up (translateY 50px → 0)
  - Opacity 0 → 1
- Content inside: Stagger fade in
- Close button: Rotate 90deg saat hover

#### Scroll Animations
- Elements muncul saat scroll into view menggunakan Framer Motion `whileInView`
- Fade in + slide up animation
- Smooth scroll behavior untuk anchor links

### 6. Responsive Design

#### Desktop (≥1024px)
- 3 kolom product grid
- Full navigation menu
- Large hero text
- 4 kolom footer

#### Tablet (768px - 1023px)
- 2 kolom product grid
- Full navigation menu
- Medium hero text
- 2x2 grid footer

#### Mobile (<768px)
- 1 kolom product grid
- shadcn `Sheet` component untuk hamburger menu
- Smaller hero text
- Stacked footer (1 kolom)
- Touch-friendly button sizes (min 44x44px - shadcn default)

### 7. Color Scheme & Theme

Shadcn/UI menggunakan CSS variables untuk theming:

```css
/* Light mode */
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--card: 0 0% 100%;
--card-foreground: 222.2 84% 4.9%;
--primary: 221.2 83.2% 53.3%;
--primary-foreground: 210 40% 98%;
--secondary: 210 40% 96.1%;
--muted: 210 40% 96.1%;
--accent: 210 40% 96.1%;
--border: 214.3 31.8% 91.4%;

/* Dark mode */
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 47.4% 11.2%;
  --secondary: 217.2 32.6% 17.5%;
  --muted: 217.2 32.6% 17.5%;
  --accent: 217.2 32.6% 17.5%;
  --border: 217.2 32.6% 17.5%;
}
```

- Background: Dark (#0a0a0a atau #1a1a1a) - menggunakan CSS variables
- Cards: Dark (#1a1a1a) - menggunakan shadcn Card default
- Text: White dengan gray variants - menggunakan shadcn typography
- Accent: Blue (#3b82f6) - configure di theme
- Borders: Gray-800 - menggunakan shadcn border utilities
- Hover: Accent color dengan glow effect

### 8. Performance Requirements

- Lazy load images dengan `loading="lazy"`
- Optimize animations (gunakan transform dan opacity, bukan layout properties)
- Code splitting jika perlu
- Fast initial load (<3 seconds)
- Smooth 60fps animations
- Shadcn components sudah optimized by default

### 9. Additional Features

- Smooth scroll untuk anchor links
- Active navigation state
- Loading states jika perlu
- Error boundaries
- Accessible (keyboard navigation, ARIA labels - built-in dengan Radix UI)
- Dark mode toggle dengan shadcn theme system
- Language switcher (ID/EN)

## Implementation Notes

1. Gunakan shadcn components sebagai base, customize dengan Tailwind
2. Combine shadcn transitions dengan Framer Motion untuk smooth effects
3. TypeScript untuk type safety pada product data
4. Component-based architecture (separate components untuk setiap section)
5. State management sederhana dengan React hooks (useState untuk modal)
6. Product data di file terpisah untuk easy maintenance
7. Gunakan shadcn `cn()` utility untuk class merging

## File Structure yang Diharapkan

```
src/
├── components/
│   ├── ui/              # shadcn components (auto-generated)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── badge.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── switch.tsx
│   │   └── select.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductCatalog.tsx
│   ├── ProductCard.tsx
│   ├── ProductDetailModal.tsx
│   └── Footer.tsx
├── contexts/
│   ├── ThemeContext.tsx
│   └── LanguageContext.tsx
├── lib/
│   └── utils.ts         # shadcn cn() utility
├── data/
│   └── products.ts
├── types.ts
├── App.tsx
├── main.tsx
└── globals.css          # shadcn CSS variables
```

## Output yang Diharapkan

Website company profile dengan:
- ✅ Animasi smooth dan menakjubkan di setiap interaksi
- ✅ Product catalog dengan 5 produk menggunakan shadcn components
- ✅ Responsif sempurna di desktop, tablet, dan mobile
- ✅ Modal detail produk dengan shadcn Dialog dan animasi spring
- ✅ Dark theme modern dan professional dengan shadcn theme system
- ✅ Performance optimized dengan Vite + React
- ✅ Accessibility built-in dari Radix UI (via shadcn)
- ✅ Clean, maintainable code dengan shadcn component system
```

---

## Template Prompt untuk Modifikasi Khusus

### Untuk Menambah Shadcn Component
```
Tambahkan shadcn component [nama component] ke dalam project.
Install dengan: npx shadcn-ui@latest add [component-name]
Gunakan component ini untuk [tujuan penggunaan].
Pastikan styling konsisten dengan design system yang ada.
```

### Untuk Customize Shadcn Component
```
Customize shadcn [component name] di components/ui/[component].tsx
Tambahkan [fitur/styling] dengan tetap mempertahankan accessibility features.
Gunakan Tailwind utilities untuk styling tambahan.
```

### Untuk Mengubah Animasi dengan Shadcn
```
Modifikasi animasi [component/spesifik element] dengan combine shadcn transitions dan Framer Motion.
Contoh: "Gunakan shadcn Dialog dengan Framer Motion spring animation untuk modal"
atau "Tambahkan stagger delay lebih lama untuk product grid dengan Framer Motion"
```

### Untuk Responsive Fix dengan Shadcn
```
Perbaiki layout responsif untuk [breakpoint: mobile/tablet/desktop].
Gunakan shadcn Sheet untuk mobile menu jika diperlukan.
Issue: [jelaskan masalah], Expected: [hasil yang diinginkan]
```

### Untuk Customize Theme Shadcn
```
Ubah [warna/font/spacing] pada shadcn theme dengan mengedit CSS variables di globals.css.
Contoh: "Ubah primary color menjadi purple" atau "Tambah custom spacing scale"
```

---

## Catatan Penting untuk AI

1. **Shadcn Components** - Semua components dapat di-customize sepenuhnya, copy-paste approach
2. **Accessibility** - Built-in dengan Radix UI, jangan hapus ARIA attributes
3. **Theme System** - Gunakan CSS variables untuk dark mode, jangan hardcode colors
4. **Animasi** - Combine shadcn transitions dengan Framer Motion untuk best results
5. **Type Safety** - Gunakan TypeScript interfaces untuk semua data structures
6. **Performance** - Shadcn components sudah optimized, focus pada animations
7. **Consistency** - Gunakan shadcn variants untuk consistent design system
8. **Customization** - Edit components di `components/ui/` folder, bukan node_modules

---

## Testing Checklist

- [ ] Semua animasi smooth di desktop (60fps)
- [ ] Responsif di mobile (<768px) dengan shadcn Sheet untuk menu
- [ ] Responsif di tablet (768-1023px)
- [ ] Modal open/close animation smooth dengan shadcn Dialog
- [ ] Hover effects bekerja dengan baik
- [ ] Scroll animations trigger dengan benar
- [ ] Product images load dengan baik
- [ ] Navigation links scroll smooth
- [ ] Social media links accessible
- [ ] Dark mode konsisten di semua section dengan shadcn theme
- [ ] Keyboard navigation bekerja (built-in Radix UI)
- [ ] Screen reader compatible (built-in Radix UI)

---

## Keunggulan Shadcn/UI

1. **Copy-Paste Approach** - Components bisa di-customize sepenuhnya
2. **Accessibility Built-in** - Radix UI memberikan ARIA labels dan keyboard navigation
3. **Theme System** - CSS variables untuk easy theming
4. **TypeScript Support** - Full type safety
5. **No Runtime Dependencies** - Components adalah just code, bukan library
6. **Fully Customizable** - Edit langsung di components/ui/ folder
7. **Best Practices** - Mengikuti React dan accessibility best practices
8. **Modern Stack** - Built on latest React, Tailwind, dan Radix UI


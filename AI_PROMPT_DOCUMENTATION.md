# Prompt Dokumentasi untuk AI - Company Profile dengan Product Catalog

## Prompt Utama untuk AI

```
Buatkan webapp company profile yang responsif dan smooth dengan animasi menakjubkan untuk KATEPE DIGITAL. 
Website ini harus memiliki catalog product interaktif dengan animasi detail yang smooth.

## Requirements Utama:

### 1. Tech Stack
- Framework: React 18 dengan Vite (untuk performa cepat)
- Styling: Tailwind CSS untuk responsive design
- Animasi: Framer Motion untuk animasi smooth dan menakjubkan
- Language: TypeScript untuk type safety
- Build Tool: Vite (ringan dan cepat)

### 2. Struktur Halaman

#### Header Section
- Fixed navigation bar dengan backdrop blur
- Logo/Company name: "KATEPE DIGITAL"
- Navigation links: Home, Products, About, Contact
- Smooth scroll animation saat muncul
- Sticky header saat scroll

#### Hero Section
- Background dengan efek blur/gradient overlay
- Judul utama: "Grow Your Business With Us"
- Subtitle: "Transform your business with our innovative solutions"
- CTA button dengan hover animation
- Entrance animation (fade in + slide up)

#### Product Catalog Section
- Section title: "Our Product Services" dengan underline accent
- Grid layout responsif:
  - Desktop: 3 kolom
  - Tablet: 2 kolom
  - Mobile: 1 kolom
- Setiap product card harus memiliki:
  - Image dengan hover effect (zoom + brightness change)
  - Title dengan hover color change
  - Description (2 lines max)
  - "LEARN MORE" button dengan hover animation
  - Smooth entrance animation dengan stagger effect
  - Card lift effect saat hover (scale + shadow)

#### Product Detail Modal
- Full-screen modal dengan backdrop blur
- Smooth spring animation saat open/close
- Close button dengan rotate animation
- Product image dengan zoom effect
- Detail informasi:
  - Title besar
  - Overview description
  - Key Features list dengan checkmark icons (stagger animation)
  - Technologies badges dengan pop-in animation
- Close dengan ESC key atau click backdrop
- Smooth scroll dalam modal jika konten panjang

#### Footer Section
- 4 kolom layout (responsif menjadi grid)
- Kolom 1: Company Info
  - "KATEPE DIGITAL"
  - "PT Kolaborasi Tujuh Pelangi"
  - Address lengkap
  - Email dan Phone dengan link
- Kolom 2: Profile
  - Link: About Us
- Kolom 3: Services
  - Links: Digital Marketing, IT Solutions
- Kolom 4: Follow Us
  - Social media icons (Facebook, LinkedIn, YouTube, Instagram)
  - Hover animation pada icons
- Copyright text di bawah

### 3. Product Data

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
   - Technologies: React, Node.js, PostgreSQL, AWS
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
   - Technologies: Vue.js, Python, MongoDB, Docker
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
   - Technologies: Angular, Java, MySQL, Kubernetes
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
   - Technologies: React Native, Node.js, PostgreSQL, Google Maps API
   - Image: Dashboard dengan map, delivery routes, dan status charts

5. **Freight Management System** (atau bisa ditambahkan lebih)
   - Description: "Integrated Freight Management System"
   - Status: Coming Soon
   - Overlay "COMING SOON" dengan styling bold
   - Features tetap ada untuk preview
   - Technologies: Next.js, Python, MongoDB, AWS

### 4. Animasi Requirements (Semua harus smooth dan menakjubkan)

#### Page Load Animations
- Header: Fade in + slide down
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
- Buttons:
  - Scale up (1.05x)
  - Background color transition
  - Border highlight
- Social icons:
  - Scale up + lift
  - Shadow effect

#### Modal Animations
- Backdrop: Fade in dengan blur
- Modal container: 
  - Spring animation (scale 0.8 → 1.0)
  - Slide up (translateY 50px → 0)
  - Opacity 0 → 1
- Content inside: Stagger fade in
- Close button: Rotate 90deg saat hover

#### Scroll Animations
- Elements muncul saat scroll into view
- Fade in + slide up animation
- Smooth scroll behavior untuk anchor links

### 5. Responsive Design

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
- Hamburger menu (optional) atau stacked navigation
- Smaller hero text
- Stacked footer (1 kolom)
- Touch-friendly button sizes (min 44x44px)

### 6. Color Scheme & Theme

- Background: Dark theme (#0a0a0a atau #1a1a1a)
- Cards: Dark card background (#1a1a1a)
- Text: White dengan gray variants untuk hierarchy
- Accent: Blue (#3b82f6 atau similar)
- Borders: Gray-800 untuk subtle separation
- Hover states: Accent color dengan glow effect

### 7. Performance Requirements

- Lazy load images
- Optimize animations (gunakan transform dan opacity, bukan layout properties)
- Code splitting jika perlu
- Fast initial load (<3 seconds)
- Smooth 60fps animations

### 8. Additional Features

- Smooth scroll untuk anchor links
- Active navigation state
- Loading states jika perlu
- Error boundaries
- Accessible (keyboard navigation, ARIA labels)

## Implementation Notes

1. Gunakan Framer Motion untuk semua animasi utama
2. Tailwind untuk responsive utilities (md:, lg: breakpoints)
3. TypeScript untuk type safety pada product data
4. Component-based architecture (separate components untuk setiap section)
5. State management sederhana dengan React hooks (useState untuk modal)
6. Product data di file terpisah untuk easy maintenance

## File Structure yang Diharapkan

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductCatalog.tsx
│   ├── ProductCard.tsx
│   ├── ProductDetailModal.tsx
│   └── Footer.tsx
├── data/
│   └── products.ts
├── types.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Output yang Diharapkan

Website company profile dengan:
- ✅ Animasi smooth dan menakjubkan di setiap interaksi
- ✅ Product catalog dengan 5 produk (Cash Management, Warehouse Management, HRIS, Courier System, dan Freight Management)
- ✅ Responsif sempurna di desktop, tablet, dan mobile
- ✅ Modal detail produk dengan animasi spring
- ✅ Dark theme yang modern dan professional
- ✅ Performance optimized dengan Vite + React
```

---

## Template Prompt untuk Modifikasi Khusus

### Untuk Menambah Produk Baru
```
Tambahkan produk baru ke dalam catalog dengan nama "[Nama Produk]". 
Produk ini memiliki status [available/coming-soon] dengan description "[deskripsi]".
Features: [list features], Technologies: [list technologies].
Pastikan animasi entrance dan hover effects konsisten dengan produk lainnya.
```

### Untuk Mengubah Animasi
```
Modifikasi animasi [component/spesifik element] dengan efek [jenis animasi].
Contoh: "Modifikasi animasi product card dengan efek bounce saat hover"
atau "Tambah stagger delay lebih lama untuk product grid"
```

### Untuk Responsive Fix
```
Perbaiki layout responsif untuk [breakpoint: mobile/tablet/desktop].
Issue: [jelaskan masalah], Expected: [hasil yang diinginkan]
```

### Untuk Customize Styling
```
Ubah [warna/font/spacing] pada [component] menjadi [value baru].
Contoh: "Ubah accent color menjadi purple" atau "Tambah border radius lebih besar pada cards"
```

---

## Detail Produk yang Harus Ada

### 1. Cash Management System
- **Status**: Available
- **Deskripsi**: Smart Solution for Attendance, Overtime, and Leave Requests
- **Fitur Utama**:
  - Real-time attendance tracking
  - Automated overtime calculation
  - Leave request management
  - Comprehensive reporting dashboard
  - Mobile app support
- **Tech Stack**: React, Node.js, PostgreSQL, AWS

### 2. Warehouse Management System
- **Status**: Available
- **Deskripsi**: Smart Inventory Control for Efficient Warehouse Operations
- **Fitur Utama**:
  - Real-time inventory tracking
  - Automated stock alerts
  - Barcode scanning integration
  - Advanced analytics and reporting
  - Multi-warehouse support
- **Tech Stack**: Vue.js, Python, MongoDB, Docker

### 3. Human Resource Information System (HRIS)
- **Status**: Available
- **Deskripsi**: Integrated HR Management for the Modern Workplace
- **Fitur Utama**:
  - Employee database management
  - Performance tracking
  - Payroll integration
  - Recruitment management
  - Employee self-service portal
- **Tech Stack**: Angular, Java, MySQL, Kubernetes

### 4. Courier System
- **Status**: Available
- **Deskripsi**: Integrated Courier Management System
- **Fitur Utama**:
  - Route optimization
  - Real-time tracking
  - Delivery status updates
  - Driver management
  - Customer notifications
- **Tech Stack**: React Native, Node.js, PostgreSQL, Google Maps API

### 5. Freight Management System (Optional - Coming Soon)
- **Status**: Coming Soon
- **Deskripsi**: Integrated Freight Management System
- **Fitur Utama**:
  - Freight scheduling
  - Container tracking
  - Document management
  - Cost optimization
  - Multi-modal transport support
- **Tech Stack**: Next.js, Python, MongoDB, AWS
- **Special**: Harus ada overlay "COMING SOON" yang bold dan eye-catching

## Catatan Penting untuk AI

1. **Animasi harus smooth** - Gunakan Framer Motion dengan spring physics untuk natural feel
2. **Performance first** - Hindari animasi yang trigger layout reflow
3. **Mobile priority** - Pastikan touch interactions bekerja dengan baik
4. **Accessibility** - Jangan lupakan keyboard navigation dan screen readers
5. **Consistency** - Semua animasi harus memiliki timing dan easing yang konsisten
6. **Type Safety** - Gunakan TypeScript interfaces untuk product data structure
7. **Product Images** - Gunakan placeholder images yang relevan atau Unsplash API untuk dashboard mockups

---

## Testing Checklist

- [ ] Semua animasi smooth di desktop (60fps)
- [ ] Responsif di mobile (<768px)
- [ ] Responsif di tablet (768-1023px)
- [ ] Modal open/close animation smooth
- [ ] Hover effects bekerja dengan baik
- [ ] Scroll animations trigger dengan benar
- [ ] Product images load dengan baik
- [ ] Navigation links scroll smooth
- [ ] Social media links accessible
- [ ] Dark theme konsisten di semua section


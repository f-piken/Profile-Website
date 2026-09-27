# Creative Engineer Portfolio — Tailwind CSS

Portfolio Next.js yang sudah dimigrasikan ke **Tailwind CSS** dengan palette dari reference design dan Dark/Light Theme.

## Stack

- Next.js 15
- React 19
- Tailwind CSS 4
- PostCSS

## Menjalankan project

```bash
npm install
npm run dev
```

## Foto profil

Simpan foto JPEG kamu di:

```text
public/images/profile.jpg
```

Jika file kamu bernama `profile.jpeg`, ubah referensi di `components/Hero.jsx` menjadi:

```jsx
<img src="/images/profile.jpeg" alt="Mikael Reza Portrait" />
```

## Theme palette

### Dark

- Primary `#6366F1`
- Secondary `#4338CA`
- Tertiary `#A5B4FC`
- Neutral `#0F0F12`

### Light

- Primary `#4F46E5`
- Secondary `#6366F1`
- Tertiary `#4338CA`
- Neutral `#0F172A`

Styling komponen sekarang menggunakan utility class Tailwind. `app/globals.css` hanya menyimpan theme tokens, base styles, font import, dan keyframes yang memang global.


## Balanced performance build

This version keeps the visual character of the original portfolio while moving frequent visual updates away from React state. Mouse effects use `requestAnimationFrame` and CSS variables, 3D tilt uses transform-only updates, background orbs animate with `transform`, project images use lazy loading, and sections use IntersectionObserver-based reveal animations.

### Added
- Lightweight mouse-following glow
- Optimized Hero 3D tilt and spotlight
- Scroll enter/exit reveal animation
- Page enter transition and delayed route exit transition
- Compact project cards
- Compact skill cards with technology marks
- Dedicated `/skills` page
- Responsive skills grid

### Run

```bash
npm install
npm run dev
```

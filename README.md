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

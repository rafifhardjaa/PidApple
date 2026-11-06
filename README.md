<div align="center">

# PidApple

**Personal device concierge untuk iPhone eks-inter pilihan.**

Cari HP impianmu, biarkan kami yang pusing. Sebutkan seri dan budget, kami carikan unitnya, cek 3uTools sampai All Green, dan kirim laporan foto sebelum kamu bayar.

![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=sveltekit&logoColor=white)
![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

</div>

## ✨ Fitur

- **Hero split ala Apple** — headline raksasa + foto produk, tanpa lompatan layout
- **CardStack interaktif** — 3 kartu foto bertumpuk yang melebar seperti kipas saat di-hover (desktop) dan bisa diklik untuk mengganti foto depan
- **WordSwap** — frasa headline berganti dengan fade halus, slot tinggi terkunci (tanpa CLS)
- **Navbar ala Apple** — blur & saturasi meningkat saat scroll
- **WhatsApp CTA** — semua tombol membuka `wa.me` dengan pesan request terisi otomatis, termasuk FAB melayang di mobile
- **Workflow 4 langkah** dalam grid bento, section trust, dan estimator harga 3 model
- **Foto lokal WebP** — 6 foto produk lokal (`src/lib/assets/`), ±260 KB total, tanpa hotlink eksternal
- **SEO & OG** — canonical, Open Graph, Twitter card, JSON-LD, `sitemap.xml`, `robots.txt`
- **Aksesibel** — `:focus-visible` di semua elemen interaktif, `prefers-reduced-motion` dihormati, skip link

## 🚀 Menjalankan

```bash
npm install
cp .env.example .env
npm run dev
```

Buka `http://localhost:5173`.

## ⚙️ Environment

| Variable           | Keterangan                                             |
| ------------------ | ------------------------------------------------------ |
| `PUBLIC_WA_NUMBER` | Nomor WhatsApp tujuan, format internasional tanpa `+`. |

Nomor ini aman untuk publik karena dipakai langsung di tautan `wa.me`. Didefinisikan di `src/env.ts` dan dibaca lewat `$app/env/public`.

## 🛠️ Perintah

```bash
npm run check    # svelte-check
npm run build    # build statis ke folder build/
npm run preview  # pratinjau hasil build
```

## 📁 Struktur

```
src/
├── app.html                  # shell HTML + Google Fonts (General Sans)
├── app.css                   # token, base styles, reveal
├── tokens.css                # token tema (OKLCH, tipe, spacing)
├── base.css                  # aturan dasar + treatment foto
├── env.ts                    # deklarasi env publik
├── lib/
│   ├── actions/reveal.ts     # scroll reveal (IntersectionObserver)
│   ├── assets/               # foto produk WebP lokal
│   ├── components/           # Navbar, Button, BentoCard, CardStack, WordSwap, WhatsappFab
│   ├── config/whatsapp.ts    # builder tautan wa.me
│   └── data/content.ts       # data terpusat: foto, device, nav, SITE
└── routes/
    ├── +layout.svelte        # skip link
    ├── +layout.ts            # prerender
    └── +page.svelte          # hero, cara kerja, trust, koleksi, footer
```

## 🎨 Desain

Tema **Coral** (Hallmark) yang disetel ulang ke netral ala Apple: kertas putih sejuk, tinta netral, aksen biru tunggal, tipografi General Sans dengan tracking rapat. Detail aturan ada di `pidapple_blueprint_v2/rules.md`.

## 📄 Lisensi

Lihat berkas `LICENSE`.

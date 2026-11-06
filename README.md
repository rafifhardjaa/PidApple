<div align="center">

# PidApple

![Apple](https://img.shields.io/badge/Built_for-iPhone-black?style=for-the-badge&logo=apple&logoColor=white)
![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=sveltekit&logoColor=white)
![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Landing page satu halaman untuk layanan iPhone eks-inter pilihan. Calon pembeli menyebut seri dan budget lewat WhatsApp, lalu kami carikan unitnya, cek 3uTools sampai All Green, dan kirim laporan foto sebelum transaksi.

</div>

## Menjalankan di lokal

```bash
npm install
cp .env.example .env
npm run dev
```

Buka `http://localhost:5173`.

## Perintah yang tersedia

```bash
npm run check    # cek tipe dengan svelte-check
npm run build    # build statis ke folder build/
npm run preview  # lihat hasil build
```

## Konfigurasi

| Variabel | Keterangan |
| --- | --- |
| `PUBLIC_WA_NUMBER` | Nomor WhatsApp tujuan, format internasional tanpa `+` (mis. `62812...`). Dipakai langsung di tautan `wa.me`, jadi aman dipublikasikan. |

Deklarasinya ada di `src/env.ts`.

## Struktur folder

```
src/
  app.html            shell HTML + font General Sans
  app.css             style Tailwind + token lokal
  tokens.css          token tema: warna OKLCH, skala tipe, spacing
  base.css            aturan dasar dan treatment foto
  env.ts              deklarasi variabel environment publik
  lib/
    actions/          reveal saat scroll
    assets/           foto produk WebP lokal
    components/       Navbar, Button, BentoCard, CardStack, WordSwap, WhatsappFab
    config/           pembuat tautan WhatsApp
    data/             data terpusat: foto, daftar device, link nav, domain situs
  routes/
    +layout.svelte    skip link aksesibilitas
    +layout.ts        prerender statis
    +page.svelte      hero, cara kerja, trust, koleksi, footer
static/
  robots.txt          aturan crawling
  sitemap.xml         daftar URL untuk search engine
```

## Catatan desain

Tema Coral (Hallmark) yang disetel ke netral ala Apple: kertas putih sejuk, tinta gelap netral, satu aksen biru, tipografi General Sans rapat. Foto produk disimpan lokal sebagai WebP di `src/lib/assets/` dan diimpor lewat `src/lib/data/content.ts`, jadi mengganti foto cukup mengedit satu file itu.

## Lisensi

Lihat berkas `LICENSE`.

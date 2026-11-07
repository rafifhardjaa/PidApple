import heroTitanium from '#lib/assets/igor-omilaev-lDWTfYhZ85w.webp';
import popOrange from '#lib/assets/nandaperin-y_7mL1uNUv0.webp';
import mintStudio from '#lib/assets/alexander-andrews-Wzs4-QEmCUQ.webp';
import darkPro from '#lib/assets/filip-baotic-DV0mB2uJM34.webp';
import whiteStudio from '#lib/assets/g-zxi4HT2Rww8.webp';
import yellowSplit from '#lib/assets/v-a-tao-OxvlDO8RwKg.webp';

// Ganti dengan domain produksi saat sudah live
export const SITE = 'https://pidapple.vercel.app/';

/** Bidang netral lokal: unit yang fotonya gagal tidak diganti foto lain. */
const neutralField =
	'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221200%22 height=%22900%22%3E%3Crect width=%221200%22 height=%22900%22 fill=%22%23ECECF0%22/%3E%3C/svg%3E';

export const fallback = () => neutralField;

/** Handler onerror bersama untuk semua gambar: sekali gagal, tinggalkan bidang kosong. */
export function imgFallback() {
	return (e: Event) => {
		const t = e.currentTarget as HTMLImageElement;
		t.onerror = null;
		t.alt = '';
		t.src = neutralField;
	};
}

export const navLinks = [
	{ href: '#cara-kerja', label: 'Proses' },
	{ href: '#kenapa', label: 'Pengecekan' },
	{ href: '#koleksi', label: 'Koleksi' }
];

export type StackCard = { src: string; alt: string; label?: string; sub?: string };

export const stackCards: StackCard[] = [
	{ src: heroTitanium, alt: 'iPhone 15 Pro titanium, unit pilihan PidApple', label: 'iPhone 15 Pro', sub: 'Natural Titanium' },
	{ src: popOrange, alt: 'iPhone oranye di atas bantal, contoh unit pilihan' },
	{ src: mintStudio, alt: 'iPhone hitam di atas latar mint, foto studio' }
];

export const IMG = {
	hero: heroTitanium,
	trust: darkPro,
	cara: whiteStudio
} as const;

export const devices = [
	{ tag: 'Paling dicari', grade: 'Grade A+', model: 'iPhone 13 Pro', spec: '128GB atau 256GB, Sierra Blue', price: 'Rp 9,8 jt', img: yellowSplit },
	{ tag: 'Favorit creator', grade: 'Grade A+', model: 'iPhone 14 Pro Max', spec: '256GB, Deep Purple', price: 'Rp 14,5 jt', img: mintStudio },
	{ tag: 'Flagship titanium', grade: 'Grade A+', model: 'iPhone 15 Pro', spec: '128GB atau 256GB, Natural Titanium', price: 'Rp 16,9 jt', img: heroTitanium }
];

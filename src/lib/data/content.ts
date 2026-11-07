import heroTitanium from '#lib/assets/igor-omilaev-lDWTfYhZ85w.webp';
import darkPro from '#lib/assets/filip-baotic-DV0mB2uJM34.webp';

// Ganti dengan domain produksi saat sudah live
export const SITE = 'https://pidapple.vercel.app/';

/** Bidang netral lokal: unit yang fotonya gagal tidak diganti foto lain. */
const neutralField =
	'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221200%22 height=%22900%22%3E%3Crect width=%221200%22 height=%22900%22 fill=%22%23ECECF0%22/%3E%3C/svg%3E';

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

export const IMG = {
	hero: heroTitanium,
	trust: darkPro
} as const;

export const devices = [
	{
		model: 'iPhone 13 Pro',
		spec: '128GB atau 256GB, Sierra Blue',
		grade: 'Grade A+',
		price: 'Rp 9,8 jt',
		priceIdr: 9800000
	},
	{
		model: 'iPhone 14 Pro Max',
		spec: '256GB, Deep Purple',
		grade: 'Grade A+',
		price: 'Rp 14,5 jt',
		priceIdr: 14500000
	},
	{
		model: 'iPhone 15 Pro',
		spec: '128GB atau 256GB, Natural Titanium',
		grade: 'Grade A+',
		price: 'Rp 16,9 jt',
		priceIdr: 16900000
	}
];

import { PUBLIC_WA_NUMBER } from '$app/env/public';

export const waNumber = PUBLIC_WA_NUMBER.replace(/\D/g, '');

export const defaultMessage = [
	'Halo PidApple, saya mau request unit iPhone.',
	'',
	'Model:',
	'Storage:',
	'Warna:',
	'Budget:',
	'Kondisi yang diutamakan:'
].join('\n');

/** Builds a wa.me link with an encoded message (security.md §1). */
export function waUrl(message: string = defaultMessage): string {
	return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}

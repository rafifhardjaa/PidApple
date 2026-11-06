import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PUBLIC_WA_NUMBER: {
		public: true,
		static: true,
		description: 'Nomor WhatsApp tujuan, format internasional tanpa + atau spasi.',
		schema: (value) => {
			const digits = (value ?? '').replace(/\D/g, '');
			return digits.length >= 8 ? digits : '6281234567890';
		}
	}
});

<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import { navLinks } from '#lib/data/content';
	import { waUrl } from '#lib/config/whatsapp';

	const requestUrl = waUrl();

	let scrolled = $state(false);

	onMount(() => {
		const onScroll = () => (scrolled = window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header
	class="sticky top-0 z-40 transition-[background-color,border-color] duration-300 ease-[var(--ease-out)] {scrolled
		? 'border-b border-[var(--color-rule)] bg-[var(--color-paper)]/65 backdrop-blur-2xl backdrop-saturate-150'
		: 'border-b border-transparent bg-[var(--color-paper)]/85 backdrop-blur-md'}"
>
	<nav class="shell flex h-12 items-center justify-between" aria-label="Navigasi utama">
		<a
			href="/"
			class="text-[15px] font-semibold tracking-[-0.02em] text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
			aria-label="PidApple, kembali ke beranda"
		>
			PidApple
		</a>

		<div class="flex items-center gap-6 md:gap-7">
			{#each navLinks as link (link.href)}
				<a
					href={link.href}
					class="hidden text-[12px] text-[var(--color-ink)]/80 transition-colors duration-300 hover:text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] sm:block"
				>
					{link.label}
				</a>
			{/each}
			<Button href={requestUrl} target="_blank" rel="noopener noreferrer" size="sm">WhatsApp</Button>
		</div>
	</nav>
</header>

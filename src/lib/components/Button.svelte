<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href,
		variant = 'primary',
		size = 'md',
		target,
		rel,
		class: className = '',
		children
	}: {
		href?: string;
		variant?: 'primary' | 'secondary' | 'inverse';
		size?: 'sm' | 'md';
		target?: string;
		rel?: string;
		class?: string;
		children: Snippet;
	} = $props();

	const base =
		'inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-300 ease-[var(--ease-out)] hover:-translate-y-[1px] hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-3 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50';

	const variants = {
		primary: 'bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-ink-2)]',
		secondary: 'bg-[var(--color-paper-2)] text-[var(--color-ink)] hover:bg-[var(--color-paper-3)]',
		inverse: 'bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:bg-[var(--color-accent-2)]'
	};

	const sizes = {
		sm: 'px-4 py-2 text-[13px]',
		md: 'px-7 py-3.5 text-[15px]'
	};

	const classes = $derived(`${base} ${variants[variant]} ${sizes[size]} ${className}`);
</script>

{#if href}
	<a {href} {target} {rel} class={classes}>
		{@render children()}
	</a>
{:else}
	<button type="button" class={classes} aria-disabled="false">
		{@render children()}
	</button>
{/if}
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
		variant?: 'primary' | 'secondary' | 'light';
		size?: 'sm' | 'md';
		target?: string;
		rel?: string;
		class?: string;
		children: Snippet;
	} = $props();

	const classes = $derived(`btn btn--${variant} btn--${size} ${className}`);
</script>

{#if href}
	<a {href} {target} {rel} class={classes}>
		{@render children()}
	</a>
{:else}
	<button type="button" class={classes}>
		{@render children()}
	</button>
{/if}

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-xs);
		border: 1px solid transparent;
		border-radius: var(--radius-pill);
		font-weight: 500;
		letter-spacing: -0.01em;
		text-align: center;
		text-decoration: none;
		transition:
			background-color var(--dur-short) var(--ease-out),
			color var(--dur-short) var(--ease-out),
			border-color var(--dur-short) var(--ease-out);
	}

	.btn--md {
		min-height: 48px;
		padding-inline: 28px;
		font-size: var(--text-md);
	}

	.btn--sm {
		min-height: 44px;
		padding-inline: 18px;
		font-size: var(--text-sm);
	}

	.btn--primary {
		background: var(--color-ink);
		color: var(--color-paper);
	}

	.btn--primary:hover {
		background: var(--color-ink-2);
	}

	.btn--secondary {
		background: var(--color-paper-2);
		color: var(--color-ink);
	}

	.btn--secondary:hover {
		background: var(--color-paper-3);
	}

	.btn--light {
		background: var(--color-paper);
		color: var(--color-ink);
	}

	.btn--light:hover {
		background: var(--color-paper-2);
	}

	.btn:active {
		transform: scale(0.985);
	}

	.btn:focus-visible {
		outline: 2px solid var(--color-focus);
		outline-offset: 3px;
	}
</style>

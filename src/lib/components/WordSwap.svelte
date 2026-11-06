<script lang="ts">
	import { onMount } from 'svelte';

	let { phrases, interval = 2600 }: { phrases: string[]; interval?: number } = $props();

	let index = $state(0);

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		if (phrases.length < 2) return;
		const id = setInterval(() => (index = (index + 1) % phrases.length), interval);
		return () => clearInterval(id);
	});
</script>

<span class="wordswap" aria-live="off">
	{#key index}
		<span class="wordswap-item">{phrases[index]}</span>
	{/key}
</span>

<style>
	.wordswap {
		display: block;
		height: 1.05em;
		overflow: hidden;
	}
	.wordswap-item {
		display: inline-block;
		min-width: 13ch;
		animation: wordswap-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
	}
	@keyframes wordswap-in {
		from {
			opacity: 0;
			transform: translateY(0.45em);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.wordswap-item {
			animation: none;
		}
	}
</style>

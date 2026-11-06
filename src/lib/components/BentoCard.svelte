<script lang="ts">
	import type { Component } from 'svelte';
	import { reveal } from '#lib/actions/reveal';

	let {
		step,
		title,
		body,
		icon: Icon,
		meta,
		metaIcon: MetaIcon,
		delay = 0
	}: {
		step: string;
		title: string;
		body: string;
		icon: Component;
		meta: string;
		metaIcon: Component;
		delay?: number;
	} = $props();
</script>

<article
	use:reveal={{ delay }}
	class="group flex min-h-[280px] flex-col rounded-[28px] bg-[var(--color-cotton)] p-7 shadow-[var(--shadow-card)] ring-1 ring-[var(--color-rule)] transition-transform duration-500 ease-[var(--ease-out)] hover:-translate-y-1 md:p-8" 
>
	<header class="flex items-start justify-between gap-6">
		<span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent)] text-[var(--color-accent-ink)] transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-110 group-hover:-rotate-3">
			<Icon size={21} strokeWidth={1.75} aria-hidden="true" />
		</span>
		<span class="pt-1 text-[13px] font-medium tabular-nums text-[var(--color-muted)]" aria-hidden="true">{step}</span>
	</header>

	<div class="mt-10">
		<h3 class="text-[21px] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--color-ink)] md:text-[23px]">
			{title}
		</h3>
		<p class="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-[var(--color-muted)] md:text-[16px]">
			{body}
		</p>
	</div>

	<p class="mt-auto flex items-center gap-2 pt-8 text-[13px] text-[var(--color-muted)]">
		<MetaIcon size={15} strokeWidth={1.75} class="shrink-0" aria-hidden="true" />
		<span>{meta}</span>
	</p>
</article>
<script lang="ts">
	import { fallback, stackCards, type StackCard } from '#lib/data/content';

	let { cards = stackCards }: { cards?: StackCard[] } = $props();

	// Kartu terpilih jadi kartu depan, sisanya mengikuti urutan melingkar
	let selected = $state(0);
	const order = $derived(cards.map((_, i) => (i + selected) % cards.length));

	const front = $derived(cards[order[0]] ?? cards[0]);
	const middle = $derived(cards[order[1]] ?? cards[0]);
	const back = $derived(cards[order[2]] ?? cards[0]);

	function bringToFront(index: number) {
		selected = index;
	}

	function onError() {
		return (e: Event) => {
			const t = e.currentTarget as HTMLImageElement;
			t.onerror = null;
			t.src = fallback();
		};
	}

	const cardCls =
		'absolute inset-0 overflow-hidden rounded-[32px] bg-[var(--color-paper-2)] text-left ring-1 ring-[var(--color-rule)] motion-safe:transition-[transform,opacity] motion-safe:duration-500 motion-safe:ease-[var(--ease-out)]';
</script>

<div class="group relative mb-10 aspect-[4/5] w-full" aria-label="Tumpukan foto unit iPhone, klik untuk melihat foto lain">
	<!-- Belakang -->
	<button
		type="button"
		onclick={() => bringToFront(order[2])}
		aria-label="Tampilkan {back.alt}"
		class="{cardCls} z-10 origin-center scale-[0.92] translate-y-12 md:group-hover:rotate-[4deg] md:group-hover:translate-x-6 md:group-hover:translate-y-12"
	>
		<img width="900" height="1125" src={back.src} alt="" class="absolute inset-0 h-full w-full object-cover opacity-90" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror={onError()} />
	</button>

	<!-- Tengah -->
	<button
		type="button"
		onclick={() => bringToFront(order[1])}
		aria-label="Tampilkan {middle.alt}"
		class="{cardCls} z-20 origin-center scale-[0.96] translate-y-6 md:group-hover:-rotate-[4deg] md:group-hover:-translate-x-6 md:group-hover:translate-y-6"
	>
		<img width="900" height="1125" src={middle.src} alt="" class="absolute inset-0 h-full w-full object-cover opacity-95" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror={onError()} />
	</button>

	<!-- Depan -->
	<button
		type="button"
		onclick={() => bringToFront(order[1])}
		aria-label="{front.alt}. Klik untuk foto berikutnya"
		class="{cardCls} z-30"
	>
		<img width="900" height="1125" src={front.src} alt={front.alt} class="absolute inset-0 h-full w-full object-cover" fetchpriority="high" decoding="async" referrerpolicy="no-referrer" onerror={onError()} />
		{#if front.label}
			<span class="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-[24px] bg-[var(--color-cotton)]/85 px-4 py-3 ring-1 ring-white/60 backdrop-blur-md">
				<span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-accent-ink)]">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
				</span>
				<span>
					<span class="block text-[13px] font-semibold text-[var(--color-ink)]">{front.label}</span>
					{#if front.sub}<span class="block text-[12px] text-[var(--color-muted)]">{front.sub}</span>{/if}
				</span>
			</span>
		{/if}
	</button>
</div>

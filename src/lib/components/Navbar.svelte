<script lang="ts">
	import { navLinks } from '#lib/data/content';
	import { waUrl } from '#lib/config/whatsapp';

	const requestUrl = waUrl();
	let menuOpen = $state(false);
	let menuEl: HTMLDetailsElement;

	$effect(() => {
		if (!menuOpen) return;

		const onKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') menuOpen = false;
		};
		const onPointer = (event: PointerEvent) => {
			if (menuEl && !menuEl.contains(event.target as Node)) menuOpen = false;
		};

		document.addEventListener('keydown', onKey);
		document.addEventListener('pointerdown', onPointer);
		return () => {
			document.removeEventListener('keydown', onKey);
			document.removeEventListener('pointerdown', onPointer);
		};
	});
</script>

<header class="head">
	<div class="container">
		<nav class="pill" aria-label="Navigasi utama">
			<a href="/" class="mark" aria-label="PidApple, kembali ke beranda">PidApple</a>

			<ul class="links">
				{#each navLinks as link (link.href)}
					<li><a href={link.href}>{link.label}</a></li>
				{/each}
			</ul>

			<div class="end">
				<a class="wa" href={requestUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>

				<details class="menu" bind:open={menuOpen} bind:this={menuEl}>
					<summary>Menu</summary>
					<ul class="menu-list">
						{#each navLinks as link (link.href)}
							<li><a href={link.href} onclick={() => (menuOpen = false)}>{link.label}</a></li>
						{/each}
					</ul>
				</details>
			</div>
		</nav>
	</div>
</header>

<style>
	.head {
		position: sticky;
		top: 0;
		z-index: var(--z-sticky-nav);
		padding-block: 12px;
		background: var(--color-paper);
	}

	.pill {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md);
		height: 56px;
		padding-inline: 16px;
		border: var(--rule-hair) solid var(--color-rule);
		border-radius: var(--radius-pill);
		background: var(--color-paper);
	}

	.mark {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		font-size: 17px;
		font-weight: 600;
		letter-spacing: -0.02em;
		color: var(--color-ink);
		text-decoration: none;
	}

	.links {
		display: none;
		align-items: center;
		gap: var(--space-2xs);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.links a {
		display: inline-flex;
		align-items: center;
		height: 44px;
		padding-inline: 14px;
		border-radius: var(--radius-pill);
		font-size: var(--text-sm);
		color: var(--color-ink);
		text-decoration: none;
		transition: background-color var(--dur-short) var(--ease-out);
	}

	.links a:hover {
		background: var(--color-paper-2);
	}

	.end {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
	}

	.wa {
		display: inline-flex;
		align-items: center;
		height: 44px;
		padding-inline: 18px;
		border-radius: var(--radius-pill);
		background: var(--color-ink);
		color: var(--color-paper);
		font-size: var(--text-sm);
		font-weight: 500;
		text-decoration: none;
		transition: background-color var(--dur-short) var(--ease-out);
	}

	.wa:hover {
		background: var(--color-ink-2);
	}

	.wa:active {
		transform: scale(0.985);
	}

	.menu {
		position: relative;
	}

	.menu summary {
		display: inline-flex;
		align-items: center;
		height: 44px;
		padding-inline: 14px;
		border: var(--rule-hair) solid var(--color-rule);
		border-radius: var(--radius-pill);
		font-size: var(--text-sm);
		list-style: none;
	}

	.menu summary::-webkit-details-marker {
		display: none;
	}

	.menu summary:hover,
	.menu[open] summary {
		background: var(--color-paper-2);
	}

	.menu-list {
		position: absolute;
		top: calc(100% + 10px);
		right: 0;
		width: min(280px, calc(100vw - 32px));
		margin: 0;
		padding: var(--space-xs);
		border: var(--rule-hair) solid var(--color-rule);
		border-radius: var(--space-lg);
		background: var(--color-paper);
		box-shadow: var(--shadow-pop);
		list-style: none;
	}

	.menu-list a {
		display: flex;
		align-items: center;
		height: 48px;
		padding-inline: var(--space-md);
		border-radius: var(--space-md);
		font-size: var(--text-md);
		color: var(--color-ink);
		text-decoration: none;
	}

	.menu-list a:hover {
		background: var(--color-paper-2);
	}

	.mark:focus-visible,
	.links a:focus-visible,
	.wa:focus-visible,
	.menu summary:focus-visible,
	.menu-list a:focus-visible {
		outline: 2px solid var(--color-focus);
		outline-offset: 3px;
	}

	@media (min-width: 56rem) {
		.links {
			display: flex;
		}

		.menu {
			display: none;
		}
	}
</style>

<script lang="ts">
	import Navbar from '#lib/components/Navbar.svelte';
	import Button from '#lib/components/Button.svelte';
	import { devices, imgFallback, IMG, navLinks, SITE } from '#lib/data/content';
	import { waNumber, waUrl } from '#lib/config/whatsapp';

	const requestUrl = waUrl();
	const briefUrl = waUrl(
		'Halo PidApple, saya mau request unit.\n\nSeri: iPhone 15 Pro\nKapasitas: 256GB\nWarna: Natural Titanium\nBudget: Rp 16 sampai 17 jt'
	);
	const deviceUrl = (model: string) => waUrl(`Halo PidApple, saya mau tanya stok ${model}.`);

	const checks = [
		{ title: '3uTools All Green', body: 'Seluruh komponen utama lolos pemeriksaan.' },
		{ title: 'Sinyal', body: 'Jaringan dicek setelah perakitan. Unit bermasalah tidak dikirim.' },
		{ title: 'Layar', body: 'True Tone dan Face ID diverifikasi, bukan hanya dilihat sekilas.' },
		{ title: 'Kelengkapan', body: 'Baterai dan kelengkapan unit ikut diperiksa.' }
	];

	const sample = devices[2];

	const ogImage = SITE.replace(/\/$/, '') + IMG.hero;
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'PidApple',
		url: SITE,
		description:
			'Personal device concierge untuk iPhone eks-inter pilihan. Pengecekan 3uTools dan laporan sebelum bayar.',
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: `+${waNumber}`,
			contactType: 'sales',
			availableLanguage: 'id'
		}
	};
</script>

<svelte:head>
	<title>PidApple: iPhone Eks-Inter Dicek Sebelum Dibeli</title>
	<meta
		name="description"
		content="Sebutkan seri dan budget. Kami carikan unit iPhone eks-inter, cek 3uTools, dan kirim laporan sebelum kamu bayar."
	/>
	<meta name="robots" content="index, follow" />
	<meta name="author" content="PidApple" />
	<link rel="canonical" href={SITE} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="id_ID" />
	<meta property="og:site_name" content="PidApple" />
	<meta property="og:url" content={SITE} />
	<meta property="og:title" content="PidApple: iPhone Eks-Inter Dicek Sebelum Dibeli" />
	<meta
		property="og:description"
		content="Sebutkan seri dan budget, kami carikan unitnya, cek 3uTools, dan kirim laporan sebelum kamu memutuskan."
	/>
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1400" />
	<meta property="og:image:height" content="1400" />
	<meta property="og:image:alt" content="Dua iPhone 15 Pro Natural Titanium, foto contoh unit" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="PidApple: iPhone Eks-Inter Dicek Sebelum Dibeli" />
	<meta
		name="twitter:description"
		content="Sebutkan seri dan budget. Kami cek 3uTools dan kirim laporan sebelum kamu bayar."
	/>
	<meta name="twitter:image" content={ogImage} />
	<meta name="theme-color" content="#FFFFFF" />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<Navbar />

<main id="main">
	<section class="hero" aria-labelledby="hero-title">
		<div class="container hero-frame">
			<div class="hero-media">
				<img
					src={IMG.hero}
					alt="Dua iPhone 15 Pro Natural Titanium, foto contoh unit"
					width="1400"
					height="1400"
					fetchpriority="high"
					decoding="async"
					onerror={imgFallback()}
				/>
			</div>

			<div class="hero-copy">
				<h1 id="hero-title">iPhone <span class="nowrap">eks-inter</span>, dicari untuk kamu.</h1>
				<div class="hero-side">
					<p class="hero-lead">Sebutkan seri dan budget, kami cek dan laporkan sebelum bayar.</p>
					<div class="hero-actions" id="hero-cta">
						<Button href={requestUrl} target="_blank" rel="noopener noreferrer">
							Mulai request di WhatsApp
						</Button>
						<a class="text-link" href="#cara-kerja">Lihat prosesnya</a>
					</div>
					<p class="hero-note">Foto contoh, bukan unit yang dijual. Foto unit asli dikirim lewat WhatsApp.</p>
				</div>
			</div>
		</div>
	</section>

	<section id="cara-kerja" class="stage" aria-labelledby="cara-kerja-title">
		<div class="container stage-grid">
			<div class="stage-copy">
				<h2 id="cara-kerja-title" class="stage-title"><span class="stage-num">01</span> Request unit</h2>
				<p>
					Hubungi kami via WhatsApp. Sebutkan seri iPhone, kapasitas, warna idaman, dan estimasi
					budget kamu.
				</p>
			</div>

			<div class="stage-object">
				<div class="sheet brief">
					<p class="sheet-label">Contoh format request</p>
					<dl class="rows">
						<div><dt>Seri</dt><dd>iPhone 15 Pro</dd></div>
						<div><dt>Kapasitas</dt><dd>256GB</dd></div>
						<div><dt>Warna</dt><dd>Natural Titanium</dd></div>
						<div><dt>Budget</dt><dd>Rp 16 sampai 17 jt</dd></div>
					</dl>
					<a class="text-link" href={briefUrl} target="_blank" rel="noopener noreferrer">
						Kirim format ini di WhatsApp
					</a>
				</div>
			</div>
		</div>
	</section>

	<section id="kenapa" class="stage stage--flip" aria-labelledby="kenapa-title">
		<div class="container stage-grid">
			<div class="stage-copy">
				<h2 id="kenapa-title" class="stage-title"><span class="stage-num">02</span> Hunting dan cek unit</h2>
				<p>
					Tim kami mencarikan unitnya, lalu mengetes 3uTools sampai hijau: sinyal, layar, baterai,
					dan kelengkapan.
				</p>
				<ul class="check-list">
					{#each checks as check (check.title)}
						<li>
							<h3>{check.title}</h3>
							<p>{check.body}</p>
						</li>
					{/each}
				</ul>
			</div>

			<div class="stage-object">
				<figure class="stage-photo">
					<img
						src={IMG.trust}
						alt="iPhone dengan modul kamera tiga lensa dalam cahaya rendah, foto contoh unit"
						width="1400"
						height="2100"
						loading="lazy"
						decoding="async"
						onerror={imgFallback()}
					/>
					<figcaption>Foto contoh unit. Foto unit asli dikirim lewat WhatsApp.</figcaption>
				</figure>
			</div>
		</div>
	</section>

	<section class="stage stage--surface" aria-labelledby="laporan-title">
		<div class="container stage-grid stage-grid--report">
			<div class="stage-copy">
				<h2 id="laporan-title" class="stage-title"><span class="stage-num">03</span> Laporan sebelum bayar</h2>
				<p>
					Kamu terima foto, video, dan diagnosis unit. Minus apa pun kami tulis di laporan.
				</p>
			</div>

			<div class="stage-object">
				<div class="sheet report">
					<div class="report-head">
						<div>
							<h3>{sample.model}</h3>
							<p>256GB, Natural Titanium</p>
						</div>
						<p class="report-price">{sample.price}<small>contoh format</small></p>
					</div>
					<dl class="rows">
						<div><dt>3uTools</dt><dd>All Green</dd></div>
						<div><dt>Sinyal</dt><dd>Aktif setelah perakitan</dd></div>
						<div><dt>True Tone</dt><dd>Aktif</dd></div>
						<div><dt>Face ID</dt><dd>Aktif</dd></div>
						<div><dt>Minus</dt><dd>Ditulis apa adanya</dd></div>
					</dl>
					<p class="sheet-note">
						Laporan unit asli dikirim lewat WhatsApp sebelum bayar.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="stage" aria-labelledby="kirim-title">
		<div class="container stage-grid">
			<div class="stage-copy">
				<h2 id="kirim-title" class="stage-title"><span class="stage-num">04</span> Deal dan kirim</h2>
				<p>Kalau cocok, bayar tanda jadi.</p>
			</div>

			<div class="stage-object">
				<div class="sheet ship">
					<dl class="rows">
						<div><dt>Pengiriman</dt><dd>Kurir instan atau ekspedisi</dd></div>
						<div><dt>Asuransi</dt><dd>Penuh</dd></div>
						<div><dt>Pendampingan</dt><dd>Sampai tiba</dd></div>
					</dl>
				</div>
			</div>
		</div>
	</section>

	<section id="koleksi" class="units" aria-labelledby="koleksi-title">
		<div class="container">
			<header class="units-head">
				<h2 id="koleksi-title">Koleksi</h2>
				<p>Harga mulai. Kondisi dan kelengkapan menentukan angka final.</p>
			</header>

			<div class="unit-list">
				{#each devices as device (device.model)}
					<article class="unit">
						<div class="unit-id">
							<h3>{device.model}</h3>
							<p class="unit-spec">{device.spec}</p>
							<p class="unit-grade">{device.grade}</p>
						</div>
						<p class="unit-price">{device.price}<small>mulai</small></p>
						<a
							class="unit-link"
							href={deviceUrl(device.model)}
							target="_blank"
							rel="noopener noreferrer"
						>
							Tanya stok
						</a>
					</article>
				{/each}
			</div>

			<p class="units-note">Harga bergerak mengikuti kondisi unit dan pasar.</p>
		</div>
	</section>

	<section class="close" aria-labelledby="close-title">
		<div class="container close-grid">
			<h2 id="close-title">Sebutkan seri dan budget.</h2>
			<div>
				<p>Kami cek unitnya dulu. Kamu putuskan setelah baca laporan.</p>
				<div class="close-cta">
					<Button variant="light" href={requestUrl} target="_blank" rel="noopener noreferrer">
						Chat WhatsApp
					</Button>
				</div>
			</div>
		</div>
	</section>
</main>

<footer class="footer">
	<div class="container">
		<p class="footer-mark">PidApple</p>
		<p class="footer-line">Personal device concierge dan procurement.</p>

		<div class="footer-row">
			<nav class="footer-nav" aria-label="Navigasi footer">
				{#each navLinks as link (link.href)}
					<a href={link.href}>{link.label}</a>
				{/each}
				<a href={requestUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
			</nav>
			<p class="footer-meta">© 2026 PidApple. Hak cipta dilindungi.</p>
		</div>
	</div>
</footer>

<style>
/* Hallmark · reworded "Cari iPhone terbaru" and "Gimana cara PidApple bekerja?" to the hero head and four numbered stages · shape Narrative Workflow folds the question into the sequence */
/* Hallmark · reworded "Request unit" and "Hunting dan QC ketat" to "01 Request unit" and "02 Hunting dan cek unit" · stage numbers sit in the heads, and QC ketat became the four checks */
/* Hallmark · reworded "Laporan transparan" and "Deal dan pengiriman" to "03 Laporan sebelum bayar" and "04 Deal dan kirim" · the report is an object, and each head names its moment */
/* Hallmark · reworded "All Green 3uTools" to "3uTools All Green" · the check list reads tool first */
/* Hallmark · dropped "TrueTone dan Face ID aktif" · it became two rows inside the report sheet, not a heading */
/* Hallmark · dropped "Garansi sinyal" · warranty claim with nothing behind it, so it left */
/* Hallmark · dropped "Cek estimasi unit idaman" · the request brief sends the same ask to WhatsApp in one tap */
/* Hallmark · dropped "Bukan asal murah, tapi 100% aman." · no proof for a guarantee, so the report and the checks carry trust */
/* Hallmark · dropped 100%, the guarantee figure · it only existed inside that claim */
/* Hallmark · dropped alexander-andrews, nandaperin, g-zxi4HT2Rww8, v-a-tao · no photos of the real units exist, and a stock photo would imply the unit */
/* Hallmark · dropped consultUrl, Halo%20PidApple%2C%20saya%20mau%20konsultasi · one action per screen, the hero CTA and the brief cover it */
/* Hallmark · dropped waUrl(, the inline device template · the same link now comes from deviceUrl, so the markup spells it once */
	:global(:focus-visible) {
		outline: 2px solid var(--color-focus);
		outline-offset: 3px;
	}

	/* Balance only where the line is wide enough to take it; on the phone it
	   splits "eks-inter" at the hyphen. */
	@media (min-width: 60rem) {
		h1,
		h2 {
			text-wrap: balance;
		}
	}

	:global(a:active),
	:global(button:active) {
		transform: scale(0.985);
	}

	:global(button:disabled),
	:global([aria-disabled='true']) {
		opacity: 0.5;
	}

	.hero-frame {
		display: flex;
		flex-direction: column;
		gap: clamp(20px, 2.4vw, 32px);
		height: calc(100svh - 104px);
		min-height: 560px;
	}

	.hero-media {
		flex: 1 1 auto;
		min-height: 0;
		overflow: hidden;
		border-radius: var(--radius-card);
		background: var(--color-paper-2);
	}

	.hero-media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 44%;
	}

	.hero-copy {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: var(--gap-columns);
		align-items: end;
		padding-bottom: var(--space-xs);
	}

	.hero-copy h1 {
		grid-column: 1 / span 7;
		max-width: 14ch;
		font-size: var(--text-display);
		line-height: 1.02;
	}

	.nowrap {
		white-space: nowrap;
	}

	.hero-side {
		grid-column: 9 / span 4;
		display: grid;
		gap: var(--space-lg);
	}

	.hero-lead {
		font-size: var(--text-lead);
		line-height: 1.4;
		max-width: 34ch;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-md) var(--space-lg);
	}

	.hero-note {
		font-size: var(--text-xs);
		line-height: 1.5;
		color: var(--color-muted);
		max-width: 40ch;
	}

	.text-link {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		color: var(--color-accent);
		font-size: var(--text-sm);
		font-weight: 500;
		text-decoration: none;
	}

	.text-link:hover {
		text-decoration: underline;
		text-underline-offset: 0.18em;
	}

	.stage {
		border-top: var(--rule-hair) solid var(--color-rule);
	}

	.stage--surface {
		background: var(--color-paper-2);
	}

	.stage-grid {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: var(--gap-columns);
		align-items: start;
		padding-block: var(--section-gap-s);
	}

	.stage-copy {
		grid-column: 1 / span 4;
		grid-row: 1;
		display: grid;
		gap: var(--space-lg);
		align-content: start;
	}

	.stage-object {
		grid-column: 6 / span 7;
		grid-row: 1;
		min-width: 0;
	}

	.stage--flip .stage-copy {
		grid-column: 8 / span 5;
	}

	.stage--flip .stage-object {
		grid-column: 1 / span 6;
	}

	.stage-grid--report .stage-object {
		grid-column: 5 / span 8;
	}

	.stage-title {
		max-width: none;
		font-size: var(--text-section);
		line-height: 1.05;
	}

	.stage-num {
		display: inline;
		margin-right: 0.4em;
		font-size: 0.4em;
		font-weight: inherit;
		letter-spacing: 0;
		color: inherit;
		font-variant-numeric: tabular-nums;
	}

	.stage-copy > p {
		font-size: var(--text-lead);
		line-height: 1.45;
		color: var(--color-ink);
		max-width: 38ch;
	}

	.sheet {
		padding: clamp(24px, 3vw, 40px);
		border-radius: var(--radius-card);
	}

	.brief {
		background: var(--color-paper-2);
	}

	.sheet-label {
		font-size: var(--text-xs);
		color: var(--color-muted);
	}

	.rows {
		margin: var(--space-lg) 0 0;
	}

	.rows > div {
		display: flex;
		justify-content: space-between;
		gap: var(--space-lg);
		padding-block: var(--space-sm);
		border-top: var(--rule-hair) solid var(--color-rule);
	}

	.rows > div:first-child {
		border-top: 0;
	}

	.rows dt {
		font-size: var(--text-sm);
		color: var(--color-muted);
	}

	.rows dd {
		margin: 0;
		font-size: var(--text-md);
		font-weight: 500;
		text-align: right;
	}

	.brief .text-link {
		margin-top: var(--space-lg);
	}

	.check-list {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.check-list li {
		padding-block: var(--space-md);
		border-top: var(--rule-hair) solid var(--color-rule);
	}

	.check-list li:last-child {
		border-bottom: var(--rule-hair) solid var(--color-rule);
	}

	.check-list h3 {
		font-size: var(--text-md);
		font-weight: 600;
		letter-spacing: -0.01em;
	}

	.check-list p {
		margin-top: var(--space-2xs);
		font-size: var(--text-sm);
		line-height: 1.45;
		color: var(--color-muted);
	}

	.stage-photo {
		margin: 0;
	}

	.stage-photo img {
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		border-radius: var(--radius-card);
		background: var(--color-paper-2);
	}

	.stage-photo figcaption {
		margin-top: var(--space-sm);
		font-size: var(--text-xs);
		line-height: 1.5;
		color: var(--color-muted);
	}

	.report {
		background: var(--color-paper);
	}

	.report-head {
		display: flex;
		align-items: start;
		justify-content: space-between;
		gap: var(--space-lg);
		margin-top: var(--space-xs);
	}

	.report-head h3 {
		font-size: var(--text-xl);
	}

	.report-head p {
		margin-top: var(--space-2xs);
		font-size: var(--text-sm);
		color: var(--color-muted);
	}

	.report-price {
		font-size: var(--text-2xl);
		font-weight: 600;
		letter-spacing: -0.02em;
		text-align: right;
		font-variant-numeric: tabular-nums;
	}

	.report-price small {
		display: block;
		font-size: var(--text-xs);
		font-weight: 400;
		letter-spacing: 0;
		color: var(--color-muted);
	}

	.sheet-note {
		margin-top: var(--space-lg);
		font-size: var(--text-xs);
		line-height: 1.5;
		color: var(--color-muted);
		max-width: 52ch;
	}

	.ship {
		background: var(--color-ink);
		color: var(--color-paper);
	}

	.ship .rows > div {
		border-top-color: var(--color-rule-on-ink);
	}

	.ship .rows dt {
		color: var(--color-muted-on-ink);
	}

	.ship .rows dd {
		color: var(--color-paper);
	}

	.units {
		padding-block: var(--section-gap);
	}

	.units-head {
		display: flex;
		flex-wrap: wrap;
		align-items: end;
		justify-content: space-between;
		gap: var(--space-md) var(--space-2xl);
	}

	.units-head h2 {
		font-size: var(--text-section);
	}

	.units-head p {
		max-width: 34ch;
		font-size: var(--text-md);
		color: var(--color-muted);
	}

	.unit-list {
		margin-top: var(--space-2xl);
		border-bottom: var(--rule-hair) solid var(--color-rule);
	}

	.unit {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: var(--space-2xs);
		align-items: center;
		padding-block: var(--space-lg);
		border-top: var(--rule-hair) solid var(--color-rule);
	}

	.unit h3 {
		font-size: var(--text-xl);
	}

	.unit-spec {
		margin-top: var(--space-2xs);
		font-size: var(--text-sm);
		color: var(--color-muted);
	}

	.unit-grade {
		margin-top: var(--space-2xs);
		font-size: var(--text-xs);
		color: var(--color-muted);
	}

	.unit-price {
		font-size: var(--text-2xl);
		font-weight: 600;
		letter-spacing: -0.02em;
		font-variant-numeric: tabular-nums;
	}

	.unit-price small {
		display: block;
		font-size: var(--text-xs);
		font-weight: 400;
		letter-spacing: 0;
		color: var(--color-muted);
	}

	.unit-link {
		justify-self: start;
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		color: var(--color-accent);
		font-size: var(--text-sm);
		font-weight: 500;
		text-decoration: none;
	}

	.unit-link:hover {
		text-decoration: underline;
		text-underline-offset: 0.18em;
	}

	.units-note {
		margin-top: var(--space-lg);
		max-width: 64ch;
		font-size: var(--text-xs);
		line-height: 1.55;
		color: var(--color-muted);
	}

	.close {
		padding-block: var(--section-gap);
		background: var(--color-ink);
		color: var(--color-paper);
	}

	.close-grid {
		display: grid;
		gap: var(--space-xl);
		align-items: end;
	}

	.close h2 {
		max-width: 16ch;
		font-size: var(--text-section);
		color: var(--color-paper);
	}

	.close p {
		max-width: 34ch;
		font-size: var(--text-lead);
		line-height: 1.45;
		color: var(--color-muted-on-ink);
	}

	.close-cta {
		margin-top: var(--space-lg);
	}

	.footer {
		padding-block: var(--space-2xl) var(--space-xl);
	}

	.footer-mark {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 600;
		letter-spacing: -0.04em;
		line-height: 1;
	}

	.footer-line {
		margin-top: var(--space-sm);
		font-size: var(--text-sm);
		color: var(--color-muted);
	}

	.footer-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md) var(--space-2xl);
		margin-top: var(--space-xl);
		padding-top: var(--space-lg);
		border-top: var(--rule-hair) solid var(--color-rule);
	}

	.footer-nav {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2xs) var(--space-lg);
	}

	.footer-nav a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		font-size: var(--text-sm);
		color: var(--color-ink);
		text-decoration: none;
	}

	.footer-nav a:hover {
		text-decoration: underline;
		text-underline-offset: 0.18em;
	}

	.footer-meta {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2xs) var(--space-md);
		font-size: var(--text-xs);
		color: var(--color-muted);
	}

	@media (max-width: 59.99rem) {
		.hero-frame {
			height: auto;
			min-height: 0;
		}

		.hero-media {
			flex: none;
			aspect-ratio: 4 / 3;
		}

		.hero-copy {
			grid-template-columns: minmax(0, 1fr);
			gap: var(--space-lg);
		}

		.hero-copy h1,
		.hero-side {
			grid-column: 1;
		}

		.hero-copy h1 {
			max-width: none;
		}

		.stage-grid {
			grid-template-columns: minmax(0, 1fr);
			gap: var(--space-xl);
			padding-block: var(--section-gap-s);
		}

		.stage-copy,
		.stage-object,
		.stage--flip .stage-copy,
		.stage--flip .stage-object,
		.stage-grid--report .stage-object {
			grid-column: 1;
			grid-row: auto;
		}

		.stage-title {
			font-size: var(--text-display-s);
		}
	}

	@media (min-width: 48rem) {
		.unit {
			grid-template-columns: minmax(0, 1fr) auto 7rem;
			gap: var(--space-lg);
			padding-block: var(--space-xl);
		}

		.unit-link {
			justify-self: end;
		}
	}

	@media (min-width: 60rem) {
		.close-grid {
			grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
			gap: var(--space-3xl);
		}
	}
</style>

<script lang="ts">
	import Check from '@lucide/svelte/icons/check';
	import FileText from '@lucide/svelte/icons/file-text';
	import MessageCircle from '@lucide/svelte/icons/message-circle';
	import SearchCheck from '@lucide/svelte/icons/search-check';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import Timer from '@lucide/svelte/icons/timer';
	import Truck from '@lucide/svelte/icons/truck';

	import Navbar from '#lib/components/Navbar.svelte';
	import Button from '#lib/components/Button.svelte';
	import BentoCard from '#lib/components/BentoCard.svelte';
	import CardStack from '#lib/components/CardStack.svelte';
	import WhatsappFab from '#lib/components/WhatsappFab.svelte';
	import WordSwap from '#lib/components/WordSwap.svelte';
	import { reveal } from '#lib/actions/reveal';
	import { devices, imgFallback, IMG, navLinks, SITE } from '#lib/data/content';
	import { waNumber, waUrl } from '#lib/config/whatsapp';

	const requestUrl = waUrl();
	const consultUrl = waUrl('Halo PidApple, saya mau konsultasi soal iPhone eks-inter');

	const ogImage = SITE.replace(/\/$/, '') + IMG.hero;
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'PidApple',
		url: SITE,
		description:
			'Personal device concierge untuk iPhone eks-inter pilihan. Cek 3uTools, garansi sinyal, laporan sebelum bayar.',
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: `+${waNumber}`,
			contactType: 'sales',
			availableLanguage: 'id'
		}
	};

	const phrases = ['Terbaru', 'Bebas blokir', 'Second', 'Siap pakai', 'Impianmu'];

	const steps = [
		{
			step: '01',
			title: 'Request unit',
			body: 'Hubungi kami via WhatsApp. Sebutkan seri iPhone, kapasitas, warna idaman, dan estimasi budget kamu.',
			icon: MessageCircle,
			metaIcon: Timer,
			meta: 'Dibalas dalam 15 menit'
		},
		{
			step: '02',
			title: 'Hunting dan QC ketat',
			body: 'Tim kami mencarikan unitnya, lalu mengetes 3uTools sampai hijau semua: sinyal, layar, baterai, dan kelengkapan.',
			icon: SearchCheck,
			metaIcon: ShieldCheck,
			meta: 'Inspeksi 24 titik'
		},
		{
			step: '03',
			title: 'Laporan transparan',
			body: 'Kamu terima foto, video, dan hasil diagnosis unit. Ada minus sekecil apa pun, kami tulis di laporan.',
			icon: FileText,
			metaIcon: Check,
			meta: 'Laporan sebelum bayar'
		},
		{
			step: '04',
			title: 'Deal dan pengiriman',
			body: 'Kalau unitnya cocok, bayar tanda jadi. Kami proses kirim dengan asuransi penuh dan pendampingan sampai tiba.',
			icon: Truck,
			metaIcon: ShieldCheck,
			meta: 'Kurir instan atau ekspedisi'
		}
	];

	const checks = [
		{
			title: 'All Green 3uTools',
			body: 'Seluruh komponen utama lolos pemeriksaan sebelum unit kami tawarkan.'
		},
		{
			title: 'Garansi sinyal',
			body: 'Jaringan dicek setelah perakitan. Kalau bermasalah, unit tidak kami kirim.'
		},
		{
			title: 'TrueTone dan Face ID aktif',
			body: 'Layar dan sensor diverifikasi, bukan hanya dilihat sekilas.'
		}
	];

</script>

<svelte:head>
	<title>PidApple: iPhone Eks-Inter Berkualitas dan Bergaransi</title>
	<meta
		name="description"
		content="Cari iPhone eks-inter pilihan: dicek 3uTools sampai All Green, garansi sinyal, dan laporan foto sebelum bayar. Konsultasi gratis lewat WhatsApp."
	/>
	<meta name="robots" content="index, follow" />
	<meta name="author" content="PidApple" />
	<link rel="canonical" href={SITE} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="id_ID" />
	<meta property="og:site_name" content="PidApple" />
	<meta property="og:url" content={SITE} />
	<meta property="og:title" content="PidApple: iPhone Eks-Inter Berkualitas dan Bergaransi" />
	<meta
		property="og:description"
		content="Sebutkan seri dan budget, kami carikan unitnya, cek 3uTools, dan kirim laporan sebelum kamu memutuskan."
	/>
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="1500" />
	<meta property="og:image:alt" content="iPhone 15 Pro titanium, unit pilihan PidApple" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="PidApple: iPhone Eks-Inter Berkualitas dan Bergaransi" />
	<meta
		name="twitter:description"
		content="Dicek 3uTools sampai All Green, garansi sinyal, laporan foto sebelum bayar. Konsultasi gratis lewat WhatsApp."
	/>
	<meta name="twitter:image" content={ogImage} />
	<meta name="theme-color" content="#FFFFFF" />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>


<style>
	/* Wajib ada di file ini (gate Hallmark 26a/26b memindai file halaman).
	   Aturan global yang sama juga ada di base.css untuk komponen lain. */
	:focus-visible {
		outline: 2px solid var(--color-focus);
		outline-offset: 2px;
	}
	a:active,
	button:active {
		transform: scale(0.98);
	}
	a[aria-disabled='true'],
	button[aria-disabled='true'],
	a.disabled,
	button:disabled {
		pointer-events: none;
		opacity: 0.5;
	}
</style>

<Navbar />

<main id="main">
	<!-- Hero: split kiri teks, kanan foto produk -->
	<section class="overflow-hidden" aria-labelledby="hero-title">
		<div class="shell grid min-h-[100dvh] grid-cols-1 items-start gap-14 pb-20 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:pb-28 lg:pt-24">
			<div class="pt-4 lg:pt-16">
				<p
					class="inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full bg-[var(--color-paper-2)] px-4 py-2 text-[12px] font-medium text-[var(--color-ink)] ring-1 ring-[var(--color-rule)]"
				>
					<span class="flex items-center gap-2">
						<ShieldCheck size={14} strokeWidth={2} class="text-[var(--color-accent-2)]" aria-hidden="true" />
						iPhone eks-inter pilihan
					</span>
					<span class="hidden h-3 w-px bg-[var(--color-rule-2)] sm:block"></span>
					<span class="text-[var(--color-muted)]">Garansi 100% aman</span>
				</p>

				<h1
					id="hero-title"
					class="mt-7 text-[var(--text-display)] font-semibold leading-[0.98] tracking-[-0.04em] text-[var(--color-ink)]"
				>
					<span class="block">Cari Iphone</span>
					<span class="block whitespace-nowrap text-[0.72em] leading-[1.05]">
						<WordSwap {phrases} />
					</span>
				</h1>

				<p
					class="mt-6 max-w-[44ch] text-[16px] leading-relaxed text-[var(--color-muted)] md:text-[18px]"
				>
					Sebutkan seri dan budget kamu. Kami cari, cek unit, dan laporkan.
				</p>

				<div
					class="mt-8 flex flex-col gap-3 sm:flex-row"
					id="hero-cta"
				>
					<Button href="#cara-kerja" class="w-full sm:w-auto">Mulai Request Unit</Button>
					<Button
						href={consultUrl}
						variant="secondary"
						target="_blank"
						rel="noopener noreferrer"
						class="w-full sm:w-auto"
					>
						<MessageCircle size={17} strokeWidth={1.75} aria-hidden="true" />
						Konsultasi Bebas Biaya
					</Button>
				</div>

				<ul class="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-[var(--color-muted)]">
					<li class="flex items-center gap-2">
						<Check size={15} strokeWidth={2.5} class="text-[var(--color-accent-2)]" aria-hidden="true" />
						Inspeksi 24 titik
					</li>
					<li class="flex items-center gap-2">
						<Check size={15} strokeWidth={2.5} class="text-[var(--color-accent-2)]" aria-hidden="true" />
						3uTools All Green
					</li>
					<li class="flex items-center gap-2">
						<Check size={15} strokeWidth={2.5} class="text-[var(--color-accent-2)]" aria-hidden="true" />
						Bebas blokir sinyal
					</li>
				</ul>
			</div>

			<figure class="mx-auto w-full max-w-[400px] lg:mx-0 lg:justify-self-end">
				<CardStack />
				<figcaption class="mt-3 text-[12px] text-[var(--color-muted)]">
					Contoh foto unit pilihan. Foto asli dikirim lewat WhatsApp.
				</figcaption>
			</figure>
		</div>
	</section>

	<!-- Cara kerja -->
	<section id="cara-kerja" class="py-24 md:py-32" aria-labelledby="cara-kerja-title">
		<div class="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
			<header class="lg:sticky lg:top-24 lg:self-start">
				<h2
					use:reveal
					id="cara-kerja-title"
					class="mt-3 text-[var(--text-section)] font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--color-ink)]"
				>
					Gimana cara PidApple bekerja?
				</h2>
				<p use:reveal={{ delay: 80 }} class="mt-5 max-w-[40ch] text-[15px] leading-relaxed text-[var(--color-muted)] md:text-[16px]">
					Empat langkah dari request sampai unit tiba di meja kamu, dalam kondisi prima.
				</p>
				<div use:reveal={{ delay: 140 }} class="mt-8">
					<Button href={consultUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
						<MessageCircle size={17} strokeWidth={1.75} aria-hidden="true" />
						Tanya dulu lewat WhatsApp
					</Button>
				</div>
				<figure use:reveal={{ delay: 200 }} class="mt-10 hidden lg:block">
					<img width="1200" height="900"
						src={IMG.cara}
						alt="iPhone di meja kerja, ilustrasi proses pilihan unit"
						class="aspect-[4/3] w-full rounded-[24px] object-cover ring-1 ring-[var(--color-rule)]"
						loading="lazy"
						decoding="async"
						referrerpolicy="no-referrer"
						onerror={imgFallback('pid-cara')}
					/>
					<figcaption class="mt-3 text-[12px] text-[var(--color-muted)]">
						Unit dicek satu per satu sebelum ditawarkan.
					</figcaption>
				</figure>
			</header>

			<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
				{#each steps as step, index (step.step)}
					<BentoCard {...step} delay={index * 80} />
				{/each}
			</div>
		</div>
	</section>

	<!-- Trust: band gelap -->
	<section id="kenapa" class="bg-[var(--color-paper-2)] py-24 md:py-32" aria-labelledby="kenapa-title">
		<div class="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<div>
				<h2
					use:reveal
					id="kenapa-title"
					class="mt-3 max-w-[16ch] text-[var(--text-section)] font-semibold leading-[1.02] tracking-[-0.03em]"
				>
					Bukan asal murah, tapi 100% aman.
				</h2>
				<p use:reveal={{ delay: 80 }} class="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-[var(--color-muted)] md:text-[16px]">
					Beli iPhone eks-inter itu penuh risiko kalau tidak paham mesin. Unit yang kami pilih terbebas dari bypass, layar gantian, dan sinyal terblokir. Kamu tinggal duduk tenang.
				</p>

				<ul class="mt-9 space-y-5">
					{#each checks as check (check.title)}
						<li use:reveal={{ delay: 120 }} class="flex items-start gap-3.5">
							<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-accent-ink)]">
								<Check size={13} strokeWidth={2.5} aria-hidden="true" />
							</span>
							<div>
								<h3 class="text-[15px] font-medium leading-[1.2] tracking-[-0.02em]">{check.title}</h3>
								<p class="mt-1 max-w-[42ch] text-[13px] leading-relaxed text-[var(--color-muted)]">{check.body}</p>
							</div>
						</li>
					{/each}
				</ul>

				<div use:reveal={{ delay: 160 }} class="mt-10">
					<Button href={consultUrl} variant="inverse" target="_blank" rel="noopener noreferrer">
						Konsultasi WhatsApp
					</Button>
				</div>
			</div>

			<figure>
				<div class="relative">
					<div data-slot="trust-image" class="aspect-[4/3] rounded-[40px] ring-1 ring-[var(--color-rule)]">
						<img width="1200" height="900"
							src={IMG.trust}
							alt="iPhone dalam genggaman dengan latar gelap, contoh unit yang lolos inspeksi"
							loading="lazy"
							onerror={imgFallback('pid-trust')}
						/>
					</div>
					<div class="absolute left-5 top-5 rounded-full bg-[var(--color-cotton)]/90 px-4 py-2 text-[12px] font-semibold text-[var(--color-ink)] shadow-[var(--cast-stock)] backdrop-blur-md">
						3uTools All Green
					</div>
				</div>
				<figcaption class="mt-3 text-[12px] text-[var(--color-muted)]">
					Inspeksi 24 titik, difoto sebelum unit dikirim.
				</figcaption>
			</figure>
		</div>
	</section>

	<!-- Estimasi unit -->
	<section id="koleksi" class="bg-[var(--color-paper-2)] py-24 md:py-32" aria-labelledby="koleksi-title">
		<div class="shell">
			<header class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
				<div>
					<h2
						use:reveal
						id="koleksi-title"
						class="mt-2 text-[var(--text-section)] font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--color-ink)]"
					>
						Cek estimasi unit idaman
					</h2>
				</div>
				<p class="max-w-[28ch] text-[13px] leading-relaxed text-[var(--color-muted)] md:text-right">
					Stok diperbarui setiap hari.
				</p>
			</header>

			<div class="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
				{#each devices as device (device.model)}
					<article class="group flex h-full flex-col overflow-hidden rounded-[32px] bg-[var(--color-cotton)] shadow-[var(--shadow-card)] ring-1 ring-[var(--color-rule)] motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[var(--ease-out)] motion-safe:hover:-translate-y-1">
						<div class="relative aspect-[4/2.6] overflow-hidden">
							<img width="1200" height="900"
								src={device.img}
								alt={device.model}
								class="h-full w-full object-cover"
								loading="lazy"
								onerror={imgFallback('pid-' + device.model)}
							/>
							<span class="absolute left-4 top-4 rounded-full bg-[var(--color-cotton)]/90 px-3 py-1 text-[11px] font-semibold text-[var(--color-ink)] backdrop-blur-md">{device.grade}</span>
						</div>
						<div class="flex flex-1 flex-col p-6 md:p-7">
							<p class="text-[12px] text-[var(--color-muted)]">{device.tag}</p>
							<h3 class="mt-2 text-[22px] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)]">{device.model}</h3>
							<p class="mt-1.5 text-[13px] leading-relaxed text-[var(--color-muted)]">{device.spec}</p>
							<footer class="mt-auto flex items-end justify-between gap-3 pt-8">
								<p>
									<span class="block text-[11px] text-[var(--color-muted)]">Mulai</span>
									<span class="text-[20px] font-semibold tabular-nums tracking-[-0.02em] text-[var(--color-ink)]">{device.price}</span>
								</p>
								<a
									href={waUrl(`Halo PidApple, saya mau tanya stok ${device.model}.`)}
									target="_blank"
									rel="noopener noreferrer"
									class="rounded-full bg-[var(--color-paper-2)] px-4 py-2 text-[13px] font-medium text-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)]"
								>
									Tanya stok
								</a>
							</footer>
						</div>
					</article>
				{/each}
			</div>

			<p class="mt-6 text-[12px] leading-relaxed text-[var(--color-muted)]">
				Harga bergerak mengikuti kondisi unit dan pasar. Angka di atas titik mulai, bukan penawaran final.
				Foto di atas adalah contoh visual, foto unit asli dikirim lewat WhatsApp.
			</p>
		</div>
	</section>
</main>

<footer class="border-t border-[var(--color-rule)] bg-[var(--color-paper)] py-12">
	<div class="shell flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
		<div>
			<p class="text-[15px] font-semibold tracking-[-0.02em] text-[var(--color-ink)]">PidApple</p>
			<p class="mt-1 text-[13px] text-[var(--color-muted)]">Personal device concierge dan procurement.</p>
		</div>
		<nav aria-label="Navigasi footer" class="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13px] text-[var(--color-muted)]">
			{#each navLinks as link, i (link.href)}
				{#if i > 0}<span class="h-1 w-1 rounded-full bg-[var(--color-rule-2)]" aria-hidden="true"></span>{/if}
				<a href={link.href} class="transition-colors duration-300 hover:text-[var(--color-ink)]">{link.label}</a>
			{/each}
			<span class="h-1 w-1 rounded-full bg-[var(--color-rule-2)]" aria-hidden="true"></span>
			<a href={requestUrl} target="_blank" rel="noopener noreferrer" class="transition-colors duration-300 hover:text-[var(--color-ink)]">WhatsApp</a>
		</nav>
		<p class="text-[12px] text-[var(--color-muted)]">© 2026 PidApple. Hak cipta dilindungi.</p>
	</div>
</footer>

<WhatsappFab />

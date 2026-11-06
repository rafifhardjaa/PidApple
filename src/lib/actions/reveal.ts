type RevealOptions = {
	/** Stagger in milliseconds. Cleared after the reveal so hover stays snappy. */
	delay?: number;
};

/**
 * Scroll reveal with no layout shift and no extra markup.
 * The hidden state is applied only in the browser, so the page remains
 * readable when JavaScript is unavailable.
 */
export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	if (typeof IntersectionObserver === 'undefined') return;

	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduceMotion) return;

	node.classList.add('reveal');

	if (options.delay) {
		node.style.transitionDelay = `${options.delay}ms`;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;

				node.classList.add('reveal-visible');
				observer.disconnect();
				node.addEventListener(
					'transitionend',
					() => {
						node.style.transitionDelay = '';
					},
					{ once: true }
				);
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

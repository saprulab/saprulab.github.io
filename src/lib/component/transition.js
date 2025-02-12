import { crossfade } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

export const [send, receive] = crossfade({
	duration: (d) => Math.sqrt(d * 200),

	fallback(node, params) {
		const style = getComputedStyle(node);

		return {
			duration: 600,
			easing: quintOut,
			css: (t) => `
				opacity: ${t}
			`
		};
	}
});
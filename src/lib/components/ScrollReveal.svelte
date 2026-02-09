<script lang="ts">
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';

	interface Props {
		delay?: number;
		children: Snippet;
	}

	let { delay = 0, children }: Props = $props();

	let element: HTMLDivElement;
	let visible = $state(false);

	onMount(() => {
		// If already in viewport on mount, show immediately (page transition handles entrance)
		const rect = element.getBoundingClientRect();
		const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

		if (inViewport) {
			visible = true;
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						visible = true;
					}, delay);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.08 }
		);
		observer.observe(element);
		return () => observer.disconnect();
	});
</script>

<div bind:this={element} class="reveal" class:visible>
	{@render children()}
</div>

<style>
	.reveal {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.5s var(--ease-out),
			transform 0.5s var(--ease-out);
	}

	.reveal.visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>

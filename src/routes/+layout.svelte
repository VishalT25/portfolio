<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	let reduceMotion = $state(false);

	onMount(() => {
		reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	});
</script>

<svelte:head>
	<title>Vishal Thamaraimanalan</title>
</svelte:head>

<Nav />

<div class="page-container">
	{#key page.url.pathname}
		<div
			class="page-transition"
			in:fade={{ duration: reduceMotion ? 0 : 200, easing: cubicOut }}
		>
			{@render children()}
			<Footer />
		</div>
	{/key}
</div>

<style>
	.page-container {
		display: grid;
		min-height: 100vh;
		padding-top: 4.5rem;
		overflow: hidden;
	}

	.page-transition {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		min-width: 0;
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 4.5rem);
	}
</style>

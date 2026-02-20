<script lang="ts">
	import { page } from '$app/state';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	const links = [
		{ href: '/', label: 'home' },
		{ href: '/about', label: 'about' },
		{ href: '/projects', label: 'projects' },
		{ href: '/contact', label: 'contact' }
	];

	function isActive(href: string): boolean {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}

	let mobileOpen = $state(false);
	let scrolled = $state(false);

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<svelte:window onscroll={() => { scrolled = window.scrollY > 20; }} />

<header class:home={page.url.pathname === '/'} class:scrolled>
	<nav>
		<a href="/" class="logo" aria-label="Home">
			<img
				src="/logos/Vishal Signature-white.svg"
				alt="Vishal signature"
				class="logo-img"
				width="48"
				height="48"
			/>
		</a>

		<div class="links">
			{#each links as link}
				<a
					href={link.href}
					class="nav-link"
					class:active={isActive(link.href)}
				>
					{link.label}
				</a>
			{/each}
		</div>
	</nav>
</header>

<!-- Floating nav — mobile only -->
{#if mobileOpen}
	<div class="fab-backdrop" onclick={closeMobile} aria-hidden="true"></div>
{/if}

<div class="fab-container">
	{#if mobileOpen}
		<nav class="fab-menu" transition:fly={{ y: 8, duration: 160, easing: cubicOut }}>
			{#each links as link}
				<a
					href={link.href}
					class="fab-link"
					class:active={isActive(link.href)}
					onclick={closeMobile}
				>
					{link.label}
				</a>
			{/each}
		</nav>
	{/if}

	<button
		class="fab-btn"
		onclick={() => (mobileOpen = !mobileOpen)}
		aria-label="Toggle navigation"
		aria-expanded={mobileOpen}
	>
		<span class="bar" class:open={mobileOpen}></span>
		<span class="bar" class:open={mobileOpen}></span>
	</button>
</div>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 0 2rem;
		background: transparent;
		border-bottom: 1px solid transparent;
		transition: background 0.4s var(--ease-out), border-color 0.4s var(--ease-out);
	}

	header.scrolled {
		background: hsla(222, 47%, 7%, 0.55);
		-webkit-backdrop-filter: blur(16px) saturate(1.4);
		backdrop-filter: blur(16px) saturate(1.4);
		border-bottom-color: hsla(222, 28%, 18%, 0.5);
	}

	header.home {
		transform: none;
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 64rem;
		margin: 0 auto;
		height: 4.5rem;
	}

	/* --- Logo --- */

	.logo {
		display: flex;
		align-items: center;
	}

	.logo-img {
		height: 48px;
		width: auto;
		opacity: 0;
		transform: scale(0.92);
		animation: logo-in 0.6s var(--ease-out) 0.15s forwards;
		transition: opacity 0.25s var(--ease), transform 0.25s var(--ease);
	}

	.logo:hover .logo-img {
		opacity: 0.7;
		transform: scale(1.04);
	}

	@keyframes logo-in {
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	/* --- Nav links --- */

	.links {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.nav-link {
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		color: var(--txt-2);
		position: relative;
		padding-bottom: 2px;
		transition: color 0.3s var(--ease-out);
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: var(--txt-0);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.3s var(--ease-out);
	}

	.nav-link:hover {
		color: var(--txt-0);
	}

	.nav-link:hover::after {
		transform: scaleX(1);
	}

	.nav-link.active {
		color: var(--txt-0);
	}

	.nav-link.active::after {
		transform: scaleX(1);
		background: var(--blue);
	}

	/* --- FAB (mobile only) --- */

	.fab-backdrop {
		display: none;
		position: fixed;
		inset: 0;
		z-index: 199;
	}

	.fab-container {
		display: none;
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
		z-index: 200;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.625rem;
	}

	.fab-btn {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background: hsl(222, 47%, 11%);
		border: 1px solid var(--bg-3);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5px;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
		cursor: pointer;
		flex-shrink: 0;
		transition: background 0.2s var(--ease), box-shadow 0.2s var(--ease);
	}

	.fab-btn:hover {
		background: hsl(222, 47%, 16%);
		box-shadow: 0 6px 28px rgba(0, 0, 0, 0.6);
	}

	.bar {
		display: block;
		width: 18px;
		height: 2px;
		background: var(--txt-0);
		border-radius: 2px;
		transition: transform 0.3s var(--ease), opacity 0.2s var(--ease);
	}

	.bar.open:first-child {
		transform: translateY(3.5px) rotate(45deg);
	}

	.bar.open:last-child {
		transform: translateY(-3.5px) rotate(-45deg);
	}

	.fab-menu {
		background: hsl(222, 47%, 9%);
		border: 1px solid var(--bg-3);
		border-radius: 12px;
		padding: 0.375rem 0;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
		min-width: 7.5rem;
	}

	.fab-link {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--txt-2);
		padding: 0.625rem 1.25rem;
		text-align: right;
		transition: color 0.2s var(--ease);
	}

	.fab-link:hover,
	.fab-link.active {
		color: var(--txt-0);
	}

	@media (max-width: 700px) {
		header {
			padding: 0 1.5rem;
		}

		.links {
			display: none;
		}

		.fab-backdrop,
		.fab-container {
			display: flex;
		}
	}
</style>

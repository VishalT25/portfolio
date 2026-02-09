<script lang="ts">
	import { page } from '$app/state';

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

		<button
			class="mobile-toggle"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle navigation"
			aria-expanded={mobileOpen}
		>
			<span class="bar" class:open={mobileOpen}></span>
			<span class="bar" class:open={mobileOpen}></span>
		</button>
	</nav>

	{#if mobileOpen}
		<div class="mobile-nav">
			{#each links as link}
				<a
					href={link.href}
					class="mobile-link"
					class:active={isActive(link.href)}
					onclick={closeMobile}
				>
					{link.label}
				</a>
			{/each}
		</div>
	{/if}
</header>

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

	/* --- Mobile --- */

	.mobile-toggle {
		display: none;
		flex-direction: column;
		gap: 6px;
		padding: 4px;
	}

	.bar {
		display: block;
		width: 24px;
		height: 2px;
		background: var(--txt-0);
		border-radius: 2px;
		transition: transform 0.3s var(--ease), opacity 0.2s var(--ease);
	}

	.bar.open:first-child {
		transform: translateY(4px) rotate(45deg);
	}

	.bar.open:last-child {
		transform: translateY(-4px) rotate(-45deg);
	}

	.mobile-nav {
		display: none;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem 0 1.5rem;
		border-top: 1px solid var(--bg-3);
		max-width: 64rem;
		margin: 0 auto;
	}

	.mobile-link {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--txt-2);
		padding: 0.5rem 0;
		transition: color 0.2s var(--ease);
	}

	.mobile-link:hover,
	.mobile-link.active {
		color: var(--txt-0);
	}

	@media (max-width: 700px) {
		header {
			padding: 0 1.5rem;
		}

		header.home {
			transform: none;
		}

		.links {
			display: none;
		}

		.mobile-toggle {
			display: flex;
		}

		.mobile-nav {
			display: flex;
		}
	}
</style>

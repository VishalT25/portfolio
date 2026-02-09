<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
</script>

<svelte:head>
	<title>Vishal Thamaraimanalan</title>
	<meta name="description" content="Computer Science Student, Product Builder, AI Enthusiast based in Toronto." />
</svelte:head>

<section class="hero">
	<div class="hero-content">
		<ScrollReveal>
			<span class="label">Toronto, ON</span>
		</ScrollReveal>

		<ScrollReveal delay={80}>
			<h1 class="name">
				vishal<br />thamaraimanalan
			</h1>
		</ScrollReveal>

		<ScrollReveal delay={160}>
			<p class="tagline">
				cs + business student, product builder, ai enthusiast.
			</p>
		</ScrollReveal>

		<ScrollReveal delay={240}>
			<p class="intro">
				I build products that solve real problems, working at the
				intersection of software engineering, AI, and product design.
				Currently studying at Western University.
			</p>
		</ScrollReveal>

		<ScrollReveal delay={320}>
			<div class="links">
				<a href="/projects" class="link">
					<span class="link-arrow">&rarr;</span>projects
				</a>
				<a href="/about" class="link">
					<span class="link-arrow">&rarr;</span>about
				</a>
				<a href="/contact" class="link">
					<span class="link-arrow">&rarr;</span>contact
				</a>
			</div>
		</ScrollReveal>
	</div>

	<div class="hero-aside">
		<ScrollReveal delay={400}>
			<div class="status-block">
				<span class="label">status</span>
				<p class="status-text">
					building <a href="/projects" class="inline-link">StuCo</a> &mdash;
					an AI-powered scheduling app for students.
				</p>
			</div>
		</ScrollReveal>
	</div>
</section>

<style>
	.hero {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 4rem;
		max-width: 64rem;
		margin: 0 auto;
		padding: 0 2rem;
		flex: 1;
	}

	.hero-content {
		flex: 1;
		max-width: 40rem;
	}

	.name {
		font-size: clamp(2.5rem, 6vw, 4.5rem);
		font-weight: 700;
		line-height: 1.05;
		letter-spacing: -0.04em;
		color: var(--txt-0);
		margin: 1rem 0 1.25rem;
	}

	.tagline {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--txt-2);
		margin: 0 0 1rem;
	}

	.intro {
		color: var(--txt-2);
		max-width: 32rem;
		margin: 0 0 1.5rem;
		font-size: 1rem;
	}

	/* --- Nav links with arrow animation --- */

	.links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.link {
		font-family: var(--font-mono);
		font-size: 1rem;
		color: var(--txt-2);
		display: inline-flex;
		align-items: center;
		transition: color 0.2s var(--ease);
	}

	.link:hover {
		color: var(--txt-0);
	}

	.link-arrow {
		display: inline-block;
		width: 0;
		opacity: 0;
		transform: translateX(-0.6em);
		transition: width 0.25s var(--ease), opacity 0.25s var(--ease),
			transform 0.25s var(--ease);
		overflow: hidden;
	}

	.link:hover .link-arrow {
		width: 1.4em;
		opacity: 1;
		transform: translateX(0);
	}

	/* --- Aside --- */

	.hero-aside {
		flex-shrink: 0;
		width: 16rem;
		align-self: center;
	}

	.status-block {
		border-left: 1px solid var(--bg-3);
		padding-left: 1.25rem;
	}

	.status-text {
		font-size: 0.9375rem;
		color: var(--txt-2);
		margin-top: 0.75rem;
	}

	.inline-link {
		color: var(--txt-0);
		text-decoration: underline transparent 1px;
		text-underline-offset: 3px;
		transition: text-decoration-color 0.2s var(--ease);
	}

	.inline-link:hover {
		text-decoration-color: var(--txt-0);
	}

	@media (max-width: 900px) {
		.hero {
			flex-direction: column;
			justify-content: center;
			gap: 1.5rem;
			padding: 0 1.5rem;
		}

		.hero-aside {
			width: 100%;
			align-self: flex-start;
		}

		.name {
			font-size: clamp(2rem, 8vw, 3rem);
			margin: 0.75rem 0 1rem;
		}
	}
</style>

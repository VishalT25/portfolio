<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';

	let emailCopied = $state(false);

	async function copyEmail() {
		await navigator.clipboard.writeText('vthamara@uwo.ca');
		emailCopied = true;
		setTimeout(() => (emailCopied = false), 1200);
	}
</script>

<svelte:head>
	<title>contact / vishal thamaraimanalan</title>
</svelte:head>

<section class="contact">
	<a href="/" class="back"><span class="back-arrow">&larr;</span> back</a>

	<ScrollReveal>
		<h1>contact</h1>
		<p class="subtitle">Interested in working together? Reach out.</p>
	</ScrollReveal>

	<div class="links-section">
		<ScrollReveal delay={80}>
			<div class="contact-row">
				<span class="label">email</span>
				<div class="contact-value">
					<button class="copy-btn" class:copied={emailCopied} onclick={copyEmail} aria-label="Copy email to clipboard">
						{#if emailCopied}
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M20 6 9 17l-5-5"/>
							</svg>
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<rect x="9" y="2" width="6" height="4" rx="1"/>
								<path d="M9 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2"/>
							</svg>
						{/if}
					</button>
					<a href="mailto:vthamara@uwo.ca" class="contact-link">
						vthamara@uwo.ca
					</a>
				</div>
			</div>
		</ScrollReveal>

		<ScrollReveal delay={120}>
			<div class="contact-row">
				<span class="label">linkedin</span>
				<a
					href="https://linkedin.com/in/vishal-thamaraimanalan"
					target="_blank"
					rel="noopener noreferrer"
					class="contact-link external"
				>
					vishal-thamaraimanalan<span class="ext-arrow"> &nearr;</span>
				</a>
			</div>
		</ScrollReveal>

		<ScrollReveal delay={160}>
			<div class="contact-row">
				<span class="label">github</span>
				<a
					href="https://github.com/VishalT25"
					target="_blank"
					rel="noopener noreferrer"
					class="contact-link external"
				>
					VishalT25<span class="ext-arrow"> &nearr;</span>
				</a>
			</div>
		</ScrollReveal>
	</div>
</section>

<style>
	.contact {
		max-width: 53rem;
		margin: 0 auto;
		padding: 3rem 2rem 6rem;
	}

	h1 {
		margin: 2rem 0 0.75rem;
	}

	.subtitle {
		color: var(--txt-2);
		margin-bottom: 3rem;
	}

	/* --- Back link --- */

	.back {
		font-family: var(--font-mono);
		font-size: 1rem;
		color: var(--txt-3);
		display: inline-flex;
		align-items: center;
		transition: color 0.2s var(--ease);
	}

	.back:hover {
		color: var(--txt-0);
	}

	.back-arrow {
		display: inline-block;
		margin-right: 0.5ch;
		transition: transform 0.2s var(--ease);
	}

	.back:hover .back-arrow {
		transform: translateX(-0.3em);
	}

	/* --- Contact rows --- */

	.links-section {
		max-width: 32rem;
	}

	.contact-row {
		padding: 1.25rem 0;
		border-bottom: 1px solid var(--bg-3);
	}

	.contact-value {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.contact-link {
		font-size: 1.125rem;
		color: var(--txt-0);
		margin-top: 0.5rem;
		display: block;
		text-decoration: underline transparent 1px;
		text-underline-offset: 3px;
		transition: text-decoration-color 0.2s var(--ease);
	}

	.contact-link:hover {
		text-decoration-color: var(--txt-0);
	}

	.contact-value .contact-link {
		margin-top: 0;
	}

	/* --- External arrow --- */

	.ext-arrow {
		display: inline-block;
		transition: transform 0.2s var(--ease);
	}

	.contact-link:hover .ext-arrow {
		transform: translate(2px, -2px);
	}

	/* --- Copy button --- */

	.copy-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 0;
		height: 1.25rem;
		opacity: 0;
		overflow: hidden;
		color: var(--txt-3);
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		transition: width 0.25s var(--ease), opacity 0.25s var(--ease), color 0.2s var(--ease);
	}

	.contact-value:hover .copy-btn,
	.copy-btn.copied {
		width: 1.25rem;
		opacity: 1;
	}

	.copy-btn:hover {
		color: var(--txt-0);
	}

	.copy-btn.copied {
		color: #4ade80;
	}

	@media (max-width: 700px) {
		.contact {
			padding: 2rem 1.5rem 4rem;
		}
	}
</style>

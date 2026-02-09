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
					<a href="mailto:vthamara@uwo.ca" class="contact-link">
						vthamara@uwo.ca
					</a>
					<button class="copy-btn" onclick={copyEmail}>
						{emailCopied ? 'copied' : 'copy'}
					</button>
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
		gap: 1rem;
		margin-top: 0.5rem;
	}

	.contact-link {
		font-size: 1.125rem;
		color: var(--txt-0);
		margin-top: 0.5rem;
		display: inline-block;
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
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		color: var(--txt-3);
		padding: 0.25rem 0.625rem;
		border: 1px solid var(--bg-3);
		border-radius: 3px;
		transition: color 0.2s var(--ease), border-color 0.2s var(--ease);
	}

	.copy-btn:hover {
		color: var(--txt-0);
		border-color: var(--txt-3);
	}

	@media (max-width: 700px) {
		.contact {
			padding: 2rem 1.5rem 4rem;
		}
	}
</style>

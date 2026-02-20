<script lang="ts">
	const socials = [
		{ label: 'github', href: 'https://github.com/VishalT25' },
		{ label: 'linkedin', href: 'https://linkedin.com/in/vishal-thamaraimanalan' }
	];

	let emailCopied = $state(false);

	async function copyEmail() {
		await navigator.clipboard.writeText('vthamara@uwo.ca');
		emailCopied = true;
		setTimeout(() => (emailCopied = false), 1200);
	}
</script>

<footer>
	<div class="inner">
		<span class="copy">&copy; {new Date().getFullYear()} vishal thamaraimanalan</span>
		<div class="social-links">
			{#each socials as s}
				<a href={s.href} target="_blank" rel="noopener noreferrer" class="social">
					{s.label}<span class="arrow"> &nearr;</span>
				</a>
			{/each}
			<div class="email-wrap">
				<button class="copy-btn" class:copied={emailCopied} onclick={copyEmail} aria-label="Copy email to clipboard">
					{#if emailCopied}
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M20 6 9 17l-5-5"/>
						</svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<rect x="9" y="2" width="6" height="4" rx="1"/>
							<path d="M9 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2"/>
						</svg>
					{/if}
				</button>
				<a href="mailto:vthamara@uwo.ca" class="social">
					email<span class="arrow"> &nearr;</span>
				</a>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		margin-top: auto;
		padding: 2.5rem 2rem;
		border-top: 1px solid var(--bg-3);
	}

	.inner {
		max-width: 64rem;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.copy {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--txt-3);
	}

	.social-links {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.social {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--txt-3);
		transition: color var(--duration) var(--ease);
	}

	.social:hover {
		color: var(--txt-0);
	}

	.arrow {
		display: inline-block;
		transition: transform var(--duration) var(--ease);
	}

	.social:hover .arrow {
		transform: translate(2px, -2px);
	}

	/* --- Email with clipboard icon --- */

	.email-wrap {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
	}

	.copy-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 0;
		height: 1rem;
		opacity: 0;
		overflow: hidden;
		color: var(--txt-3);
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		transition: width 0.25s var(--ease), opacity 0.25s var(--ease), color 0.2s var(--ease);
	}

	.email-wrap:hover .copy-btn,
	.copy-btn.copied {
		width: 1rem;
		opacity: 1;
	}

	.copy-btn:hover {
		color: var(--txt-0);
	}

	.copy-btn.copied {
		color: #4ade80;
	}

	@media (max-width: 700px) {
		footer {
			padding-bottom: 5.5rem;
		}
	}

	@media (max-width: 600px) {
		footer {
			padding: 2rem 1.5rem 5.5rem;
		}

		.inner {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>

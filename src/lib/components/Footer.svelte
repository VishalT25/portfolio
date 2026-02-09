<script lang="ts">
	const socials = [
		{ label: 'github', href: 'https://github.com/VishalT25' },
		{ label: 'linkedin', href: 'https://linkedin.com/in/vishal-thamaraimanalan' },
		{ label: 'email', href: 'mailto:vthamara@uwo.ca' }
	];
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

	@media (max-width: 600px) {
		footer {
			padding: 2rem 1.5rem;
		}

		.inner {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>

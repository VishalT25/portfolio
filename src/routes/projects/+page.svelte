<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';

	interface Project {
		title: string;
		timeline: string;
		type: string;
		stack: string[];
		description: string[];
		github: string;
		live: string;
		accent: string;
		logo: string;
	}

	const projects: Project[] = [
		{
			title: 'StuCo',
			timeline: 'Apr. 2025 \u2013 Present',
			type: 'Product \u00B7 Consumer App',
			stack: ['iOS', 'AI/ML', 'Supabase', 'Swift'],
			description: [
				'Built and launched a consumer-facing iOS scheduling platform that converts unstructured academic content into structured calendar events using AI.',
				'Achieved >97% recognition accuracy in internal testing.',
				'Designed subscription-based feature gating and secure authentication to support monetization while maintaining a frictionless onboarding experience.',
				'Implemented offline-first caching and sync patterns to ensure reliability for student workflows across inconsistent connectivity states.'
			],
			github: 'https://www.github.com/VishalT25/StuCo',
			live: 'https://www.stuco.app',
			accent: 'var(--blue)',
			logo: '/images/stuco-logo.svg'
		},
		{
			title: 'DuckSpeak',
			timeline: 'Oct. 2025',
			type: 'Accessibility Product \u00B7 HackHarvard 2025',
			stack: ['Python', 'React', 'ML', 'Computer Vision'],
			description: [
				'Built a real-time accessibility prototype translating live ASL gestures to caption text to improve communication for Deaf and hard-of-hearing users.',
				'Evaluated an ASL recognition pipeline on 2,000+ samples, achieving >90% gesture stability and optimizing inference latency to <30ms.',
				'Translated technical constraints (latency, stability) into product decisions to improve readability and reduce caption flicker during continuous signing.'
			],
			github: 'https://github.com/CSUWO/DuckSpeak',
			live: 'https://duckspeak.netlify.app',
			accent: 'var(--purple)',
			logo: '/images/duckspeak-logo.svg'
		}
	];
</script>

<svelte:head>
	<title>projects / vishal thamaraimanalan</title>
</svelte:head>

<section class="projects">
	<a href="/" class="back"><span class="back-arrow">&larr;</span> back</a>

	<ScrollReveal>
		<h1>projects</h1>
		<p class="subtitle">
			Selected work spanning consumer products, accessibility tools, and AI.
		</p>
	</ScrollReveal>

	<div class="project-list">
		{#each projects as project, i}
			<ScrollReveal delay={i * 120}>
				<article class="project">
					<div class="project-header">
						<img
							src={project.logo}
							alt="{project.title} logo"
							class="project-logo"
							width="44"
							height="44"
						/>
						<div class="project-info">
							<h2 style="--accent: {project.accent}">{project.title}</h2>
							<p class="project-type">{project.type}</p>
						</div>
						<span class="project-date">{project.timeline}</span>
					</div>

					<ul class="project-desc">
						{#each project.description as point}
							<li>{point}</li>
						{/each}
					</ul>

					<div class="project-footer">
						<div class="project-tags">
							{#each project.stack as tag}
								<span class="tag">{tag}</span>
							{/each}
						</div>

						<div class="project-links">
							<a href={project.live} target="_blank" rel="noopener noreferrer" class="ext-link">
								live<span class="ext-arrow"> &nearr;</span>
							</a>
							<a href={project.github} target="_blank" rel="noopener noreferrer" class="ext-link">
								github<span class="ext-arrow"> &nearr;</span>
							</a>
						</div>
					</div>
				</article>
			</ScrollReveal>
		{/each}
	</div>
</section>

<style>
	.projects {
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

	/* --- Project list --- */

	.project-list {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.project {
		border: 1px solid var(--bg-3);
		border-radius: 8px;
		padding: 2rem;
		transition: border-color 0.2s var(--ease);
	}

	.project:hover {
		border-color: var(--bg-4);
	}

	.project-header {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.project-logo {
		width: 44px;
		height: 44px;
		object-fit: contain;
		flex-shrink: 0;
		border-radius: 8px;
	}

	.project-info {
		flex: 1;
	}

	.project h2 {
		font-size: 1.5rem;
		margin: 0;
		position: relative;
	}

	.project h2::before {
		content: none;
	}

	.project-type {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--txt-3);
		margin-top: 0.25rem;
		letter-spacing: 0.02em;
	}

	.project-date {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--txt-3);
		white-space: nowrap;
	}

	/* --- Description --- */

	.project-desc {
		margin-bottom: 1.5rem;
	}

	.project-desc li {
		font-size: 0.9375rem;
		color: var(--txt-2);
		line-height: 1.7;
		padding: 0.375rem 0;
		padding-left: 1rem;
		position: relative;
	}

	.project-desc li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.85rem;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--txt-4);
	}

	/* --- Footer --- */

	.project-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--bg-3);
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;
	}

	.tag {
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		color: var(--txt-3);
		padding: 0.25rem 0.625rem;
		border: 1px solid var(--bg-3);
		border-radius: 3px;
	}

	.project-links {
		display: flex;
		gap: 1.25rem;
	}

	.ext-link {
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		color: var(--txt-3);
		white-space: nowrap;
		transition: color 0.2s var(--ease);
	}

	.ext-link:hover {
		color: var(--txt-0);
	}

	.ext-arrow {
		display: inline-block;
		transition: transform 0.2s var(--ease);
	}

	.ext-link:hover .ext-arrow {
		transform: translate(2px, -2px);
	}

	@media (max-width: 700px) {
		.projects {
			padding: 2rem 1.5rem 4rem;
		}

		.project {
			padding: 1.5rem;
		}

		.project-header {
			flex-wrap: wrap;
		}

		.project-date {
			width: 100%;
		}

		.project-footer {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>

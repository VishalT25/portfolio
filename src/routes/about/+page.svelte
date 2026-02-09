<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';

	const techStack = {
		primary: ['Python', 'TypeScript', 'Java', 'JavaScript'],
		frameworks: ['React.js', 'FastAPI', 'SvelteKit'],
		tools: ['Git', 'Docker', 'AWS', 'MongoDB', 'Supabase'],
		familiar: [
			'Go', 'Rust', 'Swift', 'C', 'Jenkins', 'Selenium',
			'Kubernetes', 'Cassandra', 'Ansible', 'GraphQL', 'Spring'
		]
	};

	const businessSkills = [
		'Market Research', 'Competitive Analysis', 'Go-to-Market Support',
		'ROI & Cost Analysis', 'Contribution Margin Analysis', 'Stakeholder Communication'
	];

	const analyticsSkills = [
		'Excel Modeling (Scenario Analysis)', 'Data Interpretation', 'SQL (MySQL)'
	];
</script>

<svelte:head>
	<title>about / vishal thamaraimanalan</title>
</svelte:head>

<section class="about">
	<a href="/" class="back"><span class="back-arrow">&larr;</span> back</a>

	<ScrollReveal>
		<h1>about</h1>
	</ScrollReveal>

	<!-- Education -->
	<ScrollReveal delay={80}>
		<div class="section">
			<span class="label">education</span>
			<div class="edu">
				<img
					src="/images/westernu-logo.svg"
					alt="Western University logo"
					class="edu-logo"
					width="56"
					height="56"
				/>
				<div class="edu-main">
					<h2>Western University</h2>
					<p class="degree">B.S. Honours Computer Science</p>
					<p class="meta">London, ON</p>
				</div>
				<div class="edu-side">
					<p class="meta">Expected April 2029</p>
					<p class="gpa">3.9 GPA</p>
				</div>
			</div>
		</div>
	</ScrollReveal>

	<ScrollReveal delay={120}>
		<div class="two-col">
			<div>
				<span class="label">awards</span>
				<ul class="list">
					<li>Bennie and Shirley Bradshaw Award in Science</li>
					<li>Laurene Paterson Estate Scholarship</li>
					<li>Dean's Honours List</li>
					<li>Western Scholarship of Distinction</li>
				</ul>
			</div>
			<div>
				<span class="label">coursework</span>
				<ul class="list">
					<li>Accounting & Business Analysis</li>
					<li>Machine Learning</li>
					<li>Data Structures & Algorithms</li>
					<li>Operating Systems</li>
					<li>Software Engineering</li>
				</ul>
			</div>
		</div>
	</ScrollReveal>

	<hr />

	<!-- Technical Stack -->
	<ScrollReveal delay={100}>
		<div class="section">
			<span class="label">technical stack</span>

			<div class="stack-group">
				<h3>primary</h3>
				<div class="tags">
					{#each techStack.primary as t}
						<span class="tag primary">{t}</span>
					{/each}
				</div>
			</div>

			<div class="stack-group">
				<h3>frameworks</h3>
				<div class="tags">
					{#each techStack.frameworks as t}
						<span class="tag">{t}</span>
					{/each}
				</div>
			</div>

			<div class="stack-group">
				<h3>tools</h3>
				<div class="tags">
					{#each techStack.tools as t}
						<span class="tag">{t}</span>
					{/each}
				</div>
			</div>

			<div class="stack-group">
				<h3>familiar</h3>
				<div class="tags">
					{#each techStack.familiar as t}
						<span class="tag dim">{t}</span>
					{/each}
				</div>
			</div>
		</div>
	</ScrollReveal>

	<hr />

	<!-- Business & Analytics -->
	<ScrollReveal delay={100}>
		<div class="two-col">
			<div>
				<span class="label">business</span>
				<ul class="list">
					{#each businessSkills as s}
						<li>{s}</li>
					{/each}
				</ul>
			</div>
			<div>
				<span class="label">analytics</span>
				<ul class="list">
					{#each analyticsSkills as s}
						<li>{s}</li>
					{/each}
				</ul>
			</div>
		</div>
	</ScrollReveal>
</section>

<style>
	.about {
		max-width: 53rem;
		margin: 0 auto;
		padding: 3rem 2rem 6rem;
	}

	h1 {
		margin: 2rem 0 3rem;
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

	/* --- Sections --- */

	.section {
		margin-bottom: 2.5rem;
	}

	/* --- Education --- */

	.edu {
		display: flex;
		align-items: flex-start;
		gap: 1.25rem;
		margin-top: 1rem;
	}

	.edu-main {
		flex: 1;
	}

	.edu-logo {
		width: 56px;
		height: 56px;
		object-fit: contain;
		flex-shrink: 0;
		border-radius: 6px;
	}

	h2 {
		margin: 0;
		font-size: 1.5rem;
	}

	.degree {
		color: var(--txt);
		margin: 0.25rem 0 0;
	}

	.meta {
		font-size: 0.875rem;
		color: var(--txt-3);
		margin: 0.25rem 0 0;
	}

	.gpa {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--txt-0);
		margin-top: 0.25rem;
	}

	/* --- Two column --- */

	.two-col {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin-top: 2rem;
	}

	/* --- Lists --- */

	.list {
		margin-top: 0.75rem;
	}

	.list li {
		font-size: 0.9375rem;
		color: var(--txt-2);
		padding: 0.375rem 0;
		border-bottom: 1px solid var(--bg-3);
	}

	.list li:last-child {
		border-bottom: none;
	}

	/* --- Tech tags --- */

	.stack-group {
		margin-top: 1.5rem;
	}

	.stack-group h3 {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 400;
		color: var(--txt-3);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin: 0 0 0.75rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		color: var(--txt);
		padding: 0.375rem 0.875rem;
		border: 1px solid var(--bg-3);
		border-radius: 4px;
		transition: border-color 0.2s var(--ease), color 0.2s var(--ease);
	}

	.tag:hover {
		border-color: var(--txt-3);
		color: var(--txt-0);
	}

	.tag.primary {
		color: var(--txt-0);
		border-color: var(--bg-4);
	}

	.tag.dim {
		color: var(--txt-3);
		border-color: var(--bg-3);
	}

	.tag.dim:hover {
		color: var(--txt-2);
	}

	hr {
		margin: 2.5rem 0;
	}

	@media (max-width: 700px) {
		.about {
			padding: 2rem 1.5rem 4rem;
		}

		.edu {
			flex-wrap: wrap;
			gap: 0.75rem;
		}

		.edu-side {
			width: 100%;
		}

		.two-col {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>

<script lang="ts">
	import quirofano from '$lib/assets/images/sobre-dr-quirofano.jpg';
	import estudiantes from '$lib/assets/images/sobre-dr-estudiantes.jpg';
	import { aboutParagraphs, aboutPersonalQuote, credentialLine } from '$lib/content';
	import PendingBadge from './shared/PendingBadge.svelte';

	const [yearsPrefix, yearsSuffix] = aboutParagraphs[0].split('{{YEARS_PENDING}}');
	const restParagraphs = aboutParagraphs.slice(1);
</script>

<section id="sobre" class="about">
	<div class="section-wrap about-grid">
		<div class="about-photos">
			<div class="about-photo">
				<img src={quirofano} alt="Dr. Bacarreza en quirófano durante una cirugía artroscópica" />
			</div>
			<div class="about-photo">
				<img src={estudiantes} alt="Dr. Bacarreza con estudiantes de medicina" />
			</div>
		</div>

		<div class="about-content">
			<p class="kicker">Sobre el Dr. Bacarreza</p>
			<h2 class="h2">Trayectoria clínica y compromiso académico</h2>

			<p class="about-paragraph">
				{yearsPrefix}<PendingBadge /> [X años]{yearsSuffix}
			</p>
			{#each restParagraphs as paragraph, i (i)}
				<p class="about-paragraph">{@html paragraph}</p>
			{/each}

			<div class="about-quote">
				<PendingBadge />
				<p class="about-quote-text">{aboutPersonalQuote.note}</p>
			</div>

			<p class="about-credential">{credentialLine}</p>
		</div>
	</div>
</section>

<style>
	.about {
		border-top: 2px solid var(--color-divider);
	}

	.about-grid {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		gap: 64px;
		align-items: stretch;
	}

	.about-photos {
		display: flex;
		flex-direction: column;
		gap: 16px;
		width: 100%;
		height: 100%;
		position: sticky;
		top: 96px;
		align-self: start;
	}

	.about-photo {
		flex: 1;
		overflow: hidden;
		border: 2px solid var(--color-divider);
	}

	.about-photo img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.about-paragraph {
		font-size: 16px;
		line-height: 1.75;
		color: var(--color-neutral-700);
		margin: 0 0 20px;
	}

	.about-paragraph :global(strong) {
		color: var(--color-text);
	}

	.about-quote {
		border: 2px dashed var(--color-neutral-300);
		padding: 24px;
		margin: 0 0 28px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
	}

	.about-quote-text {
		font-size: 15px;
		line-height: 1.6;
		color: var(--color-neutral-700);
		font-style: italic;
		margin: 0;
	}

	.about-credential {
		font-size: 14px;
		color: var(--color-neutral-700);
		font-weight: 600;
		margin: 0;
	}

	@media (max-width: 768px) {
		.about-grid {
			grid-template-columns: 1fr;
		}

		.about-photos {
			position: static;
			height: auto;
			flex-direction: row;
		}

		.about-photo {
			aspect-ratio: 1 / 1;
		}
	}
</style>

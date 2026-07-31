<script lang="ts">
	import heroImage from '$lib/assets/images/hero-ilustracion-anatomica.png';
	import { siteName, heroKicker, heroTagline, heroSupportText, heroBadges } from '$lib/content';
	import WhatsAppButton from './shared/WhatsAppButton.svelte';
</script>

<section id="inicio" class="hero">
	<div class="hero-text">
		<p class="kicker">{heroKicker}</p>
		<h1 class="hero-h1">{siteName}</h1>
		<p class="hero-tagline">{heroTagline}</p>
		<p class="hero-support">{heroSupportText}</p>
		<div class="hero-tags">
			{#each heroBadges as badge (badge)}
				<span class="tag-outline">{badge}</span>
			{/each}
		</div>
		<div class="hero-ctas">
			<WhatsAppButton label="Agendar consulta por WhatsApp" />
			<a class="btn btn-secondary" href="#sobre">Conocer al Dr. Bacarreza</a>
		</div>
	</div>
	<div class="hero-image">
		<img
			src={heroImage}
			alt="Ilustración anatómica de las articulaciones de hombro, cadera, rodilla y tobillo"
		/>
	</div>
</section>

<style>
	.hero {
		max-width: var(--section-max-width);
		margin: 0 auto;
		padding: 80px 32px 96px;
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 64px;
		align-items: center;
	}

	.hero-h1 {
		font-size: 56px;
		line-height: 1.05;
		margin: 0 0 20px;
	}

	.hero-tagline {
		font-family: var(--font-heading);
		font-size: 22px;
		font-weight: 700;
		color: var(--color-accent-700);
		margin: 0 0 20px;
	}

	.hero-support {
		font-size: 17px;
		line-height: 1.65;
		color: var(--color-neutral-700);
		max-width: 520px;
		margin: 0 0 32px;
	}

	.hero-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-bottom: 36px;
	}

	.hero-ctas {
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
	}

	.hero-image {
		aspect-ratio: 4 / 5;
		width: 100%;
		border: 2px solid var(--color-divider);
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 768px) {
		.hero {
			grid-template-columns: 1fr;
			padding: 56px 20px;
		}

		.hero-h1 {
			font-size: 36px;
		}
	}
</style>

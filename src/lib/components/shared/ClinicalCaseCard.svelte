<script lang="ts">
	import type { ClinicalCase } from '$lib/types';
	import PendingBadge from './PendingBadge.svelte';

	let { caseItem }: { caseItem: ClinicalCase } = $props();
</script>

<article class="case-card">
	<h3>{caseItem.title}</h3>

	{#if caseItem.images.length > 0 || caseItem.videoEmbedUrl}
		<div class="case-media">
			{#each caseItem.images as image, i (image)}
				<div class="case-image">
					<img src={image} alt="Radiografía — {caseItem.title} ({i + 1})" loading="lazy" />
				</div>
			{/each}
			{#if caseItem.videoEmbedUrl}
				<div class="case-video">
					<iframe
						src={caseItem.videoEmbedUrl}
						title={caseItem.videoTitle ?? `Video — ${caseItem.title}`}
						loading="lazy"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</div>
			{/if}
		</div>
	{:else}
		<p class="case-media-note">Imágenes pendientes de subir.</p>
	{/if}

	<blockquote class="case-quote">
		<p class="case-quote-text">"{caseItem.quote}"</p>
		<p class="case-quote-attribution">— {caseItem.quoteAttribution}</p>
	</blockquote>

	<p class="case-context">{caseItem.context}</p>

	{#if caseItem.pending}
		<div class="case-pending">
			<PendingBadge />
			{#if caseItem.pendingNote}
				<span class="case-pending-note">{caseItem.pendingNote}</span>
			{/if}
		</div>
	{/if}
</article>

<style>
	.case-card {
		background: var(--color-surface);
		border: 2px solid var(--color-divider);
		padding: 32px;
	}

	.case-card h3 {
		font-size: 19px;
		margin: 0 0 20px;
	}

	.case-media {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		margin-bottom: 24px;
	}

	.case-image {
		flex: 1 1 220px;
		height: 220px;
		background: var(--color-bg);
		border: 2px solid var(--color-divider);
		overflow: hidden;
	}

	.case-image img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.case-video {
		flex: 0 0 220px;
		aspect-ratio: 9 / 16;
		border: 2px solid var(--color-divider);
		overflow: hidden;
	}

	.case-video iframe {
		width: 100%;
		height: 100%;
		border: 0;
		display: block;
	}

	.case-media-note {
		font-size: 13px;
		font-style: italic;
		color: var(--color-neutral-700);
		margin: 0 0 24px;
	}

	.case-quote {
		margin: 0 0 16px;
		border-left: 4px solid var(--color-accent);
		padding: 4px 0 4px 24px;
	}

	.case-quote-text {
		font-family: var(--font-heading);
		font-size: 18px;
		font-weight: 600;
		line-height: 1.5;
		color: var(--color-text);
		margin: 0 0 10px;
		font-style: italic;
	}

	.case-quote-attribution {
		font-size: 14px;
		font-weight: 700;
		color: var(--color-neutral-700);
		margin: 0;
	}

	.case-context {
		font-size: 15px;
		line-height: 1.65;
		color: var(--color-neutral-700);
		margin: 0;
	}

	.case-pending {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 20px;
	}

	.case-pending-note {
		font-size: 13px;
		color: var(--color-neutral-700);
	}

	@media (max-width: 768px) {
		.case-media {
			flex-direction: column;
		}

		.case-image {
			flex-basis: auto;
			width: 100%;
		}

		.case-video {
			flex-basis: auto;
			width: 100%;
			max-width: 320px;
			margin: 0 auto;
		}
	}
</style>

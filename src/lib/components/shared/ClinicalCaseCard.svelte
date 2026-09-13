<script lang="ts">
	import Images from '@lucide/svelte/icons/images';
	import Play from '@lucide/svelte/icons/play';
	import type { CaseMediaItem, ClinicalCase } from '$lib/types';
	import PendingBadge from './PendingBadge.svelte';
	import Lightbox from './Lightbox.svelte';

	let { caseItem }: { caseItem: ClinicalCase } = $props();

	// Un único listado de medios por caso — respalda tanto la portada como la navegación del
	// lightbox, así "todas las fotos y videos de ese caso específico" siempre coinciden.
	const mediaItems: CaseMediaItem[] = $derived([
		...caseItem.images.map((src, i) => ({
			type: 'image' as const,
			src,
			alt: `Radiografía — ${caseItem.title} (${i + 1})`
		})),
		...(caseItem.videoEmbedUrl
			? [
					{
						type: 'embed' as const,
						src: caseItem.videoEmbedUrl,
						alt: caseItem.videoTitle ?? `Video — ${caseItem.title}`
					}
				]
			: []),
		...(caseItem.videos ?? []).map((src, i) => ({
			type: 'video' as const,
			src,
			alt: `${caseItem.videoTitle ?? caseItem.title} — video ${i + 1}`
		}))
	]);

	let lightboxOpen = $state(false);
	let lightboxIndex = $state(0);

	function openLightbox(index: number) {
		lightboxIndex = index;
		lightboxOpen = true;
	}
</script>

<article class="case-card">
	<h3>{caseItem.title}</h3>

	{#if mediaItems.length > 0}
		<button
			class="case-cover"
			onclick={() => openLightbox(0)}
			aria-label={`Ver galería completa de ${caseItem.title} (${mediaItems.length})`}
		>
			{#if mediaItems[0].type === 'image'}
				<img src={mediaItems[0].src} alt={mediaItems[0].alt} loading="lazy" />
			{:else if mediaItems[0].type === 'video'}
				<video
					class="case-cover-video"
					src={mediaItems[0].src}
					preload="metadata"
					muted
					playsinline
					tabindex="-1"
					aria-hidden="true"
				></video>
				<span class="case-cover-play" aria-hidden="true"><Play size={22} fill="currentColor" /></span>
			{:else}
				<span class="case-cover-fallback" aria-hidden="true"><Play size={28} fill="currentColor" /></span>
			{/if}

			{#if mediaItems.length > 1}
				<span class="case-cover-badge">
					<Images size={14} />
					Ver galería completa ({mediaItems.length})
				</span>
			{/if}
		</button>
	{:else}
		<p class="case-media-note">Imágenes pendientes de subir.</p>
	{/if}

	{#if caseItem.quote}
		<blockquote class="case-quote">
			<p class="case-quote-text">"{caseItem.quote}"</p>
			{#if caseItem.quoteAttribution}
				<p class="case-quote-attribution">— {caseItem.quoteAttribution}</p>
			{/if}
		</blockquote>
	{/if}

	{#if caseItem.context}
		<p class="case-context">{caseItem.context}</p>
	{/if}

	{#if caseItem.pending}
		<div class="case-pending">
			<PendingBadge />
			{#if caseItem.pendingNote}
				<span class="case-pending-note">{caseItem.pendingNote}</span>
			{/if}
		</div>
	{/if}
</article>

{#if lightboxOpen}
	<Lightbox
		items={mediaItems}
		bind:index={lightboxIndex}
		title={caseItem.title}
		onclose={() => (lightboxOpen = false)}
	/>
{/if}

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

	.case-cover {
		position: relative;
		display: block;
		width: 100%;
		max-width: 320px;
		height: 220px;
		margin: 0 0 24px;
		padding: 0;
		background: var(--color-bg);
		border: 2px solid var(--color-divider);
		overflow: hidden;
		cursor: pointer;
		font-family: inherit;
	}

	.case-cover img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.case-cover-video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.case-cover-play {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background: rgba(28, 58, 82, 0.7);
		color: var(--color-bg);
	}

	.case-cover-fallback {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-text-secondary);
	}

	.case-cover-badge {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
		padding: 8px 10px;
		font-size: 12px;
		font-weight: 700;
		color: var(--color-on-accent);
		background: rgba(28, 58, 82, 0.82);
	}

	.case-media-note {
		font-size: 13px;
		font-style: italic;
		color: var(--color-text-secondary);
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
		color: var(--color-text-secondary);
		margin: 0;
	}

	.case-context {
		font-size: 15px;
		line-height: 1.65;
		color: var(--color-text-secondary);
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
		color: var(--color-text-secondary);
	}

	@media (max-width: 768px) {
		.case-cover {
			max-width: 100%;
		}
	}
</style>

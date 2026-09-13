<script lang="ts">
	import X from '@lucide/svelte/icons/x';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import VideoPlayer from './VideoPlayer.svelte';
	import type { CaseMediaItem } from '$lib/types';

	let {
		items,
		index = $bindable(0),
		title,
		onclose
	}: {
		items: CaseMediaItem[];
		index?: number;
		title: string;
		onclose: () => void;
	} = $props();

	function prev() {
		index = (index - 1 + items.length) % items.length;
	}

	function next() {
		index = (index + 1) % items.length;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') onclose();
		else if (items.length > 1 && event.key === 'ArrowLeft') prev();
		else if (items.length > 1 && event.key === 'ArrowRight') next();
	}

	let dialogEl: HTMLDivElement | undefined = $state();

	$effect(() => {
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		dialogEl?.focus();
		return () => {
			document.body.style.overflow = previousOverflow;
		};
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- El cierre por teclado (Escape) ya está cubierto por el listener global en <svelte:window> de
	 arriba; el onclick de este fondo es sólo para cerrar al hacer clic afuera del contenido. -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="lightbox-backdrop" onclick={onclose} role="presentation">
	<div
		bind:this={dialogEl}
		class="lightbox-content"
		onclick={(event) => event.stopPropagation()}
		role="dialog"
		aria-modal="true"
		aria-label={`Galería — ${title}`}
		tabindex="-1"
	>
		<button class="lightbox-close" onclick={onclose} aria-label="Cerrar galería">
			<X size={22} />
		</button>

		<div class="lightbox-media">
			{#if items.length > 1}
				<button
					class="lightbox-nav lightbox-prev"
					onclick={prev}
					aria-label="Foto o video anterior"
				>
					<ChevronLeft size={28} />
				</button>
				<button class="lightbox-nav lightbox-next" onclick={next} aria-label="Siguiente foto o video">
					<ChevronRight size={28} />
				</button>
			{/if}

			{#key index}
				{#if items[index].type === 'image'}
					<img src={items[index].src} alt={items[index].alt} />
				{:else if items[index].type === 'video'}
					<VideoPlayer src={items[index].src} title={items[index].alt} />
				{:else if items[index].type === 'embed'}
					<iframe
						src={items[index].src}
						title={items[index].alt}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				{/if}
			{/key}
		</div>

		{#if items.length > 1}
			<p class="lightbox-counter">{index + 1} / {items.length}</p>
		{/if}
	</div>
</div>

<style>
	.lightbox-backdrop {
		position: fixed;
		inset: 0;
		background: rgba(28, 58, 82, 0.92);
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24px;
	}

	.lightbox-content {
		position: relative;
		width: 100%;
		max-width: 960px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
	}

	.lightbox-media {
		position: relative;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.lightbox-media img {
		max-width: 100%;
		max-height: 76vh;
		width: auto;
		height: auto;
		display: block;
		background: #000;
	}

	/* VideoPlayer owns width/height on its own <video>; only cap the height here so the two
	   style sources never fight over the same property. */
	.lightbox-media :global(video) {
		max-height: 76vh;
	}

	.lightbox-media iframe {
		width: 100%;
		aspect-ratio: 9 / 16;
		max-height: 76vh;
		border: 0;
		background: #000;
	}

	.lightbox-close {
		position: absolute;
		top: -48px;
		right: 0;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: transparent;
		border: 1.5px solid var(--color-bg);
		color: var(--color-bg);
		cursor: pointer;
	}

	/* Centrados en .lightbox-media (no en .lightbox-content, que también incluye el contador de
	   abajo) y con "bottom" reservado en vez de top:50%, para que nunca invadan la franja donde
	   viven los controles nativos del <video> (play/pausa, volumen, pantalla completa) —
	   independientemente de qué tan alto o bajo resulte el video según su aspect ratio. */
	.lightbox-nav {
		position: absolute;
		top: 0;
		bottom: 56px;
		margin: auto 0;
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.12);
		border: 1.5px solid var(--color-bg);
		color: var(--color-bg);
		cursor: pointer;
		z-index: 1;
	}

	.lightbox-prev {
		left: -8px;
	}

	.lightbox-next {
		right: -8px;
	}

	.lightbox-counter {
		font-size: 13px;
		font-weight: 600;
		color: var(--color-bg);
		margin: 0;
	}

	@media (max-width: 768px) {
		.lightbox-backdrop {
			padding: 16px;
		}

		.lightbox-close {
			top: -44px;
			right: -8px;
		}

		.lightbox-nav {
			width: 44px;
			height: 44px;
		}

		.lightbox-prev {
			left: -4px;
		}

		.lightbox-next {
			right: -4px;
		}
	}
</style>

<script lang="ts">
	import { testimonials } from '$lib/content';
	import PendingBadge from './shared/PendingBadge.svelte';
</script>

<section id="testimonios" class="testimonials">
	<div class="section-wrap testimonials-wrap">
		<p class="kicker">Testimonios</p>
		<h2 class="h2">Pacientes que confiaron en su cuidado</h2>

		{#each testimonials as testimonial, i (i)}
			<blockquote class="testimonial">
				<p class="testimonial-quote">"{testimonial.quote}"</p>
				<p class="testimonial-attribution">— {testimonial.attribution}</p>
				{#if testimonial.pending}
					<div class="testimonial-pending">
						<PendingBadge />
						{#if testimonial.pendingNote}
							<span class="testimonial-pending-note">{testimonial.pendingNote}</span>
						{/if}
					</div>
				{/if}
			</blockquote>
		{/each}
	</div>
</section>

<style>
	.testimonials {
		border-top: 2px solid var(--color-divider);
	}

	.testimonials-wrap {
		max-width: 840px;
	}

	.testimonial {
		margin: 0;
		border-left: 4px solid var(--color-accent);
		padding: 8px 0 8px 32px;
	}

	.testimonial-quote {
		font-family: var(--font-heading);
		font-size: 20px;
		font-weight: 600;
		line-height: 1.5;
		color: var(--color-text);
		margin: 0 0 16px;
		font-style: italic;
	}

	.testimonial-attribution {
		font-size: 14px;
		font-weight: 700;
		color: var(--color-neutral-700);
		margin: 0 0 12px;
	}

	.testimonial-pending {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 8px;
	}

	.testimonial-pending-note {
		font-size: 13px;
		color: var(--color-neutral-700);
	}
</style>

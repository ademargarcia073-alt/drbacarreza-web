<script lang="ts">
	import { timeline, timelineNote } from '$lib/content';
</script>

<section id="trayectoria" class="timeline-section">
	<div class="section-wrap">
		<p class="kicker">Trayectoria académica y gremial</p>
		<h2 class="h2">Actividad reciente</h2>

		<div class="timeline-list">
			{#each timeline as item, i (i)}
				<div class="timeline-row">
					<div class="timeline-year">{item.year}</div>
					<div class="timeline-text">{item.text}</div>
				</div>
			{/each}
		</div>

		<p class="timeline-note">{timelineNote}</p>
	</div>
</section>

<style>
	.timeline-section {
		border-top: 2px solid var(--color-divider);
	}

	.timeline-list {
		margin-top: 16px;
	}

	.timeline-row {
		display: grid;
		grid-template-columns: 100px 1fr;
		gap: 24px;
		padding: 24px 0;
		border-bottom: 2px solid var(--color-divider);
	}

	.timeline-year {
		font-family: var(--font-heading);
		font-weight: 800;
		font-size: 22px;
		color: var(--color-accent-700);
	}

	.timeline-text {
		font-size: 15px;
		line-height: 1.6;
		color: var(--color-text);
	}

	.timeline-note {
		font-size: 13px;
		color: var(--color-neutral-700);
		margin-top: 20px;
	}

	@media (max-width: 768px) {
		.timeline-row {
			grid-template-columns: 72px 1fr;
			gap: 16px;
		}
	}
</style>

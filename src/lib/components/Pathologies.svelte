<script lang="ts">
	import CircleCheckBig from '@lucide/svelte/icons/circle-check-big';
	import { pathologies } from '$lib/content';
</script>

<section id="patologias" class="pathologies">
	<div class="section-wrap">
		<p class="kicker">¿Cuándo consultar?</p>
		<h2 class="h2">Consulta si tienes</h2>

		<div class="pathologies-grid">
			{#each pathologies as pathology (pathology)}
				<div class="pathology-item">
					<CircleCheckBig size={20} color="var(--color-accent-700)" strokeWidth={2} />
					<p>{pathology}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.pathologies {
		border-top: 2px solid var(--color-divider);
		background: var(--color-neutral-100);
	}

	.pathologies-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px 48px;
		margin-top: 8px;
	}

	.pathology-item {
		display: flex;
		gap: 14px;
		align-items: flex-start;
		padding: 16px 0;
		border-bottom: 2px solid var(--color-divider);
	}

	.pathology-item :global(svg) {
		flex-shrink: 0;
		margin-top: 2px;
	}

	.pathology-item p {
		margin: 0;
		font-size: 15px;
		line-height: 1.5;
		color: var(--color-text);
	}

	@media (max-width: 768px) {
		.pathologies-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

<script lang="ts">
	import { firstVisitText, whatToBring, consultationPendingNote } from '$lib/content';
	import PendingBadge from './shared/PendingBadge.svelte';
</script>

<section id="consulta" class="consultation">
	<div class="section-wrap">
		<p class="kicker">Qué esperar</p>
		<h2 class="h2">En tu primera consulta</h2>

		<div class="consulta-grid">
			<div class="consulta-card">
				<h3>Primera visita</h3>
				<p>{firstVisitText}</p>
			</div>
			<div class="consulta-card">
				<h3>Qué traer</h3>
				<ul>
					{#each whatToBring as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		</div>

		<p class="consulta-note">
			<PendingBadge />
			<span>{consultationPendingNote}</span>
		</p>
	</div>
</section>

<style>
	.consultation {
		border-top: 2px solid var(--color-divider);
	}

	.consulta-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2px;
		background: var(--color-divider);
		border: 2px solid var(--color-divider);
		margin-top: 24px;
	}

	.consulta-card {
		background: var(--color-surface);
		padding: 32px;
	}

	.consulta-card h3 {
		font-size: 19px;
		margin: 0 0 12px;
	}

	.consulta-card p {
		font-size: 15px;
		line-height: 1.65;
		color: var(--color-neutral-700);
		margin: 0;
	}

	.consulta-card ul {
		margin: 0;
		padding-left: 20px;
		font-size: 15px;
		line-height: 1.8;
		color: var(--color-neutral-700);
	}

	.consulta-note {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 13px;
		color: var(--color-neutral-700);
		margin-top: 16px;
	}

	@media (max-width: 768px) {
		.consulta-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

<script lang="ts">
	import Activity from '@lucide/svelte/icons/activity';
	import Target from '@lucide/svelte/icons/target';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import Zap from '@lucide/svelte/icons/zap';
	import User from '@lucide/svelte/icons/user';
	import { specialties, specialtiesPendingNote } from '$lib/content';
	import PendingBadge from './shared/PendingBadge.svelte';

	const icons: Record<string, typeof Activity> = { Activity, Target, ShieldCheck, Zap, User };
</script>

<section id="especialidades" class="specialties">
	<div class="section-wrap">
		<p class="kicker">Especialidades</p>
		<h2 class="h2">Áreas de atención</h2>

		<div class="specialties-grid">
			{#each specialties as specialty (specialty.title)}
				{@const Icon = icons[specialty.icon]}
				<div class="specialty-card">
					<Icon size={28} color="var(--color-accent-700)" strokeWidth={2} />
					<h3>{specialty.title}</h3>
					<p>{specialty.description}</p>
				</div>
			{/each}
			<div class="specialty-card specialty-pending">
				<PendingBadge />
				<p>{specialtiesPendingNote}</p>
			</div>
		</div>
	</div>
</section>

<style>
	.specialties {
		border-top: 2px solid var(--color-divider);
		background: var(--color-neutral-100);
	}

	.specialties-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2px;
		background: var(--color-divider);
		border: 2px solid var(--color-divider);
		margin-top: 32px;
	}

	.specialty-card {
		background: var(--color-surface);
		padding: 32px;
	}

	.specialty-card h3 {
		font-size: 19px;
		margin: 16px 0 10px;
	}

	.specialty-card p {
		font-size: 14px;
		line-height: 1.6;
		color: var(--color-neutral-700);
		margin: 0;
	}

	.specialty-pending {
		display: flex;
		flex-direction: column;
		gap: 10px;
		justify-content: center;
	}

	.specialty-pending p {
		font-size: 13px;
	}

	@media (max-width: 768px) {
		.specialties-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

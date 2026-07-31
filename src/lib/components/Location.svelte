<script lang="ts">
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Phone from '@lucide/svelte/icons/phone';
	import Clock from '@lucide/svelte/icons/clock';
	import { contactInfo, mapPlaceholderText } from '$lib/content';
	import PendingBadge from './shared/PendingBadge.svelte';
</script>

<section id="ubicacion" class="location">
	<div class="section-wrap location-grid">
		<div>
			<p class="kicker">Ubicación y horarios</p>
			<h2 class="h2">Consultorio</h2>

			<div class="location-row">
				<MapPin size={20} color="var(--color-accent-700)" strokeWidth={2} />
				<p>{contactInfo.address}</p>
			</div>

			<div class="location-row">
				<Phone size={20} color="var(--color-accent-700)" strokeWidth={2} />
				<p>
					Teléfono: {contactInfo.landline}<br />
					Celular / WhatsApp: {contactInfo.whatsappDisplay}
					{#if contactInfo.whatsappPending}
						<PendingBadge />
					{/if}
				</p>
			</div>

			<div class="location-row">
				<Clock size={20} color="var(--color-accent-700)" strokeWidth={2} />
				<p>
					{contactInfo.hours}
					{#if contactInfo.hoursPending}
						<PendingBadge />
					{/if}
				</p>
			</div>
		</div>

		<div class="map-placeholder">
			<p>{mapPlaceholderText}</p>
		</div>
	</div>
</section>

<style>
	.location {
		border-top: 2px solid var(--color-divider);
		background: var(--color-neutral-100);
	}

	.location-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 48px;
	}

	.location-row {
		display: flex;
		gap: 12px;
		margin-bottom: 20px;
	}

	.location-row :global(svg) {
		flex-shrink: 0;
		margin-top: 2px;
	}

	.location-row p {
		margin: 0;
		font-size: 15px;
		line-height: 1.6;
		color: var(--color-text);
	}

	.location-row :global(.pending-badge) {
		margin-left: 6px;
		vertical-align: middle;
	}

	.map-placeholder {
		background: var(--color-surface);
		border: 2px solid var(--color-neutral-300);
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 280px;
	}

	.map-placeholder p {
		font-size: 14px;
		color: var(--color-neutral-700);
		text-align: center;
		padding: 24px;
		margin: 0;
	}

	@media (max-width: 768px) {
		.location-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

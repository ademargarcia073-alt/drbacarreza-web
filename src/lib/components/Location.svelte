<script lang="ts">
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Phone from '@lucide/svelte/icons/phone';
	import Clock from '@lucide/svelte/icons/clock';
	import { contactInfo, googleMapsEmbedSrc } from '$lib/content';
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

		<div class="map-embed-wrap">
			<iframe
				class="map-embed"
				src={googleMapsEmbedSrc()}
				title="Ubicación del consultorio del Dr. Bacarreza en Google Maps"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				allowfullscreen
			></iframe>
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

	.map-embed-wrap {
		background: var(--color-surface);
		border: 2px solid var(--color-neutral-300);
		min-height: 280px;
	}

	.map-embed {
		width: 100%;
		height: 100%;
		min-height: 280px;
		border: 0;
		display: block;
	}

	@media (max-width: 768px) {
		.location-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

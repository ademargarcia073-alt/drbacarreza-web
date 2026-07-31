<script lang="ts">
	import logoDark from '$lib/assets/logo/logo-v3-simple-dark.svg';
	import { contactInfo, credentialLine, footerSocials, siteName } from '$lib/content';
	import PendingBadge from './shared/PendingBadge.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="section-wrap footer-grid">
		<div>
			<div class="footer-brand">
				<img src={logoDark} alt="" width="36" height="36" />
				<span class="footer-brand-name">{siteName}</span>
			</div>
			<p class="footer-text">Cirugía Articular</p>
			<p class="footer-text">{credentialLine}</p>
		</div>

		<div>
			<p class="footer-heading">Contacto</p>
			<p class="footer-text">
				Calle 6, Obrajes, Edificio CES, Piso 4, Consultorio 407<br />
				La Paz, Bolivia<br />
				{contactInfo.landline} · {contactInfo.whatsappDisplay}
			</p>
		</div>

		<div>
			<p class="footer-heading">Redes sociales</p>
			{#each footerSocials as social (social.label)}
				<p class="footer-text footer-social">
					{social.label}
					{#if social.pending}
						<PendingBadge />
					{/if}
				</p>
			{/each}
		</div>
	</div>

	<div class="footer-legal-bar">
		<div class="section-wrap footer-legal">
			<p class="footer-text">© {year} {siteName}. Todos los derechos reservados.</p>
			<p class="footer-text">Aviso legal · Política de privacidad</p>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		border-top: 2px solid var(--color-divider);
		background: var(--color-neutral-100);
	}

	.footer-grid {
		padding-block: 56px;
		display: grid;
		grid-template-columns: 1.2fr 1fr 1fr;
		gap: 40px;
	}

	.footer-brand {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 16px;
	}

	.footer-brand-name {
		font-family: var(--font-heading);
		font-weight: 800;
		font-size: 15px;
	}

	.footer-heading {
		font-family: var(--font-heading);
		font-weight: 700;
		font-size: 13px;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin: 0 0 14px;
	}

	.footer-text {
		font-size: 13px;
		color: var(--color-neutral-700);
		line-height: 1.7;
		margin: 0 0 6px;
	}

	.footer-social {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.footer-legal-bar {
		border-top: 2px solid var(--color-divider);
	}

	.footer-legal {
		padding-block: 20px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 8px;
	}

	.footer-legal .footer-text {
		margin: 0;
	}

	@media (max-width: 768px) {
		.footer-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

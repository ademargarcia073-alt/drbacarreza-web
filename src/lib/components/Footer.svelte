<script lang="ts">
	import logoLight from '$lib/assets/logo/logo-v3-simplificado-fondo-claro-transparente.png';
	import { contactInfo, credentialLine, footerSocials, siteName } from '$lib/content';

	const year = new Date().getFullYear();

	// @lucide/svelte no incluye íconos de marcas (Facebook/Instagram/LinkedIn) — los quitaron
	// hace tiempo por temas de trademark. Estos SVG son los íconos clásicos de Feather (MIT,
	// lucide es un fork de feather), así que mantienen el mismo estilo trazo/grosor que el resto
	// de los íconos del sitio.
</script>

<footer class="site-footer">
	<div class="section-wrap footer-grid">
		<div>
			<div class="footer-brand">
				<img src={logoLight} alt="" width="36" height="36" />
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
			<div class="footer-social-list">
				{#each footerSocials as social (social.label)}
					<a class="footer-social-link" href={social.href} target="_blank" rel="noopener">
						{#if social.icon === 'facebook'}
							<svg
								viewBox="0 0 24 24"
								width="18"
								height="18"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<path
									d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
								/>
							</svg>
						{:else if social.icon === 'instagram'}
							<svg
								viewBox="0 0 24 24"
								width="18"
								height="18"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
								<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
							</svg>
						{:else if social.icon === 'linkedin'}
							<svg
								viewBox="0 0 24 24"
								width="18"
								height="18"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<path
									d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
								/>
								<rect x="2" y="9" width="4" height="12" />
								<circle cx="4" cy="4" r="2" />
							</svg>
						{/if}
						<span>{social.label}</span>
					</a>
				{/each}
			</div>
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
		color: var(--color-text-secondary);
		line-height: 1.7;
		margin: 0 0 6px;
	}

	.footer-social-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.footer-social-link {
		display: flex;
		align-items: center;
		gap: 8px;
		color: var(--color-text-secondary);
		text-decoration: none;
		font-size: 13px;
	}

	.footer-social-link:hover {
		color: var(--color-accent-700);
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

<script lang="ts">
	import Phone from '@lucide/svelte/icons/phone';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import logoDark from '$lib/assets/logo/logo-v3-simplificado-fondo-oscuro-transparente.png';
	import { navLinks, contactInfo } from '$lib/content';
	import WhatsAppButton from './shared/WhatsAppButton.svelte';

	let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<header class="site-header">
	<div class="header-bar">
		<a href="#inicio" class="brand" onclick={closeMenu}>
			<img src={logoDark} alt="" width="44" height="44" class="brand-logo" />
			<span class="brand-text">
				<span class="brand-name">Dr. Fernando Bacarreza</span>
				<span class="brand-role">Cirugía Articular</span>
			</span>
		</a>

		<nav class="nav-desktop" aria-label="Navegación principal">
			{#each navLinks as link (link.href)}
				<a href={link.href}>{link.label}</a>
			{/each}
		</nav>

		<div class="header-actions">
			<a class="header-phone-link" href="tel:+591{contactInfo.landline}">
				<Phone size={16} />
				{contactInfo.landline}
			</a>
			<div class="header-cta">
				<WhatsAppButton label="Agendar cita" />
			</div>
			<button
				class="menu-toggle"
				onclick={toggleMenu}
				aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
				aria-expanded={menuOpen}
			>
				{#if menuOpen}
					<X size={20} />
				{:else}
					<Menu size={20} />
				{/if}
			</button>
		</div>
	</div>

	{#if menuOpen}
		<nav class="nav-mobile" aria-label="Navegación mobile">
			{#each navLinks as link (link.href)}
				<a href={link.href} onclick={closeMenu}>{link.label}</a>
			{/each}
		</nav>
	{/if}
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: var(--color-bg);
		border-bottom: 2px solid var(--color-divider);
	}

	.header-bar {
		max-width: var(--section-max-width);
		margin: 0 auto;
		padding: 16px 32px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		flex-wrap: wrap;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 12px;
		text-decoration: none;
		color: var(--color-text);
	}

	.brand-logo {
		flex-shrink: 0;
	}

	.brand-text {
		display: flex;
		flex-direction: column;
		line-height: 1.15;
	}

	.brand-name {
		font-family: var(--font-heading);
		font-weight: 800;
		font-size: 16px;
		color: var(--color-text);
	}

	.brand-role {
		font-size: 12px;
		color: var(--color-neutral-700);
		font-weight: 600;
		letter-spacing: 0.02em;
	}

	.nav-desktop {
		display: flex;
		gap: 28px;
		flex-wrap: wrap;
	}

	.nav-desktop a {
		text-decoration: none;
		color: var(--color-text);
		font-weight: 600;
		font-size: 14px;
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.header-phone-link {
		display: flex;
		align-items: center;
		gap: 6px;
		text-decoration: none;
		color: var(--color-text);
		font-weight: 600;
		font-size: 14px;
	}

	.header-cta :global(.btn) {
		padding: 10px 20px;
		font-size: 14px;
	}

	.menu-toggle {
		display: none;
		align-items: center;
		justify-content: center;
		width: 38px;
		height: 38px;
		background: transparent;
		border: 1.5px solid var(--color-divider);
		color: var(--color-text);
		cursor: pointer;
	}

	.nav-mobile {
		display: flex;
		flex-direction: column;
		border-top: 2px solid var(--color-divider);
		padding: 8px 32px 16px;
	}

	.nav-mobile a {
		text-decoration: none;
		color: var(--color-text);
		font-weight: 600;
		font-size: 16px;
		padding: 12px 0;
		border-bottom: 1px solid var(--color-neutral-300);
	}

	.nav-mobile a:last-child {
		border-bottom: none;
	}

	@media (max-width: 768px) {
		.nav-desktop {
			display: none;
		}

		.header-phone-link {
			display: none;
		}

		.menu-toggle {
			display: flex;
		}
	}
</style>

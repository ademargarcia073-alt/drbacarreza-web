<script lang="ts">
	// Placeholder de la Etapa 1 (scaffold + tokens + content.ts).
	// Los componentes de sección se agregan en las etapas siguientes.
	import { siteName, navLinks, specialties, timeline, faqs } from '$lib/content';
</script>

<main class="section-wrap">
	<p class="kicker">Etapa 1 — scaffold</p>
	<h1 class="h2">{siteName}</h1>
	<p>
		Tokens, fuentes, assets y contenido cargados. {navLinks.length} links de nav,
		{specialties.length} especialidades, {timeline.length} hitos de trayectoria,
		{faqs.length} preguntas frecuentes.
	</p>
</main>

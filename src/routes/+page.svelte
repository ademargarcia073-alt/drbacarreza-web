<script lang="ts">
	// Etapa 2: shell (Header + Footer). Las secciones de contenido se agregan en las etapas siguientes.
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main>
	<section id="inicio" class="section-wrap">
		<p class="kicker">Etapa 2 — shell</p>
		<h1 class="h2">Header sticky + menú mobile + footer listos</h1>
		<p>Las secciones de contenido (hero, sobre el Dr., especialidades, etc.) se agregan en las próximas etapas.</p>
	</section>
</main>

<Footer />

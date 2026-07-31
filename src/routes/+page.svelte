<script lang="ts">
	// Etapa 3: Hero + Sobre el Dr. Las demás secciones se agregan en las próximas etapas.
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import AboutDoctor from '$lib/components/AboutDoctor.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main>
	<Hero />
	<AboutDoctor />
</main>

<Footer />

<script lang="ts">
	// Etapa 4: Especialidades + Trayectoria + Patologías. Faltan Qué esperar, FAQ, Testimonios,
	// Ubicación y Contacto.
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import AboutDoctor from '$lib/components/AboutDoctor.svelte';
	import Specialties from '$lib/components/Specialties.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Pathologies from '$lib/components/Pathologies.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main>
	<Hero />
	<AboutDoctor />
	<Specialties />
	<Timeline />
	<Pathologies />
</main>

<Footer />

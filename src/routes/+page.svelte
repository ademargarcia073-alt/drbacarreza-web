<script lang="ts">
	// Etapa 5: Qué esperar + FAQ. Faltan Testimonios, Ubicación y Contacto.
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import AboutDoctor from '$lib/components/AboutDoctor.svelte';
	import Specialties from '$lib/components/Specialties.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Pathologies from '$lib/components/Pathologies.svelte';
	import ConsultationInfo from '$lib/components/ConsultationInfo.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main>
	<Hero />
	<AboutDoctor />
	<Specialties />
	<Timeline />
	<Pathologies />
	<ConsultationInfo />
	<Faq />
</main>

<Footer />

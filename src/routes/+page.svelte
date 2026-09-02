<script lang="ts">
	// Sitio completo: 12 secciones, incluyendo "Intervenciones" (casos clínicos, sección 5.1).
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import AboutDoctor from '$lib/components/AboutDoctor.svelte';
	import Specialties from '$lib/components/Specialties.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import ClinicalCases from '$lib/components/ClinicalCases.svelte';
	import Pathologies from '$lib/components/Pathologies.svelte';
	import ConsultationInfo from '$lib/components/ConsultationInfo.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Location from '$lib/components/Location.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main>
	<Hero />
	<AboutDoctor />
	<Specialties />
	<Timeline />
	<ClinicalCases />
	<Pathologies />
	<ConsultationInfo />
	<Faq />
	<Testimonials />
	<Location />
	<Contact />
</main>

<Footer />

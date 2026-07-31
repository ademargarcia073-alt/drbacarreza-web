<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { siteName } from '$lib/content';

	let { children } = $props();
</script>

<svelte:head>
	<title>{siteName} — Traumatólogo Ortopedista en La Paz, Bolivia</title>
	<meta
		name="description"
		content="Cirugía reconstructiva y artroscópica de hombro y rodilla. Dr. Fernando Bacarreza Bruno, traumatólogo ortopedista en La Paz, Bolivia."
	/>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

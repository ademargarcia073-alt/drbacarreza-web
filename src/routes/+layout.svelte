<script lang="ts">
	import '../app.css';
	import { siteName } from '$lib/content';

	let { children } = $props();
</script>

<svelte:head>
	<title>{siteName} — Traumatólogo Ortopedista en La Paz, Bolivia</title>
	<meta
		name="description"
		content="Cirugía reconstructiva y artroscópica de hombro y rodilla. Dr. Fernando Bacarreza Bruno, traumatólogo ortopedista en La Paz, Bolivia."
	/>
	<link rel="icon" href="/favicon.ico" sizes="any" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>

{@render children()}

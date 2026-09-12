<script lang="ts">
	import '../app.css';
	import { PUBLIC_SITE_URL } from '$env/static/public';
	import { siteName } from '$lib/content';
	import heroImage from '$lib/assets/images/hero-ilustracion-anatomica.png';

	let { children } = $props();

	const pageTitle = `${siteName} — Traumatólogo Ortopedista en La Paz, Bolivia`;
	const pageDescription =
		'Cirugía reconstructiva y artroscópica de hombro y rodilla. Dr. Fernando Bacarreza Bruno, traumatólogo ortopedista en La Paz, Bolivia.';
	const canonicalUrl = new URL('/', PUBLIC_SITE_URL).href;
	const ogImageUrl = new URL(heroImage, PUBLIC_SITE_URL).href;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:image" content={ogImageUrl} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={ogImageUrl} />

	<link rel="icon" href="/favicon.ico" sizes="any" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>

{@render children()}

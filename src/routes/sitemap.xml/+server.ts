import { PUBLIC_SITE_URL } from '$env/static/public';
import type { RequestHandler } from './$types';

// Sitio de una sola página — un único <url> por ahora. El dominio viene de PUBLIC_SITE_URL
// (variable de entorno) en vez de estar hardcodeado, así el sitemap sigue siendo correcto
// si el dominio cambia sin tocar código.
export const GET: RequestHandler = () => {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${new URL('/', PUBLIC_SITE_URL).href}</loc>
	</url>
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
};

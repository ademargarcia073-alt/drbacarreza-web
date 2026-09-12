import { PUBLIC_SITE_URL } from '$env/static/public';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	const body = `User-agent: *
Disallow:

Sitemap: ${new URL('/sitemap.xml', PUBLIC_SITE_URL).href}
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain' }
	});
};

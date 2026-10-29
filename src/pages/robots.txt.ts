import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const productionSite = import.meta.env.DEV ? undefined : site;
  const body = productionSite
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', productionSite).href}\n`
    : 'User-agent: *\nDisallow: /\n';

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

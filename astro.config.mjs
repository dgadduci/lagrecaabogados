import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const siteValue = process.env.SITE_URL?.trim();
let siteUrl;

if (siteValue) {
  try {
    const candidate = new URL(siteValue);
    if (candidate.protocol === 'https:') {
      siteUrl = candidate.origin;
    } else {
      console.warn('SITE_URL debe usar HTTPS; se omitieron canonical y sitemap.');
    }
  } catch {
    console.warn('SITE_URL no es una URL válida; se omitieron canonical y sitemap.');
  }
}

export default defineConfig({
  ...(siteUrl ? { site: siteUrl, integrations: [sitemap()] } : {}),
  output: 'static',
  outDir: './dist',
  trailingSlash: 'always',
});

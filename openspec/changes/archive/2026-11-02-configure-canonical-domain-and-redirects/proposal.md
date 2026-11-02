## Why

El estudio confirmó dos dominios y necesita una dirección pública única para evitar que distintas variantes sirvan el mismo sitio. Definir `www.lagrecaabogados.com.ar` como dominio canónico alinea los metadatos SEO con Cloudflare Pages y orienta las demás variantes hacia esa dirección.

## What Changes

- Configurar `https://www.lagrecaabogados.com.ar` como origen canónico de producción para canonical, Open Graph, sitemap y `robots.txt`.
- Documentar redirecciones permanentes 301 hacia el dominio canónico para `lagrecaabogados.com.ar`, `lagrecaabogados.com` y `www.lagrecaabogados.com`, conservando rutas y parámetros de consulta.
- Documentar los pasos de DNS, Pages y Redirect Rules que requieren intervención manual en Cloudflare y en el registrador.
- Mantener los builds de vista previa sin canonical de producción cuando no tengan `SITE_URL`.

## Capabilities

### New Capabilities

- `canonical-domain-and-host-redirects`: dominio canónico de producción, metadatos asociados y redirección de los hosts alternativos.

### Modified Capabilities

Ninguna.

## Impact

- Configuración Astro de `SITE_URL` y metadatos SEO del sitio.
- `docs/deployment.md`, con el procedimiento manual para Cloudflare Pages, DNS y reglas de redirección.
- Contexto OpenSpec con los dominios confirmados.
- No agrega dependencias, SSR, Workers ni servicios pagos. La redirección por host se configura en Cloudflare, fuera del bundle estático.

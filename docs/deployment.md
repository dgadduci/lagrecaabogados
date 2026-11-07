# Despliegue en Cloudflare Pages

El sitio Astro estático ya está publicado mediante Cloudflare Pages. Los despliegues a producción requieren autorización explícita. Una actualización del código no requiere modificar zonas DNS, nameservers ni registros del correo.

## Publicar una actualización

1. Confirmar la autorización de publicación y revisar `git status` y `git diff`.
2. Usar Node.js `24.21.0` y ejecutar `npm run check`, `SITE_URL=https://www.lagrecaabogados.com.ar npm run build` y `npm run check:links`.
3. Integrar los cambios aprobados en la rama de producción conectada a Pages y enviarlos al repositorio. Cloudflare Pages compila y publica la nueva versión.
4. Verificar el estado del despliegue y comprobar el host canónico, `/contacto/`, los enlaces internos y las redirecciones.

## Dominios confirmados

- Dominio canónico: `https://www.lagrecaabogados.com.ar`.
- Hosts que deben redirigir al canónico: `lagrecaabogados.com.ar`, `lagrecaabogados.com` y `www.lagrecaabogados.com`.
- Los dominios pueden permanecer registrados en DonWeb. Para usar Redirect Rules en Cloudflare Free, las zonas DNS deben estar delegadas a Cloudflare y los hosts que redirigen deben usar registros proxied.
- `www` es un hostname dentro de cada dominio; confirmar en el panel del registrador que los dominios base son `lagrecaabogados.com.ar` y `lagrecaabogados.com`.

## DNS y dominios

Las zonas `lagrecaabogados.com.ar` y `lagrecaabogados.com` están configuradas en Cloudflare; los dominios siguen registrados en DonWeb. `www.lagrecaabogados.com.ar` es el único host canónico. El `.com.ar` raíz, el `.com` raíz y `www.lagrecaabogados.com` redirigen al host canónico con estado 301 y conservan ruta y query.

Los registros DNS incluyen la configuración necesaria para el correo. No volver a delegar nameservers ni modificar registros MX o TXT durante una publicación del sitio.

## Configuración de producción

- Preset: Astro.
- Comando de compilación: `npm run build`.
- Directorio de salida: `dist`.
- Tipo de salida Astro: `static`.
- No requiere adaptador Cloudflare para una salida estática.

## Configuración inicial completada

Los pasos siguientes documentan la configuración inicial de Pages, dominios y DNS; no son necesarios para publicar una actualización de código.

1. Completar las tareas y verificaciones de la propuesta OpenSpec aprobada, y confirmar que el contenido jurídico conserve `reviewStatus: approved`.
2. Crear el repositorio de GitHub solo con autorización, incluyendo el lockfile y las especificaciones OpenSpec.
3. En Cloudflare Dashboard, abrir **Workers & Pages → Create application → Pages → Import an existing Git repository** y autorizar la conexión con GitHub.
4. Elegir la rama de producción acordada (por ejemplo, `main`) y configurar `npm run build` y `dist`.
5. Usar Node.js 24.21.0, fijado en `.nvmrc`; en Pages también puede establecerse `NODE_VERSION=24.21.0` en el entorno de compilación.
6. Cuando ambos dominios estén registrados y agregados como zonas en Cloudflare, abrir en DonWeb **Mi cuenta → Mis Servicios → Dominios**, elegir **Gestionar** para cada dominio y entrar en **Nameservers y Zona DNS → Editar nameservers**. Reemplazar los NS de DonWeb por los dos nameservers que Cloudflare asigne para cada zona y guardar. El dominio seguirá registrado en DonWeb; Cloudflare pasará a administrar el DNS. Antes del cambio, copiar a Cloudflare los registros DNS que deban seguir activos, incluidos MX y TXT si se usa correo. DonWeb indica que la propagación puede tardar desde unos minutos hasta varias horas y, en algunos casos, hasta 48 horas.
7. Agregar `www.lagrecaabogados.com.ar` como único **Custom Domain** del proyecto Pages. Mantener el comando `npm run build` y el directorio `dist`.
8. Configurar `SITE_URL=https://www.lagrecaabogados.com.ar` solo para el entorno **Production**. Dejar `SITE_URL` sin configurar en **Preview** para que las vistas previas no publiquen canonical ni sitemap de producción.
9. En la zona `lagrecaabogados.com.ar`, mantener el CNAME `www` que Pages crea al validar el dominio y crear un registro A `@` con destino `192.0.2.1`, en modo **Proxied**, para recibir la redirección del dominio raíz.
10. En la zona `lagrecaabogados.com`, crear registros A para `@` y `www`, ambos con destino `192.0.2.1` y modo **Proxied**. Cloudflare usa esta dirección reservada en su guía para dominios que solo redirigen y no tienen servidor de origen.
11. Crear una regla **Single Redirect** en la zona `.com`:
    - Expresión: `(http.host eq "lagrecaabogados.com" or http.host eq "www.lagrecaabogados.com")`.
    - Tipo de destino: dinámico; expresión `concat("https://www.lagrecaabogados.com.ar", http.request.uri.path)`.
    - Código: `301`; activar **Preserve query string**.
12. Crear una regla **Single Redirect** en la zona `.com.ar`:
    - Expresión: `http.host eq "lagrecaabogados.com.ar" or (http.host eq "www.lagrecaabogados.com.ar" and http.request.scheme eq "http")`.
    - Tipo de destino: dinámico; expresión `concat("https://www.lagrecaabogados.com.ar", http.request.uri.path)`.
    - Código: `301`; activar **Preserve query string**.
13. Verificar emisión de SSL/TLS y, después de la revisión legal y autorización de publicación, comprobar canonical, sitemap, `robots.txt` y las redirecciones. Ejemplos de destinos esperados:
    - `https://lagrecaabogados.com.ar/estudio/` → `https://www.lagrecaabogados.com.ar/estudio/`.
    - `http://lagrecaabogados.com/empresas/?origen=consulta` → `https://www.lagrecaabogados.com.ar/empresas/?origen=consulta`.

Cloudflare Pages permite compilaciones automáticas por cambios enviados a GitHub y vistas previas para solicitudes de cambio. No ejecutar publicación, conexión de dominio ni activación de despliegues sin autorización.

## Referencias oficiales

- [Guía de Cloudflare Pages para Astro](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Configuración de compilación de Pages](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Dominios personalizados de Pages](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Redirect Rules de Cloudflare](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/)
- [Redirigir un dominio a otro con Cloudflare](https://developers.cloudflare.com/fundamentals/manage-domains/redirect-domain/)
- [Delegar nameservers desde Mi cuenta de DonWeb](https://soporte.donweb.com/es/articles/15901458-dominios-y-zona-dns-delegar-los-nameservers-de-un-dominio)

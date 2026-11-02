## Context

Ver `proposal.md` para la motivación y `specs/canonical-domain-and-host-redirects/spec.md` para el comportamiento requerido. Astro ya condiciona canonical, sitemap y robots a `SITE_URL`; las vistas locales sin esa variable quedan en `noindex`. El sitio compila como estático en `dist` y no tiene lógica de servidor que pueda distinguir el hostname de la solicitud.

## Goals / Non-Goals

**Goals:**
- Usar `https://www.lagrecaabogados.com.ar` en la compilación de producción.
- Redirigir los alias de ambos dominios y el host canónico en HTTP, preservando ruta y query.
- Dejar el proceso reproducible para completar manualmente con Cloudflare Free y el registrador.

**Non-Goals:**
- Cambiar titularidad o proveedor de registro de los dominios.
- Crear o desplegar proyectos en Cloudflare, cambiar DNS o publicar el sitio desde este cambio.
- Convertir Astro a SSR, agregar Workers, dependencias o servicios pagos.
- Publicar contenido jurídico pendiente de revisión profesional.

## Decisions

1. **Usar el host `www.lagrecaabogados.com.ar` como único canónico.** La marca se dirige a clientes en Argentina y el usuario eligió el `.com.ar` como principal. `SITE_URL` seguirá siendo una variable del entorno de producción para mantener las vistas previas sin canonical de producción.

2. **Usar reglas Single Redirects en Cloudflare para normalizar hosts.** El bundle estático y el archivo `_redirects` no distinguen de forma fiable el host de la solicitud. Las reglas de zona de Cloudflare permiten redirecciones permanentes dinámicas en el plan Free, requieren DNS proxied y preservan la ruta y la query. Se configura una regla en la zona `.com` para `lagrecaabogados.com` y `www.lagrecaabogados.com`, y otra en `.com.ar` para el apex `lagrecaabogados.com.ar` y HTTP en el host canónico.

3. **Mantener solo el host canónico asociado al contenido de Pages.** Se agrega `www.lagrecaabogados.com.ar` como Custom Domain del proyecto. Los demás hosts se enrutan por DNS proxied a Cloudflare y reciben una regla de redirección; no se sirven como copias del sitio.

4. **Documentar cambios manuales de DNS y dashboard, sin automatizarlos desde el repositorio.** Los dominios permanecen con su registrador actual; la zona DNS se delega a los nameservers de Cloudflare. Para hosts que solo redirigen, Cloudflare puede usar registros A proxied con `192.0.2.1`, según su guía oficial de redirección de dominios.

## Risks / Trade-offs

- [El dominio puede tener registros de correo u otros servicios] → Antes de cambiar nameservers, copiar a Cloudflare todos los registros DNS vigentes, en especial MX y TXT de correo.
- [Una regla de redirección requiere que Cloudflare reciba el tráfico] → Delegar ambas zonas a Cloudflare y dejar proxied los hosts alias.
- [Un error en el host canónico puede producir canonical o sitemap incorrectos] → Definir `SITE_URL` solo en el entorno Production y comprobar HTML, sitemap y robots después del primer despliegue.
- [Los textos jurídicos siguen pendientes de revisión] → Completar esa revisión antes de publicar, conforme a las instrucciones vigentes del proyecto.

Referencias de operación: [Cloudflare Pages Custom Domains](https://developers.cloudflare.com/pages/configuration/custom-domains/), [Redirect Rules](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/), [redirigir un dominio a otro](https://developers.cloudflare.com/fundamentals/manage-domains/redirect-domain/).

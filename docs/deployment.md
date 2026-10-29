# Despliegue en Cloudflare Pages

El sitio está previsto como sitio Astro estático. No se debe desplegar durante la etapa actual ni crear recursos Cloudflare sin autorización.

## Configuración prevista

- Preset: Astro.
- Comando de compilación: `npm run build`.
- Directorio de salida: `dist`.
- Tipo de salida Astro: `static`.
- No requiere adaptador Cloudflare para una salida estática.

## Procedimiento futuro

1. Completar las tareas y verificaciones de la propuesta OpenSpec aprobada, y revisar profesionalmente todo el contenido jurídico.
2. Crear el repositorio de GitHub solo con autorización, incluyendo el lockfile y las especificaciones OpenSpec.
3. En Cloudflare Dashboard, abrir **Workers & Pages → Create application → Pages → Import an existing Git repository** y autorizar la conexión con GitHub.
4. Elegir la rama de producción acordada (por ejemplo, `main`) y configurar `npm run build` y `dist`.
5. Usar Node.js 24.21.0, fijado en `.nvmrc`; en Pages también puede establecerse `NODE_VERSION=24.21.0` en el entorno de compilación.
6. Configurar `SITE_URL` solo en el entorno de producción y cuando el dominio definitivo esté confirmado. Mantenerla sin configurar en vistas previas para evitar canonical y metadatos de producción.
7. Agregar un dominio personalizado desde la configuración del proyecto Pages y completar las indicaciones de DNS de Cloudflare.
8. Verificar la emisión y el estado de SSL/TLS en Cloudflare antes de comunicar el sitio.
9. Revisar despliegues de vista previa y producción, rutas, canonical, sitemap, robots, metadatos sociales y enlaces de contacto.

Cloudflare Pages permite compilaciones automáticas por cambios enviados a GitHub y vistas previas para solicitudes de cambio. No ejecutar publicación, conexión de dominio ni activación de despliegues sin autorización.

## Referencias oficiales

- [Guía de Cloudflare Pages para Astro](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Configuración de compilación de Pages](https://developers.cloudflare.com/pages/configuration/build-configuration/)

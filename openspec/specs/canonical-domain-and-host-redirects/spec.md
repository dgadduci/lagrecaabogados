# Canonical Domain and Host Redirects Specification

## Purpose

Establece una única dirección pública para el sitio de La Greca & Asoc. y conduce las variantes de dominio a esa dirección para evitar versiones duplicadas y mantener coherentes los metadatos de producción.

## Requirements

### Requirement: Las señales SEO de producción usan el dominio canónico confirmado

La compilación de producción MUST usar `https://www.lagrecaabogados.com.ar` como dominio canónico cuando `SITE_URL` esté configurada con ese valor. Las páginas publicadas MUST usar ese host en sus URLs canonical y Open Graph; el sitemap MUST enumerar URLs de ese host; `robots.txt` MUST permitir el rastreo y anunciar el sitemap correspondiente.

#### Scenario: Compilación de producción configurada
- **WHEN** se compila el sitio con `SITE_URL=https://www.lagrecaabogados.com.ar`
- **THEN** las URLs canonical, `og:url`, el sitemap y la referencia del sitemap en `robots.txt` usan `www.lagrecaabogados.com.ar` con HTTPS.

#### Scenario: Compilación de vista previa sin dominio de producción
- **WHEN** se compila una vista previa sin `SITE_URL`
- **THEN** sus páginas quedan `noindex`, no publican canonical de producción ni generan un sitemap de producción, y `robots.txt` bloquea el rastreo.

### Requirement: Los dominios alternativos redirigen al host canónico

Las solicitudes HTTP o HTTPS a `lagrecaabogados.com.ar`, `lagrecaabogados.com` y `www.lagrecaabogados.com` MUST recibir una redirección permanente 301 a `https://www.lagrecaabogados.com.ar`. La redirección MUST conservar la ruta y los parámetros de consulta. Las solicitudes HTTP al propio host canónico MUST redirigir a su versión HTTPS.

#### Scenario: Acceso desde el dominio .com
- **WHEN** una persona solicita `http://lagrecaabogados.com/empresas/?origen=consulta`
- **THEN** recibe un 301 a `https://www.lagrecaabogados.com.ar/empresas/?origen=consulta`.

#### Scenario: Acceso desde www del dominio .com
- **WHEN** una persona solicita `https://www.lagrecaabogados.com/contacto/`
- **THEN** recibe un 301 a `https://www.lagrecaabogados.com.ar/contacto/`.

#### Scenario: Acceso al dominio .com.ar sin www
- **WHEN** una persona solicita `https://lagrecaabogados.com.ar/estudio/`
- **THEN** recibe un 301 a `https://www.lagrecaabogados.com.ar/estudio/`.

#### Scenario: Acceso HTTP al dominio canónico
- **WHEN** una persona solicita `http://www.lagrecaabogados.com.ar/contacto/`
- **THEN** recibe un 301 a `https://www.lagrecaabogados.com.ar/contacto/`.

## Context

Ver `proposal.md` para la motivación y `specs/institutional-branding/spec.md` para el contrato visible. Hoy el encabezado y el pie usan texto maquetado con CSS; la portada agrega una marca circular tipográfica solo en pantallas amplias. No hay imágenes institucionales en el repositorio.

El archivo recibido es un PNG RGB cuadrado de 1254 × 1254 px y aproximadamente 1,39 MB. Tiene fondo claro opaco, anillo bordó y el nombre completo del estudio; su texto fino requiere conservar nitidez al reducirlo.

## Goals / Non-Goals

**Goals:**

- Usar una única fuente de marca en encabezado, pie y portada.
- Mantener el logo identificable en tamaños compactos y accesible para tecnologías de asistencia.
- Incluir el activo en el proyecto y entregar versiones optimizadas desde la compilación estática.

**Non-Goals:**

- Redibujar, retocar colores, quitar el fondo, reconstruir el logo como SVG o generar variantes no entregadas.
- Cambiar el nombre institucional, los metadatos SEO, el contenido jurídico o la configuración de contacto.
- Añadir JavaScript, dependencias, servicios de imágenes externos o funcionalidades de servidor.

## Decisions

### Conservar el PNG original dentro del proyecto

Copiar el archivo recibido a `src/assets/branding/logo-la-greca.png` sin editar los píxeles originales. Usar el pipeline de imágenes que ya ofrece Astro para producir la salida local optimizada. Se elige un activo de `src/assets` sobre una URL remota o una ruta dependiente de Descargas porque queda versionado y disponible durante el build; tampoco se incorpora otra dependencia.

La salida transformada se revisará visualmente por la tipografía pequeña del logo. Si una compresión con pérdida altera sus bordes, se conserva el PNG en la salida para privilegiar fidelidad de marca sobre una reducción marginal de peso.

### Un componente para las variantes de presentación

Crear `BrandLogo.astro` con variantes explícitas para `header`, `footer` y `hero`. Las variantes controlan tamaño y carga, no el contenido del archivo. El encabezado y el pie mantienen enlaces al inicio con nombre accesible; la imagen dentro de esos enlaces usa alternativa vacía para evitar duplicar el nombre anunciado. La imagen del hero también es decorativa porque el nombre del estudio aparece en el texto contiguo.

Las variantes conservan el cuadrado del archivo fuente, usan `object-fit: contain`, reservan el ancho y alto antes de cargar y recortan visualmente las esquinas opacas con una máscara circular sin cortar el anillo. El encabezado mantiene la marca visible en móvil; el hero sigue el breakpoint existente, que ya oculta su distintivo en pantallas estrechas. En el pie, una superficie blanca circular mantiene contraste sobre el fondo oscuro.

### Sustituir las tres marcas actuales

En `SiteHeader.astro` y `SiteFooter.astro`, reemplazar el wordmark textual dibujado en CSS por el componente compartido, conservando las etiquetas accesibles y los destinos actuales. En la portada, reemplazar `.home-hero__mark` por la variante grande. Retirar solo las reglas CSS que pertenezcan al dibujo anterior y agregar tamaños responsive para las variantes del componente.

## Risks / Trade-offs

- [El texto fino del PNG puede perder nitidez en tamaños pequeños] → Dar al encabezado un tamaño mínimo legible, mantener el hero amplio en escritorio y revisar las salidas optimizadas; usar PNG si WebP degrada los bordes.
- [El fondo blanco puede verse cuadrado sobre el pie oscuro] → Recortar solo las esquinas exteriores mediante una máscara circular y conservar el fondo blanco dentro del anillo.
- [Un alt duplicado puede repetir el nombre del estudio al navegar con lector de pantalla] → Dar nombre accesible al enlace y usar `alt=""` para la imagen contenida en enlaces ya nombrados y para el logo decorativo del hero.
- [El archivo podría no estar disponible al compilar en otra máquina] → Versionar el activo dentro de `src/assets/branding/` y no referenciar la carpeta Descargas desde el código.

## Migration Plan

1. Copiar el PNG original sin editarlo al directorio de activos del proyecto.
2. Implementar el componente compartido y sustituir las marcas actuales.
3. Ejecutar `npm run check`, `npm run build` y `npm run check:links`; inspeccionar las imágenes generadas y las páginas de portada, encabezado y pie.
4. Revisar visualmente los tamaños móvil y escritorio y confirmar el nombre accesible de los enlaces.

La reversión elimina el componente y el activo nuevos y restaura el wordmark CSS anterior; no hay migración de datos ni cambio de URL.

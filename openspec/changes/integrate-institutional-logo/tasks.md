## 1. Recurso y componente

- [x] 1.1 Copiar el PNG recibido a `src/assets/branding/logo-la-greca.png` sin editarlo y verificar con `cmp` que coincide con el original y conserva sus dimensiones.
- [x] 1.2 Crear `BrandLogo.astro` con variantes `header`, `footer` y `hero`, dimensiones reservadas y el pipeline local de imágenes de Astro; verificar `npm run check` y las alternativas accesibles.

## 2. Integración institucional

- [x] 2.1 Sustituir la marca CSS del encabezado, pie y portada por el componente compartido; verificar en el HTML generado que los tres usos cargan el mismo activo local y que los enlaces de marca van a `/`.
- [x] 2.2 Ajustar tamaños y máscara circular sin deformar el PNG ni recortar el anillo; verificar la proporción cuadrada y la ausencia de desbordamiento horizontal mediante dimensiones reservadas cuadradas, `object-fit: contain`, `max-width: 100%` y la regla `aspect-ratio: 1` del hero.

## 3. Verificación

- [x] 3.1 Ejecutar `npm run check`, `npm run build` y `npm run check:links`; verificar que la salida estática contiene el logo optimizado y no solicita imágenes a un host externo.
- [ ] 3.2 Revisar portada, encabezado y pie en 360 px, 768 px y 1280 px, y comprobar por teclado y árbol de accesibilidad que los enlaces de logo tienen un nombre útil sin anuncios duplicados.

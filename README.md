# La Greca & Asoc. — Estudio Jurídico

Proyecto institucional para el estudio jurídico argentino La Greca & Asoc. El sitio está pensado para presentar sus servicios a particulares y empresas, con especial foco en el asesoramiento jurídico permanente a pymes y empresas medianas.

> **Estado:** `initial-institutional-website` está aprobado y su código inicial está implementado; faltan las verificaciones finales de dependencias y compilación. Los textos jurídicos están marcados para revisión del estudio. No hay despliegue público ni repositorio remoto.

## Requisitos

- Node.js 22.23.4 o una versión par compatible posterior; este proyecto fija 24.21.0 en `.nvmrc` (consultar [requisitos oficiales](https://docs.astro.build/en/install-and-setup/)).
- npm y Git.
- OpenSpec CLI para crear, validar, implementar y archivar cambios según el flujo del proyecto.

## Instalación y desarrollo

```sh
npm install
npm run dev
```

Una vez creado y versionado `package-lock.json`, usar `npm ci` para instalaciones reproducibles.

## Comandos

```sh
npm run dev       # servidor local
npm run check     # Astro y TypeScript
npm run build     # compilación estática en dist/
npm run preview   # vista previa de la compilación
npm run check:links # enlaces internos de la salida compilada
```

## Estructura

```text
src/
  components/   componentes Astro reutilizables
  config/       configuración institucional
  content/      artículos Markdown con publicación revisada
  layouts/      layouts compartidos
  pages/        rutas Astro
  styles/       estilos globales y tokens
public/         recursos estáticos
docs/           arquitectura, diseño, contenido y despliegue
openspec/       especificaciones y cambios del proyecto
```

Las rutas siguen las especificaciones aprobadas en OpenSpec. El contenido jurídico debe ser revisado por el estudio antes de publicarse.

## OpenSpec

OpenSpec es la fuente de verdad de las funcionalidades. Todo cambio significativo sigue **Explorar → Proponer → Revisar → Implementar → Verificar → Archivar**. La propuesta inicial aprobada está en `openspec/changes/initial-institutional-website/`; las tareas y verificaciones de implementación quedan registradas allí.

Comandos habituales de OpenSpec dependen de la versión instalada. Consultar `openspec --help`, `openspec init --help` y los artefactos oficiales que genere la herramienta.

## Documentación

- [Arquitectura](docs/architecture.md)
- [Sistema de diseño](docs/design-system.md)
- [Guía de contenido](docs/content-guidelines.md)
- [Despliegue](docs/deployment.md)
- [Instrucciones permanentes del agente](AGENTS.md)

## Contacto y datos institucionales

Dirección informada: Chilavert 6714, Piso 1 - Local 27, Villa Lugano, Ciudad Autónoma de Buenos Aires, Argentina. Instagram: [@lagrecaabogados](https://www.instagram.com/lagrecaabogados/). El teléfono, correo y dominio no fueron proporcionados; no deben inventarse ni sustituirse por datos de ejemplo.

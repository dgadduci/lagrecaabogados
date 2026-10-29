import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative, resolve } from 'node:path';

const root = resolve('dist');
const htmlFiles = [];
const outputFiles = new Set();

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await collectFiles(path);
    } else {
      outputFiles.add(`/${relative(root, path).replaceAll('\\', '/')}`);
      if (extname(entry.name) === '.html') htmlFiles.push(path);
    }
  }
}

try {
  await collectFiles(root);
} catch (error) {
  console.error('No se encontró dist/. Ejecutá npm run build antes de revisar enlaces.');
  process.exit(1);
}

const failures = [];

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const links = [...html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)].map((match) => match[1]);

  for (const rawLink of links) {
    if (!rawLink.startsWith('/') || rawLink.startsWith('//')) continue;
    let pathname;
    try {
      pathname = decodeURIComponent(rawLink.split(/[?#]/, 1)[0]);
    } catch {
      failures.push(`${relative(root, file)} -> ${rawLink} (URL mal codificada)`);
      continue;
    }
    const candidates = pathname.endsWith('/')
      ? [`${pathname}index.html`]
      : [pathname, `${pathname}.html`, `${pathname}/index.html`];
    const exists = candidates.some((candidate) => outputFiles.has(candidate) && resolve(root, `.${candidate}`).startsWith(`${root}/`));

    if (!exists) failures.push(`${relative(root, file)} -> ${rawLink}`);
  }
}

if (failures.length) {
  console.error(`Enlaces internos sin destino (${failures.length}):\n${failures.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`Revisados ${htmlFiles.length} archivos HTML; no se encontraron enlaces internos rotos.`);
}

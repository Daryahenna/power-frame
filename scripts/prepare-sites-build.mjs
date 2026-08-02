import { cp, mkdir, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(projectRoot, 'dist');
const client = join(dist, 'client');
const server = join(dist, 'server');

const originalEntries = await readdir(dist, { withFileTypes: true });
await mkdir(client, { recursive: true });

for (const entry of originalEntries) {
  if (entry.name === 'client' || entry.name === 'server' || entry.name === '.openai') continue;
  await cp(join(dist, entry.name), join(client, entry.name), { recursive: true });
}

await mkdir(server, { recursive: true });
await writeFile(
  join(server, 'index.js'),
  `const fetchAsset = (request, env, pathname) => {
  const url = new URL(request.url);
  url.pathname = pathname;
  return env.ASSETS.fetch(new Request(url, request));
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;

    if (!url.pathname.split('/').pop()?.includes('.')) {
      const pagePath = url.pathname.endsWith('/')
        ? url.pathname + 'index.html'
        : url.pathname + '/index.html';
      response = await fetchAsset(request, env, pagePath);
      if (response.status !== 404) return response;
    }

    const notFound = await fetchAsset(request, env, '/404.html');
    return new Response(notFound.body, { status: 404, headers: notFound.headers });
  },
};
`,
  'utf8',
);

await mkdir(join(dist, '.openai'), { recursive: true });
await cp(join(projectRoot, '.openai', 'hosting.json'), join(dist, '.openai', 'hosting.json'));

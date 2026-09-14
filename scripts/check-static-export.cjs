const fs = require('node:fs');
const path = require('node:path');

const outputDir = path.join(process.cwd(), 'out');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const routes = ['/', '/como-usar/', '/seguranca/', '/privacidade/', '/termos/', '/apoie/'];

const htmlByRoute = routes.map((route) => {
  const file = route === '/'
    ? path.join(outputDir, 'index.html')
    : path.join(outputDir, route.slice(1), 'index.html');

  if (!fs.existsSync(file)) throw new Error(`Exportação ausente para ${route}: ${file}`);
  return [route, fs.readFileSync(file, 'utf8')];
});

const home = htmlByRoute[0][1];
for (const route of routes) {
  const href = `${basePath}${route}` || '/';
  if (!home.includes(`href="${href}"`)) throw new Error(`Link público ausente na Home: ${href}`);
}

const publishedHtml = htmlByRoute.map(([, html]) => html).join('\n');
for (const forbidden of ['axismind-htm', 'axismind-como-usar.gif', 'CVV']) {
  if (publishedHtml.includes(forbidden)) throw new Error(`Conteúdo antigo encontrado na exportação: ${forbidden}`);
}

if (!home.includes('Seu espaço para registrar o dia.')) {
  throw new Error('A Home exportada não contém a apresentação vigente.');
}

if (!home.includes(`href="${basePath}/brand/logo.png"`)) {
  throw new Error('A Home exportada não aponta o favicon circular transparente.');
}

console.log(`Exportação estática validada em ${routes.length} rotas com basePath "${basePath}".`);

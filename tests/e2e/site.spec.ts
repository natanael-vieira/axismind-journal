import { expect, test } from '@playwright/test';
import { isRtl, locales } from '@/i18n/messages';

const routes = [
  ['/', 'Seu espaço para registrar o dia.', 'Início', 'Seu espaço para registrar o dia · axismind'],
  ['/como-usar/', 'Comece com calma e mantenha você no controle.', 'Como usar', 'Como usar · axismind'],
  ['/seguranca/', 'Segurança local, explicada com transparência.', 'Segurança', 'Segurança · axismind'],
  ['/privacidade/', 'Política de Privacidade', 'Privacidade', 'Política de Privacidade · axismind'],
  ['/termos/', 'Termos de Uso', 'Termos', 'Termos de Uso · axismind'],
  ['/apoie/', 'Ajude o axismind a continuar independente.', 'Apoie o projeto', 'Apoie o projeto · axismind'],
] as const;

test('todas as rotas públicas carregam seu conteúdo principal', async ({ page }) => {
  for (const [route, heading, activeLabel, title] of routes) {
    await page.goto(route);
    await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible();
    await expect(page.locator('a[aria-current="page"]:visible', { hasText: activeLabel })).toBeVisible();
    await expect(page).toHaveTitle(title);
  }
});

for (const locale of locales) {
  test(`todas as rotas públicas funcionam em ${locale}`, async ({ page }) => {
    for (const [route] of routes) {
      await page.goto(route);
      await page.getByTestId('language-selector').selectOption(locale);

      await expect(page.locator('html')).toHaveAttribute('lang', locale);
      await expect(page.locator('html')).toHaveAttribute('dir', isRtl(locale) ? 'rtl' : 'ltr');
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    }
  });
}

test('permite trocar o idioma da interface sem sair da página', async ({ page }) => {
  await page.goto('/');
  const language = page.getByTestId('language-selector');

  await language.selectOption('en');

  await expect(page.getByRole('heading', { level: 1, name: 'Your space to record the day.' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'How it works' }).first()).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('oferece somente os idiomas sincronizados com o aplicativo', async ({ page }) => {
  await page.goto('/');
  const language = page.getByTestId('language-selector');

  await expect(language.locator('option')).toHaveCount(5);
  await expect(language.locator('option')).toHaveText([
    'Português (Brasil)',
    'English',
    'Español',
    'Italiano',
    'Français',
  ]);
});

test('Política e Termos exibem versão e vigência sem aviso adicional', async ({ page }) => {
  await page.goto('/privacidade/');
  await expect(page.getByText('Versão 2026-09-13.1 · vigente desde 13/09/2026')).toBeVisible();
  await expect(page.locator('aside[role="note"]')).toHaveCount(0);
  await expect(page.getByText(/O axismind é um diário pessoal local-first/)).toBeVisible();
  await expect(page.getByText(/Política pública: https:\/\/natanael-vieira.github.io\/axismind-journal\//)).toBeVisible();

  await page.goto('/termos/');
  await expect(page.getByText('Versão 2026-09-13.1 · vigente desde 13/09/2026')).toBeVisible();
  await expect(page.locator('aside[role="note"]')).toHaveCount(0);
  await expect(page.getByText(/As sugestões locais servem apenas para organizar/)).toBeVisible();
});

test('cards jurídicos alinham com o início do conteúdo em telas largas', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium', 'regra específica da viewport desktop');

  for (const route of ['/privacidade/', '/termos/']) {
    await page.goto(route);
    const article = page.locator('article.legal-article');
    const firstCard = article.locator('section').first();
    const title = page.locator('main > section.axis-container h1').first();
    const titleBox = await title.boundingBox();
    const cardBox = await firstCard.boundingBox();

    expect(titleBox).not.toBeNull();
    expect(cardBox).not.toBeNull();
    expect(Math.abs((cardBox?.x ?? 0) - (titleBox?.x ?? 0))).toBeLessThanOrEqual(1);
  }
});

test('a apresentação pública evita a narrativa funcional antiga', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText(/guarde ideias e rascunhos no Cofre de pensamentos/)).toBeVisible();
  await expect(page.getByRole('link', { name: 'Conheça a privacidade' })).toHaveAttribute('href', '/privacidade/');
  await expect(page.locator('body')).not.toContainText(/bem-estar emocional|medicação|consulta|crise/i);

  await page.goto('/como-usar/');
  await expect(page.locator('img[src*="axismind-como-usar.gif"]')).toHaveCount(0);
  await expect(page.getByText(/A pessoa de confiança e qualquer serviço externo são opções independentes/)).toBeVisible();
});

test('os botões principais da tela inicial ficam empilhados no celular', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile', 'regra específica da viewport móvel');
  await page.goto('/');

  const primary = page.getByRole('link', { name: /Veja como usar/ });
  const secondary = page.getByRole('link', { name: 'Conheça a privacidade' });
  const primaryBox = await primary.boundingBox();
  const secondaryBox = await secondary.boundingBox();

  expect(primaryBox).not.toBeNull();
  expect(secondaryBox).not.toBeNull();
  expect((secondaryBox?.y ?? 0)).toBeGreaterThanOrEqual((primaryBox?.y ?? 0) + (primaryBox?.height ?? 0));
  expect(Math.abs((primaryBox?.width ?? 0) - (secondaryBox?.width ?? 0))).toBeLessThanOrEqual(2);

  await page.goto('/apoie/');
  const activeSupport = page.locator('a[aria-current="page"]:visible', { hasText: 'Apoie o projeto' });
  await activeSupport.scrollIntoViewIfNeeded();
  const supportBox = await activeSupport.boundingBox();
  const viewport = page.viewportSize();
  expect(supportBox).not.toBeNull();
  expect(viewport).not.toBeNull();
  expect((supportBox?.x ?? 0) + (supportBox?.width ?? 0)).toBeLessThanOrEqual(viewport?.width ?? 0);
});

test('o destaque da Home usa a tela Hoje e alinha o texto ao topo no desktop', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium', 'regra específica da viewport desktop');
  await page.goto('/');

  const copyBox = await page.getByTestId('home-hero-copy').boundingBox();
  const previewBox = await page.getByTestId('home-hero-preview').boundingBox();
  const heroImage = page.getByTestId('home-hero-preview').getByRole('img');

  expect(copyBox).not.toBeNull();
  expect(previewBox).not.toBeNull();
  expect(Math.abs((copyBox?.y ?? 0) - (previewBox?.y ?? 0))).toBeLessThanOrEqual(1);
  await expect(heroImage).toHaveAttribute('src', /\/1\.5\.24\/01-hoje\.webp$/);

  const mockupStyle = await page.getByTestId('home-phone-mockup').evaluate((element) => {
    const style = getComputedStyle(element);
    return { borderWidth: style.borderWidth, borderRadius: style.borderRadius };
  });
  const previewStyle = await page.getByTestId('home-hero-preview').evaluate((element) => getComputedStyle(element).backgroundImage);

  expect(parseFloat(mockupStyle.borderWidth)).toBeGreaterThanOrEqual(6);
  expect(parseFloat(mockupStyle.borderRadius)).toBeGreaterThanOrEqual(40);
  expect(previewStyle).not.toBe('none');
});

test('a galeria amplia e fecha uma captura mantendo a navegação por teclado', async ({ page }) => {
  await page.goto('/#telas');
  const trigger = page.getByRole('button', { name: 'Ampliar imagem: Seu dia, no seu ritmo' });

  await trigger.click();
  await expect(page.getByRole('dialog', { name: 'Seu dia, no seu ritmo' })).toBeVisible();
  await page.getByRole('button', { name: 'Fechar imagem ampliada' }).click();
  await expect(page.getByRole('dialog')).toBeHidden();
  await expect(trigger).toBeFocused();

  await trigger.click();
  await page.keyboard.press('Escape');

  await expect(page.getByRole('dialog')).toBeHidden();
  await expect(trigger).toBeFocused();
});

test('a página de apoio usa e copia somente o e-mail oficial', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/apoie/');

  await expect(page.getByText('natnaelsales@gmail.com', { exact: true })).toHaveCount(3);
  await expect(page.getByAltText('QR Code PIX para a chave natnaelsales@gmail.com')).toBeVisible();

  await page.getByRole('button', { name: 'Copiar chave PIX' }).click();
  await expect(page.getByRole('button', { name: 'Chave PIX copiada' })).toBeVisible();
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toBe('natnaelsales@gmail.com');
});

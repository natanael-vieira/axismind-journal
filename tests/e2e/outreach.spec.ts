import { expect, test } from '@playwright/test';

test('novas páginas são acessíveis pela navegação sem overflow', async ({ page }) => {
  await page.goto('/sobre/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('A história por trás do axismind.');
  const nav = page.locator('nav:visible');
  await expect(nav.getByRole('link', { name: 'Sobre', exact: true })).toHaveAttribute('aria-current', 'page');
  await nav.getByRole('link', { name: 'Para profissionais', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Um diário pessoal que a pessoa escolhe levar à conversa.');
  await expect(page.getByRole('link', { name: 'Testar no Android' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Enviar feedback' })).toHaveAttribute('href', 'mailto:natnaelsales@gmail.com');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await expect(page.locator('html')).toHaveAttribute('data-locale', 'pt-BR');
  await page.getByTestId('language-selector').selectOption('en');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('A personal journal people can choose to bring to a conversation.');
  await expect(page).toHaveTitle('For professionals · axismind');
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('A personal journal people can choose to bring to a conversation.');
});

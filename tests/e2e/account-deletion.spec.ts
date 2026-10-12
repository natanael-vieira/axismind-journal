import { expect, test } from '@playwright/test';

test('explica a exclusão local e oferece um canal externo de solicitação', async ({ page }) => {
  await page.goto('/exclusao-de-conta/');

  await expect(page.getByRole('heading', { level: 1, name: 'Excluir perfil e dados do axismind' })).toBeVisible();
  await expect(page.getByText('Você → Centro de privacidade → Apagar todos os dados')).toBeVisible();
  await expect(page.getByText(/não conseguimos apagar remotamente o cofre/)).toBeVisible();
  await expect(page.getByRole('link', { name: 'Solicitar exclusão ou orientação por e-mail' })).toHaveAttribute('href', /^mailto:natnaelsales@gmail\.com/);
  await expect(page.getByRole('heading', { name: 'O que é excluído' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'O que pode permanecer' })).toBeVisible();
});

test('a Política e o rodapé apontam para as instruções de exclusão', async ({ page }) => {
  await page.goto('/privacidade/');
  await expect(page.getByRole('link', { name: 'Como excluir o perfil e os dados' })).toHaveAttribute('href', /\/exclusao-de-conta\/$/);
  await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Exclusão de conta e dados' })).toHaveAttribute('href', /\/exclusao-de-conta\/$/);
});

test('as instruções acompanham o idioma selecionado', async ({ page }) => {
  await page.goto('/exclusao-de-conta/');
  await page.getByTestId('language-selector').selectOption('en');
  await expect(page.getByRole('heading', { level: 1, name: 'Delete your axismind profile and data' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Request deletion or help by email' })).toBeVisible();
});

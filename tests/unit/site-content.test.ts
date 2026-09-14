// @vitest-environment node

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { describe, expect, it } from 'vitest';
import { screenshots, site } from '@/content/site';

const require = createRequire(import.meta.url);
const pixGenerator = require('../../scripts/generate-pix-qr.cjs') as {
  buildPixPayload: () => string;
  crc16: (payload: string) => string;
  pixKey: string;
};

describe('conteúdo público crítico', () => {
  it('publica a versão jurídica vigente e a URL oficial do journal', () => {
    expect(site.legalVersion).toBe('2026-09-13.1');
    expect(site.legalEffectiveDate).toBe('2026-09-13');
    expect(site.url).toBe('https://natanael-vieira.github.io/axismind-journal/');
  });

  it('mantém o mesmo e-mail no contato, na chave Pix e no gerador do QR Code', () => {
    expect(site.privacyEmail).toBe('natnaelsales@gmail.com');
    expect(site.support.pixKey).toBe(site.privacyEmail);
    expect(pixGenerator.pixKey).toBe(site.support.pixKey);
  });

  it('gera um payload Pix com a chave atual e CRC válido', () => {
    const payload = pixGenerator.buildPixPayload();
    const payloadWithoutCrc = payload.slice(0, -4);

    expect(payload).toContain(site.support.pixKey);
    expect(payload.slice(-4)).toBe(pixGenerator.crc16(payloadWithoutCrc));
  });

  it('publica somente capturas provisórias compatíveis com o diário geral', () => {
    expect(screenshots.map(({ src }) => src)).toEqual([
      '/media/app-pt-BR/thais-vieira/01-onboarding-introducao.png',
      '/media/app-pt-BR/thais-vieira/04-boas-vindas-diario.png',
      '/media/app-pt-BR/thais-vieira/13-home-thais-vieira.png',
      '/media/app-pt-BR/thais-vieira/18-corpo-intensidade-qualitativa.png',
    ]);
    for (const screenshot of screenshots) {
      expect(screenshot.src).toMatch(/^\/media\/app-pt-BR\/thais-vieira\/\d{2}-.+\.png$/);
      expect(fs.existsSync(path.join(process.cwd(), 'public', screenshot.src))).toBe(true);
    }
  });

  it('não aponta a documentação para o projeto legado', () => {
    const readme = fs.readFileSync(path.join(process.cwd(), 'README.md'), 'utf8');

    expect(readme).not.toContain('axismind-htm');
  });
});

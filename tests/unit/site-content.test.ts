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

  it('publica as capturas reais da versão 1.5.24 em formatos leves para celular', () => {
    expect(screenshots.map(({ src }) => src)).toEqual([
      '/media/app-pt-BR/thais-vieira/1.5.24/01-hoje.webp',
      '/media/app-pt-BR/thais-vieira/1.5.24/02-compass.webp',
      '/media/app-pt-BR/thais-vieira/1.5.24/03-cofre-de-pensamentos.webp',
      '/media/app-pt-BR/thais-vieira/1.5.24/04-momento-rapido.webp',
      '/media/app-pt-BR/thais-vieira/1.5.24/05-diario.webp',
      '/media/app-pt-BR/thais-vieira/1.5.24/06-perfil-thais-vieira.webp',
    ]);

    let thumbnailBytes = 0;
    for (const screenshot of screenshots) {
      expect(screenshot.thumbnailSrc).toMatch(/^\/media\/app-pt-BR\/thais-vieira\/1\.5\.24\/thumbs\/\d{2}-.+\.webp$/);

      const fullPath = path.join(process.cwd(), 'public', screenshot.src);
      const thumbnailPath = path.join(process.cwd(), 'public', screenshot.thumbnailSrc);

      expect(fs.existsSync(fullPath)).toBe(true);
      expect(fs.existsSync(thumbnailPath)).toBe(true);
      expect(fs.statSync(fullPath).size).toBeLessThanOrEqual(300_000);
      expect(fs.statSync(thumbnailPath).size).toBeLessThanOrEqual(70_000);
      thumbnailBytes += fs.statSync(thumbnailPath).size;
    }

    expect(thumbnailBytes).toBeLessThanOrEqual(300_000);
  });

  it('não aponta a documentação para o projeto legado', () => {
    const readme = fs.readFileSync(path.join(process.cwd(), 'README.md'), 'utf8');

    expect(readme).not.toContain('axismind-htm');
    expect(readme).not.toMatch(/revisão jurídica independente/i);
  });

  it('mantém o logo circular transparente disponível para o favicon', () => {
    const logoPath = path.join(process.cwd(), 'public', 'brand', 'logo.png');

    expect(fs.existsSync(logoPath)).toBe(true);
    expect(fs.statSync(logoPath).size).toBeLessThanOrEqual(80_000);
    expect(fs.existsSync(path.join(process.cwd(), 'public', 'brand', 'app-icon.png'))).toBe(false);
  });
});

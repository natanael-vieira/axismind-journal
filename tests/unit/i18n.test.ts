import { describe, expect, it } from 'vitest';
import { isRtl, localeLabels, locales, messages } from '@/i18n/messages';

describe('catálogo de internacionalização', () => {
  it('expõe os idiomas suportados', () => {
    expect(locales).toEqual(['pt-BR', 'en', 'es', 'it', 'fr']);
    expect(Object.keys(localeLabels)).toHaveLength(locales.length);
  });

  it('mantém os idiomas publicados em leitura da esquerda para a direita', () => {
    expect(locales.filter(isRtl)).toEqual([]);
    expect(isRtl('en')).toBe(false);
  });

  it('mantém cada idioma isolado dos demais', () => {
    expect(messages.en.how.eyebrow).toBe('Usage guide');
    expect(messages.es.how.eyebrow).toBe('Guía de uso');
    expect(messages.fr.how.eyebrow).toBe('Guide d’utilisation');
    expect(messages.en.how.eyebrow).not.toBe(messages.fr.how.eyebrow);
  });

  it('mantém as chaves principais completas em todos os idiomas', () => {
    const keys = Object.keys(messages['pt-BR']);

    for (const locale of locales) {
      expect(Object.keys(messages[locale])).toEqual(keys);
      expect(messages[locale].navigation.home).not.toBe('');
      expect(messages[locale].home.title).not.toBe('');
    }
  });

  it('mantém textos visíveis da galeria e acessibilidade no idioma selecionado', () => {
    expect(messages['pt-BR'].gallery.item1Title).toBe('Um diário para o seu dia');
    expect(messages.en.gallery.item1Title).toBe('A journal for your day');
    expect(messages.es.gallery.item1Title).not.toBe('Jornada principal');
    expect(messages.en.accessibility.skip).toBe('Skip to content');
    expect(messages.es.accessibility.skip).toBe('Saltar al contenido');
    expect(messages.fr.accessibility.mainNav).toBe('Navigation principale');
  });

  it('apresenta o produto como diário geral sem funções antigas', () => {
    const publicCopy = JSON.stringify({
      home: messages['pt-BR'].home,
      how: messages['pt-BR'].how,
      footer: messages['pt-BR'].footer,
      gallery: messages['pt-BR'].gallery,
    });

    expect(messages['pt-BR'].home.title).toBe('Seu espaço para registrar o dia.');
    expect(messages['pt-BR'].home.feature3Body).toContain('Humor, sono, rotina e observações corporais');
    expect(publicCopy).not.toMatch(/bem-estar emocional|medicação|consulta|crise|avaliação clínica|ajuda imediata/i);
    expect(JSON.stringify(messages)).not.toContain('CVV');
  });

  it('mantém Política e Termos alinhados ao texto vigente do aplicativo', () => {
    expect(messages['pt-BR'].privacy.body2).toBe(
      'O axismind é um diário pessoal local-first. Permite registrar texto, voz transcrita, momentos rápidos, observações corporais, lembretes, perguntas pessoais e preparação de conversas.',
    );
    expect(messages['pt-BR'].privacy.body3).toContain('organização pessoal e avisos opcionais');
    expect(messages['pt-BR'].terms.body3).toBe(
      'O app auxilia a registrar e organizar experiências pessoais, rotina, lembretes e conversas. As sugestões locais servem apenas para organizar o conteúdo informado pela própria pessoa.',
    );
  });

  it('permite interpolar valores dinâmicos sem traduzir os dados', () => {
    expect(messages.en.privacy.body1).toContain('{email}');
    expect(messages.fr.privacy.body8).toContain('{age}');
  });

  it('não herda textos em inglês nos catálogos dos demais idiomas', () => {
    const flatten = (value: object, prefix = ''): Record<string, string> =>
      Object.entries(value).reduce<Record<string, string>>((result, [key, child]) => {
        const path = prefix ? `${prefix}.${key}` : key;
        return typeof child === 'object'
          ? { ...result, ...flatten(child, path) }
          : { ...result, [path]: child };
      }, {});
    const english = flatten(messages.en);
    const allowedSameValues: Partial<Record<(typeof locales)[number], string[]>> = {
      es: ['meta.siteTitle', 'meta.homeTitle', 'meta.howTitle', 'meta.securityTitle', 'meta.privacyTitle', 'meta.termsTitle', 'meta.supportTitle'],
      it: ['meta.siteTitle', 'navigation.privacy'],
      fr: ['meta.siteTitle', 'footer.contact'],
    };

    for (const locale of locales.filter((item) => item !== 'pt-BR' && item !== 'en')) {
      const catalog = flatten(messages[locale]);
      const inherited = Object.keys(english).filter(
        (path) => catalog[path] === english[path]
          && !path.startsWith('meta.siteTitle')
          && !(allowedSameValues[locale] ?? []).includes(path),
      );
      expect(inherited, `${locale} contém textos herdados do inglês`).toEqual([]);
    }
  });

  it('preserva variáveis dinâmicas em todos os idiomas', () => {
    const placeholders = (value: string) => [...value.matchAll(/\{\w+\}/g)].map(([match]) => match).sort();

    for (const locale of locales) {
      expect(placeholders(messages[locale].privacy.body1)).toEqual(['{controller}', '{email}', '{location}', '{url}']);
      expect(placeholders(messages[locale].privacy.body8)).toEqual(['{age}']);
      expect(placeholders(messages[locale].terms.body1)).toEqual(['{controller}', '{email}', '{location}']);
      expect(placeholders(messages[locale].terms.body2)).toEqual(['{age}']);
    }
  });
});

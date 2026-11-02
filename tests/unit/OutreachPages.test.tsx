import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import AboutPage from '@/app/sobre/page';
import ProfessionalsPage from '@/app/para-profissionais/page';
import { NavigationLinks } from '@/components/NavigationLinks';
import { playStore, site } from '@/content/site';
import { outreach } from '@/content/outreach';
import { locales } from '@/i18n/messages';

vi.mock('next/navigation', () => ({ usePathname: () => '/sobre/' }));

describe('apresentação do projeto', () => {
  it('torna as duas páginas encontráveis e identifica a página atual', () => {
    render(<NavigationLinks variant="mobile" />);
    expect(screen.getByRole('link', { name: 'Sobre' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Para profissionais' })).toHaveAttribute('href', expect.stringMatching(/^\/para-profissionais\/?$/));
  });

  it('apresenta a motivação do autor e um contato real', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('história');
    expect(screen.getByRole('link', { name: site.privacyEmail })).toHaveAttribute('href', `mailto:${site.privacyEmail}`);
    expect(screen.getByText(/gratuito e sem anúncios/)).toBeInTheDocument();
    expect(screen.getByText(/casado desde 2013/)).toBeInTheDocument();
    expect(screen.getByText(/Tenho TEA e alexitimia/)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Por que você não cria um aplicativo/ })).toBeInTheDocument();
  });

  it('convida a testar com dados fictícios e explica limites do PDF', () => {
    render(<ProfessionalsPage />);
    expect(screen.getByText(/dados fictícios/)).toBeInTheDocument();
    expect(screen.getByText(/PDF não tem senha/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Testar no Android' })).toHaveAttribute('href', playStore.url);
    expect(screen.getByRole('link', { name: 'Enviar feedback' })).toHaveAttribute('href', `mailto:${site.privacyEmail}`);
  });

  it('oferece conteúdo próprio nos cinco idiomas do site', () => {
    for (const locale of locales) {
      expect(outreach[locale].about.sections).toHaveLength(6);
      expect(outreach[locale].professionals.sections).toHaveLength(4);
      if (locale !== 'pt-BR') {
        expect(outreach[locale].about.title).not.toBe(outreach['pt-BR'].about.title);
      }
    }
  });
});

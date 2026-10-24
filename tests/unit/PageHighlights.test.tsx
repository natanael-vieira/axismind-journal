import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomePage from '@/app/page';
import HowToPage from '@/app/como-usar/page';
import SecurityPage from '@/app/seguranca/page';
import PrivacyPage from '@/app/privacidade/page';
import TermsPage from '@/app/termos/page';

describe('destaques visuais das páginas', () => {
  it('publica a política vigente com áudio opcional e limites do CSV', () => {
    render(<PrivacyPage />);

    expect(screen.getByText('Versão 2026-10-24.1 · vigente desde 24/10/2026')).toBeInTheDocument();
    expect(screen.getByText(/Ao escolher salvar só áudio no Diário ou no Cofre de pensamentos/)).toBeInTheDocument();
    expect(screen.getByText(/CSV.*sem senha/)).toBeInTheDocument();
    expect(screen.getByText(/Transcrever depois não exclui esse áudio/)).toBeInTheDocument();
    expect(screen.getByText(/aviso semanal de backup.*adiado ou desativado/)).toBeInTheDocument();
  });

  it('mantém os Termos na versão aceita pelo aplicativo', () => {
    render(<TermsPage />);

    expect(screen.getByText('Versão 2026-09-08.1 · vigente desde 08/09/2026')).toBeInTheDocument();
  });

  it('mantém a captura principal da Home em um card claro com faixa colorida', () => {
    render(<HomePage />);

    const preview = screen.getByTestId('home-hero-preview');

    expect(within(preview).getByTestId('home-preview-color-rule')).toHaveClass('wave-rule');
    expect(preview).not.toHaveClass('hero-preview');
    expect(preview.querySelector('.hero-preview-orb')).not.toBeInTheDocument();
  });

  it('usa a paleta escura do app no destaque de Como usar sem faixa decorativa', () => {
    render(<HowToPage />);

    const helpCard = screen.getByTestId('how-help-card');

    expect(helpCard).toHaveClass('bg-axis-ink', 'text-axis-surface');
    expect(within(helpCard).queryByTestId('how-help-accent-peach')).not.toBeInTheDocument();
    expect(within(helpCard).queryByTestId('how-help-accent-teal')).not.toBeInTheDocument();
  });

  it('aplica a paleta escura do app ao resultado da análise de Segurança sem faixa decorativa', () => {
    render(<SecurityPage />);

    const resultCard = screen.getByTestId('security-result-card');

    expect(resultCard).toHaveClass('bg-axis-ink', 'text-axis-surface');
    expect(within(resultCard).getByText('1199')).toBeInTheDocument();
    expect(within(resultCard).getByText(/13 ocorrências de advisories/)).toBeInTheDocument();
    expect(screen.getByText(/APK assinado 2.2.1, build 94/)).toBeInTheDocument();
    expect(screen.getByText(/MobSF 4\.5\.3/)).toBeInTheDocument();
    expect(within(resultCard).getByText(/2 alertas altos e 14 avisos/)).toBeInTheDocument();
    expect(within(resultCard).queryByTestId('security-result-accent-peach')).not.toBeInTheDocument();
    expect(within(resultCard).queryByTestId('security-result-accent-teal')).not.toBeInTheDocument();
  });
});

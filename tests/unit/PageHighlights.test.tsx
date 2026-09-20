import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomePage from '@/app/page';
import HowToPage from '@/app/como-usar/page';
import SecurityPage from '@/app/seguranca/page';

describe('destaques visuais das páginas', () => {
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
    expect(within(resultCard).queryByTestId('security-result-accent-peach')).not.toBeInTheDocument();
    expect(within(resultCard).queryByTestId('security-result-accent-teal')).not.toBeInTheDocument();
  });
});

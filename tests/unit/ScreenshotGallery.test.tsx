import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ScreenshotGallery } from '@/components/ScreenshotGallery';

const screenshots = [
  { src: '/screenshots/1.webp', thumbnailSrc: '/screenshots/thumbs/1.webp', title: 'Introdução ao diário', alt: 'Introdução ao diário — captura real do axismind em português do Brasil' },
  { src: '/screenshots/2.webp', thumbnailSrc: '/screenshots/thumbs/2.webp', title: 'Privacidade no aparelho', alt: 'Privacidade no aparelho — captura real do axismind em português do Brasil' },
  { src: '/screenshots/3.webp', thumbnailSrc: '/screenshots/thumbs/3.webp', title: 'Limites e consentimento', alt: 'Limites e consentimento — captura real do axismind em português do Brasil' },
  { src: '/screenshots/4.webp', thumbnailSrc: '/screenshots/thumbs/4.webp', title: 'Boas-vindas ao diário', alt: 'Boas-vindas ao diário — captura real do axismind em português do Brasil' },
  { src: '/screenshots/5.webp', thumbnailSrc: '/screenshots/thumbs/5.webp', title: 'Recursos de organização', alt: 'Recursos de organização — captura real do axismind em português do Brasil' },
] as const;

describe('ScreenshotGallery', () => {
  it('apresenta todos os prints em mockups de celular sem trocar as miniaturas leves', () => {
    render(<ScreenshotGallery screenshots={screenshots} />);

    const mockups = screen.getAllByTestId('gallery-phone-mockup');

    expect(mockups).toHaveLength(screenshots.length);
    expect(within(mockups[0]).getByRole('img')).toHaveAttribute('src', '/screenshots/thumbs/1.webp');
  });

  it('abre a captura escolhida em um diálogo e devolve o foco ao fechar', async () => {
    render(<ScreenshotGallery screenshots={screenshots} />);
    const trigger = screen.getByRole('button', { name: 'Ampliar imagem: Introdução ao diário' });

    expect(within(trigger).getByRole('img')).toHaveAttribute('src', '/screenshots/thumbs/1.webp');

    fireEvent.click(trigger);

    const dialog = screen.getByRole('dialog', { name: 'Introdução ao diário' });
    const enlargedMockup = within(dialog).getByTestId('lightbox-phone-mockup');

    expect(dialog).toBeVisible();
    expect(within(enlargedMockup).getByRole('img')).toHaveAttribute('src', '/screenshots/1.webp');
    expect(document.body).toHaveStyle({ overflow: 'hidden' });
    const close = screen.getByRole('button', { name: 'Fechar imagem ampliada' });
    expect(close).toHaveFocus();

    fireEvent.click(close);

    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it('fecha o zoom com Escape', async () => {
    render(<ScreenshotGallery screenshots={screenshots} />);
    fireEvent.click(screen.getByRole('button', { name: 'Ampliar imagem: Privacidade no aparelho' }));

    fireEvent.keyDown(window, { key: 'Escape' });

    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });

  it('navega pelo álbum com setas e continua do fim para o início', () => {
    render(<ScreenshotGallery screenshots={screenshots} />);
    fireEvent.click(screen.getByRole('button', { name: 'Ampliar imagem: Introdução ao diário' }));

    fireEvent.click(screen.getByRole('button', { name: 'Próxima imagem' }));
    expect(screen.getByRole('dialog', { name: 'Privacidade no aparelho' })).toBeVisible();
    expect(screen.getByText('2 / 5')).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Imagem anterior' }));
    fireEvent.click(screen.getByRole('button', { name: 'Imagem anterior' }));
    expect(screen.getByRole('dialog', { name: 'Recursos de organização' })).toBeVisible();
    expect(screen.getByText('5 / 5')).toBeVisible();
  });

  it('navega pelo álbum com as teclas de direção', () => {
    render(<ScreenshotGallery screenshots={screenshots} />);
    fireEvent.click(screen.getByRole('button', { name: 'Ampliar imagem: Introdução ao diário' }));

    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(screen.getByRole('dialog', { name: 'Privacidade no aparelho' })).toBeVisible();

    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    expect(screen.getByRole('dialog', { name: 'Introdução ao diário' })).toBeVisible();
  });

  it('ajusta o zoom com scroll e duplo clique', () => {
    render(<ScreenshotGallery screenshots={screenshots} />);
    fireEvent.click(screen.getByRole('button', { name: 'Ampliar imagem: Recursos de organização' }));

    const zoomTarget = screen.getByRole('application', { name: /Álbum de imagens ampliadas/ });
    const enlargedMockup = within(zoomTarget).getByTestId('lightbox-phone-mockup');
    expect(enlargedMockup).toHaveStyle({ transform: 'translate3d(0px, 0px, 0) scale(1)' });

    fireEvent.doubleClick(zoomTarget);
    expect(enlargedMockup).toHaveStyle({ transform: 'translate3d(0px, 0px, 0) scale(2)' });

    fireEvent.wheel(zoomTarget, { deltaY: 100 });
    expect(enlargedMockup).toHaveStyle({ transform: 'translate3d(0px, 0px, 0) scale(1.85)' });
  });

  it('mantém o foco dentro do diálogo', () => {
    render(<ScreenshotGallery screenshots={screenshots} />);
    fireEvent.click(screen.getByRole('button', { name: 'Ampliar imagem: Introdução ao diário' }));

    const close = screen.getByRole('button', { name: 'Fechar imagem ampliada' });
    const zoomTarget = screen.getByRole('application', { name: /Álbum de imagens ampliadas/ });
    fireEvent.keyDown(close, { key: 'Tab', shiftKey: true });

    expect(zoomTarget).toHaveFocus();
  });
});

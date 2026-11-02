import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça a história e os princípios do axismind, um diário pessoal gratuito, sem anúncios e desenvolvido por Natanael Sales Vieira.',
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Termos de Uso' };

export default function TermsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

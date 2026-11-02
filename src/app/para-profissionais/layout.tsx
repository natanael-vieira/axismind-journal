import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Para profissionais',
  description: 'Um convite a profissionais e clínicas para conhecer e avaliar o axismind: diário pessoal gratuito para Android, compartilhamento escolhido e limites claros.',
};

export default function ProfessionalsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

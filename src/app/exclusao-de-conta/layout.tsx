import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exclusão de conta e dados',
  description: 'Como excluir o perfil e os dados locais do axismind e solicitar orientação.',
};

export default function AccountDeletionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Segurança' };

export default function SecurityLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

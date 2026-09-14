import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Apoie o projeto' };

export default function SupportLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

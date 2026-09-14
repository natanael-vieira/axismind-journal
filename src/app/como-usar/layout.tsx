import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Como usar' };

export default function HowToLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

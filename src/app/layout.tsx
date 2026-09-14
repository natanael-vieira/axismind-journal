import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { publicPath, site } from '@/content/site';
import { LocaleProvider } from '@/i18n/LocaleProvider';
import { SkipLink } from '@/components/SkipLink';
import './globals.css';

export const metadata: Metadata = {
  title: { default: `${site.title} · ${site.name}`, template: `%s · ${site.name}` },
  description: site.description,
  icons: { icon: publicPath('/brand/logo.png'), apple: publicPath('/brand/logo.png') },
  referrer: 'no-referrer',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        <LocaleProvider>
          <SkipLink />
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}

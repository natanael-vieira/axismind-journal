export const site = {
  name: 'axismind',
  title: 'Seu espaço para registrar o dia',
  description:
    'Diário pessoal local-first para registrar experiências, rotina e anotações no seu ritmo.',
  url: 'https://natanael-vieira.github.io/axismind-journal/',
  controller: 'Natanael Sales Vieira',
  controllerLocation: 'Palhoça, Santa Catarina, Brasil',
  privacyEmail: 'natnaelsales@gmail.com',
  minimumAge: 18,
  legalVersion: '2026-09-13.1',
  legalEffectiveDate: '2026-09-13',
  support: {
    enabled: true,
    beneficiary: 'Natanael Sales Vieira',
    pixKey: 'natnaelsales@gmail.com',
    pixQrCode: '/brand/pix-qrcode.png',
  },
} as const;

export const publicPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

export const navigation = [
  { href: '/', label: 'Início' },
  { href: '/como-usar/', label: 'Como usar' },
  { href: '/seguranca/', label: 'Segurança' },
  { href: '/privacidade/', label: 'Privacidade' },
  { href: '/termos/', label: 'Termos' },
  { href: '/apoie/', label: 'Apoie o projeto' },
] as const;

export const screenshots = [
  { src: '/media/app-pt-BR/thais-vieira/01-onboarding-introducao.png', translationItem: 1 },
  { src: '/media/app-pt-BR/thais-vieira/04-boas-vindas-diario.png', translationItem: 2 },
  { src: '/media/app-pt-BR/thais-vieira/13-home-thais-vieira.png', translationItem: 3 },
  { src: '/media/app-pt-BR/thais-vieira/18-corpo-intensidade-qualitativa.png', translationItem: 4 },
] as const;

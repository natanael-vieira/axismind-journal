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
  { src: '/media/app-pt-BR/thais-vieira/1.5.24/01-hoje.webp', thumbnailSrc: '/media/app-pt-BR/thais-vieira/1.5.24/thumbs/01-hoje.webp', translationItem: 1 },
  { src: '/media/app-pt-BR/thais-vieira/1.5.24/02-compass.webp', thumbnailSrc: '/media/app-pt-BR/thais-vieira/1.5.24/thumbs/02-compass.webp', translationItem: 2 },
  { src: '/media/app-pt-BR/thais-vieira/1.5.24/03-cofre-de-pensamentos.webp', thumbnailSrc: '/media/app-pt-BR/thais-vieira/1.5.24/thumbs/03-cofre-de-pensamentos.webp', translationItem: 3 },
  { src: '/media/app-pt-BR/thais-vieira/1.5.24/04-momento-rapido.webp', thumbnailSrc: '/media/app-pt-BR/thais-vieira/1.5.24/thumbs/04-momento-rapido.webp', translationItem: 4 },
  { src: '/media/app-pt-BR/thais-vieira/1.5.24/05-diario.webp', thumbnailSrc: '/media/app-pt-BR/thais-vieira/1.5.24/thumbs/05-diario.webp', translationItem: 5 },
  { src: '/media/app-pt-BR/thais-vieira/1.5.24/06-perfil-thais-vieira.webp', thumbnailSrc: '/media/app-pt-BR/thais-vieira/1.5.24/thumbs/06-perfil-thais-vieira.webp', translationItem: 6 },
] as const;

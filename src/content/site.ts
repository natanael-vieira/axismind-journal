export const site = {
  name: 'axismind',
  title: 'Seu espaço para registrar o dia',
  description:
    'Diário pessoal local-first para registrar experiências, rotina e anotações no seu ritmo.',
  url: 'https://natanael-vieira.github.io/axismind-journal/',
  controller: 'Natanael Sales Vieira',
  controllerLocation: 'Palhoça, Santa Catarina, Brasil',
  privacyEmail: 'natnaelsales@gmail.com',
  creatorSite: 'https://natanael-vieira.github.io/remnantvoid-page/',
  minimumAge: 18,
  termsVersion: '2026-09-08.1',
  termsEffectiveDate: '2026-09-08',
  privacyVersion: '2026-10-24.1',
  privacyEffectiveDate: '2026-10-24',
  support: {
    enabled: true,
    beneficiary: 'Natanael Sales Vieira',
    pixKey: 'natnaelsales@gmail.com',
    pixQrCode: '/brand/pix-qrcode.png',
  },
} as const;

export const publicPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

export const playStore = {
  url: 'https://play.google.com/store/apps/details?id=com.axismind.app',
  qrCode: '/brand/play-store-qrcode.png',
  badges: {
    'pt-BR': '/brand/google-play-badge-pt-br.png',
    en: '/brand/google-play-badge-en.png',
    es: '/brand/google-play-badge-es.png',
    it: '/brand/google-play-badge-it.png',
    fr: '/brand/google-play-badge-fr.png',
  },
} as const;

export const navigation = [
  { href: '/', label: 'Início' },
  { href: '/como-usar/', label: 'Como usar' },
  { href: '/seguranca/', label: 'Segurança' },
  { href: '/privacidade/', label: 'Privacidade' },
  { href: '/termos/', label: 'Termos' },
  { href: '/apoie/', label: 'Apoie o projeto' },
] as const;

export const screenshots = [
  { src: '/media/app-pt-BR/thais-vieira/2.2.1/01-hoje.webp', thumbnailSrc: '/media/app-pt-BR/thais-vieira/2.2.1/thumbs/01-hoje.webp', translationItem: 1 },
  { src: '/media/app-pt-BR/thais-vieira/2.2.1/02-compass.webp', thumbnailSrc: '/media/app-pt-BR/thais-vieira/2.2.1/thumbs/02-compass.webp', translationItem: 2 },
  { src: '/media/app-pt-BR/thais-vieira/2.2.1/03-cofre-de-pensamentos.webp', thumbnailSrc: '/media/app-pt-BR/thais-vieira/2.2.1/thumbs/03-cofre-de-pensamentos.webp', translationItem: 3 },
  { src: '/media/app-pt-BR/thais-vieira/2.2.1/04-padroes.webp', thumbnailSrc: '/media/app-pt-BR/thais-vieira/2.2.1/thumbs/04-padroes.webp', translationItem: 4 },
  { src: '/media/app-pt-BR/thais-vieira/2.2.1/05-diario.webp', thumbnailSrc: '/media/app-pt-BR/thais-vieira/2.2.1/thumbs/05-diario.webp', translationItem: 5 },
  { src: '/media/app-pt-BR/thais-vieira/2.2.1/06-perfil-thais-vieira.webp', thumbnailSrc: '/media/app-pt-BR/thais-vieira/2.2.1/thumbs/06-perfil-thais-vieira.webp', translationItem: 6 },
] as const;

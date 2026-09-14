import type { Locale } from '@/i18n/messages';

export const legalStatus: Record<Locale, { effectiveSince: string; reviewNotice: string }> = {
  'pt-BR': {
    effectiveSince: 'vigente desde 13/09/2026',
    reviewNotice: 'Revisão jurídica independente ainda necessária antes da publicação comercial.',
  },
  en: {
    effectiveSince: 'effective since September 13, 2026',
    reviewNotice: 'Independent legal review is still required before commercial release.',
  },
  es: {
    effectiveSince: 'vigente desde el 13/09/2026',
    reviewNotice: 'Aún se requiere una revisión jurídica independiente antes de la publicación comercial.',
  },
  it: {
    effectiveSince: 'in vigore dal 13/09/2026',
    reviewNotice: 'È ancora necessaria una revisione legale indipendente prima della pubblicazione commerciale.',
  },
  fr: {
    effectiveSince: 'en vigueur depuis le 13/09/2026',
    reviewNotice: 'Une révision juridique indépendante reste nécessaire avant la publication commerciale.',
  },
};

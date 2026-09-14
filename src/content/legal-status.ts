import type { Locale } from '@/i18n/messages';

export const legalStatus: Record<Locale, { effectiveSince: string }> = {
  'pt-BR': { effectiveSince: 'vigente desde 13/09/2026' },
  en: { effectiveSince: 'effective since September 13, 2026' },
  es: { effectiveSince: 'vigente desde el 13/09/2026' },
  it: { effectiveSince: 'in vigore dal 13/09/2026' },
  fr: { effectiveSince: 'en vigueur depuis le 13/09/2026' },
};

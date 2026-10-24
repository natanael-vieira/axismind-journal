import type { Locale } from '@/i18n/messages';

export const legalStatus: Record<Locale, { termsEffectiveSince: string; privacyEffectiveSince: string }> = {
  'pt-BR': { termsEffectiveSince: 'vigente desde 08/09/2026', privacyEffectiveSince: 'vigente desde 24/10/2026' },
  en: { termsEffectiveSince: 'effective since September 8, 2026', privacyEffectiveSince: 'effective since October 24, 2026' },
  es: { termsEffectiveSince: 'vigente desde el 08/09/2026', privacyEffectiveSince: 'vigente desde el 24/10/2026' },
  it: { termsEffectiveSince: 'in vigore dal 08/09/2026', privacyEffectiveSince: 'in vigore dal 24/10/2026' },
  fr: { termsEffectiveSince: 'en vigueur depuis le 08/09/2026', privacyEffectiveSince: 'en vigueur depuis le 24/10/2026' },
};

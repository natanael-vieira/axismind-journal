'use client';

import { LegalArticle } from '@/components/LegalArticle';
import { LegalStatus } from '@/components/LegalStatus';
import { PageIntro } from '@/components/PageIntro';
import { legalStatus } from '@/content/legal-status';
import { site } from '@/content/site';
import { useI18n } from '@/i18n/LocaleProvider';
import type { Locale } from '@/i18n/messages';

export default function PrivacyPage() {
  const { locale, messages: m, translate } = useI18n();
  const variables = { controller: site.controller, location: site.controllerLocation, email: site.privacyEmail, age: site.minimumAge, url: site.url };
  const versionLabel: Record<Locale, string> = { 'pt-BR': 'Versão', en: 'Version', es: 'Versión', it: 'Versione', fr: 'Version' };
  return (
    <>
      <PageIntro eyebrow={`${versionLabel[locale]} ${site.legalVersion} · ${legalStatus[locale].effectiveSince}`} title={m.privacy.title}>
        <p>{m.privacy.intro}</p>
      </PageIntro>
      <LegalStatus>{legalStatus[locale].reviewNotice}</LegalStatus>
      <LegalArticle>
        <section><h2>{m.privacy.s1}</h2><p>{translate(m.privacy.body1, variables)}</p></section>
        <section><h2>{m.privacy.s2}</h2><p>{m.privacy.body2}</p></section>
        <section><h2>{m.privacy.s3}</h2><p>{m.privacy.body3}</p></section>
        <section><h2>{m.privacy.s4}</h2><p>{m.privacy.body4}</p></section>
        <section><h2>{m.privacy.s5}</h2><p>{m.privacy.body5}</p></section>
        <section><h2>{m.privacy.s6}</h2><p>{translate(m.privacy.body6, variables)}</p></section>
        <section><h2>{m.privacy.s7}</h2><p>{m.privacy.body7}</p></section>
        <section><h2>{m.privacy.s8}</h2><p>{translate(m.privacy.body8, variables)}</p></section>
      </LegalArticle>
    </>
  );
}

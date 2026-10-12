'use client';

import { LegalArticle } from '@/components/LegalArticle';
import { PageIntro } from '@/components/PageIntro';
import { accountDeletionCopy } from '@/content/account-deletion';
import { site } from '@/content/site';
import { useI18n } from '@/i18n/LocaleProvider';

export default function AccountDeletionPage() {
  const { locale } = useI18n();
  const copy = accountDeletionCopy[locale];

  return (
    <>
      <PageIntro eyebrow={copy.eyebrow} title={copy.title}>
        <p>{copy.intro}</p>
      </PageIntro>
      <LegalArticle>
        <section>
          <h2>{copy.stepsTitle}</h2>
          <ol className="list-decimal space-y-2 pl-5">
            {copy.steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </section>
        <section>
          <h2>{copy.deletedTitle}</h2>
          <ul>{copy.deleted.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section>
          <h2>{copy.retainedTitle}</h2>
          <ul>{copy.retained.map((item) => <li key={item}>{item}</li>)}</ul>
          <p className="mt-4">{copy.retention}</p>
        </section>
        <section id="exclusao-de-dados">
          <h2>{copy.partialTitle}</h2>
          <p>{copy.partial}</p>
        </section>
        <section>
          <h2>{copy.noAccessTitle}</h2>
          <p>{copy.noAccess}</p>
          <a
            className="focus-ring mt-4 inline-block rounded-sm font-bold text-axis-teal underline underline-offset-4"
            href={`mailto:${site.privacyEmail}?subject=${encodeURIComponent('Solicitação de exclusão — axismind')}`}
          >
            {copy.emailAction}
          </a>
        </section>
      </LegalArticle>
    </>
  );
}

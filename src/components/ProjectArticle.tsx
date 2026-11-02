'use client';

import Link from 'next/link';
import { PageIntro } from './PageIntro';
import { Card } from './ui/card';
import { buttonVariants } from './ui/button';
import { outreach } from '@/content/outreach';
import { playStore, site } from '@/content/site';
import { useI18n } from '@/i18n/LocaleProvider';

export function ProjectArticle({ kind }: { kind: 'about' | 'professionals' }) {
  const { locale } = useI18n();
  const copy = outreach[locale];
  const page = copy[kind];

  return (
    <>
      <PageIntro eyebrow={page.eyebrow} title={page.title}>
        <p>{page.intro}</p>
      </PageIntro>
      <section className="axis-container grid gap-6 lg:grid-cols-2" aria-label={page.title}>
        {page.sections.map(([title, body]) => (
          <Card key={title} className="p-7 sm:p-10">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-4 leading-8 text-axis-body">{body}</p>
          </Card>
        ))}
      </section>
      <section className="axis-container mt-10 flex flex-wrap items-center gap-4">
        <a href={playStore.url} className={buttonVariants()}>{copy.install}</a>
        <a href={`mailto:${site.privacyEmail}`} className={buttonVariants({ variant: 'outline' })}>
          {kind === 'professionals' ? copy.feedback : site.privacyEmail}
        </a>
        <Link href={kind === 'professionals' ? '/sobre/' : '/para-profissionais/'} className="focus-ring rounded-sm font-bold text-axis-teal underline underline-offset-4">
          {kind === 'professionals' ? copy.story : copy.navProfessionals}
        </Link>
        <Link href="/privacidade/" className="focus-ring rounded-sm font-bold text-axis-teal underline underline-offset-4">{copy.privacy}</Link>
      </section>
    </>
  );
}

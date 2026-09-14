'use client';

import { CheckCircle, DownloadSimple, Microphone, Notebook, ShieldCheck } from '@phosphor-icons/react/dist/ssr';
import { PageIntro } from '@/components/PageIntro';
import { Card } from '@/components/ui/card';
import { useI18n } from '@/i18n/LocaleProvider';

const steps = [
  { icon: ShieldCheck, title: 'step1Title', body: 'step1Body' },
  { icon: Notebook, title: 'step2Title', body: 'step2Body' },
  { icon: Microphone, title: 'step3Title', body: 'step3Body' },
  { icon: CheckCircle, title: 'step4Title', body: 'step4Body' },
  { icon: DownloadSimple, title: 'step5Title', body: 'step5Body' },
] as const;

export default function HowToPage() {
  const { messages: m } = useI18n();
  return (
    <>
      <PageIntro eyebrow={m.how.eyebrow} title={m.how.title}>
        <p>{m.how.intro}</p>
      </PageIntro>
      <section className="axis-container grid gap-5 lg:grid-cols-2">
        {steps.map(({ icon: Icon, title, body }, index) => (
          <Card key={title} className="flex gap-5 p-6 sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-axis-muted text-axis-teal"><Icon size={27} /></div>
            <div><p className="text-xs font-bold uppercase tracking-widest text-axis-clay">{m.how.stepLabel} {index + 1}</p><h2 className="mt-2 text-2xl font-bold">{m.how[title]}</h2><p className="mt-3 leading-7 text-axis-body">{m.how[body]}</p></div>
          </Card>
        ))}
      </section>
      <section className="axis-container py-16">
        <Card className="border-l-4 border-l-axis-clay p-7 sm:p-9">
          <h2 className="text-2xl font-bold">{m.how.helpTitle}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-axis-body">{m.how.helpBody}</p>
        </Card>
      </section>
    </>
  );
}

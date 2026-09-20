'use client';

import {
  CheckCircle,
  Database,
  EyeSlash,
  ShieldCheck,
} from '@phosphor-icons/react/dist/ssr';
import { PageIntro } from '@/components/PageIntro';
import { Card } from '@/components/ui/card';
import { useI18n } from '@/i18n/LocaleProvider';

const controls = [
  { icon: Database, title: 'control1Title', body: 'control1Body' },
  { icon: EyeSlash, title: 'control2Title', body: 'control2Body' },
  { icon: ShieldCheck, title: 'control3Title', body: 'control3Body' },
  { icon: CheckCircle, title: 'control4Title', body: 'control4Body' },
] as const;

export default function SecurityPage() {
  const { messages: m } = useI18n();
  return (
    <>
      <PageIntro
        eyebrow={m.security.eyebrow}
        title={m.security.title}
      >
        <p>
          {m.security.intro}
        </p>
      </PageIntro>

      <section className="axis-container py-14" aria-labelledby="controles">
        <h2 id="controles" className="text-3xl font-normal sm:text-5xl">
          {m.security.controlsTitle}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {controls.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="p-6 sm:p-8">
              <span className="inline-flex rounded-2xl bg-axis-muted p-3 text-axis-teal">
                <Icon size={30} />
              </span>
              <h3 className="mt-5 text-xl font-bold">{m.security[title]}</h3>
              <p className="mt-3 leading-7 text-axis-body">{m.security[body]}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="axis-container py-14" aria-labelledby="resultado">
        <Card data-testid="security-result-card" tone="dark" className="overflow-hidden rounded-[2.5rem] p-7 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-axis-peach">{m.security.resultEyebrow}</p>
          <h2 id="resultado" className="mt-4 text-3xl font-normal sm:text-5xl">
            {m.security.resultTitle}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-axis-surface/15 bg-axis-surface/10 p-5">
              <strong className="block text-3xl text-axis-peach">0</strong>
              <span className="mt-2 block text-sm leading-6 text-axis-surface/75">
                {m.security.stat1}
              </span>
            </div>
            <div className="rounded-[1.5rem] border border-axis-surface/15 bg-axis-surface/10 p-5">
              <strong className="block text-3xl text-axis-peach">0</strong>
              <span className="mt-2 block text-sm leading-6 text-axis-surface/75">
                {m.security.stat2}
              </span>
            </div>
            <div className="rounded-[1.5rem] border border-axis-surface/15 bg-axis-surface/10 p-5">
              <strong className="block text-3xl text-axis-peach">1.142</strong>
              <span className="mt-2 block text-sm leading-6 text-axis-surface/75">
                {m.security.stat3}
              </span>
            </div>
          </div>
          <p className="mt-8 max-w-4xl text-sm leading-6 text-axis-surface/75">
            {m.security.resultDisclaimer}
          </p>
          <p className="mt-4 text-sm leading-6 text-axis-surface/75">
            {m.security.tool}{' '}
            <a
              className="font-bold text-axis-peach underline underline-offset-4"
              href="https://mobsf.github.io/docs/"
              rel="noreferrer"
              target="_blank"
            >
              Mobile Security Framework (MobSF)
            </a>
            .
          </p>
        </Card>
      </section>
    </>
  );
}

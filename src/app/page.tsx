'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, DeviceMobile, FilePdf, LockKey, Waveform } from '@phosphor-icons/react/dist/ssr';
import { ScreenshotGallery } from '@/components/ScreenshotGallery';
import { Card } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { playStore, publicPath, screenshots } from '@/content/site';
import { useI18n } from '@/i18n/LocaleProvider';

const features = [
  { icon: LockKey, title: 'feature1Title', body: 'feature1Body' },
  { icon: Waveform, title: 'feature2Title', body: 'feature2Body' },
  { icon: DeviceMobile, title: 'feature3Title', body: 'feature3Body' },
  { icon: FilePdf, title: 'feature4Title', body: 'feature4Body' },
] as const;

export default function HomePage() {
  const { locale, messages: m } = useI18n();
  return (
    <>
      <section className="axis-container grid min-h-[760px] gap-12 py-16 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:py-24">
        <div data-testid="home-hero-copy">
          <p className="eyebrow">{m.home.eyebrow}</p>
          <h1 className="mt-5 max-w-2xl text-balance text-5xl font-normal leading-[1.04] tracking-[-.04em] sm:text-7xl">{m.home.title}</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-axis-body">{m.home.description}</p>
          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link href="/como-usar/" className={buttonVariants({ className: 'w-full gap-2 px-4 text-sm leading-tight sm:w-auto sm:px-7 sm:text-base' })}>{m.home.primaryCta} <ArrowRight size={20} weight="bold" /></Link>
            <Link href="/privacidade/" className={buttonVariants({ variant: 'outline', className: 'w-full px-4 text-sm sm:w-auto sm:px-5' })}>{m.home.secondaryCta}</Link>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-6 text-axis-body">{m.home.disclaimer}</p>
        </div>
        <Card data-testid="home-hero-preview" className="overflow-hidden p-5 sm:p-8">
          <div data-testid="home-preview-color-rule" className="wave-rule mb-6" aria-hidden="true" />
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:justify-between sm:gap-5">
            <div data-testid="home-phone-mockup" className="phone-mockup order-2 sm:order-1">
              <span className="phone-mockup-speaker" aria-hidden="true" />
              <Image src={publicPath(screenshots[0].src)} width={1080} height={2400} alt={m.gallery.item1Alt} loading="eager" fetchPriority="high" className="phone-mockup-screen" />
            </div>
            <div className="order-1 flex max-w-52 flex-col items-center text-center sm:order-2">
              <p className="text-lg font-bold text-axis-ink">{m.home.playStoreTitle}</p>
              <p className="mt-2 text-sm leading-6 text-axis-body">{m.home.playStoreHint}</p>
              <a data-testid="home-play-store-link" href={playStore.url} target="_blank" rel="noopener noreferrer" className="focus-ring mt-5 rounded-2xl bg-white p-3 shadow-md transition-transform hover:-translate-y-1">
                <Image src={publicPath(playStore.qrCode)} width={192} height={192} alt={m.home.playStoreQrAlt} className="h-44 w-44" />
              </a>
              <a href={playStore.url} target="_blank" rel="noopener noreferrer" className="focus-ring mt-2 rounded-md">
                <Image src={publicPath(playStore.badges[locale])} width={646} height={250} alt={m.home.playStoreBadgeAlt} className="h-auto w-48" />
              </a>
            </div>
          </div>
        </Card>
      </section>

      <section className="axis-container py-16" aria-labelledby="principios">
        <p className="eyebrow">{m.home.principlesEyebrow}</p>
        <h2 id="principios" className="mt-4 max-w-3xl text-balance text-3xl font-normal sm:text-5xl">{m.home.principlesTitle}</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="p-6">
              <span className="inline-flex rounded-2xl bg-axis-muted p-3 text-axis-teal"><Icon size={28} /></span>
              <h3 className="mt-5 text-xl font-bold">{m.home[title]}</h3>
              <p className="mt-3 text-sm leading-6 text-axis-body">{m.home[body]}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="axis-container py-16" aria-labelledby="telas">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow">{m.home.screenshotsEyebrow}</p>
            <h2 id="telas" className="mt-4 text-3xl font-normal sm:text-5xl">{m.home.screenshotsTitle}</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-axis-body">{m.home.screenshotsDescription}</p>
        </div>
        <ScreenshotGallery screenshots={screenshots.map((shot) => ({ ...shot, src: publicPath(shot.src), thumbnailSrc: publicPath(shot.thumbnailSrc) }))} />
      </section>

      <section className="axis-container py-16">
        <Card tone="dark" className="overflow-hidden rounded-[2.5rem] px-7 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-axis-peach">{m.home.transparencyEyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-balance text-3xl font-normal sm:text-5xl">{m.home.transparencyTitle}</h2>
          </div>
          <Link href="/seguranca/" className={buttonVariants({ variant: 'secondary', className: 'mt-8 lg:mt-0' })}>{m.home.transparencyCta}</Link>
        </Card>
      </section>
    </>
  );
}

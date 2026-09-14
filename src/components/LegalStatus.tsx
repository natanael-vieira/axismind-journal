import { WarningCircle } from '@phosphor-icons/react/dist/ssr';

export function LegalStatus({ children }: { children: React.ReactNode }) {
  return (
    <aside className="axis-container pb-3" role="note">
      <div className="flex max-w-3xl items-start gap-3 rounded-2xl border border-axis-clay/30 bg-axis-peach/20 px-5 py-4 text-sm leading-6 text-axis-ink">
        <WarningCircle className="mt-0.5 shrink-0 text-axis-clay" size={22} aria-hidden="true" />
        <p>{children}</p>
      </div>
    </aside>
  );
}

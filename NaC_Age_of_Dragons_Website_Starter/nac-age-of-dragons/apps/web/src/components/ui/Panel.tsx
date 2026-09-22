import type { ReactNode } from 'react';

export function Panel({ children }: { children: ReactNode }) {
  return <section className="rounded-2xl border border-white/10 bg-white/[0.02]">{children}</section>;
}

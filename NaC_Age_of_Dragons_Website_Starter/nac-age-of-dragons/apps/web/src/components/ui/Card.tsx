import type { ReactNode } from 'react';

export function Card({ children }: { children: ReactNode }) {
  return <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">{children}</article>;
}

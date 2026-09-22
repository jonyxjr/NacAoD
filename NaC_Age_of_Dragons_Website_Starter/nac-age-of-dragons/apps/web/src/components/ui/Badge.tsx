import type { ReactNode } from 'react';

export function Badge({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs">{children}</span>;
}

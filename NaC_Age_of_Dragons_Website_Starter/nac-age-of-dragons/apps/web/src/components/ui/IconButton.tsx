import type { ReactNode } from 'react';

export function IconButton({ label, children }: { label: string; children: ReactNode }) {
  return <button aria-label={label} className="rounded-full p-2 hover:bg-white/10">{children}</button>;
}

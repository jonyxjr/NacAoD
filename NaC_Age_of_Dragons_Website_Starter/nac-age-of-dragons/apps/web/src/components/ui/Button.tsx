import type { ReactNode } from 'react';

export function Button({ children }: { children: ReactNode }) {
  return (
    <button className="rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/5">
      {children}
    </button>
  );
}

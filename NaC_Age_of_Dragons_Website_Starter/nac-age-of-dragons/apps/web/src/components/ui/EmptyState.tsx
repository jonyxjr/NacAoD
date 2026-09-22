export function EmptyState({ message }: { message: string }) {
  return <div className="rounded-2xl border border-dashed border-white/10 p-10 text-center text-white/50">{message}</div>;
}

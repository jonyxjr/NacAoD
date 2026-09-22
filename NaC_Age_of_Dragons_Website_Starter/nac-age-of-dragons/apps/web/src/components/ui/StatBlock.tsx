export function StatBlock({ label, value }: { label: string; value: string | number }) {
  return <div><p className="text-xs uppercase tracking-wider text-white/40">{label}</p><p className="mt-1 text-2xl font-semibold">{value}</p></div>;
}

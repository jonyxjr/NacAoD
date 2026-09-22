export function ErrorState({ message }: { message: string }) {
  return <div role="alert" className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6 text-red-100">{message}</div>;
}

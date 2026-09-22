import { MapPinned } from 'lucide-react';

export function MapPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 flex items-center gap-3">
        <MapPinned className="text-amber-200" />
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">World interface</p>
          <h1 className="font-display text-5xl">Age of Dragons Map</h1>
        </div>
      </div>

      <div className="grid min-h-[60vh] place-items-center rounded-3xl border border-white/10 bg-white/[0.02]">
        <div className="max-w-xl px-6 text-center">
          <p className="text-white/50">
            MapLibre GL JS belongs here. The surrounding panel architecture is
            already prepared for layers, markers, legends, deep links and selected
            locations.
          </p>
        </div>
      </div>
    </section>
  );
}

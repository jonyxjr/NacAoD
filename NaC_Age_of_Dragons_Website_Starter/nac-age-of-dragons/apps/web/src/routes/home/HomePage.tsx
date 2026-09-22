import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPinned, Shield, Swords } from 'lucide-react';
import { Link } from 'react-router-dom';

const signals = [
  { label: 'Nations', icon: Shield },
  { label: 'Diplomacy', icon: Swords },
  { label: 'World Map', icon: MapPinned },
];

export function HomePage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(214,107,61,.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,.03),transparent)]" />
        <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-end px-6 pb-24 pt-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-amber-200/70">
              Nations and Civilizations
            </p>
            <h1 className="font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.9]">
              Age of Dragons
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              A living command center for kingdoms, diplomacy, trade, warfare,
              lore, media and the evolving NaC universe.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/map"
                className="inline-flex items-center gap-2 rounded-full bg-amber-200 px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
              >
                Explore the world
                <ArrowRight size={18} />
              </Link>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-white/85 transition hover:bg-white/5">
                <Download size={18} />
                Latest release
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {signals.map(({ label, icon: Icon }) => (
            <div key={label} className="bg-white/[0.03] p-6">
              <Icon size={20} className="text-amber-200" />
              <p className="mt-3 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">Current World</p>
          <h2 className="mt-3 font-display text-4xl">The map becomes the interface.</h2>
          <p className="mt-5 max-w-xl text-white/55">
            This shell is ready for real nation, territory, trade and event data
            without coupling the visual layer to the backend.
          </p>
          <Link to="/map" className="mt-8 inline-flex text-amber-200 hover:text-amber-100">
            Open world map →
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/10 to-transparent p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">Architecture</p>
          <h2 className="mt-3 font-display text-4xl">Built for future seasons.</h2>
          <p className="mt-5 text-white/55">
            Content, data, services and presentation are separated so Age of
            Dragons can grow into a reusable NaC platform.
          </p>
        </div>
      </section>
    </div>
  );
}

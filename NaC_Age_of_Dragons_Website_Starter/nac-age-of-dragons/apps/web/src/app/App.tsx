import { Link, Route, Routes } from 'react-router-dom';
import { HomePage } from '../routes/home/HomePage';
import { MapPage } from '../routes/map/MapPage';

export default function App() {
  return (
    <div className="min-h-screen bg-nac-bg text-nac-text">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-lg tracking-[0.18em]">
            NaC
          </Link>
          <nav className="flex gap-5 text-sm text-white/70">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/map" className="hover:text-white">World Map</Link>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.22em] text-amber-300/80">404</p>
      <h1 className="mt-3 font-display text-5xl">Chapter not found.</h1>
      <p className="mt-5 max-w-2xl text-white/60">
        This route is not connected yet. The architecture is prepared for it.
      </p>
    </section>
  );
}

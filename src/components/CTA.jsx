import React from 'react';
import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative w-full bg-black py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur sm:flex-row sm:text-left">
          <div>
            <h3 className="text-2xl font-semibold">Ready to craft your 3D presence?</h3>
            <p className="mt-1 text-white/80">Start with the interactive globe, then expand to full product tours and data stories.</p>
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-red-500/30 transition hover:translate-y-[-1px] hover:bg-red-600"
          >
            <Rocket size={18} />
            Launch Now
          </a>
        </div>
        <p className="mt-6 text-center text-xs text-white/60">
          Pro tip: keep overlays pointer-events-none so your users can always interact with the 3D scene.
        </p>
      </div>
    </section>
  );
}

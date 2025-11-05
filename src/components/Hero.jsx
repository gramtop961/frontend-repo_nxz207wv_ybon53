import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Globe, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Interactive 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient/shine overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />
      <div className="pointer-events-none absolute -inset-x-20 -top-20 h-56 bg-gradient-to-b from-red-500/30 to-transparent blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center sm:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
          <Globe size={14} className="text-red-400" />
          <span className="text-white/80">Interactive 3D • Spline Powered</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold text-transparent sm:text-6xl md:text-7xl">
          Build Futuristic 3D Websites
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Spin, explore, and tell immersive stories on the web. This live hero uses a 3D red-globe scene
          you can click and drag. Perfect for technology, education, and environmental platforms.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-red-500/30 transition hover:translate-y-[-1px] hover:bg-red-600"
          >
            <Rocket size={18} />
            Get Started
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Play size={18} />
            See Features
          </a>
        </div>
      </div>
    </section>
  );
}

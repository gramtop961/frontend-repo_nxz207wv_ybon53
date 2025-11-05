import React from 'react';
import { Globe, MousePointer, Code, Shield } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Interactive 3D Hero',
    desc: 'Embed Spline scenes that users can spin, zoom, and explore in real-time.'
  },
  {
    icon: MousePointer,
    title: 'Smooth UX',
    desc: 'Pointer-safe overlays ensure your UI never blocks the 3D experience.'
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    desc: 'Vite + React + Tailwind with clean components and extensible patterns.'
  },
  {
    icon: Shield,
    title: 'Performance First',
    desc: 'Efficient rendering, lazy-loaded assets, and modern best practices.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative w-full bg-white py-16 text-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Why 3D on the Web?</h2>
          <p className="mt-2 text-gray-600">
            Bring products, data, and stories to life with interactive scenes that feel futuristic yet familiar.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-red-50 p-3 text-red-600">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

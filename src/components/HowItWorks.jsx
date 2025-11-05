import React from 'react';
import { Layers, UploadCloud, Settings2 } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how" className="relative w-full bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">How it works</h2>
          <p className="mt-2 text-gray-600">Three simple steps to launch your interactive 3D website.</p>
        </div>

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <li className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <div className="mb-4 inline-flex rounded-lg bg-red-50 p-3 text-red-600">
              <Layers size={20} />
            </div>
            <h3 className="text-lg font-semibold">Design in Spline</h3>
            <p className="mt-2 text-gray-600">Create or customize your scene in Spline to match your brand and story.</p>
          </li>
          <li className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <div className="mb-4 inline-flex rounded-lg bg-red-50 p-3 text-red-600">
              <UploadCloud size={20} />
            </div>
            <h3 className="text-lg font-semibold">Embed the Scene</h3>
            <p className="mt-2 text-gray-600">Drop the scene link into your hero. It’s responsive and fully interactive.</p>
          </li>
          <li className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <div className="mb-4 inline-flex rounded-lg bg-red-50 p-3 text-red-600">
              <Settings2 size={20} />
            </div>
            <h3 className="text-lg font-semibold">Add Content & Ship</h3>
            <p className="mt-2 text-gray-600">Layer in features, calls to action, and launch your 3D experience.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}

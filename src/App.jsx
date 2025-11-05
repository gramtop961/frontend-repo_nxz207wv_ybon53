import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div id="top" className="min-h-screen w-full bg-white text-gray-900">
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <CTA />
      <footer className="w-full bg-white py-8 text-center text-sm text-gray-500">
        Built with React, Tailwind, and Spline • Drag the globe to interact
      </footer>
    </div>
  );
}

export default App;

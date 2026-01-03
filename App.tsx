import React from 'react';
import Navbar from './components/Navbar';
import StatusSignal from './components/StatusSignal';
import PricingSection from './components/PricingSection';
import ResourceHub from './components/ResourceHub';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      
      {/* Hero Section */}
      <main className="relative pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="mb-8 animate-fade-in-down">
          <StatusSignal available={true} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
          Visual Designer <br />
          <span className="text-indigo-500">& Frontend Architect</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Specializing in high-impact graphics, brand identities, and clean UI/UX design. 
          Delivering production-ready assets and React code for modern web applications.
        </p>
        
        <div className="flex gap-4">
           {/* Decorative elements or secondary CTAs could go here, but main CTA is sticky nav */}
        </div>
      </main>

      {/* Pricing Tiers */}
      <div id="pricing">
        <PricingSection />
      </div>

      {/* Works & Assets */}
      <div id="resources">
        <ResourceHub />
      </div>

      <Footer />
    </div>
  );
}

export default App;

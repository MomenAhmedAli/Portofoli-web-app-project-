import React, { useState } from 'react';
import { Check, X, Code2, ImageIcon, Layout } from 'lucide-react';
import { SERVICE_DATA } from '../constants';
import { ServiceType } from '../types';

const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ServiceType>(ServiceType.UI);

  // Helper to get icon for service
  const getIcon = (type: ServiceType) => {
    switch (type) {
      case ServiceType.LOGO: return <ImageIcon className="w-4 h-4" />;
      case ServiceType.THUMBNAIL: return <ImageIcon className="w-4 h-4" />;
      case ServiceType.UI: return <Layout className="w-4 h-4" />;
      default: return null;
    }
  };

  const activeCategory = SERVICE_DATA.find(s => s.type === activeTab) || SERVICE_DATA[0];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Service Pricing</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Transparent pricing for high-quality design work. Choose the package that fits your needs.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {SERVICE_DATA.map((category) => (
          <button
            key={category.type}
            onClick={() => setActiveTab(category.type)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === category.type
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {getIcon(category.type)}
            {category.type}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {activeCategory.tiers.map((tier, index) => (
          <div 
            key={index} 
            className={`relative flex flex-col p-8 rounded-2xl border ${
              tier.name === 'Standard' 
                ? 'bg-slate-900/80 border-indigo-500/50 shadow-xl shadow-indigo-900/10' 
                : 'bg-slate-900/40 border-slate-800'
            } backdrop-blur-sm transition-transform hover:-translate-y-1 duration-300`}
          >
            {tier.name === 'Standard' && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                MOST POPULAR
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                <span className="text-slate-500">/ project</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed min-h-[40px]">
                {tier.description}
              </p>
            </div>

            <div className="flex-grow space-y-4 mb-8">
              {tier.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  {feature.included ? (
                    <div className={`mt-1 p-0.5 rounded-full ${feature.highlight ? 'bg-indigo-500/20 text-indigo-400' : 'bg-emerald-500/10 text-emerald-500'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                  ) : (
                    <div className="mt-1 p-0.5 rounded-full bg-slate-800 text-slate-600">
                      <X className="w-3 h-3" />
                    </div>
                  )}
                  <span className={`text-sm ${
                    !feature.included ? 'text-slate-600 line-through' : 
                    feature.highlight ? 'text-indigo-200 font-medium' : 'text-slate-300'
                  }`}>
                    {feature.text}
                    {feature.highlight && feature.included && (
                       <Code2 className="inline w-3 h-3 ml-2 text-indigo-400" />
                    )}
                  </span>
                </div>
              ))}
            </div>

            <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
              tier.name === 'Standard'
                ? 'bg-white text-slate-950 hover:bg-slate-200'
                : 'bg-slate-800 text-white hover:bg-slate-700'
            }`}>
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;

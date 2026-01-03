import React from 'react';
import { ExternalLink, FolderOpen, ShoppingBag, Download } from 'lucide-react';
import { GOOGLE_DRIVE_PORTFOLIO_URL, ITCH_IO_PROFILE_URL } from '../constants';

const ResourceHub: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Portfolio / Reviews Section */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-8 hover:border-indigo-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <FolderOpen className="w-48 h-48 text-indigo-500 transform rotate-12" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-400">
                  <FolderOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Projects & Reviews</h3>
                <p className="text-slate-400 mb-8">
                  Browse my complete archive of past works, client reviews, and detailed case studies stored securely on Google Drive.
                </p>
              </div>
              
              <a 
                href={GOOGLE_DRIVE_PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-indigo-400 transition-colors"
              >
                Access Drive Archive <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Assets Store Section */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-8 hover:border-pink-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShoppingBag className="w-48 h-48 text-pink-500 transform -rotate-12" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 text-pink-400">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Assets Store</h3>
                <p className="text-slate-400 mb-8">
                  High-quality design assets, UI kits, and resource packs. Available for free download or purchase on Itch.io.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <a 
                  href={ITCH_IO_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <Download className="w-4 h-4" /> Visit Store
                </a>
                <span className="px-3 py-2 bg-slate-800 rounded-lg text-slate-400 text-sm flex items-center">
                  Free & Paid Items
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResourceHub;

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { DISCORD_INVITE_URL } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-end items-center bg-transparent pointer-events-none">
      {/* Container to capture pointer events only on the button */}
      <div className="pointer-events-auto">
        <a 
          href={DISCORD_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-5 rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 backdrop-blur-sm"
        >
          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>Contact on Discord</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

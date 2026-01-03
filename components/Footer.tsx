import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-slate-600 text-sm">
      <p>&copy; {new Date().getFullYear()} Designer Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

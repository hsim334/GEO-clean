import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-altBg border-t border-dividerLight">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-xl font-bold tracking-tight text-textPrimary">
          GetCitedGEO
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-textSecondary">
          <a href="#" className="hover:text-textPrimary transition-colors">Privacy</a>
          <a href="#" className="hover:text-textPrimary transition-colors">Terms</a>
          <a href="#" className="hover:text-textPrimary transition-colors">Contact</a>
        </div>
        
        <div className="text-xs text-textSecondary font-medium">
          &copy; {new Date().getFullYear()} GetCitedGEO. Melbourne, AU.
        </div>
        
      </div>
    </footer>
  );
}

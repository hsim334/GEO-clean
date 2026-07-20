import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full bg-pageBg border-b border-dividerLight py-4">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-bold text-xl text-textPrimary tracking-tight">
          GetCitedGEO
        </a>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-textSecondary">
          <a href="#how-it-works" className="hover:text-textPrimary transition-colors">How it works</a>
          <a href="#evidence" className="hover:text-textPrimary transition-colors">Evidence</a>
          <a href="#about" className="hover:text-textPrimary transition-colors">About</a>
          <a 
            href="#check" 
            className="border border-primaryGreen text-primaryGreen px-4 py-2 rounded-md hover:bg-primaryGreen hover:text-formWhite transition-colors"
          >
            Check your business
          </a>
        </div>
      </div>
    </nav>
  );
}

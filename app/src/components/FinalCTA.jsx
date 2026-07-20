import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const submitForm = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-pageBg text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-textPrimary font-bold mb-6">
          See which businesses AI puts in front of your customers.
        </h2>
        <p className="text-lg text-textSecondary mb-10">
          Enter your website and begin the initial recommendation check.
        </p>
        
        <form onSubmit={submitForm} className="flex flex-col md:flex-row max-w-xl mx-auto gap-4 md:gap-0 shadow-sm rounded-lg overflow-hidden border border-borderLight md:border-0">
          <input 
            type="text" 
            placeholder="yourbusiness.com.au" 
            className="flex-grow bg-formWhite md:border md:border-borderLight md:border-r-0 md:rounded-l-lg px-6 py-4 text-textPrimary placeholder:text-textSecondary/60 focus:outline-none focus:ring-2 focus:ring-primaryGreen focus:border-primaryGreen transition-all"
            required
          />
          <button 
            type="submit"
            className="bg-primaryGreen text-formWhite font-semibold py-4 px-8 md:rounded-r-lg hover:bg-greenHover transition-colors flex-shrink-0"
          >
            Check my business
          </button>
        </form>
        
        <div className="mt-8 text-sm font-medium text-textSecondary flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span>No booking required</span>
          <span className="hidden md:inline">&middot;</span>
          <span>Transparent methodology</span>
          <span className="hidden md:inline">&middot;</span>
          <span>No guaranteed rankings</span>
        </div>
      </div>
    </section>
  );
}

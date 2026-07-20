import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ConversionBand() {
  const submitForm = (e) => {
    e.preventDefault();
    // In reality, this might jump up to the hero form or proceed here
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-pageBg text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-textPrimary mb-6">
          Find out what happens in your market.
        </h2>
        <p className="text-lg text-textSecondary mb-12">
          Enter your website and we’ll begin testing the customer questions that matter to your business.
        </p>
        
        <form onSubmit={submitForm} className="flex flex-col md:flex-row max-w-xl mx-auto gap-4 md:gap-0">
          <input 
            type="text" 
            placeholder="yourbusiness.com.au" 
            className="flex-grow bg-formWhite border border-borderLight md:border-r-0 px-6 py-4 text-textPrimary placeholder:text-textSecondary/50 focus:outline-none focus:border-textPrimary focus:border-r transition-colors"
            required
          />
          <button 
            type="submit"
            className="bg-forestGreen text-formWhite font-medium py-4 px-8 flex items-center justify-center hover:bg-darkGreen transition-colors flex-shrink-0"
          >
            Check my business <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

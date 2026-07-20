import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import DiagnosticForm from './DiagnosticForm';

export default function Hero() {
  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Column - Copy */}
        <div className="lg:pr-8">
          <div className="text-sm font-bold text-textSecondary uppercase tracking-widest mb-6 inline-block">
            AI Recommendation Check
          </div>
          
          <h1 className="text-4xl md:text-[56px] leading-[1.1] font-bold text-textPrimary mb-6 tracking-tight">
            When customers ask AI who to hire, does your business appear?
          </h1>
          
          <div className="text-[18px] md:text-[20px] text-textSecondary leading-relaxed mb-10 space-y-6">
            <p>
              Customers can now ask AI to compare businesses and create a shortlist before visiting a single website.
            </p>
            <p>
              Enter your business below and we’ll test the questions customers are likely to ask, identify which companies appear and explain whether the result deserves action.
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-textPrimary font-medium text-[17px]">
              <CheckCircle2 className="w-5 h-5 text-primaryGreen mr-3 shrink-0" />
              No booking required
            </li>
            <li className="flex items-center text-textPrimary font-medium text-[17px]">
              <CheckCircle2 className="w-5 h-5 text-primaryGreen mr-3 shrink-0" />
              No guaranteed rankings
            </li>
            <li className="flex items-center text-textPrimary font-medium text-[17px]">
              <CheckCircle2 className="w-5 h-5 text-primaryGreen mr-3 shrink-0" />
              We will tell you if the evidence is weak
            </li>
          </ul>
        </div>

        {/* Right Column - Form */}
        <div className="lg:sticky lg:top-8 w-full shadow-lg rounded-xl">
          <DiagnosticForm />
        </div>
      </div>
    </section>
  );
}

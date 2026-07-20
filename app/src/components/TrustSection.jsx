import React from 'react';
import { Check } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-pageBg">
      <div className="max-w-5xl mx-auto bg-primaryGreen text-formWhite rounded-2xl p-10 md:p-16 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
          Important enough to investigate. Too uncertain to exaggerate.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-[17px] text-formWhite/90 leading-relaxed space-y-5">
            <p>
              AI answers can change between platforms, questions, locations and testing sessions.
            </p>
            <p>
              No company can guarantee that ChatGPT, Gemini, Google or another AI system will recommend a particular business.
            </p>
            <p>
              We show what was tested, which businesses appeared and what the evidence does not prove.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start bg-greenHover p-5 rounded-lg border border-formWhite/10">
              <Check className="w-5 h-5 text-formWhite mr-4 shrink-0 mt-0.5" />
              <p className="text-[17px] font-semibold">We will not tell you SEO is dead.</p>
            </div>
            <div className="flex items-start bg-greenHover p-5 rounded-lg border border-formWhite/10">
              <Check className="w-5 h-5 text-formWhite mr-4 shrink-0 mt-0.5" />
              <p className="text-[17px] font-semibold">We will not turn one result into a scientific score.</p>
            </div>
            <div className="flex items-start bg-greenHover p-5 rounded-lg border border-formWhite/10">
              <Check className="w-5 h-5 text-formWhite mr-4 shrink-0 mt-0.5" />
              <p className="text-[17px] font-semibold">We will tell you when the evidence does not justify spending money.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

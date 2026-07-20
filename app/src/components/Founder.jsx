import React from 'react';

export default function Founder() {
  return (
    <section className="py-16 px-6 md:px-12 bg-altBg border-y border-dividerLight" id="about">
      <div className="max-w-4xl mx-auto bg-formWhite border border-borderLight rounded-xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start">
        
        <div className="w-32 h-32 md:w-40 md:h-40 bg-pageBg rounded-full border border-dividerLight shrink-0 overflow-hidden flex items-center justify-center">
          {/* Real founder image placeholder */}
          <span className="text-textSecondary text-sm font-medium">Image</span>
        </div>

        <div className="flex-grow text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-textPrimary mb-6">
            Reviewed before you are called
          </h2>

          <div className="text-[17px] text-textSecondary leading-relaxed space-y-5 mb-8">
            <p>I will not call and begin with a generic questionnaire.</p>
            <p>Before I call, I will have reviewed your website, the initial customer questions and the most commercially relevant finding.</p>
            <p>If the evidence is weak or there is no meaningful issue, I will tell you.</p>
          </div>

          <div>
            <p className="text-lg font-bold text-textPrimary">Harry Simpson</p>
            <p className="text-sm font-medium text-textSecondary">Founder, GetCitedGEO</p>
          </div>
        </div>
      </div>
    </section>
  );
}

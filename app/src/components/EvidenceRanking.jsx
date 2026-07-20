import React from 'react';

export default function EvidenceRanking() {
  return (
    <section className="py-20 px-6 md:px-12 bg-altBg border-b border-dividerLight">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="lg:pr-8">
            <h2 className="text-3xl md:text-4xl text-textPrimary font-bold mb-8">
              Google rankings do not tell you the whole story
            </h2>

            <div className="text-[18px] text-textSecondary leading-relaxed space-y-6 mb-8">
              <p>Traditional SEO remains important.</p>
              <p>However, a ranking report does not necessarily show which businesses an AI system selects when a customer asks who to choose.</p>
              <p>In one large 2026 study, nearly 30% of domains cited in Google AI Overviews did not appear on the corresponding first page of traditional results.</p>
            </div>

            <div className="bg-pageBg border-l-4 border-primaryGreen p-6 rounded-r-md border-y border-r border-dividerLight">
              <p className="text-lg font-semibold text-textPrimary">
                Your rankings may still matter. They simply do not fully answer whether AI includes your business.
              </p>
            </div>
          </div>

          <div className="bg-formWhite border border-borderLight rounded-xl p-8 md:p-12 shadow-sm">
            <div className="mb-10 pb-10 border-b border-dividerLight">
              <h3 className="text-lg font-bold text-textPrimary mb-2">Traditional search</h3>
              <p className="text-[17px] text-textSecondary">
                Many businesses for the customer to investigate.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-primaryGreen mb-2">AI response</h3>
              <p className="text-[17px] text-textSecondary">
                A smaller shortlist created for the customer.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

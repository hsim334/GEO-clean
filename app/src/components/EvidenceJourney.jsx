import React from 'react';

export default function EvidenceJourney() {
  return (
    <section className="py-24 px-6 md:px-12 bg-pageBg">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-textPrimary mb-20 max-w-2xl">
          AI can answer before the customer clicks.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="border border-borderLight bg-formWhite p-10 md:p-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-12 border-b border-borderLight gap-6">
              <div>
                <div className="text-sm font-semibold text-textSecondary uppercase tracking-wider mb-4">
                  Without an AI summary
                </div>
                <div className="font-serif text-6xl text-textPrimary tracking-tight">15%</div>
              </div>
              <div className="text-textSecondary max-w-[180px]">
                clicked a traditional search result
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-4 gap-6">
              <div>
                <div className="text-sm font-semibold text-textSecondary uppercase tracking-wider mb-4">
                  With an AI summary
                </div>
                <div className="font-serif text-6xl text-textPrimary tracking-tight">8%</div>
              </div>
              <div className="text-textSecondary max-w-[180px]">
                clicked a traditional search result
              </div>
            </div>
            <div className="mt-12 text-xs text-textSecondary text-right">
              Source: Pew Research Center, 2025
            </div>
          </div>

          <div className="lg:pl-10">
            <div className="text-xl md:text-2xl text-textPrimary leading-relaxed mb-8">
              <p className="mb-6">
                When an AI answer appears, fewer users continue into the traditional search results.
              </p>
              <p>
                That means a business may need to influence consideration before the customer reaches its website.
              </p>
            </div>
            
            <div className="pt-8 border-t border-borderLight">
              <div className="text-xs font-semibold text-textSecondary uppercase tracking-widest mb-3">
                Limitation
              </div>
              <p className="text-sm text-textSecondary leading-relaxed">
                This does not prove that every missing click becomes a lost customer. It shows that the traditional website journey is changing.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

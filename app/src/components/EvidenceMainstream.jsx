import React from 'react';

export default function EvidenceMainstream() {
  return (
    <section className="py-20 bg-formWhite px-6 md:px-12 border-y border-dividerLight" id="evidence">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-textPrimary font-bold mb-16 text-center">
          Why this is worth checking
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Stat 1 */}
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-6xl text-textPrimary font-bold mb-4 tracking-tight">
              2.5B+
            </div>
            <p className="text-lg text-textPrimary font-medium mb-2">
              Monthly users of Google AI Overviews
            </p>
            <p className="text-sm text-textSecondary">
              Source: Google, 2026
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-6xl text-textPrimary font-bold mb-4 tracking-tight">
              Around 40%
            </div>
            <p className="text-lg text-textPrimary font-medium mb-2">
              Of U.S. adults report using chatbots to search for information
            </p>
            <p className="text-sm text-textSecondary">
              Source: Pew Research Center, 2026
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-6xl text-textPrimary font-bold mb-4 tracking-tight">
              15% → 8%
            </div>
            <p className="text-lg text-textPrimary font-medium mb-2">
              Traditional-result clicks when an AI summary appears
            </p>
            <p className="text-sm text-textSecondary">
              Source: Pew Research Center, 2025
            </p>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-textSecondary leading-relaxed">
            These figures do not prove every AI interaction leads to a purchase. They show that AI-assisted discovery is large enough to investigate.
          </p>
        </div>
      </div>
    </section>
  );
}

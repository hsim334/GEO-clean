import React from 'react';

export default function Timeline() {
  const steps = [
    {
      num: "1",
      title: "Submit your business",
      desc: "Tell us the location and service that matter commercially."
    },
    {
      num: "2",
      title: "We run the initial check",
      desc: "We test realistic customer questions and record which businesses appear."
    },
    {
      num: "3",
      title: "Harry explains the result",
      desc: "If the initial analysis uncovers something meaningful, Harry calls and explains what was found.",
      support: "No separate call booking is required."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-formWhite border-t border-dividerLight" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-textPrimary font-bold mb-16 text-center">
          How the check works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-pageBg border border-dividerLight p-8 rounded-xl text-center md:text-left">
              <div className="w-12 h-12 bg-primaryGreen text-formWhite rounded-full flex items-center justify-center font-bold text-xl mx-auto md:mx-0 mb-6">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-3">{step.title}</h3>
              <p className="text-[17px] text-textSecondary leading-relaxed">{step.desc}</p>
              {step.support && (
                <div className="mt-6 pt-4 border-t border-dividerLight">
                  <p className="text-sm font-medium text-textSecondary italic">
                    {step.support}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

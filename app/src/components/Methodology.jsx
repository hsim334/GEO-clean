import React from 'react';

export default function Methodology() {
  const items = [
    {
      title: "The questions customers may ask",
      desc: "The real situations in which someone might ask AI who to choose."
    },
    {
      title: "Which businesses appear",
      desc: "The firms or providers included in the answer."
    },
    {
      title: "Whether your business is represented",
      desc: "Whether it is mentioned, recommended, cited or absent."
    },
    {
      title: "What the result means",
      desc: "Whether the issue deserves action, monitoring or no immediate investment."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-formWhite border-b border-dividerLight" id="method">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-textPrimary font-bold mb-12 text-center">
          What you will find out
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-pageBg border border-dividerLight p-8 rounded-lg">
              <h3 className="text-xl font-bold text-textPrimary mb-3">{item.title}</h3>
              <p className="text-[17px] text-textSecondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

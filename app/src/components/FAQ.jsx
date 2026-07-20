import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Is this another SEO service?",
      answer: "No. Traditional SEO focuses on optimizing your website for search engine algorithms to rank higher on results pages. We test whether emerging AI chat interfaces recommend you."
    },
    {
      question: "Does one missing result prove I am losing customers?",
      answer: "No. AI search is growing rapidly, but not every user makes a purchase decision through a chatbot. A missing result is a leading indicator of risk, not necessarily a lost sale today."
    },
    {
      question: "Can you guarantee my business will be recommended?",
      answer: "No company can guarantee inclusion in AI overviews or language models. We focus on identifying the gap and taking evidence-based steps to increase the likelihood of visibility."
    },
    {
      question: "Do I need to book a call?",
      answer: "No separate call booking is required. When you submit your details, the initial check begins immediately and you will receive a call if there is a meaningful finding to discuss."
    },
    {
      question: "What happens if you find nothing meaningful?",
      answer: "We will tell you honestly. If your visibility is already strong or the customer questions in your category do not trigger AI shortlists, we will advise you that no immediate action is needed."
    },
    {
      question: "How long does the initial check take?",
      answer: "The initial diagnostic test takes approximately ten minutes. You will typically be contacted shortly after if the results warrant discussion."
    }
  ];

  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-pageBg border-b border-dividerLight">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-textPrimary font-bold mb-12">
          Frequently asked questions
        </h2>

        <div className="border-t border-dividerLight">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-dividerLight">
              <button 
                onClick={() => toggle(idx)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
              >
                <span className="text-[19px] font-bold text-textPrimary pr-8 group-hover:text-primaryGreen transition-colors">
                  {faq.question}
                </span>
                <span className="text-textSecondary shrink-0">
                  {openIdx === idx ? <Minus className="w-5 h-5 text-primaryGreen" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIdx === idx ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[17px] text-textSecondary leading-relaxed pr-8 md:pr-16">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
